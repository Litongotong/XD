# 引継データ領域

## 同一ウィンドウ内の画面遷移時のデータ引き渡し用に使用する領域

### `sessionStorage`を利用

`sessionStorage`は同じセッション内の異なるページ間でデータを共有できるストレージ方法です。
`localStorage`に似ていますが、保存範囲は現在のセッションに限定されています。

### `sessionStorage`にデータを設定

遷移前のページで、共通ファイル storage.ts を使って、送信したいデータを`sessionStorage`に設定することができます。

```typescript
import { storageSession } from '@/utils'
storageSession.set('key', 'value')
```

### `sessionStorage`からデータを取得

遷移後のページで、保存したデータを`sessionStorage`から取得することができます。

```typescript
import { storageSession } from '@/utils'
const data = storageSession.get('key')
```

## 使用例

PageA

```vue
<template>
  <button @click="sendData">データ送信</button>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { storageSession } from '@/utils'

export default {
  setup() {
    const router = useRouter()

    const sendData = () => {
      storageSession.set('myData', '引継データ')
      router.push('/PageB')
    }

    return {
      sendData,
    }
  },
}
</script>
```

PageB

```vue
<template>
  <div>受け取ったメッセージ：{{ message }}</div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { storageSession } from '@/utils'

export default {
  setup() {
    const message = ref('')

    onMounted(() => {
      const myData = storageSession.get('myData')
      if (myData && typeof myData === 'string') {
        message.value = myData
      }
    })

    return {
      message,
    }
  },
}
</script>
```
