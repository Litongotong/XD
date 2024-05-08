# 変換指示書（JCF 編）

---

## 作成規約

1. クラスはアルファベット順で記載する。
1. クラスに含めているメソッドは、開始動詞を除いてアルファベット順で記載する。
   例： - setBackground と isEnabled:開始動詞を除いて Background、Enabled になる。 - メソッドは、setBackground、isEnabled の順で記載する。
1. 開始動詞を除いて同じ内容の場合はアルファベット順で記載する。
   例： - setBackground と getBackground:開始動詞を除いて同じく Background になる。 - メソッドは、getBackground、setBackground の順で記載する。

---

## JCFDataBean

### 1. パッケージ

| MSIS                | NEXT-MSIS |
| :------------------ | :-------- |
| com.fujitsu.jcf.gui | jcf.gui   |

### 2. 親クラス（依存関係）

無し

### 3. メソッド一覧

| メソッド名           | 概要                                                                                                   | 備考 |
| :------------------- | :----------------------------------------------------------------------------------------------------- | :--- |
| getBackground        | 背景色を返します。                                                                                     |      |
| setBackground        | 背景色を設定します。                                                                                   |      |
| setDataAndAttributes | 別のデータ Bean から属性をコピーします。                                                               |      |
| isEnabled            | 使用可能かどうかを返します。                                                                           |      |
| getForeground        | 前景色を返します。                                                                                     |      |
| setForeground        | 前景色を設定します。                                                                                   |      |
| getTag               | 業務ロジック付加情報を返します。<br>業務ロジック付加情報は業務ロジックが自由に使用してよい情報です。   |      |
| setTag               | 業務ロジック付加情報を設定します。<br>業務ロジック付加情報は業務ロジックが自由に使用してよい情報です。 |      |

### 4. メソッド詳細

---

#### getBackground

- **パラメーター**
  無し
- **戻り値**
  - 背景色
- **メソッド定義**

  - **MSIS**
    public java.awt.Color getBackground()
  - **NEXT-MSIS**
    getBackground = (): <span style="color:red">Color</span><br>
    <span style="color:red">TODO:java.awt.Color の移行方針未定のため、一旦保留</span>

- **サンプル**
  - **MSIS**
    1. item.getBackground()
  - **NEXT-MSIS**
    1. item.getBackground()

---

#### setBackground

- **パラメーター**
  - color：背景色
- **戻り値**
  無し
- **補足**

  - <span style="color:red">callChangedListener メソッドが使用されています</span>

- **メソッド定義**
  - **MSIS**
    public void setBackground(java.awt.Color color)
  - **NEXT-MSIS**
    setBackground = (color: <span style="color:red">Color</span> ): void<br>
    <span style="color:red">TODO:java.awt.Color の移行方針未定のため、一旦保留</span>
- **サンプル**
  - **MSIS**
    1. cdShukamBasho.setBackground(SMSColor.WARNING);
  - **NEXT-MSIS**
    1. cdShukamBasho.setBackground(SMSColor.WARNING)

---

#### setDataAndAttributes

- **パラメーター**
  - dataBean：データ Bean
- **戻り値**
  無し

- **メソッド定義**
  - **MSIS**
    public void setDataAndAttributes(com.fujitsu.jcf.gui.JCFDataBean dataBean)
  - **NEXT-MSIS**
    setDataAndAttributes(dataBean: JCFDataBean)
- **サンプル**
  - **MSIS**
    1. setDataAndAttributes(itemData);
  - **NEXT-MSIS**
    1. setDataAndAttributes(itemData)

---

#### isEnabled

- **パラメーター**
  無し
- **戻り値**

  - true：使用可能
  - false：使用不可

- **メソッド定義**
  - **MSIS**
    public boolean isEnabled()
  - **NEXT-MSIS**
    isEnabled = (): boolean
- **サンプル**
  - **MSIS**
    1. if (item.isEnabled())
  - **NEXT-MSIS**
    1. if (item.isEnabled())

---

#### getForeground

- **パラメーター**
  無し
