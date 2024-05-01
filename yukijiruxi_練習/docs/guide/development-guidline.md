# 開発規約

- **HTML/CSS は基本 [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html) に準ずる。**
- **JavaScript は基本 [JavaScript Standard Style](https://standardjs.com/rules-en) に準ずる**。
  - Prettier を使う際に保存時にフォーマットする style を設定してある。
    - 保存時にフォーマットすることの設定はご自身でエディターで行う必要がある。
- できるだけ完全スペルの英単語で変数等を命名する。
- 現行 Java Applet ソースに存在する項目名を流用する場合は現行ソースの命名規約を優先する。

## SFC (Single File Component) Style

- 各ブロックの書き順は下記の通りにしてください。

```vue
<!-- Sample.vue -->
<template>
  <!-- HTML&Vue.js Component code -->
</template>

<script setup lang="ts">
// モジュールを導入する際は 「部品 > type > それ以外」 の順に整理するのがお薦め
import SampleComponent from '@/components/SampleComponent.vue'
import SampleComponent2 from '@/components/SampleComponent2.vue'

import type { Sample } from '@/types/components/Sample.ts'

import { print } from '@/utils'
import { ref, type Ref } from 'vue'
</script>

<style scoped>
/* CSS code */
</style>
```

## CSS Style

### Class 命名規約

- `father-child-active`の様に全部小文字で複数単語の場合はハイフン付きで命名する。
- 単語は一つのみでも構わない。
- 元素の従属関係や状態が分かるように命名する。

### CSS 変数

- 共通の設定値（色、幅、長さ、間隔等）を共通ファイルに書く。
- ファイルは `src/assets/base.css`。
- セレクターは `:root` でなければ効果はない。
- 変数名は `--` で始まり、全部小文字でハイフンで単語を接続する。必ず二単語以上で命名する。
- 変数名で使う箇所が明確ではない場合は二次変数を作成してください。

```css
/* assets/base.css */
:root {
  --color-white: #fff;
}

:root {
  --button-background: var(--color-white);
}
```

```vue
<!-- ComponentA.vue -->
<template>...</template>

<script setup>
...
</script>

<style scoped>
.button {
  background: var(--button-background);
}
</style>
```

## 画面作成

- ファイル・ディレクトリ作成規約は[ディレクトリ規約](/guide/directory-tree.html#規約)を参照してください。
- 画面サイズ等の設計は [IN_D05.01\_画面設計規約(Applet->Vue.js).xlsx](https://itacsolution.sharepoint.com/:x:/s/megmilksnow/ET22t3GW579Pn-sF8_PFpjEBRmigHmnQGYfzwMGh5F9o7A?e=ffEVCh) を参考してください。
- 既存画面ルートの作成は[既存画面のルートの追加](/guide/routing.html#既存画面のルートの追加)を参照してください。
- 新規画面のルート作成は要相談。ルートモジュールの新規追加になる場合は[新規ルートモジュールの作成](/guide/routing.html#新規ルートモジュールの作成)を参照してください。

## 部品作成

- 共通部品のファイル・ディレクトリ作成規約は[ディレクトリ規約](/guide/directory-tree.html#規約)を参照してください。
- 独自部品は独自モジュールに `components` ディレクトリを作成しその中に置いてください。命名等は[ディレクトリ規約](/guide/directory-tree.html#規約)に準ずる。
- 部品関連の詳細は[部品情報](/components/component-information)を確認してください。
