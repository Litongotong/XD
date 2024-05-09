<template>
  <div
    :data-item-id="id"
    :data-component-name="EComponentName.JCFFieldFilledDate"
    :style="commonStyle"
  >
    <div class="box">
      <div class="date-input-wrapper">
        <input
          class="base-input year_input"
          ref="yearInputRef"
          type="text"
          :maxLength="yearMaxLength"
          :disabled="isDisabled"
          v-model="inputYear"
          @input="yearEventHandler.onYearInput"
          @change="yearEventHandler.onYearChange"
          @keydown="yearEventHandler.onYearKeyDown"
        />
        <span class="sep">/</span>
        <input
          class="base-input month_input"
          ref="monthInputRef"
          type="text"
          :maxLength="monthMaxLength"
          :disabled="isDisabled"
          v-model="inputMonth"
          @input="mounthEventHandler.onMonthInput"
          @change="mounthEventHandler.onMonthChange"
          @keydown="mounthEventHandler.onMonthKeyDown"
        />
        <span class="sep">/</span>
        <input
          class="base-input day_input"
          ref="dayInputRef"
          type="text"
          :maxLength="dayMaxLength"
          :disabled="isDisabled"
          v-model="inputDay"
          @input="dayEventHandler.onDayInput"
          @change="dayEventHandler.onDayChange"
          @keydown="dayEventHandler.onDayKeyDown"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SMSJCFFieldFilledDateExtData } from '@/lib/sms/sol/sys/cjf/SMSJCFFieldFilledDateExtData'
import type { JCFFieldFilledDateProps } from './types'
import type { JCFFieldFilledDateData } from '../../../lib/jcf/gui/JCFFieldFilledDateData'

import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { computed, ref, watch } from 'vue'
import { calculateCommonStyle } from '../utils/transform'
import { getInstance } from '../utils/instance'
import {
  ensureNumberWithDay,
  ensureNumberWithMonth,
  ensureNumberWithYear,
  getExistedDate,
} from './format'
import { isBackspace, isLeftArrow, isRightArrow } from '@/utils/keyboard/keys'

defineOptions({
  name: EComponentName.JCFFieldFilledDate,
})

const props = defineProps<JCFFieldFilledDateProps>()
const id = props.id

const instance = getInstance<
  JCFFieldFilledDateData | SMSJCFFieldFilledDateExtData
>(props)

const isDisabled = computed(() => {
  const usingEnabled = instance ? instance.enabled.value : props.enabled
  return usingEnabled === false
})

// element refs
const yearInputRef = ref<HTMLInputElement>(null!)
const monthInputRef = ref<HTMLInputElement>(null!)
const dayInputRef = ref<HTMLInputElement>(null!)

// input max length
const yearMaxLength = 4
const monthMaxLength = 2
const dayMaxLength = 2

