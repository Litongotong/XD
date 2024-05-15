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
} from './format'
import { isBackspace, isLeftArrow, isRightArrow } from '@/utils/keyboard/keys'
import { isNil } from '@/utils/useful'

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
      const date = {
        year: undefined,
        month: undefined,
        day: undefined,
      } as {
        year?: number
        month?: number
        day?: number
      }
      if (!isNil(year)) {
        if (!Number.isNaN(year)) {
          date.year = year
        }
      } else {
        date.year = instance.values.value?.[0]
      }
      if (!isNil(month)) {
        if (!Number.isNaN(month)) {
          date.month = month
        }
      } else {
        date.month = instance.values.value?.[1]
      }
      if (!isNil(day)) {
        if (!Number.isNaN(day)) {
          date.day = day
        }
      } else {
        date.day = instance.values.value?.[2]
      }
      const resultArr = [
        isNil(date.year) ? undefined : date.year,
        isNil(date.month) ? undefined : date.month,
        isNil(date.day) ? undefined : date.day,
      ]
      instance.setValue(resultArr as any)
    }
  }

  // year
  const onYearChange = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    if (!newValue?.length) {
      inputYear.value = ''
      syncToInstance({ year: NaN })
      return
    }
    const limitedString = ensureNumberWithYear(newValue, true)
    // sync to self
    inputYear.value = limitedString
    // sync to instance
    const asNumber = parseInt(limitedString)
    syncToInstance({ year: asNumber })
  }
  const onYearInput = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    // ensure number
    const limitedString = ensureNumberWithYear(newValue)
    // sync to self
    inputYear.value = limitedString
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
    if (!newValue?.length) {
      inputMonth.value = ''
      syncToInstance({ month: NaN })
      return
    }
    const limitedString = ensureNumberWithMonth(newValue, true)
    // sync to self
    inputMonth.value = limitedString
    // sync to instance
    const asNumber = parseInt(limitedString)
    syncToInstance({ month: asNumber })
  }
  const monthInputCheck = (newMonth: string) => {
    const monthAsNumber = parseInt(newMonth, 10)
    if (!Number.isNaN(monthAsNumber)) {
      //1~12の場合、0で補足したら次へ
      if (2 <= monthAsNumber && 12 >= monthAsNumber) {
        const limitedString = ensureNumberWithMonth(newMonth, true)
        inputMonth.value = limitedString
        dayInputRef.value.focus()
      } else if (1 == monthAsNumber) {
        // pass
      } else {
        // イレギュラーの場合、元の値に戻し、0補完後次へ
        if (2 == newMonth.length && !newMonth.replaceAll('0', '')) {
          //2桁、00の場合
          inputMonth.value = ensureNumberWithMonth(
            inputMonth.value.slice(0, -1),
            true,
          )
          return false
        } else if (1 == newMonth.length) {
          //1桁の場合
          inputMonth.value = newMonth
        } else {
          //2桁、00以外の場合
          inputMonth.value = inputMonth.value.slice(0, -1)
          return false
        }
      }
    }
  }
  const onMonthInput = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    const isValid = monthInputCheck(newValue)
    if (isValid === false) {
      inputMonth.value = newValue.slice(0, -1)
      return
    }
    // ensure number
    const limitedString = ensureNumberWithMonth(newValue)
    inputMonth.value = limitedString
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
    if (!newValue?.length) {
      inputDay.value = ''
      syncToInstance({ day: NaN })
      return
    }
    const limitedString = ensureNumberWithDay(newValue, true)
    // sync to self
    inputDay.value = limitedString
    // sync to instance
    const asNumber = parseInt(limitedString)
    syncToInstance({ day: asNumber })
  }
  const dayInputCheck = (newValue: string) => {
    const dayAsNumber = parseInt(newValue, 10)
    const yearAsNumber = parseInt(inputYear.value, 10)
    const monthAsNumber = parseInt(inputMonth.value, 10)
    if (!Number.isNaN(monthAsNumber) && !Number.isNaN(yearAsNumber)) {
      if (isValidDate(yearAsNumber, monthAsNumber, dayAsNumber)) {
        // has year,month,day legal
      } else {
        // exclude day start with 0
        if (!'0'.equals(newValue)) {
          return false
        }
      }
    } else if (Number.isNaN(yearAsNumber) || Number.isNaN(monthAsNumber)) {
      //旧仕様模倣するため、年入力していない場合、日は28まで入力可能
      const defaultYear = 1991
      const defaultMonth = !Number.isNaN(monthAsNumber) ? monthAsNumber : 2

      if (2 == newValue.length) {
        if (isValidDate(defaultYear, defaultMonth, dayAsNumber)) {
          // pass
        } else {
          return false
        }
      }
    }
  }
  const onDayInput = (e: Event) => {
    const newValue = (e.target as HTMLInputElement).value
    const isValid = dayInputCheck(newValue)
    if (isValid === false) {
      inputDay.value = newValue.slice(0, -1)
      return
    }
    // ensure number
    const limitedString = ensureNumberWithDay(newValue)
    // sync to self
    inputDay.value = limitedString
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

  if (instance) {
    // watch instance change
    watch(
      instance.values,
      (newValues) => {
        const year = newValues?.[0]
        const month = newValues?.[1]
        const day = newValues?.[2]
        if (typeof year === 'number' && !Number.isNaN(year)) {
          inputYear.value = ensureNumberWithYear(year.toString(), true)
        }
        if (typeof month === 'number' && !Number.isNaN(month)) {
          inputMonth.value = ensureNumberWithMonth(month.toString(), true)
        }
        if (typeof day === 'number' && !Number.isNaN(day)) {
          inputDay.value = ensureNumberWithDay(day.toString(), true)
        }
      },
      { deep: true },
    )
  }

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
