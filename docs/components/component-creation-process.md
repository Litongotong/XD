# 部品作成手順

## 作成時に必要な資料

[General > 04\_初期ロット > 97\_実装方針検討 > 1.2.画面共通部品](https://itacsolution.sharepoint.com/:f:/s/megmilksnow/EvAYqDN8fidGs2hUWDxJu-oBBC6EuOwx3ZOHi4wgTp-k8w?e=B94JZX)

### 業務ロジック共通メソッド利用状況一覧\_画面共通部品

[業務ロジック共通メソッド利用状況一覧\_画面共通部品.xlsx](https://itacsolution.sharepoint.com/:x:/s/megmilksnow/Ea96ZgcsFsVLmg-AWqA1yQYBFKDa2VNtiKemu1iLq4dKWQ?e=lxEVoP)

部品の `Props` を実装する際に必要な属性情報を確認できる。実装に応じて随時修正する必要もある。

### 画面属性ファイル（説明資料）

[画面属性ファイル（説明資料）.xlsm](https://itacsolution.sharepoint.com/:x:/s/megmilksnow/EU8LwnotBppEuW1Av0yDoRwBxaQAj9QiApCUakk0G0wxPA?e=BB1CYy)

解析ツール、組立ツール向けの部品 `Props` API ファイル。実装に応じて随時修正する必要がある。

## 部品ディレクトリ構造

※ ここに羅列されていないファイル名で新規ファイルを作成する際は要相談。

```shell
~/src/components/jcf
├─JCFButtonGroup # 部品
├─JCFComboBox # 部品
│ ...
│
├─JCFFieldString # 部品
│  │  JCFFieldString.vue # 部品本体
│  │  types.ts # 部品個別型ファイル
│  │  ...
│  │
│  └─compositions # コンポーザブル（部品個別ロジック）
│          compute-style.ts # 算出スタイル
│          setup.ts # 部品データ実例の作成及びマウント
│          ...
│
└─utils # 部品共通ツール
   │  common.ts # 部品共通ロジック及び関数
   │  transform.ts # 部品共通前処理関数
   │  types.ts # 部品共通型ファイル
   │  ...
   │
   └─Fragment # * 暫定フォルダ
           index.vue
```

## 部品本体作成

`~/src/components/jcf/` 下に部品個別フォルダを作成する。部品個別フォルダ下に部品個別フォルダと同じ名称の Vue SFC ファイル作成する。こちらが部品本体となる。

部品を `~/src/views/Test.vue` に導入してリアルタイムに調整する。url は `<origin>/<environment>/test`。

### Props 実装注意点

現行では `JCFSample` 系のクラスが部品本体で、 `JCFSampleData` 系のクラスが部品データである。

上文の画面共通部品ドキュメントに記載される属性の中に、部品本体クラスに定義されているのは静的属性で、部品データの実例に渡す必要はない。部品データクラスに定義されているのは動的属性で、必ず後述 `setup.ts` を定義して部品データの実例を作成し実例に属性を設定してください。

両方のクラスに記載されていない属性は部品本体クラスの更なる親クラスで定義されているもので、ソースは貰えていない。Panel ファイルに設定メソッドの呼出があるので、引数がリテラルの場合は型を確認できるが。定数などの場合は列挙型を自作する必要のある可能性があるので、不明確の場合は相談してください。

### 移行時の属性値扱い

※ Excel の制限で、矢印の右にあるコード内の "'" は "\`" にする必要がある。

- `setSome(new a.b.c.Foo('bar'))` -> `:some="new Foo('bar')"`
- `setSome(a.b.c.Foo.BAR)` -> `:some="Foo.BAR"`
- `setSome(1, 2, 3)` -> `:some="[1, 2, 3]"`
- `setSome(1)` -> `:some="1"`
- `setSome('foo')` -> `:some="'foo'"`

## 部品個別補助ファイル作成

画面元素を直接操作しない部品内ロジックは `compositions` フォルダを作成し、中に分野別にロジックファイルを作成する。使う際は部品本体である Vue SFC ファイルにて組み合わせる。

**重要：必ず実装しなければならないのは部品データ実例作成ロジックである。詳細は `~/src/components/jcf/JCFFieldString/compositions/setup.ts` を参照してください。**

## 部品共通補助ファイル作成

各部品の共通処理は `~/src/components/jcf/utils/` に書いてください。書き方は上記のディレクトリ構造で紹介したファイルを参照してください。ファイルを新規作成することは可だが、不明確な方は相談してください。
