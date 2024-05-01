<!-- DateInput.vue -->

<template>
  <ItemWrapper v-bind="props">
    <div class="date-input-year-wrapper">
      <input
        id="date-input-year"
        type="text"
        maxlength="4"
        autocomplete="off"
        v-model="inputYear"
        ref="yearRef"
        placeholder="    "
        :style="{
          outline: isInputFocused ? 'rgb(16, 16, 16) auto 0.8px' : 'none',
        }"
        @input="inputedCheck($event)"
        @blur="blurFormatValidate($event, false)"
        @keydown="handleKeyDown($event)"
        @focus="showOutline"
      />
      <label for="date-input-year">{{ SEPARATOR.dash }}</label>
      <input
        class="input-field"
        id="date-input-month"
        type="text"
        maxlength="2"
        autocomplete="off"
        v-model="inputMonth"
        ref="monthRef"
        placeholder="  "
        @input="inputedCheck($event)"
        @blur="blurFormatValidate($event, false)"
        @keydown="handleKeyDown($event)"
        @focus="showOutline"
      />
      <label v-if="isDate" for="date-input-month">{{ SEPARATOR.dash }}</label>
      <input
        v-if="isDate"
        class="input-field"
        id="date-input-day"
        type="text"
        maxlength="2"
        autocomplete="off"
        v-model="inputDay"
        ref="dayRef"
        placeholder="  "
        @input="inputedCheck($event)"
        @blur="blurFormatValidate($event, false)"
        @keydown="handleKeyDown($event)"
        @focus="showOutline"
      />
      <input
        v-if="isTime"
        class="input-field"
        id="date-input-hour"
        type="text"
        maxlength="2"
        autocomplete="off"
        v-model="inputHour"
        ref="hourRef"
        placeholder="--"
        @input="inputedCheck($event)"
        @blur="blurFormatValidate($event, false)"
        @keydown="handleKeyDown($event)"
        @focus="showOutline"
      />
      <label v-if="isTime" for="date-input-hour">{{ SEPARATOR.colon }}</label>
      <input
        v-if="isTime"
        class="input-field"
        id="date-input-minute"
        type="text"
        maxlength="2"
        autocomplete="off"
        v-model="inputMinute"
        ref="minuteRef"
        placeholder="--"
        @input="inputedCheck($event)"
        @blur="blurFormatValidate($event, false)"
        @keydown="handleKeyDown($event)"
        @focus="showOutline"
      />
      <label v-if="isTime" for="date-input-minute">{{ SEPARATOR.colon }}</label>
      <input
        v-if="isTime"
        class="input-field"
        id="date-input-second"
        type="text"
        maxlength="2"
        autocomplete="off"
        v-model="inputSecond"
        ref="secondRef"
        placeholder="--"
        @input="inputedCheck($event)"
        @blur="blurFormatValidate($event, false)"
        @keydown="handleKeyDown($event)"
        @focus="showOutline"
      />
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import ItemWrapper from './ItemWrapper.vue'

import { DATE_Y_RANGE, DATE_M_RANGE, DATE_D_RANGE, TIME_HH_MM } from '@/config'
import type { ItemWrapperProperty } from '@/types/components'

import { computed, onMounted, ref } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 日付タイプ(date：年月日、month：年月、time：年月日時分秒) */
      type?: 'date' | 'month' | 'time'

      /** @description 日時の値 */
      modelValue?: Date
    }
  >(),
  {
    type: 'date',
  }
)

// 日付と時刻の分離キャラクタ
const SEPARATOR = {
  dash: '/',
  colon: ':',
}

// リファレンス(日付や時刻の各コンポーネントを追跡および更新すること)
const { yearRef, monthRef, dayRef, hourRef, minuteRef, secondRef } = {
  yearRef: ref(),
  monthRef: ref(),
  dayRef: ref(),
  hourRef: ref(),
  minuteRef: ref(),
  secondRef: ref(),
}

// 限界値
const {
  yearMin,
  yearMax,
  monthMin,
  monthMax,
  dayMin,
  dayMax,
  hourMax,
  msMax,
  timeMin,
} = {
  yearMin: parseInt(DATE_Y_RANGE.MIN),
  yearMax: parseInt(DATE_Y_RANGE.MAX),
  monthMin: parseInt(DATE_M_RANGE.MIN),
  monthMax: parseInt(DATE_M_RANGE.MAX),
  dayMin: parseInt(DATE_D_RANGE.MIN),
  dayMax: parseInt(DATE_D_RANGE.MAX),
  hourMax: TIME_HH_MM.MAXHOUR,
  msMax: TIME_HH_MM.MAXMiNUTE,
  timeMin: 0,
}