- **戻り値**

  - 前景色

- **メソッド定義**
  - **MSIS**
    public java.awt.Color getForeground()
  - **NEXT-MSIS**
    getForeground = (): <span style="color:red">Color</span><br>
    <span style="color:red">TODO:java.awt.Color の移行方針未定のため、一旦保留</span>
- **サンプル**
  - **MSIS**
    1. setForeground(data.getForeground());
  - **NEXT-MSIS**
    1. setForeground(data.getForeground())

---

#### setForeground

- **パラメーター**
  - color：前景色
- **戻り値**
  無し
- **補足**

  - <span style="color:red">callChangedListener メソッドが使用されています</span>

- **メソッド定義**
  - **MSIS**
    public void setForeground(java.awt.Color color)
  - **NEXT-MSIS**
    setForeground = (color: <span style="color:red">Color</span>): void<br>
    <span style="color:red">TODO:java.awt.Color の移行方針未定のため、一旦保留</span>
- **サンプル**
  - **MSIS**
    1. strKinmuKaishi.setForeground(Color.white);
  - **NEXT-MSIS**
    1. strKinmuKaishi.setForeground(Color.white)

---

#### getTag

- **パラメーター**
  無し
- **戻り値**

  - 業務ロジック付加情報

- **メソッド定義**
  - **MSIS**
    public java.lang.String getTag()
  - **NEXT-MSIS**
    getTag = (): string
- **サンプル**
  - **MSIS**
    1. String tag = stringData.getTag();
  - **NEXT-MSIS**
    1. const tag = stringData.getTag()

---

#### setTag

- **パラメーター**
  - newTag：業務ロジック付加情報
- **戻り値**
  無し
- **補足**

  - <span style="color:red">callChangedListener メソッドが使用されています</span>

- **メソッド定義**
  - **MSIS**
    public void setTag(java.lang.String newTag)
  - **NEXT-MSIS**
    setTag = (newTag: string): void
- **サンプル**
  - **MSIS**
    1. buttonData.setTag(cdStr);
  - **NEXT-MSIS**
    1. buttonData.setTag(cdStr)

---

## JCFFieldDoubleData

### 1. パッケージ

| MSIS                | NEXT-MSIS |
| :------------------ | :-------- |
| com.fujitsu.jcf.gui | jcf.gui   |

### 2. 親クラス（依存関係）

| MSIS                            | NEXT-MSIS           |
| :------------------------------ | :------------------ |
| com.fujitsu.jcf.gui.JCFItemData | jcf.gui.JCFItemData |

### 3. メソッド一覧

| メソッド名 | 概要                     | 備考 |
| :--------- | :----------------------- | :--- |
| setValue   | 実数データを設定します。 |      |

### 4. メソッド詳細

---

#### setValue

- **パラメーター**
  - newValue - 実数データ
- **戻り値**
  無し
- **メソッド定義**

  - **MSIS**
    public void setValue(double newValue)
  - **NEXT-MSIS**
    setValue(newValue: number | string): void

- **サンプル**
  - **MSIS**
    1. setValue(sumYosanHiritsu.doubleValue());
  - **NEXT-MSIS**
    1. setValue(sumYosanHiritsu.doubleValue())

---

#### setValue

- **パラメーター**
  - newValue - 実数データ
- **戻り値**
  無し
- **メソッド定義**

  - **MSIS**
    public void setValue(float newValue)
  - **NEXT-MSIS**
    setValue(newValue: number | string): void

- **サンプル**
  - **MSIS**
    1. <span style="color: red;">サンプルなし</span>
  - **NEXT-MSIS**
    1. <span style="color: red;">サンプルなし</span>

---

#### setValue

- **パラメーター**
  - newValue - 実数データ文字列
- **戻り値**
  無し
- **例外**
  - JCFDataException - 無効な値が設定された時にスローします。
- **メソッド定義**

  - **MSIS**
    public void setValue(string newValue) throws JCFDataException
  - **NEXT-MSIS**
    setValue(newValue: number | string): void

