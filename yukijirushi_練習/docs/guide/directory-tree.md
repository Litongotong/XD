# ディレクトリ構成

## 構造

| Directory            | 説明                                                                 | 主な操作者                                |
| -------------------- | -------------------------------------------------------------------- | ----------------------------------------- |
| assets               | 静的資源（CSS、画像等）                                              | 基盤側                                    |
| components           | Project の [Atomic Design](https://atomicdesign.bradfrost.com/) 部品 | 基盤側                                    |
| components/atoms     | 原子。UI の最小単位（button、入力欄等）                              | 基盤側                                    |
| components/molecules | 分子。atmos で構成される意味を持つ要素（search bar、menu 等）        | 基盤側                                    |
| components/organisms | 生体。molecules で構成される単体で機能する要素（header、sidebar 等） | 基盤側                                    |
| views                | 画面部品。router によって異なる画面を表示する                        | `.vue` file は基盤側；`.ts` file は開発側 |
| layouts              | 画面共通の表示部分                                                   | 基盤側                                    |
| services             | Backend API との通信を管理する                                       | 開発側                                    |
| config               | Project の設定 File                                                  |
| enums                | 列挙型                                                               | 開発側                                    |
| router               | Project の router 設定                                               | 基盤側                                    |
| stores               | Pinia による状態の管理                                               | 開発側                                    |
| utils                | Tool 関数や helper                                                   | 開発側                                    |
| types                | Global Type                                                          | 開発側                                    |

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
