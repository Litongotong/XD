# 部品間データ送信

## 親子部品

```vue
<!-- Parent.vue -->
<template>
  <Son v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 値が props の設定に応じる、必ず `string` ではない
const value = ref<string>('')
</script>
```

```vue
<!-- Son.vue -->
<template>
  <input v-model="value" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = defineProps<{
  // v-model 無印を使う場合はこの命名は変更できない
  modelValue: string
}>()

const value = useVModel(props, 'modelValue')
</script>
```

部品 v-model の実現原理はは公式サイトの [Component v-model](https://vuejs.org/guide/components/v-model.html) を参照してください。

### 親部品で v-model を使わない場合

```vue
<!-- Parent.vue -->
<template>
  <Son model-value="value" @update:model-value="handleInput" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')

// 戻り値が props の設定に応じる、必ず `string` ではない
const handleInput = (payload: string) => {}
</script>
```

### `modelValue` 以外の名称を使う場合

```vue
<!-- Parent.vue -->
<template>
  <Son v-model:title="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref<string>('')
</script>
```

```vue
<!-- Son.vue -->
<template>
  <input v-model:title="value" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = defineProps<{
  title: string
}>()

const value = useVModel(props, 'title')
</script>
```