- **サンプル**
  - **MSIS**
    1. setValue(totalval.toString());
  - **NEXT-MSIS**
    1. setValue(totalval.toString())

---

## JCFFieldFilledDateData

### 1. パッケージ

| MSIS                | NEXT-MSIS |
| :------------------ | :-------- |
| com.fujitsu.jcf.gui | jcf.gui   |

### 2. 親クラス（依存関係）

| MSIS                            | NEXT-MSIS           |
| :------------------------------ | :------------------ |
| com.fujitsu.jcf.gui.JCFItemData | jcf.gui.JCFItemData |

### 3. メソッド一覧

| メソッド名 | 概要                                         | 備考 |
| :--------- | :------------------------------------------- | :--- |
| getValue   | 各フィールドの値を文字列に連結して返します。 |      |
| setValue   | 各フィールドの値を設定します。               |      |

| クラス com.fujitsu.jcf.gui.JCFDataBean から継承したメソッド |
| :---------------------------------------------------------- |
| setBackground                                               |

### 4. メソッド詳細

---

#### getValue

- **パラメーター**
  無し
- **戻り値**
  - 各フィールドの値を連結した文字列。不当なデータが設定されている場合は空文字を返します。
- **メソッド定義**

  - **MSIS**
    public java.lang.String getValue()
  - **NEXT-MSIS**
    getValue = (): string

- **サンプル**
  - **MSIS**
    1. dtTaisho = itemDtKensaku.getValue();
  - **NEXT-MSIS**
    1. dtTaisho = itemDtKensaku.getValue()

---

#### setValue

- **パラメーター**
  - newValue - 各フィールドの値の配列
- **戻り値**
  無し
- **例外**
  - JCFDataException - 無効な値が設定された時にスローします。
    - 配列データに null が設定された場合
    - 配列データが日時データの桁数に過不足な場合
- **メソッド定義**

  - **MSIS**
    public void setValue(int[] newValue) throws JCFDataException
  - **NEXT-MSIS**
    setValue(newValue: number[] | string): void

- **サンプル**
  - **MSIS**
    1. jCFnengetsu.setValue(initArr);
  - **NEXT-MSIS**
    1. jCFnengetsu.setValue(initArr)

---

#### setValue

- **パラメーター**
  - newValue - 各フィールドの値を連結した文字列
- **戻り値**
  無し
- **例外**
  - JCFDataException - 無効な値が設定された時にスローします。
    - 文字列に null が設定された場合
    - 文字列が日時データの桁数に過不足な場合
    - 文字列に数字('0'～'9')以外の文字が含まれている場合
- **メソッド定義**

  - **MSIS**
    public void setValue(java.lang.String newValue) throws JCFDataException
  - **NEXT-MSIS**
    setValue(newValue: number[] | string): void

- **サンプル**
  - **MSIS**
    1. dtTorikomiFrom.setValue(sysTime);
  - **NEXT-MSIS**
    1. dtTorikomiFrom.setValue(sysTime)

---

## JCFFieldLongData

### 1. パッケージ

| MSIS                | NEXT-MSIS |
| :------------------ | :-------- |
| com.fujitsu.jcf.gui | jcf.gui   |

### 2. 親クラス（依存関係）

| MSIS                            | NEXT-MSIS           |
| :------------------------------ | :------------------ |
| com.fujitsu.jcf.gui.JCFItemData | jcf.gui.JCFItemData |

### 3. メソッド一覧

| メソッド名 | 概要                     | 備考 |
| :--------- | :----------------------- | :--- |
| setValue   | 実数データを設定します。 |      |

### 4. メソッド詳細

---

#### setValue

- **パラメーター**
  - newValue - 整数データ
- **戻り値**
  無し
- **メソッド定義**

  - **MSIS**
    public void setValue(byte newValue)
  - **NEXT-MSIS**
    setValue(newValue: number | string): void

- **サンプル**
  - **MSIS**
    1. <span style="color: red;">サンプルなし</span>
  - **NEXT-MSIS**
    1. <span style="color: red;">サンプルなし</span>

