<template>
  <div
    :style="commonStyle"
    :data-item-id="id"
    :data-component-name="EComponentName.SMSJCFFieldFilledDateExt"
    :name="name"
  >
    <div class="date_input">
      <input
        type="tel"
        class="input_year"
        id="input_year"
        ref="yearInput"
        maxlength="4"
        v-model="inputValues[0]"
        @input="validate(0)"
        @keydown.right.exact.prevent="nextFocus(2)"
      />
      <div class="separator_date">/</div>
      <input
        type="tel"
        class="input_month"
        id="input_month"
        ref="monthInput"
        maxlength="2"
        tabindex="-1"
        v-model="inputValues[1]"
        @input="validate(1)"
        @keydown.left.exact.prevent="reverseFocus(1)"
        @keydown.right.exact.prevent="nextFocus(3)"
        @keydown="(event) => backSpace(event, 1)"
      />
      <div class="separator_date">/</div>
      <input
        type="tel"
        class="input_date"
        id="input_date"
        ref="dayInput"
        maxlength="2"
        tabindex="-1"
        v-model="inputValues[2]"
        @input="validate(2)"
        @keydown.left.exact.prevent="reverseFocus(2)"
        @keydown="(event) => backSpace(event, 2)"
      />
    </div>
    <JCFBoardButton
      label=">>"
      :bounds="[110, 0, 25, 25]"
      :alignment-vertical="JFAlignment.CENTER"
      @click="displayCalendar()"
    />
    <dialog class="dialog_background" :open="isDisplay"></dialog>
    <dialog class="dialog" :open="isDisplay">
      <div class="dialog_header">
        <label>日付け選択</label>
        <button class="cancel" @click="cancel()">×</button>
      </div>
      <div class="calendar">
        <div class="calendar_date">{{ formatDate() }}</div>
        <div class="day_of_week">
          <template v-for="(dayName, key) in DAY_NAME_LIST" :key="key">
            <div class="day_of_week_list">
              {{ dayName }}
            </div>
          </template>
        </div>
        <div class="date_row_list">
          <template v-for="(row, key) in calendarList" :key="key">
            <div
              class="date_value"
              :class="[
                (row.isNext || row.isPrev) && 'not_in_month',
                !(row.isNext || row.isPrev) &&
                  row.date.getDay() === 0 &&
                  'date_holiday',
                selectedDate.toDateString() === row.date.toDateString() &&
                  'selected_date',
              ]"
              @click="changeDate(row.date)"
              @dblclick="ok()"
            >
              {{ row.day }}
            </div>
          </template>
        </div>
      </div>
      <div class="button_list">
        <button class="calendar_button" @click="reverse()">前月</button>
        <button class="calendar_button" @click="next()">翌月</button>
        <button class="calendar_button" @click="ok()">OK</button>
        <button class="calendar_button" @click="cancel()">キャンセル</button>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { ref } from 'vue'
import type { SMSJCFFieldFilledDateExtProps } from './types'
import { calculateCommonStyle } from '../utils/transform'
import { getInstance } from '../utils/instance'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { SMSJCFFieldFilledDateExtData } from '@/lib/sms/sol/sys/cjf/SMSJCFFieldFilledDateExtData'
import JCFBoardButton from '@/components/jcf/JCFBoardButton/index.vue'
import { JFAlignment } from '@/lib/jcf/gui/JFAlignment'

// カレンダーの各日付の型
type dateInfo = {
  date: Date
  day: number
  isPrev: boolean
  isNext: boolean
}

// 部品名の明記
defineOptions({
  name: EComponentName.SMSJCFFieldFilledDateExt,
})

// 部品 props
const props = defineProps<SMSJCFFieldFilledDateExtProps>()

// 部品データを用意する
const instance = getInstance<SMSJCFFieldFilledDateExtData>(props)

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })

  return style
})

// 日付入力部品
const inputValues = ref<Array<string>>([])
let finalValue: Array<string> = ['', '', '']
const yearInput = ref()
const monthInput = ref()
const dayInput = ref()