let inputValue = useVModel(props, 'modelValue')

// 日付の特定の部分を取得し、2桁のゼロでパディングする
const formatTimeValue = (dateValue: any, format: string) => {
  return dateValue ? dateValue[format]().toString().padStart(2, '0') : ''
}

// 親画面から受け取った日付の特定の部分（年、月、日、時、分、秒）をrefリファレンスの形で作成する
const inputYear = ref(formatTimeValue(inputValue.value, 'getFullYear'))
const inputMonth = ref(formatTimeValue(inputValue.value, 'getMonth'))
const inputDay = ref(formatTimeValue(inputValue.value, 'getDate'))
const inputHour = ref(formatTimeValue(inputValue.value, 'getHours'))
const inputMinute = ref(formatTimeValue(inputValue.value, 'getMinutes'))
const inputSecond = ref(formatTimeValue(inputValue.value, 'getSeconds'))

// 表示形式の判定
const isDate = computed(() => props.type !== 'month')
const isTime = computed(() => props.type === 'time')

// 日付タイプ(month, date, time)によってコンポーネントのwidthを設定する
const computedWidth = computed<string | undefined>(() =>
  props.type === 'month'
    ? ' var(--dateym-input-width)'
    : props.type === 'date'
    ? ' var(--dateymd-input-width)'
    : ' var(--datetime-input-width)'
)

// 日付コンポーネントがフォーカスを受けた時、アウトライン(outline)を表示するかどうかを判定する
let isInputFocused = ref(false)

// 入力項目の情報を保持する配列
let inputArr = [
  { id: 0, name: inputYear, ref: yearRef, min: yearMin, max: yearMax },
  { id: 1, name: inputMonth, ref: monthRef, min: monthMin, max: monthMax },
  { id: 2, name: inputDay, ref: dayRef, min: dayMin, max: dayMax },
  { id: 3, name: inputHour, ref: hourRef, min: timeMin, max: hourMax },
  { id: 4, name: inputMinute, ref: minuteRef, min: timeMin, max: msMax },
  { id: 5, name: inputSecond, ref: secondRef, min: timeMin, max: msMax },
]

// inputイベント（年、月、日、時、分、秒）
const inputedCheck = (event: any) => {
  // 数字でない値の入力制限
  event.target.value = event.target.value.replace(/[^\u0030-\u0039]/g, '')

  // 最大桁数に達した場合
  if (event.target.value.length === event.target.maxLength) {
    // inputArr配列に現在の入力項目のインデックスを取得
    let currentIndex = inputArr.findIndex(
      (item) => item.ref.value === event.target
    )

    // 入力値検証およびフォーマット整備
    blurFormatValidate(event, isInputFocused.value)

    // 現在の入力項目が最後の項目でない場合
    if (currentIndex !== Math.max(...inputArr.map((item) => item.id))) {
      // 次の入力項目にフォーカスを移動
      ++currentIndex
      inputArr[currentIndex].ref.value.focus()

      // 10ミリ秒の遅延の後にテキストを選択します
      setTimeout(() => {
        inputArr[currentIndex].ref.value.setSelectionRange(0, 4)
      }, 10)
    }
  }
}

// blurイベント（年、月、日、時、分、秒）
const blurFormatValidate = (event: any, focusSet: boolean) => {
  // 入力がない場合は処理を中断
  if (!event.target.value) return

  // フォーカスフラグの状態（outline表示するかどうか）を更新
  isInputFocused.value = focusSet

  // 入力値を一時的に保存
  let tmpValue = event.target.value

  // inputArr配列に現在の入力項目のインデックスを取得
  let currentIndex = inputArr.findIndex(
    (item) => item.ref.value === event.target
  )

  // 入力された値を許容範囲内（inputArr配列に保存された最大および最小値）の値に置き換え
  inputArr[currentIndex].name.value = Math.min(
    Math.max(parseInt(tmpValue), inputArr[currentIndex].min),
    inputArr[currentIndex].max
  )
    .toString()
    .padStart(event.target.maxLength, '0')

  // 年月日の場合
  if ([0, 1, 2].includes(currentIndex)) {
    // 年、月、日がすべて入力されているか確認
    const isValidInput =
      inputYear.value !== undefined &&
      inputYear.value !== '' &&
      inputMonth.value !== undefined &&
      inputMonth.value !== '' &&
      inputDay.value !== undefined &&
      inputDay.value !== ''

    // 入力が有効な場合
    if (isValidInput) {
      // 月の最終日を計算
      const tmpDayMax = isNaN(
        new Date(inputYear.value, inputMonth.value, 0).getDate()
      )
        ? dayMax
        : new Date(inputYear.value, inputMonth.value, 0).getDate()

      // 入力された日は(許容最小日, 計算した月の最終日）の範囲内であるか
      inputDay.value = Math.min(Math.max(inputDay.value, dayMin), tmpDayMax)
        .toString()
        .padStart(2, '0')
    }
  }

  // props値の更新
  setPropsValue()
}