---

#### setValue

- **パラメーター**
  - newValue - 整数データ
- **戻り値**
  無し
- **メソッド定義**

  - **MSIS**
    public void setValue(short newValue)
  - **NEXT-MSIS**
    setValue(newValue: number | string): void

- **サンプル**
  - **MSIS**
    1. <span style="color: red;">サンプルなし</span>
  - **NEXT-MSIS**
    1. <span style="color: red;">サンプルなし</span>

---

#### setValue

- **パラメーター**
  - newValue - 整数データ
- **戻り値**
  無し
- **メソッド定義**

  - **MSIS**
    public void setValue(int newValue)
  - **NEXT-MSIS**
    setValue(newValue: number | string): void

- **サンプル**
  - **MSIS**
    1. totalCount.setValue(detailMsgList.length);
  - **NEXT-MSIS**
    1. totalCount.setValue(detailMsgList.length)

---

#### setValue

- **パラメーター**
  - newValue - long 型データ
- **戻り値**
  無し
- **メソッド定義**

  - **MSIS**
    public void setValue(long newValue)
  - **NEXT-MSIS**
    setValue(newValue: number | string): void

- **サンプル**
  - **MSIS**
    1. kensu.setValue(Long.parseLong("0"));
  - **NEXT-MSIS**
    1. kensu.setValue(Number('0'))

---

#### setValue

- **パラメーター**
  - newValue - 整数データ文字列
- **戻り値**
  無し
- **例外**
  - JCFDataException - 無効な値が設定された時にスローします。
- **メソッド定義**

  - **MSIS**
    public void setValue(string newValue) throws JCFDataException
  - **NEXT-MSIS**
    setValue(newValue: number | string): void

- **サンプル**
  - **MSIS**
    1. setValue(totalval.toString());
  - **NEXT-MSIS**
    1. setValue(totalval.toString())

---

## JCFFieldStringData

### 1. パッケージ

| MSIS                | NEXT-MSIS |
| :------------------ | :-------- |
| com.fujitsu.jcf.gui | jcf.gui   |

### 2. 親クラス（依存関係）

| MSIS                            | NEXT-MSIS           |
| :------------------------------ | :------------------ |
| com.fujitsu.jcf.gui.JCFItemData | jcf.gui.JCFItemData |

### 3. メソッド一覧

| メソッド名 | 概要                       | 備考 |
| :--------- | :------------------------- | :--- |
| getValue   | 文字列データを返します。   |      |
| setValue   | 文字列データを設定します。 |      |

| クラス com.fujitsu.jcf.gui.JCFDataBean から継承したメソッド |
| :---------------------------------------------------------- |
| setBackground                                               |

### 4. メソッド詳細

---

#### getValue

- **パラメーター**
  無し
- **戻り値**
  - 文字列データ
- **メソッド定義**

  - **MSIS**
    public String getValue()
  - **NEXT-MSIS**
    getValue = (): string

- **サンプル**
  - **MSIS**
    1. headerMsg.put(HEADER_MSG_KEY_CD_SHUKAMBASHO, cdShukamBasho.getValue());
  - **NEXT-MSIS**
    1. headerMsg.put(HEADER_MSG_KEY_CD_SHUKAMBASHO, cdShukamBasho.getValue())

---

#### setValue

- **パラメーター**
  - newValue - 文字列データ
- **戻り値**
  無し
- **メソッド定義**

  - **MSIS**
    public void setValue(String newValue)
  - **NEXT-MSIS**
    setValue(newValue: string): void

- **サンプル**
  - **MSIS**
    1. txtCdTarget.setValue((String) list.get(0));
  - **NEXT-MSIS**
    1. txtCdTarget.setValue((String) list.get(0))

---

## JCFItemData

### 1. パッケージ

| MSIS                | NEXT-MSIS |
| :------------------ | :-------- |
| com.fujitsu.jcf.gui | jcf.gui   |

### 2. 親クラス（依存関係）