// 入力時のチェック処理
function validate(index: number): void {
  inputValues.value[index] = inputValues.value[index].replace(/\D/g, '')
  if (index == 1) {
    let month = parseInt(inputValues.value[1], 10)
    if (month >= 13 || isNaN(month)) {
      inputValues.value[1] = isNaN(month) ? '' : finalValue[1]
    } else {
      finalValue[1] = month.toString()
      inputValues.value[1] = finalValue[1]
    }
  }
  if (index == 2) {
    let day = parseInt(inputValues.value[2], 10)
    if (day >= 32 || isNaN(day)) {
      inputValues.value[2] = isNaN(day) ? '' : finalValue[2]
    } else {
      if (!existDate(day)) {
        inputValues.value[2] = finalValue[2]
      } else {
        finalValue[2] = day.toString()
        inputValues.value[2] = finalValue[2]
      }
    }
  }
  if (index == 0 && inputValues.value[0]?.length == 4) {
    monthInput.value.focus()
    monthInput.value.setSelectionRange(0, 2)
  }
  if (
    index == 1 &&
    (inputValues.value[1]?.length == 2 ||
      [2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(inputValues.value[1])))
  ) {
    dayInput.value.focus()
    dayInput.value.setSelectionRange(0, 2)
  }
  finalValue[0] = inputValues.value[0]
  finalValue[1] = inputValues.value[1]
  finalValue[2] = inputValues.value[2]
  instance?.setValue(_conversionfromStringToNumber(finalValue))
  selectedDate.value = _conversionfromNumberToDate(
    _conversionfromStringToNumber(finalValue),
  )
  oldDate = new Date(selectedDate.value.getTime())
  _initializeCalendar()
}

// 日付の存在チェック
function existDate(day: number): boolean {
  if (
    !inputValues.value[0] ||
    !inputValues.value[1] ||
    isNaN(parseInt(inputValues.value[0])) ||
    isNaN(parseInt(inputValues.value[1]))
  ) {
    return true
  } else {
    const date = new Date(
      parseInt(inputValues.value[0]),
      parseInt(inputValues.value[1]) - 1,
      day,
    )
    return (
      date.getFullYear() === parseInt(inputValues.value[0]) &&
      date.getMonth() === parseInt(inputValues.value[1]) - 1 &&
      date.getDate() === day
    )
  }
}

// 右方向キー押下時の挙動
function nextFocus(index: number): void {
  if (index == 2) {
    const pos = yearInput.value.selectionStart
    if (!inputValues.value[0] || pos >= inputValues.value[0].length) {
      monthInput.value.focus()
      monthInput.value.setSelectionRange(0, 0)
    } else {
      yearInput.value.setSelectionRange(pos + 1, pos + 1)
    }
  } else if (index == 3) {
    const pos = monthInput.value.selectionStart
    if (!inputValues.value[1] || pos >= inputValues.value[1].length) {
      dayInput.value.focus()
      dayInput.value.setSelectionRange(0, 0)
    } else {
      monthInput.value.setSelectionRange(pos + 1, pos + 1)
    }
  }
}

// 左方向キー押下時の挙動
function reverseFocus(index: number): void {
  if (index == 1) {
    const pos = monthInput.value.selectionStart
    if (!inputValues.value[1] || pos == 0) {
      yearInput.value.focus()
      yearInput.value.setSelectionRange(4, 4)
    } else {
      monthInput.value.setSelectionRange(pos - 1, pos - 1)
    }
  } else if (index == 2) {
    const pos = dayInput.value.selectionStart
    if (!inputValues.value[2] || pos == 0) {
      monthInput.value.focus()
      monthInput.value.setSelectionRange(2, 2)
    } else {
      dayInput.value.setSelectionRange(pos - 1, pos - 1)
    }
  }
}

// バックスペース押下時の挙動
function backSpace(event: KeyboardEvent, index: number): void {
  const key = event.key
  if (key != 'Backspace') {
    return
  } else {
    if (
      (index == 1 &&
        monthInput.value.selectionStart == 0 &&
        monthInput.value.selectionEnd == 0) ||
      (index == 2 &&
        dayInput.value.selectionStart == 0 &&
        dayInput.value.selectionEnd == 0)
    ) {
      reverseFocus(index)
    }
  }
}

