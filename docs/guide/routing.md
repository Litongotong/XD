# ルーティング（修正待ち）

## ルーティングディレクトリ構成

```shell
src/router # ルーターモジュール
│  constant.ts # ルーティング用定数集
│  index.ts # ルーターの総出口
│
└─routes # ルートモジュール
    │  index.ts # ルート出口
    │
    └─modules # ルート集
        │   ui-page.ts # UI 部品参照画面ルート
        │
        └─pages # 画面ルート
            YPM # 画面種類
            index.ts # 纏めファイル（出口）
            ...
```

## 新規ルートモジュールの作成

1. `src/router/routes/modules/` の中に作成したいモジュールのファイルを作成する。
2. 下記 [Route Module Item](#route-module-item) を参考しモジュールを作成する。
   - ルート属性は Vue Router の[公式ページ](https://router.vuejs.org/guide/)を参考してください。
   - **文字列を使う場合は出来るだけ `src/router/constant.ts` で管理してください。**
3. [Import Route Module](#import-route-module) の様にモジュールを導入してください。

### Router Constant

```typescript
// src/router/constant.ts
/** @description 汎用レイアウト */
export const DEFAULT_LAYOUT = () =>
  import(/** webpackChunkName "initialize" */ '@/layouts/DefaultLayout.vue')

/** @description 画面コード。属性名は現行画面 ID に準ずる */
export const PAGES = {
  YPMGSSF701S: 'YPMGSSF701S',
}
```

### Route Module Item

```typescript
// src/router/routes/modules/pages.ts
import type { RouteRecordRaw } from 'vue-router'

import { DEFAULT_LAYOUT, PAGES } from '../../constant'

const pages: RouteRecordRaw = {
  path: '/',
  component: DEFAULT_LAYOUT,
  redirect: `/${PAGES.YPMGSSF701S}`,

  children: [
    {
      // 既存画面は特例として全て大文字英数の大文字で命名する
      path: PAGES.YPMGSSF701S, // path 名は全部小文字でハイフンで単語を接続するように命名
      name: PAGES.YPMGSSF701S, // name 名は全部小文字でハイフンで単語を接続するように命名
      component: () =>
        import(
          /** webpackChunkName "initialize" */ '@/views/YPMGSSF701S/index.vue'
        ),
    },
  ],
}

export default pages
```

### Import Route Module

```typescript
// src/router/routes/index.ts
import pages from './modules/pages'
import uiPage from './modules/ui-page'

export const routes = [pages, uiPage]
```

## 現行画面のルートの追加

[【NEXT-MSIS】画面一覧\_CA 工程暫定版.xlsx](https://fujitsu.sharepoint.com/:x:/r/sites/jp-megmilk-snowbrand/_layouts/15/Doc.aspx?sourcedoc=%7B05C05941-8C61-44FE-9177-8D2F3FC1A9B2%7D&file=%25u3010NEXT-MSIS%25u3011%25u753b%25u9762%25u4e00%25u89a7_CA%25u5de5%25u7a0b%25u66ab%25u5b9a%25u7248.xlsx&action=default&mobileredirect=true) にあった画面は **pages** ルートモジュールに追加してください。

```typescript
// src/router/routes/modules/pages.ts
// ...
const pages: RouteRecordRaw = {
  path: '/',
  component: DEFAULT_LAYOUT,
  redirect: `/${PAGES.YPMGSSF701S}`,

  children: [
    {
      path: PAGES.YPMGSSF701S,
      name: PAGES.YPMGSSF701S,
      component: () =>
        import(
          /** webpackChunkName "initialize" */ '@/views/YPMGSSF701S/index.vue'
        ),
    },

    // 下記の様に追加してください
    {
      path: PAGES.SAMPLE,
      name: PAGES.SAMPLE,
      component: () =>
        import(/** webpackChunkName "initialize" */ '@/views/Sample.vue'),
    },
  ],
}
// ...
```