| MSIS                            | NEXT-MSIS           |
| :------------------------------ | :------------------ |
| com.fujitsu.jcf.gui.JCFDataBean | jcf.gui.JCFDataBean |

### 3. メソッド一覧

| メソッド名           | 概要                                                   | 備考     |
| :------------------- | :----------------------------------------------------- | :------- |
| getCommunicationData | 通信データを返します。                                 | 実装保留 |
| setCommunicationData | 通信データを設定します。                               | 実装保留 |
| setData              | 別の項目データ Bean からデータをコピーします。         | 実装保留 |
| setDataAndAttributes | 別の項目データ Bean からデータと属性をコピーします。   |          |
| setEnabled           | 使用可能かどうかを設定します。                         |          |
| getErrorCode         | エラーコードを返します。                               |          |
| getItemID            | アイテム ID を返します。                               |          |
| isModified           | オペレータによりデータが変更されたかどうかを返します。 |          |
| isReverse            | 項目部品が反転表示しているかどうかを返します。         | 実装保留 |
| setReverse           | 項目部品を反転表示するかどうかを設定します。           |          |
| getValue             | 文字列データを返します。                               |          |
| setValue             | 文字列データを設定します。                             |          |
| isVisible            | 項目部品の表示状態を返します。                         |          |
| setVisible           | 項目部品を表示または非表示にします。                   |          |

| クラス com.fujitsu.jcf.gui.JCFDataBean から継承したメソッド |
| :---------------------------------------------------------- |
| setBackground                                               |

### 4. メソッド詳細

---

#### getCommunicationData

- **パラメーター**
  無し
- **戻り値**
  - 通信データ
- **補足**

  - 通信データを返します。<br>
    通信データはアダプタで使用するデータです。<br>
    通信データの内容は各項目部品で任意に決定します。<br>
    <span style="color: red;">実装保留中</span>

- **メソッド定義**
  - **MSIS**
    public abstract java.lang.Object getCommunicationData()
  - **NEXT-MSIS**
    abstract getCommunicationData(): Object
- **サンプル**
  - **MSIS**
    1. <span style="color: red;">TODO</span>
  - **NEXT-MSIS**
    1. <span style="color: red;">TODO</span>

---

#### setCommunicationData

- **パラメーター**
  - newValue - 通信データ
- **戻り値**
  無し
- **例外**
  - JCFDataException - 無効な値が設定された時にスローします。
- **補足**

  - 通信データを設定します。<br>
    通信データはアダプタで使用するデータです。<br>
    通信データの内容は各項目部品で任意に決定します<br>
    <span style="color: red;">実装保留中</span>

- **メソッド定義**
  - **MSIS**
    public abstract void setCommunicationData(java.lang.Object newValue) throws JCFDataException
  - **NEXT-MSIS**
    abstract setCommunicationData(obj: Object): void
- **サンプル**
  - **MSIS**
    1. <span style="color: red;">TODO</span>
  - **NEXT-MSIS**
    1. <span style="color: red;">TODO</span>

---

#### setData

- **パラメーター**
  - itemlData - 項目データ Bean
- **戻り値**
  無し
- **補足**

  - 別の項目データ Bean からデータをコピーします。<br>
    データと属性を同時に処理したい場合は setDataAndAttributes メソッドを使用してください。<br>
    <span style="color: red;">実装保留中</span>

- **メソッド定義**
  - **MSIS**
    public abstract void setData(JCFItemData itemlData)
  - **NEXT-MSIS**
    abstract setData(jcfitemdata: JCFItemData): void
- **サンプル**
  - **MSIS**
    1. doubleData.setData(null);
  - **NEXT-MSIS**
    1. doubleData.setData(null)

---

#### setDataAndAttributes

- **パラメーター**
  - itemData：別の項目 ItemData
- **戻り値**
  無し

- **メソッド定義**
  - **MSIS**
    public void setDataAndAttributes(JCFItemData itemData)
  - **NEXT-MSIS**
    setDataAndAttributes = (itemData: JCFItemData): void
- **サンプル**
  - **MSIS**
    1. setDataAndAttributes(itemData);
  - **NEXT-MSIS**
    1. setDataAndAttributes(itemData)

