# ディレクトリ構造（修正待ち）

## 構造

```shell
.
│  .env.xxx # 環境変数
│  env.d.ts # 環境変数型定義
│  index.html # HTML ファイル
│  package.json # Node.js config
│  README.md # 説明ファイル
│  tsconfig.xxx.json # TypeScript config
│  vite.config.ts # Vite config
│
├─.vscode # VSCode local config
├─docs # 開発用内部資料（規約等）
├─node_modules # npm 依存インストール先
├─public # パッケージングの必要のない資源（favicon 等）
└─src # パッケージングされる資源
    ├─assets # 静的資源（CSS、icon 等）
    ├─components # 部品
    │  ├─jcf
    ├─config # ソース内コンフィグ（ユーザーが変更可能な定数等）
    │  ├─common-const
    │  └─views-info
    ├─enums # 列挙型
    ├─layouts # 画面レイアウト
    ├─lib # 単独で完結するライブラリ（Java で言う JDK 等）
    │  ├─adapter # Panel と Logic ファイルをバインドする為の制御層
    │  ├─jcf # JCF の翻訳ソース（自動化作業あり）
    │  ├─native # Java Lang JDK の翻訳ソース（自動化作業あり）
    │  ├─sms # SMS の翻訳ソース（自動化作業あり）
    │  └─ybm # YBM の翻訳ソース（自動化作業あり）
    │
    ├─router # ルーター
    │  └─routes # ルート
    ├─services # サービス呼出定義（API メソッド）
    │  ├─axios # Axios 設定
    │  └─modules # サービス（API）
    ├─stores # global store（移行内容以外のグローバル状態）
    ├─types # TypeScript 用グローバル型定義
    ├─utils # ツール関数
    └─views # 画面
        └─YBM
          └─YBMKKSF620M
              YBMKKSF620M-logic.ts # logic ファイル
              YBMKKSF620M-panel.vue # panel ファイル
```

## 規約

```shell
src/
├── components/
│   ├── organisms/ # Folder 名は全部小文字で `-` で単語を接続する
│   │   ├── ComponentA.vue # `.vue` file 名は `PascalCase.vue` （パスカルケース）の形で二単語以上
│   │   ├── ComponentB/ # SFC から logic を別 file に抽出する場合は部品を directory の形に作成し、pascal case で命名する
│   │   │   ├── some-logic.ts # `.vue` 以外の file 名は全部小文字で `-` で単語を接続する
│   │   │   ├── index.vue # folder 自体が部品の場合は `.vue` file 名を `index.vue` に固定
│   │   ├── ComponentC/
│   │   │   ├── some-logic.ts
│   │   │   ├── index.vue
│   ├── ...
├── views/
│   ├── YPM # 画面種類で分類する
│   │   ├── YPMSJSF341/ # 画面は全て folder の形で表示、画面 ID で命名する（router の path も ID で命名）
│   │   │   ├── YPMSJSF341M-logic.ts # 該当画面の業務ロジック
│   │   │   ├── YPMSJSF341M-panel.ts # 該当画面の構造
│   │   │   ├── YPMSJSF341M-store.ts # 該当画面の状態
│   │   ├── YPMSJSF342/
│   │   │   ├── YPMSJSF342M-logic/ # 業務ロジックを切り分ける場合はフォルダの形にしてください
│   │   │   │   ├── some-logic.ts
│   │   │   │   ├── index.ts # 纏めファイルが必須
│   │   │   ├── YPMSJSF342M-panel.ts # 該当画面の構造
│   │   │   ├── YPMSJSF342M-store.ts # 該当画面の状態
│   │   ...
│   ├── YBM
│   ...
```

### Flat 式 Directory（Flat Component Directory）

File の機能分けは folder で行わず、file 名で見分けられるように file を作成。

- 例：
  ![image](https://blog.vueschool.io/wp-content/uploads/2021/07/Screen_Shot_2021-06-30_at_3.45.01_PM.jpg)

### 悪い例

#### `Base` の濫用

```shell
# ✕ 悪い例
src/
├── components/
│   ├── organisms/
│   │   ├── BaseButton.vue
│   │   ├── BaseButtonGroup.vue # Base 部品は基礎となる部品で他の部品を使用して作ったものは `Base` と呼ばない

# ✓ 良い例
src/
├── components/
│   ├── organisms/
│   │   ├── BaseButton.vue
│   │   ├── ButtonGroup.vue # 単語が一つの場合は前に `The` を付けた方がいい
```

#### 命名が不明確

```shell
# ✕ 悪い例
src/
├── components/
│   ├── organisms/
│   │   ├── TextWithLabel01.vue # 部品の違いが分からない
│   │   ├── TextWithLabel02.vue

# ✓ 良い例
src/
├── components/
│   ├── organisms/
│   │   ├── TextWithLabelHasBG.vue # 部品の違いが分かる
│   │   ├── TextWithLabelNoBG.vue
```
