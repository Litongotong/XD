# 部品情報

- `src/views/UIPage.vue` に部品のサンプルを置いてください。
  - 衝突対策として既存部品の番号でコメントを作成したので、該当の下にプレビューを置いてください。
  - `import` 文はアルファベット順で置いてください。
- `<origin>/ui-page` にて作成済みの部品のサンプルを確認できます。

## 共通部品

- 開発する際に [フロントエンド共通部品一覧.xlsx](https://itacsolution.sharepoint.com/:x:/s/megmilksnow/EWX384oY4DBJjb-2cOM5pt0BHiKh5IZv_PAJN8ngZWqJcg?e=0SMyzA) で共通部品の設計を確認してください。
- 共通部品のファイル・ディレクトリ作成規約は[ディレクトリ規約](/guide/directory-tree.html#規約)を参照してください。

## 独自部品

- 独自部品は独自モジュールに `components` ディレクトリを作成しその中に置いてください。命名等は[ディレクトリ規約](/guide/directory-tree.html#規約)に準ずる。

## 部品属性（props）

- 属性を説明する説明文が必要です。
- 汎用性を高める為に出来るだけ `undefined` 可に設定します。

```vue
<script setup lang="ts">
const props = withDefaults(
  defineProps<
    ComponentCommonProperty & {
      /** @description チェックされたアイテムのインデックスの配列 */
      checkedItemIndexes?: number[]
      /** @description データ */
      data?: Table.DatumRow[]
      /** @description データ高さ */
      datumHeight?: number | string
      /** @description ヘッダリスト */
      heads?: Table.HeadRow[]
      /** @description データ高さ */
      headHeight?: number | string
    }
  >(),
  { datumHeight: 'var(--table-datum-height-default)' },
)
</script>
```

デフォルト値を入れる時は Vue の `withDefaults` API を使ってください。

```vue
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** @description データ高さ */
    datumHeight?: number | string
  }>(),
  { datumHeight: 'var(--table-datum-height-default)' },
)
</script>
```

`<template>` 内で props を引用する時は props を明言する必要はありません。

```vue
<template>
  <span>
    <slot>{{ label }}</slot>
  </span>
</template>

<script lang="ts" setup>
import type { ComponentCommonProperty } from '@/types/components'

import { ensureUnit, calculatePositionStyle } from '@/utils'
import { computed, type CSSProperties } from 'vue'

defineProps<{ label?: string }>()
</script>
```

`<script>` 内で props を引用する時は props を明言する必要があります。

```vue
<template>
  <span :style="computedWrapperStyle">
    <slot>{{ label }}</slot>
  </span>
</template>

<script lang="ts" setup>
import type { ComponentCommonProperty } from '@/types/components'

import { ensureUnit, calculatePositionStyle } from '@/utils'
import { computed, type CSSProperties } from 'vue'

const props = defineProps<ComponentCommonProperty & { label?: string }>()

const computedWrapperStyle = computed<CSSProperties>(() => ({
  height: ensureUnit(props.height),
  width: ensureUnit(props.width),
  ...calculatePositionStyle(props.x, props.y),
}))
</script>
```