---

#### setEnabled

- **パラメーター**
  - newEnabled
    - true：使用可能
    - false：使用不可
- **戻り値**
  無し
- **補足**

  - クラス JCFDataBean 内の setEnabled をオーバーライドしています。<br>
    <span style="color:red">enabledListener クラス が使用されています</span>

- **メソッド定義**
  - **MSIS**
    public void setEnabled(boolean newEnabled)
  - **NEXT-MSIS**
    setEnabled = (newEnabled: boolean): void
- **サンプル**
  - **MSIS**
    1. cdSeihin.setEnabled(false);
  - **NEXT-MSIS**
    1. cdSeihin.setEnabled(false)

---

#### getErrorCode

- **パラメーター**
  無し
- **戻り値**
  - エラーコード
    - ERROR_NOTHING：エラー無し
    - ERROR_INDISPENSABLE：必須入力チェックエラー
    - ERROR_FULL：全桁入力チェックエラー
    - ERROR_LIMIT：長さ制限チェックエラー
    - ERROR_TYPE：使用可能文字チェックエラー
    - ERROR_RANGE：範囲チェックエラー
- **補足**
  - エラーコードを返します。<br>
    データ通知有りのアクションが発生した場合、CJF はデータチェックを行います。<br>
    その際に、項目部品に入力したデータにエラーがあった場合は本メソッドでそのエラーコードを返します。<br>
    データチェックの結果、エラーがなかった場合、および、データチェックをサポートしていない項目部品は ERROR_NOTHING を返します。<br>
    JCFItemData では以下のエラーコードを用意していますが、これらのエラーコードで足りない場合は各項目部品のデータ Bean で追加して使用します。
- **メソッド定義**
  - **MSIS**
    public java.lang.String getErrorCode()
  - **NEXT-MSIS**
    getErrorCode = (): string
- **サンプル**
  - **MSIS**
    1. if ((txtDatetem.ERROR_NOTHING.equals(txtDatetem.getErrorCode()) && zeroFlg == 0))
  - **NEXT-MSIS**
    1. if ((JCFItemData.ERROR_NOTHING.equals(txtDatetem.getErrorCode()) && zeroFlg == 0))

---

#### getItemID

- **パラメーター**
  無し
- **戻り値**
  - アイテム ID
- **メソッド定義**
  - **MSIS**
    public java.lang.String getItemID()
  - **NEXT-MSIS**
    getItemID = (): string
- **サンプル**
  - **MSIS**
    1. String itemID = itemData.getItemID();
  - **NEXT-MSIS**
    1. const itemID = itemData.getItemID()

---

#### isModified

- **パラメーター**
  無し
- **戻り値**
  - true:変更有り
  - false:変更無し
- **補足**
  - オペレータによりデータが変更されたかどうかを返します。<br>
    項目部品は text、item、action などのイベントを受信してオペレータにより項目部品の状態が変更されたかどうかを監視します。<br>
    前回の業務ロジック呼び出しから、今回の呼び出しまでに、オペレータにより項目部品の状態が変更されたかどうかを返します。
- **メソッド定義**
  - **MSIS**
    public boolean isModified()
  - **NEXT-MSIS**
    isModified = (): boolean
- **サンプル**
  - **MSIS**
    1. itemData.isModified()
  - **NEXT-MSIS**
    1. itemData.isModified()

---

#### isReverse

- **パラメーター**
  無し
- **戻り値**
  - true:反転表示有り
  - false:反転表示無し
- **補足**
  - <span style="color: red;">実装保留中</span>
- **メソッド定義**
  - **MSIS**
    public boolean isReverse()
  - **NEXT-MSIS**
    isReverse = (): boolean
- **サンプル**
  - **MSIS**
    1. <span style="color: red;">TODO</span>
  - **NEXT-MSIS**
    1. <span style="color: red;">TODO</span>

---

#### setReverse

- **パラメーター**
  - true:反転表示有り
  - false:反転表示無し