// props値の更新
const setPropsValue = () => {
  // 入力された年月日時分秒から日時の文字列を生成
  const inputDateTime = `${inputYear.value}/${inputMonth.value}/${inputDay.value} ${inputHour.value}:${inputMinute.value}:${inputSecond.value}`
  // 日時文字列をタイムスタンプに変換
  const timestamp = Date.parse(inputDateTime)

  // 日付有効の場合
  if (!isNaN(timestamp)) {
    // props値の更新を行う
    inputValue.value = new Date(timestamp)
  }
}

// キーボード上の矢印キーをコントロール
const handleKeyDown = (event: any) => {
  // inputArr配列に現在の入力項目のインデックスを取得
  let currentIndex = inputArr.findIndex(
    (item) => item.ref.value === event.target
  )

  switch (event.key) {
    case 'ArrowUp': // ↑矢印キーの処理
      if (currentIndex === 0) break

      // 前の入力項目にフォーカスを移動
      inputArr[--currentIndex].ref.value.focus()
      break
    case 'ArrowDown': // ↓矢印キーの処理
      if (currentIndex === inputArr.length - 1) break

      // 次の入力項目にフォーカスを移動
      inputArr[++currentIndex].ref.value.focus()
      break
    case 'ArrowLeft': // ←矢印キーの処理
      if (event.target.selectionStart === 0) {
        if (currentIndex === Math.min(...inputArr.map((item) => item.id))) break

        event.preventDefault()

        // カーソルが最初にあるとき、前の入力項目に移動
        const prevInput = inputArr[--currentIndex].ref
        prevInput.value.focus()
        prevInput.value.setSelectionRange(
          prevInput.value.value.length,
          prevInput.value.value.length
        )
      }
      break
    case 'ArrowRight': // →矢印キーの処理
      if (event.target.selectionStart === event.target.value.length) {
        if (currentIndex === Math.max(...inputArr.map((item) => item.id))) break

        event.preventDefault()

        // カーソルが最後にあるとき、次の入力項目に移動
        const nextInput = inputArr[++currentIndex].ref
        nextInput.value.focus()
        nextInput.value.setSelectionRange(0, 0)
      }
      break
    case 'Enter': // Enterキーの処理
      // フォーカスが外れた際の入力値検証処理
      blurFormatValidate(event, true)

      if (currentIndex === Math.max(...inputArr.map((item) => item.id))) break

      event.preventDefault()

      // 次の入力項目に移動
      const nextInput = inputArr[++currentIndex].ref
      nextInput.value.focus()
      setTimeout(() => {
        nextInput.value.setSelectionRange(0, 4)
      }, 10)
      break
    default:
      break
  }
}

// フォーカスを受けた時、アウトライン(outline)を表示する
const showOutline = () => {
  isInputFocused.value = true
}

// propsのtype(month, date, time)に基づいてinputArr配列から要素を削除する
onMounted(() => {
  const popCount = props.type === 'month' ? 4 : props.type === 'date' ? 3 : 0

  for (let i = 0; i < popCount; i++) {
    inputArr.pop()
  }
})
</script>

<style scoped>
label {
  display: inline-block;
  position: absolute;
}

.date-input-year-wrapper {
  align-items: center;
  display: inline-flex;
  position: relative;
}

#date-input-year {
  box-sizing: border-box;
  height: var(--standard-height);
  width: v-bind(computedWidth);
}
#date-input-year ~ label {
  left: 2.5rem;
}

.input-field {
  box-sizing: border-box;
  position: absolute;
  width: 15px;

  border: none;
  outline: none;
  box-shadow: none;
}

#date-input-month {
  left: 3rem;
}
#date-input-month ~ label {
  left: 4.4rem;
}
#date-input-day {
  left: 4.9rem;
}
#date-input-hour {
  left: 6.7rem;
}
#date-input-hour ~ label {
  left: 8rem;
}
#date-input-minute {
  left: 8.5rem;
}
#date-input-minute ~ label {
  left: 9.9rem;
}
#date-input-second {
  left: 10.4rem;
}
</style>
