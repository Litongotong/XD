# 画面データ領域

## 現在表示中の画面、遷移前の画面、ダイアログ表示前の親画面等、画面内の項目情報を保持する領域

### `Pinia Store`を利用

Pinia Store は、Vue.js アプリケーションにおいて、状態管理を行うための効率的な方法を提供します。
これは、アプリケーションの異なる部分間で共有されるデータを中央で管理することを可能にします。

## 使用例

以下の例は、Pinia Store を利用して、単純なカウンターの状態を管理する方法を示しています。

sample.ts

```typescript
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const state = ref({ count: 0 })

  function increment() {
    state.value.count++
  }

  return {
    state,
    increment,
  }
})
```

sample.vue

```vue
<template>
  <div>
    <h1>{{ counter.state.count }}</h1>
    <button @click="counter.increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from './sample.ts'

export default {
  setup() {
    const counter = useCounterStore()

    return { counter }
  },
}
</script>
```
