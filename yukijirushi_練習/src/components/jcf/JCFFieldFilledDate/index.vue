<template>
  <div
    :data-item-id="id"
    :data-component-name="EComponentName.JCFFieldFilledDate"
  >
    <div class="date-input-wrapper" :style="commonStyle">
      <input
        id="date-input-year"
        class="base-input"
        ref="yearInput"
        type="text"
        :maxLength="maxLengths[0]"
        :disabled="!enabled"
        v-model="inputedValueYear"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="inputedCheck"
        @keydown="handleKeydown"
        data-next-field="month"
        data-prev-field=""
      />
      <label>/</label>
      <input
        class="base-input input-field"
        id="date-input-month"
        ref="monthInput"
        type="text"
        :maxLength="maxLengths[1]"
        :disabled="!enabled"
        v-model="inputedValueMonth"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="inputedCheck"
        @keydown="handleKeydown"
        data-next-field="day"
        data-prev-field="year"
      />
      <label>/</label>
      <input
        class="base-input input-field"
        id="date-input-day"
        ref="dayInput"
        type="text"
        :maxLength="maxLengths[2]"
        :disabled="!enabled"
        v-model="inputedValueDay"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="inputedCheck"
        @keydown="handleKeydown"
        data-next-field=""
        data-prev-field="month"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JCFFieldDoubleData } from '@/lib/jcf/gui/JCFFieldDoubleData'
import type { SMSJCFFieldFilledDateExtData } from '@/lib/sms/sol/sys/cjf/SMSJCFFieldFilledDateExtData'
import type { JCFFieldFilledDateProps } from './types'
import type { JCFFieldFilledDateData } from '../../../lib/jcf/gui/JCFFieldFilledDateData'

import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { computed, ref, watch } from 'vue'
import { calculateCommonStyle } from '../utils/transform'
import { installInstance } from '../utils/instance'

const props = defineProps<JCFFieldFilledDateProps>()

const componentName = computed(() => {
  let name = EComponentName.JCFFieldFilledDate

  if (props.isSMS) {
    name = EComponentName.SMSJCFFieldFilledDateExt
  } else if (props.isYuki) {
    name = EComponentName.YUKIFieldFilledDate
  }

  return name
})

const instance = installInstance<
  JCFFieldFilledDateData | SMSJCFFieldFilledDateExtData,
  JCFFieldFilledDateProps
>(componentName.value, props)

defineOptions({
  name: EComponentName.JCFFieldFilledDate,
})

const id = props.id

const yearInput = ref(null)
const monthInput = ref(null)
const dayInput = ref(null)

const inputedValueYear = ref(instance!.values[0])
const inputedValueMonth = ref(instance!.values[1])
const inputedValueDay = ref(instance!.values[2])

const maxLengths = [4, 2, 2]

let finalValue: number[] = [null, null, null]

instance?.setMaxLengths(finalValue)

watch(inputedValueYear, (newValue) => {
  if (props.isYuki) {
  }
  if (typeof newValue == 'string' && newValue.trim() === '') {
    finalValue[0] = null
  } else {
    let year = parseInt(newValue, 10)
    if (
      !isNaN(year) &&
      year === Math.floor(year) &&
      year >= 1 &&
      year <= 9999
    ) {
      finalValue[0] = year
      inputedValueYear.value = finalValue[0]
    } else {
      inputedValueYear.value = finalValue[0]
    }
  }
  instance?.setValue(finalValue)
})

watch(inputedValueMonth, (newValue) => {
  if (props.isYuki) {
  }
  if (typeof newValue == 'string' && newValue.trim() === '') {
    finalValue[1] = null
  } else {
    let month = parseInt(newValue, 10)
    if (
      !isNaN(month) &&
      month === Math.floor(month) &&
      month >= 1 &&
      month <= 12
    ) {
      finalValue[1] = month
      inputedValueMonth.value = finalValue[1]
    } else {
      inputedValueMonth.value = finalValue[1]
    }
  }
  instance?.setValue(finalValue)
})

watch(inputedValueDay, (newValue) => {
  if (props.isYuki) {
  }
  if (typeof newValue == 'string' && newValue.trim() === '') {
    finalValue[2] = null
  } else {
    let day = parseInt(newValue, 10)
    if (
      !isNaN(day) &&
      day === Math.floor(day) &&
      day >= 1 &&
      day <= 31 &&
      isValidDate(finalValue[0], finalValue[1], day)
    ) {
      finalValue[2] = day
      inputedValueDay.value = finalValue[2]
    } else {
      inputedValueDay.value = finalValue[2]
    }
  }
  instance?.setValue(finalValue)
})

function isValidDate(year, month, day) {
  const date = new Date(year, month - 1, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })

  style.background = props.valueError
    ? 'var(--color-error) '
    : 'var(--color-white)'

  style.textAlign = 'left'

  return style
})

const handleFocus = (event: Event): void => {}

const handleBlur = (event) => {
  const target = event.target
  const id = target.id
  let value = parseInt(target.value, 10)
  let isValid = true

  switch (id) {
    case 'date-input-year':
      isValid = value >= 1 && value <= 9999
      break
    case 'date-input-month':
      isValid = value >= 1 && value <= 12
      break
    case 'date-input-day':
      isValid = value >= 1 && value <= 31
      break
  }

  if (!isValid) {
    target.value = ''
  }
}

const inputedCheck = (event) => {}

const handleKeydown = (event) => {
  const target = event.target
  const key = event.key
  const currentValueLength = target.value.length
  const nextField = target.dataset.nextField
  const prevField = target.dataset.prevField

  if (key !== 'Backspace' && currentValueLength === target.maxLength) {
    if (nextField && nextField === 'month') {
      monthInput.value.focus()
    } else if (nextField && nextField === 'day') {
      dayInput.value.focus()
    }
  }

  if (key === 'Backspace' && currentValueLength === 0) {
    if (prevField && prevField === 'month') {
      monthInput.value.focus()
    } else if (prevField && prevField === 'year') {
      yearInput.value.focus()
    }
  }
}
</script>

<style scoped>
.base-input {
  box-sizing: border-box;
}

.date-input-wrapper {
  align-items: center;
  display: inline-flex;
  position: relative;
  text-rendering: auto;
}

#date-input-year {
  box-sizing: border-box;
  padding: 1px 0px;
  border-width: 2px;
  border-color: light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
}

#date-input-year ~ label {
  left: 2.5rem;
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

.date-input-date ~ label {
  left: 2.5rem;
}

.input-field {
  box-sizing: border-box;
  position: absolute;
  width: 21px;
  border: none;
  outline: none;
  text-align: right;
  box-shadow: none;
}

label {
  display: inline-block;
  position: absolute;
}
</style>