- **戻り値**
  無し
- **補足**
  - <span style="color:red">callChangedListener メソッドが使用されています</span>
- **メソッド定義**
  - **MSIS**
    public void setReverse(boolean newReverse)
  - **NEXT-MSIS**
    setReverse = (newReverse: boolean): void
- **サンプル**
  - **MSIS**
    1. hyoujibt.setReverse(true);
  - **NEXT-MSIS**
    1. hyoujibt.setReverse(true)

---

#### getValue

- **パラメーター**
  無し
- **戻り値**
  - 文字列データ
- **補足**
  - 文字列データを返します。<br>
    項目データ Bean は必ず、文字列のデータをサポートします。<br>
    文字列の内容は各項目部品で任意に決定します
- **メソッド定義**
  - **MSIS**
    public abstract java.lang.String getValue()
  - **NEXT-MSIS**
    abstract getValue(): Value
- **サンプル**
  - **MSIS**
    1. nmValue = nmSoshikiRyaku.getValue();
  - **NEXT-MSIS**
    1. nmValue = nmSoshikiRyaku.getValue()

---

#### setValue

- **パラメーター**
  - newValue - 文字列データ
- **戻り値**
  無し
- **例外**
  - JCFDataException - 無効な値が設定された時にスローします。
- **補足**
  - 文字列データを設定します。<br>
    項目データ Bean は必ず、文字列のデータをサポートします。<br>
    文字列の内容は各項目部品で任意に決定します。
- **メソッド定義**
  - **MSIS**
    public abstract void setValue(java.lang.String newValue) throws JCFDataException
  - **NEXT-MSIS**
    abstract setValue(s: Value): void
- **サンプル**
  - **MSIS**
    1. message.setValue("");
  - **NEXT-MSIS**
    1. message.setValue("")

---

#### isVisible

- **パラメーター**
  無し
- **戻り値**
  - true:表示
  - false:非表示
- **メソッド定義**
  - **MSIS**
    public boolean isVisible()
  - **NEXT-MSIS**
    isVisible = (): boolean
- **サンプル**
  - **MSIS**
    1. if(kakunin.isVisible())
  - **NEXT-MSIS**
    1. if(kakunin.isVisible())

---

#### setVisible

- **パラメーター**
  - newVisible
    - true:表示
    - false:非表示
- **戻り値**
  無し
- **補足**
  - <span style="color:red">callChangedListener メソッドが使用されています</span>
- **メソッド定義**
  - **MSIS**
    public void setVisible(boolean newVisible)
  - **NEXT-MSIS**
    setVisible = (newVisible: boolean): void
- **サンプル**
  - **MSIS**
    1. kensu.setVisible(false);
  - **NEXT-MSIS**
    1. kensu.setVisible(false)

---

## JCFPanelData

### 1. パッケージ

| MSIS                | NEXT-MSIS |
| :------------------ | :-------- |
| com.fujitsu.jcf.gui | jcf.gui   |

### 2. 親クラス（依存関係）

| MSIS                            | NEXT-MSIS           |
| :------------------------------ | :------------------ |
| com.fujitsu.jcf.gui.JCFItemData | jcf.gui.JCFItemData |

### 3. メソッド一覧

| メソッド名  | 概要                                                                       | 備考 |
| :---------- | :------------------------------------------------------------------------- | :--- |
| getItemData | 指定されたインデックスかアイテム ID に対応する項目データ Bean を返します。 |      |

<span style="color: red;">JCFEnabledListener、JCFChangedListener のインターフェースが実装されています。ArrayList、HashMap についても修正が必要です。</span>

| クラス com.fujitsu.jcf.gui.JCFDataBean から継承したメソッド |
| :---------------------------------------------------------- |
|                                                             |

### 4. メソッド詳細

---

#### getItemData

- **パラメーター**
  - index - インデックス
- **戻り値**
  - 項目データ Bean、インデックスに対応する項目データ Bean がない場合は null を返します。
- **メソッド定義**

  - **MSIS**
    public JCFItemData getItemData(int index)
  - **NEXT-MSIS**
    getItemData(value: number | string): JCFItemData | null