function useInputValues() {
  const defaultYear = instance ? instance.values.value?.[0] : undefined
  const defaultMonth = instance ? instance.values.value?.[1] : undefined
  const defaultDay = instance ? instance.values.value?.[2] : undefined

  const defaultYearAsString = defaultYear ? defaultYear.toString() : ''
  const defaultMonthAsString = defaultMonth ? defaultMonth.toString() : ''
  const defaultDayAsString = defaultDay ? defaultDay.toString() : ''

  const inputYear = ref<string>(defaultYearAsString)
  const inputMonth = ref<string>(defaultMonthAsString)
  const inputDay = ref<string>(defaultDayAsString)

  const syncToInstance = (opts: {
    year?: number
    month?: number
    day?: number
  }) => {
    if (instance) {
      const { year, month, day } = opts
      const usingYear = year ? year : instance.values.value?.[0] || ''
      const usingMonth = month ? month : instance.values.value?.[1] || ''
      const usingDay = day ? day : instance.values.value?.[2] || ''
      const existedDate = getExistedDate({
        year: usingYear.toString(),
        month: usingMonth.toString(),
        day: usingDay.toString(),
      })
      const resultArr: number[] = [
        parseInt(existedDate.year),
        parseInt(existedDate.month),
        parseInt(existedDate.day),
      ]
      instance.setValue(resultArr)
    }
  }

  // year
  const onYearChange = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    const limitedString = ensureNumberWithYear(newValue, true)
    // sync to self
    if (inputYear.value !== limitedString) {
      inputYear.value = limitedString
    }
    // sync to instance
    const asNumber = parseInt(limitedString)
    syncToInstance({ year: asNumber })
  }
  const onYearInput = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    // ensure number
    const limitedString = ensureNumberWithYear(newValue)
    // sync to self
    if (inputYear.value !== limitedString) {
      inputYear.value = limitedString
    }
    // keyboard event
    const isMaxLength = limitedString.length === yearMaxLength
    // move to month input
    if (isMaxLength) {
      monthInputRef.value.focus()
    }
  }
  const getYearInputCursor = () => {
    return yearInputRef.value.selectionStart
  }
  const onYearKeyDown = (e: KeyboardEvent) => {
    const moveRight = isRightArrow(e.key)
    const currentCursor = getYearInputCursor()
    const currentInputLength = inputYear.value.length
    if (currentCursor === currentInputLength && moveRight) {
      monthInputRef.value.focus()
      return
    }
  }

  // month
  const onMonthChange = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    const limitedString = ensureNumberWithMonth(newValue, true)
    // sync to self
    if (inputMonth.value !== limitedString) {
      inputMonth.value = limitedString
    }
    // sync to instance
    const asNumber = parseInt(limitedString)
    syncToInstance({ month: asNumber })
  }
  const onMonthInput = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    // ensure number
    const limitedString = ensureNumberWithMonth(newValue)
    // sync to self
    if (inputMonth.value !== limitedString) {
      inputMonth.value = limitedString
    }
    // keyboard event
    const isMaxLength = limitedString.length === monthMaxLength
    // move to day input
    if (isMaxLength) {
      dayInputRef.value.focus()
    }
  }
  const getMonthInputCursor = () => {
    return monthInputRef.value.selectionStart
  }
  const onMonthKeyDown = (e: KeyboardEvent) => {
    if (isBackspace(e.key)) {
      // move to year input
      if (inputMonth.value === '') {
        yearInputRef.value.focus()
        return
      }
    }
    const moveRight = isRightArrow(e.key)
    const currentCursor = getMonthInputCursor()
    const currentInputLength = inputMonth.value.length
    if (currentCursor === currentInputLength && moveRight) {
      dayInputRef.value.focus()
      return
    }
    const moveLeft = isLeftArrow(e.key)
    if (currentCursor === 0 && moveLeft) {
      yearInputRef.value.focus()
      return
    }
  }

  // day
  const onDayChange = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    const limitedString = ensureNumberWithDay(newValue, true)
    // sync to self
    if (inputDay.value !== limitedString) {
      inputDay.value = limitedString
    }
    // sync to instance
    const asNumber = parseInt(limitedString)
    syncToInstance({ day: asNumber })
  }
  const onDayInput = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    // ensure number
    const limitedString = ensureNumberWithDay(newValue)
    // sync to self
    if (inputDay.value !== limitedString) {
      inputDay.value = limitedString
    }
    const isMaxLength = limitedString.length === dayMaxLength
    // lose focus
    if (isMaxLength) {
      dayInputRef.value.blur();
    }
  }
  const getDayInputCursor = () => {
    return dayInputRef.value.selectionStart
  }
  const onDayKeyDown = (e: KeyboardEvent) => {
    if (isBackspace(e.key)) {
      // move to month input
      if (inputDay.value === '') {
        monthInputRef.value.focus()
        return
      }
    }
    const moveLeft = isLeftArrow(e.key)
    const currentCursor = getDayInputCursor()
    if (currentCursor === 0 && moveLeft) {
      monthInputRef.value.focus()
      return
    }
  }

  //年を入力制御する
  watch(inputYear, (newYear) => {
  const yearAsNumber = parseInt(newYear, 10);
  if (!isNaN(yearAsNumber) && yearAsNumber >= 1 && yearAsNumber <= 9999) {
    syncToInstance({ year: yearAsNumber });
  }
}, { deep: true });

  //月を入力制御する
  watch(inputMonth, (newMonth) => {
  const monthAsNumber = parseInt(newMonth, 10);
  if (!isNaN(monthAsNumber)) {
    //1~12の場合、0で補足したら次へ
    if (2 <= monthAsNumber && 12 >= monthAsNumber){
      syncToInstance({ month: monthAsNumber });
      inputMonth.value = ensureNumberWithMonth(inputMonth.value, true)
      dayInputRef.value.focus();
    } else if(1 == monthAsNumber){
      syncToInstance({ month: monthAsNumber });
    } else{
      // イレギュラーの場合、元の値に戻し、0補完後次へ
      if(2 == newMonth.length && !newMonth.replaceAll("0","")){
        //2桁、00の場合
        inputMonth.value = ensureNumberWithMonth(inputMonth.value.slice(0, -1), true)
      }else if(1 == newMonth.length){
        //1桁の場合
        inputMonth.value = newMonth;
      }else{
        //2桁、00以外の場合
        inputMonth.value = inputMonth.value.slice(0, -1);
      }
    }
  }
}, { deep: true });

  //日を入力制御する
  watch(inputDay, (newDay) => {
  const dayAsNumber = parseInt(newDay, 10);
  const yearAsNumber = parseInt(inputYear.value, 10);
  const monthAsNumber = parseInt(inputMonth.value, 10);
  if (!isNaN(dayAsNumber)) {
    if (isValidDate(yearAsNumber, monthAsNumber, dayAsNumber)) {
      syncToInstance({ day: dayAsNumber });
    } else {
      inputDay.value = inputDay.value.slice(0, -1);
    }
  }
}, { deep: true });

  //入力日付の有効性をチェックする
  const isValidDate = (year: number, month: number, day: number): boolean => {
    const date = new Date(year, month - 1, day)

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    )
  }

  return {
    inputYear,
    inputMonth,
    inputDay,
    yearEventHandler: {
      onYearChange,
      onYearInput,
      onYearKeyDown,
    },
    mounthEventHandler: {
      onMonthChange,
      onMonthInput,
      onMonthKeyDown,
    },
    dayEventHandler: {
      onDayChange,
      onDayInput,
      onDayKeyDown,
    },
  }
}

const {
  inputYear,
  inputMonth,
  inputDay,
  yearEventHandler,
  mounthEventHandler,
  dayEventHandler,
} = useInputValues()

// common style
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  return style
})
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-radius: 2.5px;
  border-color: #767676;
  position: relative;
}

.box:focus-within {
  outline: 2px solid #000000;
  outline-offset: -2px;
}

.date-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 0 2px;
}

.base-input {
  padding: 0;
  height: 100%;
  border: none;
  outline: none;
  box-shadow: none;
}

.sep {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-1px) scale(0.9);
}

.year_input {
  width: 40%;
  text-align: left;
}

.month_input {
  width: 20%;
  text-align: left;
}

.day_input {
  width: 20%;
  text-align: left;
}
</style>
