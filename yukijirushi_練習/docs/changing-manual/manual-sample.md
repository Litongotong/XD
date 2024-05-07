# 変換指示書サンプル

This is a logic changing instruction manual sample.

## 変換指示書を docs に入れる手順

docs はフロントエンド倉庫 `yukijirushi` の `/docs/` のことを指す。

### docs 構造

```shell
# `/docs/`

docs
│  index.md
│
├─.vitepress
│  │  config.ts
│  │
│  └─compositions
│        index.ts
│        use-nav.ts
│        use-sidebar.ts
│
│
├─changing-manual
│      manual-sample.md
│
├─components
│      ...
│
├─guide
│      ...
│
└─images
        ...
```

### 手順

1. `/docs/changing-manul/` に変換指示書を入れる。

   ```shell
   docs
   ├─changing-manual
   │      manual-sample.md
   │      # 例
   │      new-manual.md
   ```

2. `/docs/.vitepress/compositions/use-sidebar.ts` 内の変換指示書サイドバー `useChangingManualSidebar` を下記の様に更新する。

   ```TypeScript
   // `/docs/.vitepress/compositions/use-sidebar.ts`

   /** 変換指示書ページ用サイドバー */
   function useChangingManualSidebar(): DefaultTheme.Sidebar {
     // ...snippet

     return {
       [SECTION.CHANGING_MANUAL]: [
         {
           text: '変換指示書',

           // フォルダに新しい指示書を追加する際はこの中にもアイテムを追加してください。
           items: [
             { text: '変換指示書サンプル', link: computeLink('manual-sample') },
             // 例
             { text: '新しい指示書', link: computeLink('new-manual')}
           ],
         },
       ],
     }
   }
   ```