// 選択した日付
const selectedDate = ref(
  _conversionfromNumberToDate(instance?.getIntArrayValue() as number[]),
)

// カレンダー上部の日付表示
const formatDate = (): string => {
  return selectedDate.value.toLocaleDateString().replace(/\//g, '.')
}

// 選択前の日付
let oldDate = new Date(selectedDate.value.getTime())

// 曜日リスト
const DAY_NAME_LIST = ['日', '月', '火', '水', '木', '金', '土']

// 表示する月のカレンダー
const calendarList = ref(new Array<dateInfo>())

// ダイアログの表示/非表示
const isDisplay = ref(false)

// 初回起動時
onBeforeMount(() => {
  instance?.setMaxLengths(_conversionfromDateToNumber(selectedDate.value))
  _initializeCalendar()
})

// 選択した日付を設定する
const changeDate = (date: Date): void => {
  selectedDate.value = date
  _initializeCalendar()
}

// ダイアログ表示、非表示の動作
const displayCalendar = () => {
  isDisplay.value = !isDisplay.value
}

// 翌月ボタンの動作
const next = () => {
  _changeMonthConversionDate(1)
  _initializeCalendar()
}

// 前月ボタンの動作
const reverse = () => {
  _changeMonthConversionDate(-1)
  _initializeCalendar()
}

// OKボタンの動作
const ok = () => {
  oldDate = new Date(selectedDate.value.getTime())
  inputValues.value = _conversionfromDateToString(selectedDate.value)
  finalValue = [...inputValues.value]
  instance?.setValue(_conversionfromDateToNumber(selectedDate.value))
  displayCalendar()
}

// キャンセルボタンの動作
const cancel = () => {
  selectedDate.value = new Date(oldDate.getTime())
  _initializeCalendar()
  displayCalendar()
}

// Date型からnumber[]型に変換するメソッド
function _conversionfromDateToNumber(date: Date): number[] {
  const value = [] as number[]
  if (date == null) {
    const today = new Date()
    value[0] = today.getFullYear()
    value[1] = today.getMonth() + 1
    value[2] = today.getDate()
  } else {
    value[0] = date.getFullYear()
    value[1] = date.getMonth() + 1
    value[2] = date.getDate()
  }
  return value
}

// Date型からstring[]型に変換するメソッド
function _conversionfromDateToString(date: Date): string[] {
  const value = _conversionfromDateToNumber(date)
  const result = [value[0].toString(), value[1].toString(), value[2].toString()]
  return result
}

// number[]型からDate型に変換するメソッド
function _conversionfromNumberToDate(date: number[]): Date {
  const value = new Date()
  if (
    date == null ||
    date.length != 3 ||
    (date[0] == 0 && date[1] == 0 && date[2] == 0)
  ) {
    return value
  } else {
    value.setFullYear(date[0])
    value.setMonth(date[1] - 1, 1)
    value.setDate(date[2])
    return value
  }
}

// string[]型からnumber[]型に変換するメソッド
function _conversionfromStringToNumber(date: string[]): number[] {
  const value = [0, 0, 0]
  if (date == null || date.length != 3) {
    return value
  } else {
    value[0] = date[0] ? parseInt(date[0]) : 0
    value[1] = date[1] ? parseInt(date[1]) : 0
    value[2] = date[2] ? parseInt(date[2]) : 0
    return value
  }
}

// 月を変更した場合の各変数への設定メソッド
function _changeMonthConversionDate(month: number) {
  for (let i = 0; i < 4; i++) {
    const changedMonth = new Date(
      selectedDate.value.getFullYear(),
      selectedDate.value.getMonth() + month,
      selectedDate.value.getDate(),
    )
    if (changedMonth.getDate() != selectedDate.value.getDate()) {
      selectedDate.value.setDate(selectedDate.value.getDate() - 1)
    } else {
      break
    }
  }
  selectedDate.value.setMonth(selectedDate.value.getMonth() + month)
}

// カレンダーの日付を設定する
function _initializeCalendar(): void {
  calendarList.value = new Array<dateInfo>()
  _prevPaddingDays(
    selectedDate.value.getFullYear(),
    selectedDate.value.getMonth(),
  )
  _currentDays(selectedDate.value.getFullYear(), selectedDate.value.getMonth())
  _nextPaddingDays(
    selectedDate.value.getFullYear(),
    selectedDate.value.getMonth(),
  )
}

// 前月の日を埋める
function _prevPaddingDays(year: number, month: number): void {
  const firstDay = new Date(year, month).getDay()
  const paddingDayCount = (firstDay + 7 - 0) % 7
  const prevLastDate = new Date(year, month, 0).getDate()
  for (let i = paddingDayCount; i > 0; i--) {
    calendarList.value.push({
      date: new Date(year, month - 1, prevLastDate - i + 1),
      day: prevLastDate - i + 1,
      isPrev: true,
      isNext: false,
    })
  }
}

// 今月の日にちリストを生成する
function _currentDays(year: number, month: number): void {
  const lastDate = new Date(year, month + 1, 0)
  const currentDayCount = lastDate.getDate()
  for (let i = 1; i < currentDayCount + 1; i++) {
    calendarList.value.push({
      date: new Date(year, month, i),
      day: i,
      isPrev: false,
      isNext: false,
    })
  }
}

// 来月の日を埋める
function _nextPaddingDays(year: number, month: number): void {
  const paddingDayCount = 42 - calendarList.value.length
  for (let i = 1; i < paddingDayCount + 1; i++) {
    calendarList.value.push({
      date: new Date(year, month + 1, i),
      day: i,
      isPrev: false,
      isNext: true,
    })
  }
}
</script>

<style scoped>
.date_input {
  display: inline-flex;
  width: 100px;
  height: 25px;
  border: 1px solid;
  font-family: monospace;
  font-size: 14px;
}
.input_year,
.input_month,
.input_date {
  outline: none;
  border: none;
  font-size: 14px;
  text-align: right;
}
.input_year {
  width: 35px;
}
.separator_date {
  line-height: 25px;
}
.input_month {
  width: 20px;
}

.input_date {
  width: 20px;
}
.dialog_background {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: calc(infinity);
  opacity: 0;
}
.dialog {
  width: 220px;
  height: 308px;
  border-color: #b2b2b2;
  border-radius: 0.5rem;
  box-sizing: content-box;
  background: #f0f0f0;
  cursor: default;
  padding: 0;
  z-index: calc(infinity);
}
.dialog_header {
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  background: #f3f3f3;
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  justify-content: space-between;
}
.cancel {
  font-size: xx-large;
  background: #f3f3f3;
  border: #f3f3f3;
  cursor: pointer;
  border-radius: 0 0.4rem 0 0;
  line-height: inherit;
  font-weight: lighter;
}
.cancel:hover {
  background: firebrick;
  color: white;
  transition: 0.5s;
}
.calendar {
  width: 220px;
  height: 200px;
}
.calendar_date {
  padding: 5px 0 0 2px;
  height: 20px;
}
.day_of_week {
  display: flex;
  height: calc(180px / 7);
  justify-content: space-around;
  line-height: calc(180px / 7);
}
.date_row_list {
  display: grid;
  justify-content: space-around;
  line-height: calc(180px / 7);
  grid-template: repeat(7, auto) / repeat(7, auto);
  text-align: center;
  background: white;
}
.date_value {
  width: calc(220px / 7);
}
.date_holiday {
  color: red;
}
.selected_date {
  color: white;
  background: #2563eb;
}
.not_in_month {
  opacity: 0.3;
  color: #0f172a;
}
.button_list {
  display: grid;
  place-items: center;
  grid-template: repeat(2, auto) / repeat(2, auto);
  padding: 15px 10px 5px 10px;
  width: 220px;
  justify-content: space-between;
}
.calendar_button {
  width: 80px;
  height: 24px;
  font-size: 12px;
  margin: 3px 0;
  color: var(--jcf-button-color);
  border: var(--jcf-button-border);
  box-shadow: var(--jcf-button-shadow);
  cursor: pointer;
}

.calendar_button:active {
  box-shadow: none;
  transform: translateY(2px);
}

.calendar_date::selection,
.day_of_week_list::selection,
.date_value::selection,
.calendar_button::selection,
.separator_date::selection,
.dialog_header > *::selection {
  background: unset;
}
</style>