- **サンプル**
  - **MSIS**
    1. <span style="color: red;">サンプル不明</span>
  - **NEXT-MSIS**
    1. <span style="color: red;">サンプル不明</span>

---

#### getItemData

- **パラメーター**
  - targetItemID - アイテム ID
- **戻り値**
  - 項目データ Bean、アイテム ID に対応する項目データ Bean がない場合は null を返します。
- **メソッド定義**

  - **MSIS**
    public JCFItemData getItemData(java.lang.String targetItemID)
  - **NEXT-MSIS**
    getItemData(value: number | string): JCFItemData | null

- **サンプル**
  - **MSIS**
    1. panelData.getItemData(ITEM_CD_SOSHIKI);
  - **NEXT-MSIS**
    1. panelData.getItemData(ITEM_CD_SOSHIKI)

---

## JCFPushButtonData

### 1. パッケージ

| MSIS                | NEXT-MSIS |
| :------------------ | :-------- |
| com.fujitsu.jcf.gui | jcf.gui   |

### 2. 親クラス（依存関係）

| MSIS                                  | NEXT-MSIS                 |
| :------------------------------------ | :------------------------ |
| com.fujitsu.jcf.gui.JCFPushButtonData | jcf.gui.JCFPushButtonData |

### 3. メソッド一覧

| メソッド名 | 概要 | 備考 |
| :--------- | :--- | :--- |

| クラス com.fujitsu.jcf.gui.JCFDataBean から継承したメソッド |
| :---------------------------------------------------------- |
| isEnabled                                                   |

| クラス com.fujitsu.jcf.gui.JCFItemData から継承したメソッド |
| :---------------------------------------------------------- |
| setEnabled                                                  |

### 4. メソッド詳細

---

## JCFToggleButtonData

### 1. パッケージ

| MSIS                | NEXT-MSIS |
| :------------------ | :-------- |
| com.fujitsu.jcf.gui | jcf.gui   |

### 2. 親クラス（依存関係）

| MSIS                                    | NEXT-MSIS                   |
| :-------------------------------------- | :-------------------------- |
| com.fujitsu.jcf.gui.JCFToggleButtonData | jcf.gui.JCFToggleButtonData |

### 3. メソッド一覧

| メソッド名      | 概要                           | 備考 |
| :-------------- | :----------------------------- | :--- |
| getBooleanValue | ボタンの選択状態を返します。   |      |
| setValue        | ボタンの選択状態を設定します。 |      |

### 4. メソッド詳細

---

#### getBooleanValue

- **パラメーター**
  無し
- **戻り値**
  true:ボタンの選択状態は ON です、false:ボタンの選択状態は OFF です。
- **メソッド定義**
  - **MSIS**
    public boolean getBooleanValue()
  - **NEXT-MSIS**
    getBooleanValue = (): boolean
- **サンプル**
  - **MSIS**
    1. bTani01.getBooleanValue()
  - **NEXT-MSIS**
    1. bTani01.getBooleanValue()

---

#### setValue

- **パラメーター**
  - newValue - "true":ボタンの選択状態を ON にします、"true"以外:ボタンの選択状態を OFF にします。
- **戻り値**
  無し

- **メソッド定義**

  - **MSIS**
    public void setValue(boolean newValue)
  - **NEXT-MSIS**

- **サンプル**
  - **MSIS**
    1. button1.setValue(false);
  - **NEXT-MSIS**
    1. button1.setValue(false);

---

#### setValue

- **パラメーター**
  - newValue - "true":ボタンの選択状態を ON にします、"true"以外:ボタンの選択状態を OFF にします。
- **戻り値**
  無し

- **メソッド定義**

  - **MSIS**
    public void setValue(String newValue)
  - **NEXT-MSIS**

- **サンプル**
  - **MSIS**
    1. itemFgSinausu.setValue(STR_TRUE);
  - **NEXT-MSIS**
    1. itemFgSinausu.setValue(STR_TRUE);

---
