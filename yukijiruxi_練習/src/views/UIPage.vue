<template>
  <!-- No.1 -->
  <div>
    <div>No.1 画面タイトル</div>
    <BasePageTitle pageName="雪印メグミルク" />
  </div>

  <!-- No.2 -->
  <div>
    <div>No.2 テキスト（フォント色、フォントサイズ、背景色なし）</div>
    <BaseText label="雪印乳業株式会社" />
  </div>

  <!-- No.3 -->
  <div>
    <div>No.3 テキスト（フォント色、フォントサイズ変更可能、背景色なし）</div>
    <TextExtendCannotChangeBgColor
      label="YPMGSSF701S"
      textSize="10"
      textColor="rgb(192, 192, 192)"
    />
  </div>

  <!-- No.4 -->
  <div>
    <div>No.4 テキスト（フォント色、フォントサイズ、背景色変更可能）</div>
    <TextExtendCanChangeBgColor
      label="富士通 太郎"
      textSize="15"
      textColor=""
      backgroundColor="rgb(192, 192, 192)"
    />
  </div>

  <!-- No.5 -->
  <div>
    <div>No.5 横線</div>
    <div class="base-divider">
      <BaseDivider :position="{ top: '40', left: '30' }" />
    </div>
  </div>

  <!-- No.6 -->

  <!-- No.7 -->
  <div>
    <div>No.7 ボタン（ボタンサイズ変更可能）</div>
    <ButtonExtend
      button-title="表示"
      :disabled="false"
      button-width="40"
      button-height="30"
    />
  </div>

  <!-- No.8 -->
  <div>
    <div>No.8.1数値入力欄</div>
    <BaseNumberInput
      width="120px"
      textAlign="left"
      value="temp"
      :hasError="true"
      :needHandle="true"
      @on-input="() => {}"
    />
  </div>

  <div>
    <div>No.8.2テキスト入力欄</div>
    <BaseTextInput
      width="320px"
      textAlign="left"
      value="temp"
      :needHandle="true"
      @on-input="() => {}"
    />
  </div>

  <!-- No.9 -->
  <div>No.9複数行入力欄（入力エリア）</div>
  <BaseTextarea width="800" height="50" @on-input="() => {}" />

  <!-- No.11 -->
  <div>
    <div>No.11 日付（年月[日]）</div>
    <div><DateInputYMD /></div>

    <div style="margin: 1rem 0 0">
      <DateInputYMD label="日付" label-width="6rem" :display-weekday="true" />
    </div>

    <div style="margin: 1rem 0 0">
      <DateInputYMD type="month" />
    </div>
  </div>

  <!-- No.12 -->
  <div>
    No.12日付（時分秒一括）
    <div>
      <BaseTime label="example" />
      <br />
      <BaseTime label="example" :showSeconds="true" />
      <br />
      <BaseTime
        label="example"
        model-value="16:48:26"
        :show-seconds="true"
        :disabled="true"
      />
    </div>
  </div>
  <!-- No.13 -->
  <div>
    No.13日付（時分別々）
    <div style="font-size: var(--font-size-10-5)">
      <BaseTimeInput style="margin-right: 10px" type="hour" />時
      <BaseTimeInput style="margin-right: 10px" type="minute" />分
    </div>
  </div>

  <!-- No.14 -->
  <div>
    <div>No.14 日付（年月日 時分秒）</div>
    <div>
      <DateInputYMDHms label="日付" label-width="6rem" />
    </div>
  </div>

  <!-- No.15 ラジオボタン-->
  <div>
    <div>No.15 ラジオボタン</div>
    <div>
      <BaseRadioButton value="radioValue" :disabled="false" display="example" />
    </div>
  </div>

  <!-- No.16 -->

  <!-- No.17 -->
  <div>
    <div>No.17 チェックボックス</div>
    <BaseCheckbox :disabled="false" />

    <div style="margin: 1rem 0 0">
      <BaseCheckbox :disabled="false" size="20px" />
    </div>
  </div>

  <!-- No.18 -->
  <div>
    <div>No.18 ドロップダウン</div>
    <BaseDropdown
      :options="[
        {
          disabled: true,
          display: '-- please select charactor --',
          value: '',
        },
        { display: '下江コハル' },
        { display: '棗イロハ' },
        { display: '春原ココナ' },
      ]"
    />

    <BaseDropdown
      label="text label"
      label-width="100"
      :options="[
        {
          disabled: true,
          display: '-- please select charactor --',
          value: '',
        },
        { display: '下江コハル' },
        { display: '棗イロハ' },
        { display: '春原ココナ' },
      ]"
    />
  </div>

  <!-- No.19 -->
  <div>
    <div>No.19 ドロップダウン（スプレッドシート用）</div>
    <table style="border-collapse: collapse; height: 4rem">
      <tbody>
        <tr>
          <TableDatumDropdown
            :options="[
              {
                disabled: true,
                display: '-- please select charactor --',
                value: '',
              },
              { display: '下江コハル' },
              { display: '棗イロハ' },
              { display: '春原ココナ' },
            ]"
          />
          <TableDateText datum="example" />
          <TableDateText datum="example" />
        </tr>
      </tbody>
    </table>
  </div>

  <!-- No.20 -->
  <div>
    <div>No.20 プレッドシートデータセル</div>
    <table style="border-collapse: collapse; width: 20rem; height: 4rem">
      <tbody>
        <tr>
          <TableDateText datum="example" />
          <TableDateText :datum="123456" />
          <TableDateText
            datum="456789"
            text-align="center"
            :comma-number="false"
          />
        </tr>
      </tbody>
    </table>
  </div>

  <!-- No.21 -->
  <div>
    <div>No.21 スプレッドシートヘッダセル</div>
    <table style="border-collapse: collapse; width: 20rem; height: 4rem">
      <thead>
        <tr>
          <TableHead>programming<br />language</TableHead>
          <TableHead>example</TableHead>
          <TableHead>example</TableHead>
        </tr>
      </thead>
    </table>
  </div>

  <!-- No.22 -->
  <div>
    <div>No.22 スプレッドシートヘッダ（セル中特殊文字あり）</div>
    <table style="border-collapse: collapse; width: 20rem; height: 50px">
      <thead>
        <tr>
          <TableHeadMarked head="name" />
          <TableHeadMarked :head="'sex\nage'" />
          <TableHeadMarked head="school" />
        </tr>
      </thead>
    </table>
  </div>

  <!-- No.23 -->
  <div>
    <div>No.23 ボタングループ (ボタンサイズ、個数自由設定可能)</div>
    <ButtonGroup
      :buttons="[
        {
          title: 'F1',
          disabled: false,
          width: '120',
          height: '15',
          onClick: () => console.log('ui F1'),
        },
        {
          title: 'F2',
          disabled: false,
          width: '100',
          onClick: () => console.log('ui F2'),
        },
        {
          title: 'F3',
          disabled: false,
          height: '30',
          onClick: () => console.log('ui F3'),
        },
        {
          title: 'F4',
          disabled: false,
          onClick: () => console.log('ui F4'),
        },
      ]"
    />
  </div>

  <!-- No.24 -->

  <!-- No.25 -->

  <!-- No.26 -->
  <div>
    <div>No.26:ボタングループ (全選択、全解除)</div>
    <ButtonGroupSelectAll
      :buttons="[
        {
          title: '全選択',
          disabled: false,
          width: 'auto',
          onClick: () => console.log('全選択押下'),
        },
        {
          title: '全解除',
          disabled: false,
          width: 'auto',
          onClick: () => console.log('全解除押下'),
        },
      ]"
    />
  </div>

  <!-- No.27 -->

  <!-- No.28 -->
  <div>
    <div>No.28 ボタン_テキスト（サイズ変更可能のボタンが前）</div>
    <ButtonWithText
      button-height="20"
      button-width="34"
      button-label="検索"
      label="XXXX-XXXX-XXXXX"
    />
  </div>

  <!-- No.29 -->

  <!-- No.30 -->

  <!-- No.31 -->

  <!-- No.32 -->

  <!-- No.33 -->

  <!-- No.34 -->
  <div>
    No.34 テキスト_プルダウン(ラベル文字色＆太さ変更可能)
    <div>
      <BaseDropdown
        label="text label"
        label-color="rgb(255, 0, 0)"
        label-font-weight="bold"
        label-width="100"
        :options="[
          {
            disabled: true,
            display: '-- please select charactor --',
            value: '',
          },
          { display: '下江コハル' },
          { display: '棗イロハ' },
          { display: '春原ココナ' },
        ]"
      />
    </div>
  </div>

  <!-- No.35 ラジオボタングループ-->
  <div>
    No.35 ラジオボタングループ
    <div>
      <RadioButtonGroup
        :isDisplayOuterBorder="true"
        labelOfOuterBorder="会社切替"
        :isInlineDisplay="true"
        :radios="[
          {
            name: 'radioGroupA',
            value: 'fujitu',
            disabled: false,
            display: '富士通',
          },
          {
            name: 'radioGroupA',
            value: 'mitubishi',
            disabled: false,
            display: '三菱',
          },
          {
            name: 'radioGroupA',
            value: 'toyota',
            disabled: false,
            display: 'トヨタ',
          },
        ]"
      />

      <RadioButtonGroup
        :isDisplayOuterBorder="true"
        :radios="[
          {
            name: 'radioGroupB',
            value: 'cafe',
            disabled: false,
            display: 'コーヒー',
          },
          {
            name: 'radioGroupB',
            value: 'milk',
            disabled: false,
            display: '牛乳',
          },
          {
            name: 'radioGroupB',
            value: 'tea',
            disabled: false,
            display: 'お茶',
          },
        ]"
      />

      <RadioButtonGroup
        label="選択肢"
        :radios="[
          {
            name: 'radioGroupC',
            value: 'senntakuA',
            disabled: false,
            display: '選択A',
          },
          {
            name: 'radioGroupC',
            value: 'senntakuB',
            disabled: false,
            display: '選択B',
          },
          {
            name: 'radioGroupC',
            value: 'senntakuC',
            disabled: false,
            display: '選択C',
          },
        ]"
      />
    </div>
  </div>

  <!-- No.36 -->

  <!-- No.37 -->

  <!-- No.38 -->

  <!-- No.39 -->

  <!-- No.40 -->
  <div style="height: 7rem">
    <div>No.40 チェックボックス_テキスト</div>
    <CheckboxText checkedLabel="削除" /><br />
    <CheckboxText checkedLabel="削<br>除" />
  </div>

  <!-- No.41 -->

  <!-- No.42 -->
  <div style="height: 10rem">
    <div>
      No.42
      チェックボックス複合部品(サイズ固定のチェックボックスグループ、縦並び）
    </div>
    <CheckboxGroup
      :numberOfCheckboxes="2"
      :checkboxLabels="['エラーのみ表示', '配乳投入なし表示']"
      :orientation="'vertical'"
      label="example"
      y="40"
      :modelValue="false"
    />
    <CheckboxGroup
      :numberOfCheckboxes="2"
      :checkboxLabels="['エラーのみ表示', '配乳投入なし表示']"
      :orientation="'vertical'"
      x="200"
      y="30"
      :modelValue="false"
      :showOuterBorder="true"
      outerBorderLabel="Checkbox Group Label"
    />
  </div>

  <!-- No.43 -->
  <div>
    <div>
      No.43
      チェックボックス複合部品(サイズ固定のチェックボックスグループ、横並び）
    </div>
    <CheckboxGroup
      :numberOfCheckboxes="2"
      :checkboxLabels="['確定も含む', '受払相手先の表示']"
      :orientation="'horizontal'"
      label="example"
      :modelValue="true"
    />
  </div>
  <!-- No.44 -->

  <!-- No.45 -->
  <div>
    No.45番号(番号入力欄個数自由設定、「-」あり)
    <div>
      <NumberInputFree
        :num="3"
        :useDash="true"
        label="example"
        input-width="80"
        item-gap="3"
      />
    </div>
  </div>

  <!-- No.46 -->
  <div>
    No.46番号(番号入力欄個数自由設定、「-」なし)
    <div>
      <NumberInputFree :num="2" label="example" />
    </div>
  </div>
  <!-- No.47 -->

  <!-- No.48 -->
  <div>
    <div>
      No.48
      テキスト_テキスト（フォント色、フォントサイズ、背景色変更可能）(No.47
      修正)
    </div>
    <TextLabelValue
      label="製造日"
      text-value1="2013/02/08"
      content-background="rgb(255,255,0)"
    />
    <TextLabelValue
      label="取引先"
      text-value1="022610 雪印オーストラリア㈲"
      label-width="6rem"
      label-background="rgb(173,216,230)"
    />
  </div>
  <!-- No.49 -->

  <!-- No.50 -->

  <!-- No.51 -->

  <!-- No.52 -->
  <div style="height: 10rem; display: flex; flex-direction: column; gap: 10px">
    <div>No.52 入力検索欄（検索ボタンと結果付き）</div>
    <InputSearchButtonWithResult
      type="number"
      label="数値入力"
      label-width="60"
      :disabled="false"
      button-width="60"
      max-length="6"
      result="検索結果"
    />

    <InputSearchButtonWithResult
      type="text"
      label="文字列入力"
      label-width="60"
      :disabled="false"
      button-width="60"
      max-length="6"
      result="検索結果"
    />
  </div>

  <!-- No.53 -->
  <div style="height: 6rem">
    <div>No.53 入力検索欄（検索ボタンと結果付き）</div>
    <DropdownInputSearchButtonWithResult
      :label="'品目'"
      :options="[
        { display: '製品1', disabled: false, value: '1' },
        { display: '製品2', disabled: false, value: '2' },
        { display: '製品3', disabled: false, value: '3' },
      ]"
      :dropdownWidth="100"
      :inputWidth="70"
      :buttonWidth="40"
      :result="'品目検索結果NNNNN'"
      :disabled="false"
    />
  </div>

  <!-- No.54 -->
  <div style="height: 8rem">
    <div style="height: 3rem">
      No.54 入力検索欄(テキスト-ラジオボタン-入力欄-ボタン-テキスト)
    </div>
    <div>
      <RadioGroupInputSearchButtonWithResult
        label="品目"
        :isDisplayOuterBorder="true"
        :radios="[
          {
            name: 'radioGroup',
            value: 'products',
            disabled: false,
            display: '製品',
          },
          {
            name: 'radioGroup',
            value: 'meterials',
            disabled: false,
            display: '原材料',
          },
        ]"
        type="text"
        :disabled="false"
        buttonWidth="60"
        result="検索結果"
      />
    </div>
  </div>

  <!-- No.55 -->

  <!-- No.56 -->

  <!-- No.57 -->

  <!-- No.58 -->

  <!-- No.59 -->

  <!-- No.60 -->
  <div style="height: 5rem">
    No.60 合計（全件数）
    <div>
      <TotalAllItems :countValue="4" />
    </div>
  </div>

  <!-- No.61 -->
  <div style="height: 5rem">
    No.61 合計（合計セル、横向き）
    <TotalAllItemsTable
      scope="row"
      head="合　計"
      datum="999999999.99"
      :comma-number="true"
      :minimum-fraction-digits="1"
      headWidth="10rem"
      datumWidth="15rem"
      background="#8de794"
    />
  </div>

  <!-- No.62 -->

  <!-- No.63 -->
  <div style="height: 5rem">
    No.63 合計（全件数、件数文字色変更可能）
    <div>
      <TotalAllItemsCanChangeColor
        :countValue="4"
        countValueColor="rgb(192, 192, 192)"
      />
    </div>
  </div>

  <!-- No.64 -->
  <div style="height: 5rem">
    No.64 時間1（テキスト-時と分2桁入力欄）
    <div>
      <InputHourMinuteEditable
        label="※充填開始時間"
        :unit-label="{
          hour: '時',
          minute: '分',
        }"
        hourWidth="20px"
        minuteWidth="10px"
      />
    </div>
  </div>

  <!-- No.65 -->
  <div style="height: 5rem">
    No.65 時間2（テキスト-時間1と同じ、ただ時と分表示のみ）
    <div>
      <InputHourMinuteReadonly :hour="12" :minute="59" label="充填開始時間" />
    </div>
  </div>

  <!-- No.66 -->
  <div>
    <div>No66:時間3（時は入力欄、分は選択欄）</div>
    <InputHourSelectMin label="example" />
  </div>
  <!-- No.67 -->
  <div>
    <div>No67:時間4（テキスト-時と分は選択欄）</div>
    <TimeSelectHMDouble label="定時時間　(始)" /><br />
    <TimeSelectHMDouble label="定時時間　(終)" />
  </div>
  <!-- No.68 -->
  <div style="height: 6rem">
    <div>No.68 テキスト-時と分は選択欄、開始時分～終了時分</div>
    <TextTimeSelectHMDouble :label="'勤務時間'" />
  </div>

  <!-- No.69 -->
  <div style="height: 6rem">
    <div>No.69:時間6（時と分2桁入力欄、スプレッドシート用）</div>
    <InputHourMinuteEditable
      :unit-label="{
        hour: '時間',
        minute: '分',
      }"
    />
  </div>

  <!-- No.70 -->

  <!-- No.71 -->
  <div style="height: 6rem">
    <div>No.71 テキスト-時と分は選択欄、開始時分～終了時分クリアボタン付き</div>
    <TextTimeSelectHMDoubleWithClearButton :label="'休憩時間'" />
  </div>

  <!-- No.72 -->

  <!-- No.73 -->
  <div style="height: 6rem">
    <div>No.73 日付入力欄（テキスト-年月）</div>
    <TextDateInputYM
      labelStart="* 年月"
      labelColon="："
      labelWidth="6rem"
      inputValueWidth="24px"
    />
  </div>

  <!-- No.75 -->
  <div style="height: 6rem">
    <div>No.75 日付入力欄（テキスト-開始年月日-終了年月日）</div>
    <TextDateInputYMDDouble
      label="*伝票日付"
      labelWaveLineWidth="2rem"
      dateType="date"
    />
  </div>

  <!-- No.76 -->
  <div>
    <div>No.76 日付入力欄（テキスト-開始年月日時分-終了年月日時分）</div>
    <TextDateInputYMDHmsStartEnd label="工程作業日時" />
  </div>

  <!-- No.77 -->
  <div>
    <div>No.77 日付入力欄（ラジオ-開始年月日-終了年月日）</div>
    <RadioButtonDateInputYMDDouble
      displayValue="日報"
      label="example"
      dateType="date"
    />
  </div>

  <!-- No.78 -->
  <div>
    <div>No.78 日付入力欄（ラジオ-年月）</div>
    <RadioButtonDateInputYM value="radioValue" :disabled="false" />
  </div>

  <!-- No.79 -->
  <div>
    <div>No.79 日付入力欄（ラジオ-年月-上下旬選択）</div>
    <RadioButtonDateInputYMWithDropdown
      value="radioValue"
      :radioDisabled="false"
      :dropdownDisabled="false"
      :options="[
        { display: '上旬', disabled: false, value: '1' },
        { display: '中旬', disabled: false, value: '2' },
        { display: '下旬', disabled: false, value: '3' },
      ]"
    />
  </div>

  <!-- No.80 -->

  <!-- No.81 -->
  <div style="height: 6rem">
    <div>
      No.81 日付入力欄（テキスト-開始年月-開始日選択-終了年月-終了日選択）
    </div>
    <DateInputYearMonthDayWithDoubleDate />
  </div>

  <!-- No.82 -->
  <div style="height: 6rem">
    <div>No.82 日付入力欄（テキスト-開始年月日別々入力-終了日入力）</div>
    <DateInputYearMonthWithDoubleDate :startDateHasError="true" />
  </div>
  <!-- No.83 -->
  <div style="height: 6rem">
    <div>No.83 日付入力欄（年月別々入力-上下旬選択）</div>
    <DateInputYearMonthWithDropdown
      :monthHasError="true"
      :options="[
        { display: '上旬', disabled: false, value: '1' },
        { display: '中旬', disabled: false, value: '2' },
        { display: '下旬', disabled: false, value: '3' },
      ]"
    />
  </div>

  <!-- No.84 -->
  <div style="height: 6rem">
    <div>No.84 日付入力欄（年度入力-期選択）</div>
    <DateInputYearWithDropdown
      :options="[
        { display: '上期', disabled: false, value: '1' },
        { display: '下期', disabled: false, value: '2' },
      ]"
    />
  </div>

  <!-- No.85 -->
  <div style="height: 60px">
    <div>No.85 日付入力欄（テキスト-開始年月日入力-終了日入力）</div>
    <SelectStartYMDInputEndDay label="*　投入日付" y="30px" />
  </div>
  <!-- No.86 -->
  <div style="height: 6rem">
    <div>No.86 日付入力欄（テキスト-開始年月-終了年月）</div>
    <TextDateInputYMDouble label="* 年月" labelWaveLineWidth="2rem" />
  </div>

  <!-- No.87 -->
  <div style="height: 6rem">
    <div>No.87 日付入力欄（開始年月別々入力-終了年月別々入力）</div>
    <DateInputYearMonthDouble />
  </div>

  <!-- No.88 日付入力欄（年月別々選択）-->
  <div>
    <div>No.88 日付入力欄（年月別々選択）</div>
    <div>
      <label>example : </label>      
      <DropdownInputYM
        :inputYearWidth="55"
        :yearDisabled="false"
        :inputMonthWidth="40"
        :monthDisabled="false"
      />
    </div>
  </div>
  <!-- No.89 日付入力欄（年月日別々選択）-->
  <div>
    <div>No.89 日付入力欄（年月日別々選択）</div>
    <div>
      <label>example : </label>      
      <DropdownInputYMD
        :inputYearWidth="55"
        :inputMonthWidth="40"
        :inputDayWidth="40"
        :dayDisabled="false"
      />
    </div>
  </div>

  <!-- No.90 -->
  <div>
    <div>No.90 日付入力欄（年月、日選択）</div>
    <DateInputYMWithDropdownD />
  </div>

  <!-- No.91 -->
  <div style="height: 9rem">
    <div style="height: 3.5rem">
      No.91 複数行入力欄(テキスト-複数行入力欄-ボタン)
    </div>
    <TextareaButton
      textAreaWidth="500px"
      textAreaHeight="50px"
      :button="{
        height: '20',
        width: '60',
        title: '行追加',
        onClick: () => console.log('行追加ボタン'),
      }"
    />
  </div>

  <!-- No.92 -->
  <div style="height: 6rem">
    <div>No.92ファイル取込</div>
    <FileUpload
      label="ファイル読込"
      label-width="100"
      height="20"
      width="1000"
      button-height="20px"
      button-width="100px"
      button-title="選択"
    />
  </div>

  <!-- No.93 -->
  <div style="height: 5rem">
    <div>No.93 確認ダイアログ</div>
    <input
      type="button"
      value="ダイアログを表示する"
      @click="
        () => {
          showDialog('3件選択されています。展開してもよろしいですか？')
        }
      "
    />
    <ConfirmationDialog />
  </div>
  <!-- No.94 -->
  <div style="height: 5rem">
    <div>No.94 件数・ページ目（スプレッドシート用）1</div>
    <PagingSample :current-page="1" :current-count="100" :total-count="471" />
  </div>

  <!-- No.95 -->
  <div style="height: 5rem">
    <div>No.95 件数・ページ目（スプレッドシート用）2</div>
    <PagingWithChangeCurrent
      :currentPage="12"
      :totalPage="1000"
      :page-input-width="30"
      :change-page="
        () => {
          console.info('change page')
        }
      "
      :set-page-button="{
        title: '頁指定',
        width: '40',
        onClick: () => {
          console.info('set page')
        },
      }"
      :pre-page-button="{
        title: '<',
        width: '40',
        onClick: () => {
          console.info('pre page')
        },
      }"
      :next-page-button="{
        title: '>',
        width: '40',
        onClick: () => {
          console.info('next')
        },
      }"
    />
  </div>

  <!-- No.96 -->
  <div style="height: 6rem">
    <div>No.96 件数・ページ目（スプレッドシート用）3</div>
    <PagingWithChange
      :pre-page-button="{
        title: '前のデータ',
        width: '60',
        height: '20',
      }"
      :next-page-button="{
        title: '次のデータ',
        width: '60',
        height: '20',
      }"
      label="example"
    />
  </div>
  <!-- No.97 -->
  <div style="height: 5rem">
    <div>No.97 件数・ページ目（スプレッドシート用）4</div>
    <PageChangeButtonGroupWithPaging
      :pageInputWidth="30"
      :totalPage="9"
      :changePage="
        () => {
          console.info('change page')
        }
      "
      :prePageButton="{
        title: '前頁(F6)',
        width: '40',
      }"
      :nextPageButton="{
        title: '後頁(F7)',
        width: '40',
      }"
      :moveButton="{
        title: '移動',
        width: '40',
        onClick: () => {
          console.info('move')
        },
      }"
    />
  </div>
  <!-- No.98 -->
  <div style="height: 13rem">
    <div>
      No.98
      スプレッドシート1（タイトルは1行か2行で表示、セルは基本部品で構成できる）
    </div>

    <TableCommon
      height="9rem"
      width="22rem"
      :heads="[
        [
          {
            id: 'select',
            head: '選択\nexample',
            textAlign: 'center',
            datumType: 'checkbox',
          },
          { id: 'name', head: '氏名' },
          { id: 'sex', head: '性別', textAlign: 'center' },
          { id: 'age', head: '年齢', textAlign: 'center' },
          { id: 'school', head: '学園' },
        ],
      ]"
      :data="[
        [
          { id: 'select' },
          { id: 'name', datum: '下江コハル' },
          { id: 'sex', datum: '女' },
          { id: 'age', datum: '15' },
          { id: 'school', datum: 'トリニティ総合学園' },
        ],
        [
          { id: 'select' },
          { id: 'name', datum: '棗イロハ' },
          { id: 'sex', datum: '女' },
          { id: 'age', datum: '16' },
          { id: 'school', datum: 'ゲヘナ学園' },
        ],
        [
          { id: 'select' },
          { id: 'name', datum: '春原ココナ' },
          { id: 'sex', datum: '女' },
          { id: 'age', datum: '11' },
          { id: 'school', datum: '山海経高級中学校' },
        ],
        [
          { id: 'select' },
          { id: 'name', datum: '阿慈谷ヒフミ' },
          { id: 'sex', datum: '女' },
          { id: 'age', datum: '16' },
          { id: 'school', datum: 'トリニティ総合学園' },
        ],
        [
          { id: 'select' },
          { id: 'name', datum: '浅黄ムツキ' },
          { id: 'sex', datum: '女' },
          { id: 'age', datum: '16' },
          { id: 'school', datum: 'ゲヘナ学園' },
        ],
      ]"
    />
  </div>

  <!-- No.99 -->
  <div>
    <div>No.99 スプレッドシート2（二層タイトル）</div>
    <TableCommon
      :heads="[
        [
          {
            id: '01',
            head: '倉庫',
            rowspan: 2,
            width: 32,
            textAlign: 'left',
          },
          { id: '02', head: 'エリア', width: 48, textAlign: 'left' },
          {
            id: '03',
            head: '製造日',
            rowspan: 2,
            width: 80,
            textAlign: 'left',
          },
          { id: '04', head: 'サブ\nロット', rowspan: 2, width: 48 },
          { id: '05', head: '数量', width: 64 },
          { id: '06', head: '単位', width: 32 },
          {
            id: '07',
            datumType: 'button',
            textAlign: 'center',
            rowspan: 2,
            width: 40,
            buttonTitle: '選択',
          },
        ],
        [
          { id: '08', head: 'ゾーン', width: 48, textAlign: 'left' },
          { id: '09', head: '端数', width: 64 },
          { id: '10', head: '単位', width: 32 },
        ],
      ]"
      :data="[
        [
          { id: '01', datum: '100' },
          { id: '02', datum: '001' },
          { id: '03', datum: '2023/10/31' },
          { id: '04', datum: '' },
          { id: '05', datum: '6' },
          { id: '06', datum: 'CS' },
          { id: '07', datum: false },
        ],
        [
          { id: '08', datum: '999' },
          { id: '09', datum: '0' },
          { id: '10', datum: '\u00A0ｺ' },
        ],
      ]"
      width="50rem"
    />
  </div>

  <!-- No.100 -->
  <div>
    <div>№100:スプレッドシート3（1行のみ表示、構成部品はテキストのみ）</div>
    <TableCommon
      width="38rem"
      headHeight="22"
      :heads="[
        [
          { id: 'code', head: '製品コード', textAlign: 'left' },
          { id: 'name', head: '製品名', textAlign: 'left', width: 120 },
          {
            id: 'plan',
            head: '生産計画',
            commaNumber: true,
          },
          {
            id: 'output',
            head: '出来高',
            commaNumber: true,
          },
          {
            id: 'input',
            head: '投入実績',
            commaNumber: true,
          },
        ],
      ]"
      :data="[
        [
          { id: 'code', datum: '101143' },
          { id: 'name', datum: 'スライスチーズ' },
          { id: 'plan', datum: '200000' },
          { id: 'output', datum: '205010' },
          { id: 'input', datum: '200422', datumBackground: 'rgb(0,255,255)' },
        ],
        [
          { id: 'code', datum: '101146' },
          { id: 'name', datum: '６Ｐ' },
          { id: 'plan', datum: '150000' },
          { id: 'output', datum: '152000', datumBackground: 'rgb(0,255,255)' },
          { id: 'input', datum: '' },
        ],
        [
          { id: 'code', datum: '101152' },
          { id: 'name', datum: 'ＢＢ' },
          { id: 'plan', datum: '100000', datumBackground: 'rgb(0,255,255)' },
          { id: 'output', datum: '' },
          { id: 'input', datum: '' },
        ],
      ]"
    />
  </div>

  <!-- No.101 -->
  <div style="height: 20rem">
    <div>
      No.101
      スプレッドシート4（スプレッドシート3の上で、タイトルとセルは2行表示できる）
    </div>
    <TableCommon
      height="30rem"
      width="70rem"
      headHeight="22px"
      headBorderColor="var(--color-deep-gray)"
      datumBorderColor="var(--color-deep-gray)"
      :heads="[
        [
          {
            id: 'number',
            head: '',
            textAlign: 'center',
          },
          {
            id: 'cost-element-distinction',
            head: '原価要素区分',
            textAlign: 'left',
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: 'weight',
            head: '重量(G)',
            textAlign: 'right',
            commaNumber: true,
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: 'amount',
            head: '金額(円)',
            textAlign: 'right',
            commaNumber: true,
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: 'quantity-of-FAT',
            head: 'FAT量(G)',
            textAlign: 'right',
            commaNumber: true,
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: 'amount-of-FAT',
            head: 'FAT金額(円)',
            textAlign: 'right',
            commaNumber: true,
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: 'quantity-of-SNF',
            head: 'SNF量(G)',
            textAlign: 'right',
            commaNumber: true,
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: 'amount-of-SNF',
            head: 'SNF金額(円)',
            textAlign: 'right',
            commaNumber: true,
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: 'total-amount',
            head: '合計金額(円)',
            textAlign: 'right',
            commaNumber: true,
          },
        ],
      ]"
      :data="[
        [
          { id: 'number', datum: '01', rowspan: 2 },
          {
            id: 'cost-element-distinction',
            datum: '原料乳費',
            rowspan: 2,
          },
          {
            id: 'weight',
            datum: '1112055',
            datumBackground: 'rgb(198,195,198)',
          },
          { id: 'amount', datum: '0', datumBackground: 'rgb(198,195,198)' },
          {
            id: 'quantity-of-FAT',
            datum: '28185',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'amount-of-FAT',
            datum: '15811',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'quantity-of-SNF',
            datum: '99694',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'amount-of-SNF',
            datum: '37943',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'total-amount',
            datum: '53754',
            datumBackground: 'rgb(198,195,198)',
          },
        ],
        [
          { id: 'weight', datum: '1112055' },
          { id: 'amount', datum: '0', datumBackground: 'rgb(198,195,198)' },
          { id: 'quantity-of-FAT', datum: '28185' },
          {
            id: 'amount-of-FAT',
            datum: '15811',
            datumBackground: 'rgb(198,195,198)',
          },
          { id: 'quantity-of-SNF', datum: '99694' },
          {
            id: 'amount-of-SNF',
            datum: '37943',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'total-amount',
            datum: '53754',
            datumBackground: 'rgb(198,195,198)',
          },
        ],
        [
          { id: 'number', datum: '02', rowspan: 2 },
          {
            id: 'cost-element-distinction',
            datum: '内部原材料費',
            rowspan: 2,
          },
          {
            id: 'weight',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          { id: 'amount', datum: ' ', datumBackground: 'rgb(132,130,132)' },
          {
            id: 'quantity-of-FAT',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'amount-of-FAT',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'quantity-of-SNF',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'amount-of-SNF',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'total-amount',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
        ],
        [
          { id: 'weight', datum: ' ', datumBackground: 'rgb(132,130,132)' },
          { id: 'amount', datum: ' ', datumBackground: 'rgb(132,130,132)' },
          {
            id: 'quantity-of-FAT',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'amount-of-FAT',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'quantity-of-SNF',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'amount-of-SNF',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'total-amount',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
        ],
        [
          { id: 'number', datum: '03', rowspan: 2 },
          { id: 'cost-element-distinction', datum: 'その他原料費', rowspan: 2 },
          { id: 'weight', datum: '16669', datumBackground: 'rgb(198,195,198)' },
          { id: 'amount', datum: '3484', datumBackground: 'rgb(198,195,198)' },
          {
            id: 'quantity-of-FAT',
            datum: '0',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'amount-of-FAT',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'quantity-of-SNF',
            datum: '0',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'amount-of-SNF',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'total-amount',
            datum: '3484',
            datumBackground: 'rgb(198,195,198)',
          },
        ],
        [
          { id: 'weight', datum: '16669' },
          { id: 'amount', datum: '3484', datumBackground: 'rgb(198,195,198)' },
          { id: 'quantity-of-FAT', datum: '0' },
          {
            id: 'amount-of-FAT',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          { id: 'quantity-of-SNF', datum: '0' },
          {
            id: 'amount-of-SNF',
            datum: ' ',
            datumBackground: 'rgb(132,130,132)',
          },
          {
            id: 'total-amount',
            datum: '3484',
            datumBackground: 'rgb(198,195,198)',
          },
        ],
        [
          { id: 'number', datum: ' ', rowspan: 2 },
          { id: 'cost-element-distinction', datum: '合計', rowspan: 2 },
          {
            id: 'weight',
            datum: '1128742',
            datumBackground: 'rgb(198,195,198)',
          },
          { id: 'amount', datum: '3484', datumBackground: 'rgb(198,195,198)' },
          {
            id: 'quantity-of-FAT',
            datum: '28185',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'amount-of-FAT',
            datum: '15811',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'quantity-of-SNF',
            datum: '99694',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'amount-of-SNF',
            datum: '37943',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'total-amount',
            datum: '57238',
            datumBackground: 'rgb(198,195,198)',
          },
        ],
        [
          {
            id: 'weight',
            datum: '1128742',
            datumBackground: 'rgb(198,195,198)',
          },
          { id: 'amount', datum: '3484', datumBackground: 'rgb(198,195,198)' },
          {
            id: 'quantity-of-FAT',
            datum: '28185',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'amount-of-FAT',
            datum: '15811',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'quantity-of-SNF',
            datum: '99694',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'amount-of-SNF',
            datum: '37943',
            datumBackground: 'rgb(198,195,198)',
          },
          {
            id: 'total-amount',
            datum: '57238',
            datumBackground: 'rgb(198,195,198)',
          },
        ],
      ]"
    />
  </div>

  <!-- No.102 -->

  <!-- No.103 -->
  <div>
    <div>
      No.103
      スプレッドシート6（スプレッドシート1の上で、1列は複数列で構成できる、上は2列で、下は1列）
    </div>
    <TableCommon
      height="100"
      width="50rem"
      :heads="[
        [
          {
            id: '01',
            datumType: 'checkbox',
            head: '取\n消',
            rowspan: 2,
            textAlign: 'left',
            width: 20,
          },
          {
            id: '02',
            datumType: 'checkbox',
            head: '自\n動',
            rowspan: 2,
            textAlign: 'left',
            width: 20,
          },
          {
            id: '03',
            head: 'No.',
            rowspan: 2,
            textAlign: 'right',
            width: 25,
          },
          { id: '04', head: '区分', textAlign: 'center', width: 45 },
          { id: '05', head: '品目コード', textAlign: 'left', width: 75 },
          { id: '06', head: '原材料コード', textAlign: 'left', width: 100 },
          { id: '07', head: '投入数', textAlign: 'right', width: 70 },
          { id: '08', head: '単位', textAlign: 'right', width: 32 },
          {
            id: '09',
            buttonTitle: '選択',
            head: '管理工程',
            rowspan: 2,
            textAlign: 'center',
            width: 70,
          },
          {
            id: '10',
            head: '倉庫-エリア-ゾーン',
            textAlign: 'left',
            width: 120,
          },
          {
            id: '11',
            head: '投入日',
            rowspan: 2,
            textAlign: 'center',
            width: 64,
          },
          {
            id: '12',
            head: '手\n動',
            buttonTitle: '引当',
            datumType: 'button',
            rowspan: 2,
            width: 32,
          },
          { id: '13', head: '', textAlign: 'left', width: 80 },
          { id: '14', head: '', rowspan: 2, textAlign: 'left', width: 50 },
        ],
        [
          {
            id: '15',
            head: '品目名称',
            colspan: 2,
            textAlign: 'left',
            width: 120,
          },
          { id: '16', head: '原材料略称', textAlign: 'left', width: 64 },
          { id: '17', head: '不定貫数量', textAlign: 'left', width: 70 },
          { id: '18', head: '単位', textAlign: 'left', width: 32 },
          { id: '19', head: '倉庫名称', textAlign: 'left', width: 120 },
          { id: '20', head: '', textAlign: 'left', width: 80 },
        ],
      ]"
      :data="[
        [
          { id: '01', datumBackground: 'rgb(255 255 0)' },
          { id: '02', datumBackground: 'rgb(255 255 0)' },
          { id: '03', datum: '1', datumBackground: 'rgb(255 255 0)' },
          { id: '04', datum: '製品', datumBackground: 'rgb(255 255 0)' },
          { id: '05', datum: '123456', datumBackground: 'rgb(255 255 0)' },
          { id: '06', datum: '987654', datumBackground: 'rgb(255 255 0)' },
          { id: '07', datum: '100', datumBackground: 'rgb(255 255 0)' },
          { id: '08', datum: 'ｺ', datumBackground: 'rgb(255 255 0)' },
          { id: '09', datum: '牛乳製造', datumBackground: 'rgb(255 255 0)' },
          { id: '10', datum: '001-999-999', datumBackground: 'rgb(255 255 0)' },
          { id: '11', datum: '2013/07/01', datumBackground: 'rgb(255 255 0)' },
          { id: '12', datumBackground: 'rgb(255 255 0)' },
          { id: '13', datum: '1234567890', datumBackground: 'rgb(255 255 0)' },
          { id: '14', datum: '', datumBackground: 'rgb(255 255 0)' },
        ],
        [
          {
            id: '15',
            datum: '雪印牛乳 1000*12',
            datumBackground: 'rgb(255 255 0)',
          },
          {
            id: '16',
            datum: '雪印牛乳梱包１',
            datumBackground: 'rgb(255 255 0)',
          },
          { id: '17', datum: '', datumBackground: 'rgb(255 255 0)' },
          { id: '18', datum: '', datumBackground: 'rgb(255 255 0)' },
          {
            id: '19',
            datum: '牛乳製造倉庫',
            datumBackground: 'rgb(255 255 0)',
          },
          { id: '20', datum: '1234567890', datumBackground: 'rgb(255 255 0)' },
        ],
        [
          { id: '01' },
          { id: '02' },
          { id: '03', datum: '2' },
          { id: '04', datum: '製品' },
          { id: '05', datum: '345678' },
          { id: '06', datum: '129876' },
          { id: '07', datum: '200' },
          { id: '08', datum: 'ｺ' },
          { id: '09', datum: '牛乳製造' },
          { id: '10', datum: '001-999-999' },
          { id: '11', datum: '2013/07/22' },
          { id: '12' },
          { id: '13', datum: '1234567890' },
          { id: '14', datum: '' },
        ],
        [
          { id: '15', datum: '雪印牛乳 500*12' },
          { id: '16', datum: '雪印牛乳梱包２' },
          { id: '17', datum: '' },
          { id: '18', datum: '' },
          { id: '19', datum: '牛乳製造倉庫' },
          { id: '20', datum: '1234567890' },
        ],
        [
          { id: '01', datumBackground: 'rgb(255 193 193)' },
          { id: '02', datumBackground: 'rgb(255 193 193)' },
          { id: '03', datum: '3', datumBackground: 'rgb(255 193 193)' },
          { id: '04', datum: '共通', datumBackground: 'rgb(255 193 193)' },
          { id: '05', datum: '246800', datumBackground: 'rgb(255 193 193)' },
          { id: '06', datum: '111111', datumBackground: 'rgb(255 193 193)' },
          { id: '07', datum: '100', datumBackground: 'rgb(255 193 193)' },
          { id: '08', datum: 'G', datumBackground: 'rgb(255 193 193)' },
          {
            id: '09',
            datum: 'コーヒー調合',
            datumBackground: 'rgb(255 193 193)',
          },
          {
            id: '10',
            datum: '001-999-888',
            datumBackground: 'rgb(255 193 193)',
          },
          { id: '11', datum: '', datumBackground: 'rgb(255 193 193)' },
          { id: '12', datumBackground: 'rgb(255 193 193)' },
          {
            id: '13',
            datum: '1234567890',
            datumBackground: 'rgb(255 193 193)',
          },
          { id: '14', datum: '', datumBackground: 'rgb(255 193 193)' },
        ],
        [
          {
            id: '15',
            datum: '雪印コーヒー 1000*12',
            datumBackground: 'rgb(255 193 193)',
          },
          {
            id: '16',
            datum: '雪印香料１',
            datumBackground: 'rgb(255 193 193)',
          },
          { id: '17', datum: '', datumBackground: 'rgb(255 193 193)' },
          { id: '18', datum: '', datumBackground: 'rgb(255 193 193)' },
          {
            id: '19',
            datum: 'コーヒー調合倉庫',
            datumBackground: 'rgb(255 193 193)',
          },
          {
            id: '20',
            datum: '1234567890',
            datumBackground: 'rgb(255 193 193)',
          },
        ],
      ]"
    />
  </div>

  <!-- No.104 -->
  <div>
    <div>№104:スプレッドシート7（テキストのみ、タイトルなし）</div>
    <TableCommon
      width="50rem"
      :data="[
        [
          { id: '1 ', datum: '上旬計', textAlign: 'center' },
          { id: '2', datum: '4,681,515', textAlign: 'right' },
          { id: '3', datum: '188,169,029', textAlign: 'right' },
          { id: '4', datum: '4.019', textAlign: 'right' },
          { id: '5', datum: '411,150,465', textAlign: 'right' },
          { id: '6', datum: '8.782', textAlign: 'right' },
        ],
        [
          { id: '1', datum: '中旬計', textAlign: 'center' },
          { id: '2', datum: '4,763,571', textAlign: 'right' },
          { id: '3', datum: '191,336,521', textAlign: 'right' },
          { id: '4', datum: '4.017', textAlign: 'right' },
          { id: '5', datum: '418,669,512', textAlign: 'right' },
          { id: '6', datum: '8.789', textAlign: 'right' },
        ],
        [
          { id: '1', datum: '下旬計', textAlign: 'center' },
          { id: '2', datum: '4,268,649', textAlign: 'right' },
          { id: '3', datum: '170,933,165', textAlign: 'right' },
          { id: '4', datum: '4.004', textAlign: 'right' },
          { id: '5', datum: '375,099,345', textAlign: 'right' },
          { id: '6', datum: '8.787', textAlign: 'right' },
        ],
        [
          { id: '1', datum: '月合計', textAlign: 'center' },
          { id: '2', datum: '13,713,735', textAlign: 'right' },
          { id: '3', datum: '550,438,715', textAlign: 'right' },
          { id: '4', datum: '4.014', textAlign: 'right' },
          { id: '5', datum: '1,204,919,322', textAlign: 'right' },
          { id: '6', datum: '8.786', textAlign: 'right' },
        ],
      ]"
    />
  </div>
  <!-- No.105 -->
  <div>
    <div>№105:スプレッドシート8（スプレッドシート1の上で、固定列）</div>
    <TableCommon
      width="40rem"
      height="20rem"
      headHeight="20px"
      :fixedColumns="6"
      :heads="[
        [
          { id: 'code', head: 'No.', textAlign: 'center', width: 20 },
          {
            id: 'inspection-item',
            head: '検査項目',
            textAlign: 'left',
            width: 120,
          },
          {
            id: 'standard-value',
            head: '標準値',
            textAlign: 'center',
            width: 60,
          },
          {
            id: 'specified-value',
            head: '規格値',
            textAlign: 'center',
            width: 60,
          },
          { id: 'unit', head: '単位', textAlign: 'center', width: 50 },
          {
            id: 'test-result',
            head: '検査結果',
            textAlign: 'center',
            width: 50,
          },
          {
            id: 'reception-key',
            head: '受信キー ',
            textAlign: 'center',
            width: 80,
          },
          {
            id: 'SEQcode',
            head: 'レコードSEQNo.',
            textAlign: 'center',
            width: 70,
          },
          { id: 'status', head: '状態 ', width: 50 },
        ],
      ]"
      :data="[
        [
          { id: 'code', datum: '001' },
          { id: 'inspection-item', datum: '001 風味' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: '点' },
          {
            id: 'test-result',
            datum: '9',
          },
          {
            id: 'reception-key',
            datum: '2020111301990',
          },
          { id: 'SEQcode', datum: '00015' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '001' },
          { id: 'inspection-item', datum: '002 色沢' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: '点' },
          {
            id: 'test-result',
            datum: '9',
          },
          {
            id: 'reception-key',
            datum: '2020111301991',
          },
          { id: 'SEQcode', datum: '00016' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '003' },
          { id: 'inspection-item', datum: '003 組織外観' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: '点' },
          {
            id: 'test-result',
            datum: '9',
          },
          {
            id: 'reception-key',
            datum: '2020111301992',
          },
          { id: 'SEQcode', datum: '00017' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '004' },
          { id: 'inspection-item', datum: '101 水分' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: '％' },
          {
            id: 'test-result',
            datum: '0',
          },
          {
            id: 'reception-key',
            datum: '2020111301993',
          },
          { id: 'SEQcode', datum: '00018' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '005' },
          { id: 'inspection-item', datum: '105 乳脂肪分' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: '％' },
          {
            id: 'test-result',
            datum: '80',
          },
          {
            id: 'reception-key',
            datum: '2020111301994',
          },
          { id: 'SEQcode', datum: '00019' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '006' },
          { id: 'inspection-item', datum: '115 食塩分' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: '％' },
          {
            id: 'test-result',
            datum: '1.5',
          },
          {
            id: 'reception-key',
            datum: '2020111301995',
          },
          { id: 'SEQcode', datum: '00020' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '007' },
          { id: 'inspection-item', datum: '327 剥離強度' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: 'ｇ' },
          {
            id: 'test-result',
            datum: '100',
          },
          {
            id: 'reception-key',
            datum: '2020111301996',
          },
          { id: 'SEQcode', datum: '00021' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '008' },
          { id: 'inspection-item', datum: '501 生菌数' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: 'コ/g' },
          {
            id: 'test-result',
            datum: '100',
          },
          {
            id: 'reception-key',
            datum: '2020111301997',
          },
          { id: 'SEQcode', datum: '00022' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '009' },
          { id: 'inspection-item', datum: '502 大腸菌群' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: '0:- 1:+' },
          {
            id: 'test-result',
            datum: '0',
          },
          {
            id: 'reception-key',
            datum: '2020111301998',
          },
          { id: 'SEQcode', datum: '00023' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '010' },
          { id: 'inspection-item', datum: '503 黄色ブドウ球菌' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: '0:- 1:+' },
          {
            id: 'test-result',
            datum: '0',
          },
          {
            id: 'reception-key',
            datum: '2020111301998',
          },
          { id: 'SEQcode', datum: '00024' },
          { id: 'status', datum: '' },
        ],
        [
          { id: 'code', datum: '011' },
          { id: 'inspection-item', datum: '505  かび' },
          { id: 'standard-value', datum: '～' },
          { id: 'specified-value', datum: '～' },
          { id: 'unit', datum: 'コ/g' },
          {
            id: 'test-result',
            datum: '0',
          },
          {
            id: 'reception-key',
            datum: '2020111302000',
          },
          { id: 'SEQcode', datum: '00025' },
          { id: 'status', datum: '' },
        ],
      ]"
    />
  </div>

  <!-- No.106 -->
  <div>
    <div>
      No.106
      スプレッドシート9（スプレッドシート1の上で、1列は複数列で構成できる、上は3列で、下は1列）
    </div>
    <TableCommon
      height="300"
      width="50rem"
      :heads="[
        [
          {
            id: '01',
            head: 'No',
            rowspan: 2,
            width: 30,
            height: 40,
            headTextAlign: 'left',
            textAlign: 'right',
          },
          {
            id: '02',
            head: '生産品目',
            width: 200,
            textAlign: 'left',
          },
          {
            id: '03',
            head: '原材料',
            width: 75,
            textAlign: 'left',
          },
          { id: '04', head: '容量', width: 75, textAlign: 'right' },
          { id: '05', head: '単位', width: 75, textAlign: 'left' },
          { id: '06', head: 'ライン', width: 150, textAlign: 'left' },
          {
            id: '07',
            head: 'バッチ',
            rowspan: 2,
            width: 70,
            textAlign: 'right',
          },
          {
            id: '08',
            head: '追加',
            buttonTitle: '追加',
            datumType: 'button',
            rowspan: 2,
            width: 40,
            headBackground: 'rgb(123, 150, 255)',
            textAlign: 'center',
          },
          {
            id: '09',
            head: '投入数',
            width: 120,
            headBackground: 'rgb(123, 150, 255)',
            textAlign: 'right',
          },

          { id: '10', head: '単位2', width: 80, textAlign: 'left' },
          {
            id: '11',
            head: '金額',
            rowspan: 2,
            width: 50,
            headBackground: 'rgb(123, 150, 255)',
            textAlign: 'right',
          },
          {
            id: '12',
            head: '倉庫ーエリアーゾーン',
            width: 150,
            textAlign: 'left',
          },
          {
            id: '13',
            head: '',
            rowspan: 2,
            textAlign: 'left',
            width: 50,
          },
        ],
        [
          {
            id: '14',
            head: '生産品目略称',
            textAlign: 'left',
            width: 120,
          },
          {
            id: '15',
            head: '原材料略称',
            textAlign: 'left',
            width: 64,
            colspan: 3,
          },
          { id: '16', head: '管理工程', textAlign: 'left', width: 70 },
          {
            id: '17',
            head: '不定貫個数',
            textAlign: 'left',
            width: 32,
            headBackground: 'rgb(123, 150, 255)',
          },
          { id: '18', head: '単位1', textAlign: 'left', width: 120 },
          { id: '19', head: '倉庫略称', textAlign: 'left', width: 120 },
          {
            id: '20',
            head: '',
            textAlign: 'left',
            width: 50,
          },
          {
            id: '21',
            head: '',
            textAlign: 'left',
            width: 50,
          },
        ],
      ]"
      :data="[
        [
          { id: '01', datum: '1', rowspan: 2 },
          { id: '02', datum: '011410' },
          { id: '03', datum: '104255' },
          { id: '04', datum: '0' },
          { id: '05', datum: 'ｺ' },
          { id: '06', datum: 'カマンカートナー' },
          { id: '07', datum: '1' },
          { id: '08', datum: '追加' },
          { id: '09', datum: '1,314' },
          { id: '10', datum: 'ｺ' },
          { id: '11', datum: '404' },
          { id: '12', datum: '100-100-999' },
          { id: '13', datum: '', rowspan: 2 },
        ],

        [
          { id: '14', datum: 'マキHカマンベール100GX3' },
          { id: '15', datum: 'DBフタ H100カマンベールホール' },
          { id: '16', datum: 'カマン外装工程' },
          { id: '17', datum: '' },
          { id: '18', datum: '' },
          { id: '19', datum: '製品倉庫' },
          { id: '20', datum: '' },
          { id: '21', datum: '' },
        ],
        [
          { id: '01', datum: '2', rowspan: 2 },
          { id: '02', datum: '011410' },
          { id: '03', datum: '104217' },
          { id: '04', datum: '0' },
          { id: '05', datum: 'ｺ' },
          { id: '06', datum: 'カマンカートナー' },
          { id: '07', datum: '1' },
          { id: '08', datum: '追加' },
          { id: '09', datum: '39,060' },
          { id: '10', datum: 'ｺ' },
          { id: '11', datum: '22,209' },
          { id: '12', datum: '100-100-999' },
          { id: '13', datum: '', rowspan: 2 },
        ],

        [
          { id: '14', datum: 'マキHカマンベール100GX3' },
          { id: '15', datum: 'カートン カマンベール' },
          { id: '16', datum: 'カマン外装工程' },
          { id: '17', datum: '' },
          { id: '18', datum: '' },
          { id: '19', datum: '製品倉庫' },
          { id: '20', datum: '' },
          { id: '21', datum: '' },
        ],
        [
          { id: '01', datum: '3', rowspan: 2 },
          { id: '02', datum: '011410' },
          { id: '03', datum: '014256' },
          { id: '04', datum: '0' },
          { id: '05', datum: 'ｺ' },
          { id: '06', datum: 'カマンカートナー' },
          { id: '07', datum: '1' },
          { id: '08', datum: '追加' },
          { id: '09', datum: '3,942' },
          { id: '10', datum: 'ｺ' },
          { id: '11', datum: '42,456' },
          { id: '12', datum: '100-100-999' },
          { id: '13', datum: '', rowspan: 2 },
        ],

        [
          { id: '14', datum: 'マキHカマンベール100GX3' },
          { id: '15', datum: 'DBミ H100カマンベールホール' },
          { id: '16', datum: 'カマン外装工程' },
          { id: '17', datum: '' },
          { id: '18', datum: '' },
          { id: '19', datum: '製品倉庫' },
          { id: '20', datum: '' },
          { id: '21', datum: '' },
        ],
        [
          { id: '01', datum: '4', rowspan: 2 },
          { id: '02', datum: '011410' },
          { id: '03', datum: '029348' },
          { id: '04', datum: '0' },
          { id: '05', datum: 'G' },
          { id: '06', datum: 'カマンカートナー' },
          { id: '07', datum: '1' },
          { id: '08', datum: '追加' },
          { id: '09', datum: '10,025' },
          { id: '10', datum: 'G' },
          { id: '11', datum: '42,456' },
          { id: '12', datum: '100-100-999' },
          { id: '13', datum: '', rowspan: 2 },
        ],

        [
          { id: '14', datum: 'マキHカマンベール100GX3' },
          { id: '15', datum: 'アドパントラ' },
          { id: '16', datum: 'カマン外装工程' },
          { id: '17', datum: '' },
          { id: '18', datum: '' },
          { id: '19', datum: '製品倉庫' },
          { id: '20', datum: '' },
          { id: '21', datum: '' },
        ],
        [
          { id: '01', datum: '5', rowspan: 2 },
          { id: '02', datum: '011410' },
          { id: '03', datum: '030138' },
          { id: '04', datum: '0' },
          { id: '05', datum: 'M' },
          { id: '06', datum: 'カマンカートナー' },
          { id: '07', datum: '1' },
          { id: '08', datum: '追加' },
          { id: '09', datum: '852' },
          { id: '10', datum: 'M' },
          { id: '11', datum: '' },
          { id: '12', datum: '100-100-999' },
          { id: '13', datum: '', rowspan: 2 },
        ],

        [
          { id: '14', datum: 'マキHカマンベール100GX3' },
          { id: '15', datum: 'ボリエステルロール' },
          { id: '16', datum: 'カマン外装工程' },
          { id: '17', datum: '' },
          { id: '18', datum: '' },
          { id: '19', datum: '製品倉庫' },
          { id: '20', datum: '' },
          { id: '21', datum: '' },
        ],
        [
          { id: '01', datum: '6', rowspan: 2 },
          { id: '02', datum: '011410' },
          { id: '03', datum: '025783' },
          { id: '04', datum: '0' },
          { id: '05', datum: 'ｺ' },
          { id: '06', datum: 'カマンカートナー' },
          { id: '07', datum: '1' },
          { id: '08', datum: '追加' },
          { id: '09', datum: '39,060' },
          { id: '10', datum: 'ｺ' },
          { id: '11', datum: '' },
          { id: '12', datum: '100-100-999' },
          { id: '13', datum: '', rowspan: 2 },
        ],

        [
          { id: '14', datum: 'マキHカマンベール100GX3' },
          { id: '15', datum: 'PPカップ' },
          { id: '16', datum: 'カマン外装工程' },
          { id: '17', datum: '' },
          { id: '18', datum: '' },
          { id: '19', datum: '製品倉庫' },
          { id: '20', datum: '' },
          { id: '21', datum: '' },
        ],
        [
          { id: '01', datum: '7', rowspan: 2 },
          { id: '02', datum: '011410' },
          { id: '03', datum: '025783' },
          { id: '04', datum: '0' },
          { id: '05', datum: 'ｺ' },
          { id: '06', datum: 'カマンカートナー' },
          { id: '07', datum: '1' },
          { id: '08', datum: '追加' },
          { id: '09', datum: '39,060' },
          { id: '10', datum: 'ｺ' },
          { id: '11', datum: '' },
          { id: '12', datum: '100-100-999' },
          { id: '13', datum: '', rowspan: 2 },
        ],

        [
          { id: '14', datum: 'マキHカマンベール100GX3XXXXX' },
          { id: '15', datum: 'PPカップXXXXXXXXXXXXXXXX' },
          { id: '16', datum: 'カマン外装工程' },
          { id: '17', datum: '' },
          { id: '18', datum: '' },
          { id: '19', datum: '製品倉庫' },
          { id: '20', datum: '' },
          { id: '21', datum: '' },
        ],
      ]"
    />
  </div>
  <!-- No.107 -->
  <div style="height: 30rem">
    <div>No.107 スプレッドシート10（スプレッドシート1と基本同じ、縦並び）</div>

    <TableCommonLengthways
      headBorderColor="rgb(192 192 192)"
      :heads="[
        [
          {
            id: 'select',
            head: '選択',
            width: '10rem',
            textAlign: 'center',
            datumType: 'checkbox',
            headBackground: 'rgb(123 150 255)',
            headTextAlign: 'left',
          },
        ],
        [
          {
            id: 'remove',
            head: '削除',
            textAlign: 'center',
            datumType: 'checkbox',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'commodityCode',
            head: '品名コード',
            textAlign: 'center',
            headTextAlign: 'left',
          },
        ],
        [
          {
            id: 'commodityName',
            head: '品名名称',
            textAlign: 'center',
            headTextAlign: 'left',
          },
        ],
        [
          {
            id: 'manufacturingDate',
            head: '製造日(包装)',
            textAlign: 'center',
            headTextAlign: 'left',
          },
        ],
        [
          {
            id: 'expirationDate',
            head: '賞味期限',
            textAlign: 'center',
            headTextAlign: 'left',
          },
        ],
        [
          {
            id: 'lot',
            head: 'ロット/サブロット',
            textAlign: 'center',
            headTextAlign: 'left',
          },
        ],
        [
          {
            id: 'sampleDate',
            head: 'サンプル日時',
            textAlign: 'center',
            headTextAlign: 'left',
          },
        ],
        [
          {
            id: 'sampleEquipment',
            head: 'サンプル設備',
            textAlign: 'center',
            headTextAlign: 'left',
          },
        ],
      ]"
      :data="[
        [
          {
            id: 'select',
            colspan: '2',
            checkedLabel: '選択',
            datumWidth: '12rem',
          },
          {
            id: 'select',
            colspan: '2',
            checkedLabel: '選択',
            datumWidth: '12rem',
          },
          {
            id: 'select',
            colspan: '2',
            checkedLabel: '選択',
            datumWidth: '12rem',
          },
          {
            id: 'select',
            colspan: '2',
            checkedLabel: '選択',
            datumWidth: '12rem',
          },
          {
            id: 'select',
            colspan: '2',
            checkedLabel: '選択',
            datumWidth: '12rem',
          },
        ],
        [
          { id: 'remove', colspan: '2', checkedLabel: '削除' },
          { id: 'remove', colspan: '2', checkedLabel: '削除' },
          { id: 'remove', colspan: '2', checkedLabel: '削除' },
          { id: 'remove', colspan: '2', checkedLabel: '削除' },
          { id: 'remove', colspan: '2', checkedLabel: '削除' },
        ],
        [
          {
            id: 'commodityCode',
            colspan: '2',
            datum: '011410',
            datumBackground: 'rgb(255 255 0)',
          },
          { id: 'commodityCode', colspan: '2', datum: '048666' },
          { id: 'commodityCode', colspan: '2', datum: '' },
          { id: 'commodityCode', colspan: '2', datum: '' },
          { id: 'commodityCode', colspan: '2', datum: '' },
        ],
        [
          {
            id: 'commodityName',
            colspan: '2',
            datum: 'ﾕｷH100ｶﾏﾝﾍﾞｰﾙ100GX50',
            datumBackground: 'rgb(0 255 255)',
          },
          { id: 'commodityName', colspan: '2', datum: 'ﾕｷH100ｶｯﾃｰｼﾞ200GX6X2' },
          { id: 'commodityName', colspan: '2', datum: '' },
          { id: 'commodityName', colspan: '2', datum: '' },
          { id: 'commodityName', colspan: '2', datum: '' },
        ],
        [
          {
            id: 'manufacturingDate',
            colspan: '2',
            datum: '2013/07/23',
            datumBackground: 'rgb(255 193 193)',
          },
          { id: 'manufacturingDate', colspan: '2', datum: '2013/07/22' },
          { id: 'manufacturingDate', colspan: '2', datum: '' },
          { id: 'manufacturingDate', colspan: '2', datum: '' },
          { id: 'manufacturingDate', colspan: '2', datum: '' },
        ],
        [
          { id: 'expirationDate', colspan: '2', datum: '2014/04/24' },
          { id: 'expirationDate', colspan: '2', datum: '2014/06/24' },
          { id: 'expirationDate', colspan: '2', datum: '' },
          { id: 'expirationDate', colspan: '2', datum: '' },
          { id: 'expirationDate', colspan: '2', datum: '' },
        ],
        [
          { id: 'lot', colspan: '2', datum: '200112345678/AA' },
          { id: 'lot', colspan: '2', datum: '200112300908/AE' },
          { id: 'lot', colspan: '2', datum: '' },
          { id: 'lot', colspan: '2', datum: '' },
          { id: 'lot', colspan: '2', datum: '' },
        ],
        [
          { id: 'sampleDate', colspan: '2', datum: '2013/04/23' },
          { id: 'sampleDate', colspan: '2', datum: '2013/04/23 19:08' },
          { id: 'sampleDate', colspan: '2', datum: '' },
          { id: 'sampleDate', colspan: '2', datum: '' },
          { id: 'sampleDate', colspan: '2', datum: '' },
        ],
        [
          { id: 'sampleEquipment', colspan: '2', datum: 'カマンカートナー' },
          { id: 'sampleEquipment', colspan: '2', datum: '新光充填機' },
          { id: 'sampleEquipment', colspan: '2', datum: '' },
          { id: 'sampleEquipment', colspan: '2', datum: '' },
          { id: 'sampleEquipment', colspan: '2', datum: '' },
        ],
      ]"
    />
    <TableCommonLengthways
      headBorderColor="rgb(192 192 192)"
      setTopBorder="unset"
      height="100px"
      :heads="[
        [
          {
            id: 'relish',
            head: '風味',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'colour',
            head: '色沢',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'tissueAppearance',
            head: '組織外観',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'moisture',
            head: '水分',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'milkoTester',
            head: '乳脂肪分',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'saltComposition',
            head: '食塩分',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'peelStrength',
            head: '剥離強度',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'acidity',
            head: '酸度',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'heatResistance',
            head: '耐熱性',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'insolubleMatter',
            head: '不溶解物',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
        [
          {
            id: 'solubility',
            head: '溶解性',
            textAlign: 'right',
            width: '10rem',
            headTextAlign: 'left',
            headBackground: 'rgb(123 150 255)',
          },
        ],
      ]"
      :data="[
        [
          {
            id: 'colour',
            datum: '10',
            datumWidth: '6rem',
          },
          {
            id: 'colour',
            datum: '点',
            datumWidth: '6rem',
          },
          {
            id: 'colour',
            datum: '10',
            datumWidth: '6rem',
          },
          {
            id: 'colour',
            datum: '点',
            datumWidth: '6rem',
          },
          {
            id: 'colour',
            datum: '',
            datumWidth: '6rem',
          },
          {
            id: 'colour',
            datum: '',
            datumWidth: '6rem',
            colspan: '1',
          },
          {
            id: 'colour',
            datum: '',
            datumWidth: '6rem',
          },
          {
            id: 'colour',
            datum: '',
            datumWidth: '6rem',
          },
          {
            id: 'colour',
            datum: '',
            datumWidth: '6rem',
          },
          {
            id: 'colour',
            datum: '',
            datumWidth: '6rem',
          },
        ],
        [
          { id: 'relish', datum: '2', datumBackground: 'rgb(255 193 193)' },
          { id: 'relish', datum: '点', datumBackground: 'rgb(0 255 255)' },
          { id: 'relish', datum: '10' },
          { id: 'relish', datum: '点' },
          { id: 'relish', datum: '' },
          { id: 'relish', datum: '', datumWidth: '5rem' },
          { id: 'relish', datum: '', datumWidth: '5rem' },
          { id: 'relish', datum: '', datumWidth: '5rem' },
          { id: 'relish', datum: '', datumWidth: '5rem' },
          { id: 'relish', datum: '', datumWidth: '5rem' },
        ],
        [
          {
            id: 'tissueAppearance',
            datum: '',
            datumBackground: 'rgb(198 195 198)',
          },
          {
            id: 'tissueAppearance',
            datum: '',
            datumBackground: 'rgb(198 195 198)',
          },
          { id: 'tissueAppearance', datum: '10' },
          { id: 'tissueAppearance', datum: '点' },
          { id: 'tissueAppearance', datum: '' },
          { id: 'tissueAppearance', datum: '' },
          { id: 'tissueAppearance', datum: '' },
          { id: 'tissueAppearance', datum: '' },
          { id: 'tissueAppearance', datum: '' },
          { id: 'tissueAppearance', datum: '' },
        ],
        [
          { id: 'moisture', datum: '16.6' },
          { id: 'moisture', datum: '%' },
          { id: 'moisture', datum: '16.6' },
          { id: 'moisture', datum: '%' },
          { id: 'moisture', datum: '' },
          { id: 'moisture', datum: '' },
          { id: 'moisture', datum: '' },
          { id: 'moisture', datum: '' },
          { id: 'moisture', datum: '' },
          { id: 'moisture', datum: '' },
        ],
        [
          {
            id: 'milkoTester',
            datum: '8.6',
            datumBackground: 'rgb(255 193 193)',
          },
          { id: 'milkoTester', datum: '%' },
          { id: 'milkoTester', datum: '8.6' },
          { id: 'milkoTester', datum: '%' },
          { id: 'milkoTester', datum: '' },
          { id: 'milkoTester', datum: '' },
          { id: 'milkoTester', datum: '' },
          { id: 'milkoTester', datum: '' },
          { id: 'milkoTester', datum: '' },
          { id: 'milkoTester', datum: '' },
        ],
        [
          { id: 'saltComposition', datum: '1.31' },
          {
            id: 'saltComposition',
            datum: '%',
            datumBackground: 'rgb(0 255 255)',
          },
          { id: 'saltComposition', datum: '' },
          { id: 'saltComposition', datum: '' },
          { id: 'saltComposition', datum: '' },
          { id: 'saltComposition', datum: '' },
          { id: 'saltComposition', datum: '' },
          { id: 'saltComposition', datum: '' },
          { id: 'saltComposition', datum: '' },
          { id: 'saltComposition', datum: '' },
        ],
        [
          {
            id: 'peelStrength',
            datum: '10',
            datumBackground: 'rgb(255 193 193)',
          },
          { id: 'peelStrength', datum: 'g', datumBackground: 'rgb(0 255 255)' },
          { id: 'peelStrength', datum: '10' },
          { id: 'peelStrength', datum: 'g' },
          { id: 'peelStrength', datum: '' },
          { id: 'peelStrength', datum: '' },
          { id: 'peelStrength', datum: '' },
          { id: 'peelStrength', datum: '' },
          { id: 'peelStrength', datum: '' },
          { id: 'peelStrength', datum: '' },
        ],
        [
          { id: 'acidity', datum: '0' },
          { id: 'acidity', datum: '%' },
          { id: 'acidity', datum: '', datumBackground: 'rgb(198 195 198)' },
          { id: 'acidity', datum: '', datumBackground: 'rgb(198 195 198)' },
          { id: 'acidity', datum: '' },
          { id: 'acidity', datum: '' },
          { id: 'acidity', datum: '' },
          { id: 'acidity', datum: '' },
          { id: 'acidity', datum: '' },
          { id: 'acidity', datum: '' },
        ],
        [
          { id: 'heatResistance', datum: '0' },
          { id: 'heatResistance', datum: '0:- 1:+' },
          { id: 'heatResistance', datum: '0' },
          { id: 'heatResistance', datum: '0:- 1:+' },
          { id: 'heatResistance', datum: '' },
          { id: 'heatResistance', datum: '' },
          { id: 'heatResistance', datum: '' },
          { id: 'heatResistance', datum: '' },
          { id: 'heatResistance', datum: '' },
          { id: 'heatResistance', datum: '' },
        ],
        [
          { id: 'insolubleMatter', datum: '0' },
          { id: 'insolubleMatter', datum: 'ml' },
          { id: 'insolubleMatter', datum: '0' },
          { id: 'insolubleMatter', datum: 'ml' },
          { id: 'insolubleMatter', datum: '' },
          { id: 'insolubleMatter', datum: '' },
          { id: 'insolubleMatter', datum: '' },
          { id: 'insolubleMatter', datum: '' },
          { id: 'insolubleMatter', datum: '' },
          { id: 'insolubleMatter', datum: '' },
        ],
        [
          { id: 'solubility', datum: '0' },
          { id: 'solubility', datum: '点' },
          { id: 'solubility', datum: '' },
          { id: 'solubility', datum: '' },
          { id: 'solubility', datum: '' },
          { id: 'solubility', datum: '' },
          { id: 'solubility', datum: '' },
          { id: 'solubility', datum: '' },
          { id: 'solubility', datum: '' },
          { id: 'solubility', datum: '' },
        ],
      ]"
    />
  </div>

  <!-- No.108 -->
  <div height="500">
    <div>No.108 スプレッドシート11（勤務時間用）</div>
    <BaseText
      style="padding-top: 10px"
      label="19922791M  勤休 太郎"
      textSize="10"
    />
    <TableCommon
      style="padding-top: 10px"
      height="250"
      width="100rem"
      :heads="[
        [
          {
            id: '01',
            head: '年月日',
            width: 15,
            textAlign: 'center',
            height: 20,
          },
          { id: '02', head: '曜日', width: 6, textAlign: 'center' },
          {
            id: '03',
            head: '休暇等区分',
            width: 14,
            datumType: 'dropdown',
            textAlign: 'center',
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: '04',
            head: '勤務形態',
            width: 22,
            datumType: 'dropdown',
            textAlign: 'center',
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: '05',
            head: 'コメント',
            width: 16,
            textAlign: 'left',
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: '06',
            head: '勤務開始時間',
            width: 18,
            datumType: 'dropdown',
            colspan: 3,
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: '07',
            head: '勤務終了時間',
            width: 18,
            datumType: 'dropdown',
            colspan: 3,
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: '08',
            head: '休憩開始時間',
            width: 18,
            datumType: 'dropdown',
            colspan: 3,
            headBackground: 'rgb(123, 150, 255)',
          },
          {
            id: '09',
            head: '休憩終了時間',
            width: 18,
            datumType: 'dropdown',
            colspan: 3,
            headBackground: 'rgb(123, 150, 255)',
          },
          { id: '10', head: '時給時間', width: 10, textAlign: 'center' },
          { id: '11', head: '半休時間', width: 10, textAlign: 'center' },
          {
            id: '12',
            head: '',
            width: 6,
            datumType: 'button',
            buttonTitle: '詳細',
            headBackground: 'rgb(123, 150, 255)',
          },
        ],
      ]"
      :data="[
        [
          { id: '01', datum: '2016/02/01' },
          { id: '02', datum: '月' },
          {
            id: '03',
            datum: '出勤',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: '08:40-17:30(Z)',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '月次取締' },

          {
            id: '06',
            datum: '08',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '40', textAlign: 'right' },

          {
            id: '07',
            datum: '19',
            options: [
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '0701', datum: '30', textAlign: 'right' },

          {
            id: '08',
            datum: '12',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '13',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
        [
          { id: '01', datum: '2016/02/02' },
          { id: '02', datum: '火' },
          {
            id: '03',
            datum: '出勤',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: '08:40-17:30(Z)',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '月次取締' },

          {
            id: '06',
            datum: '08',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '40', textAlign: 'right' },

          {
            id: '07',
            datum: '18',
            options: [
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '0702', datum: '30', textAlign: 'right' },

          {
            id: '08',
            datum: '12',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '13',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
        [
          { id: '01', datum: '2016/02/03' },
          { id: '02', datum: '水' },
          {
            id: '03',
            datum: '出勤',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: '08:40-17:30(Z)',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '', textAlign: 'left' },

          {
            id: '06',
            datum: '08',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '40', textAlign: 'right' },

          {
            id: '07',
            datum: '17',
            options: [
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '07-2', datum: '30', textAlign: 'right' },

          {
            id: '08',
            datum: '12',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '13',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
        [
          { id: '01', datum: '2016/02/04' },
          { id: '02', datum: '木' },
          {
            id: '03',
            datum: '出勤',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: '08:40-17:30(Z)',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '月次取締' },

          {
            id: '06',
            datum: '08',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '40', textAlign: 'right' },

          {
            id: '07',
            datum: '17',
            options: [
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '0702', datum: '30', textAlign: 'right' },

          {
            id: '08',
            datum: '12',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '13',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
        [
          { id: '01', datum: '2016/02/05' },
          { id: '02', datum: '金' },
          {
            id: '03',
            datum: '出勤',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: '08:40-17:30(Z)',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '', textAlign: 'left' },

          {
            id: '06',
            datum: '08',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '40', textAlign: 'right' },

          {
            id: '07',
            datum: '19',
            options: [
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '0702', datum: '30', textAlign: 'right' },

          {
            id: '08',
            datum: '12',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '13',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
        [
          { id: '01', datum: '2016/02/06' },
          { id: '02', datum: '土' },
          {
            id: '03',
            datum: '定休',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: 'なし',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '', textAlign: 'left' },

          {
            id: '06',
            datum: '00',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '00', textAlign: 'right' },

          {
            id: '07',
            datum: '00',
            options: [
              { display: '00' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '0702', datum: '00', textAlign: 'right' },

          {
            id: '08',
            datum: '00',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '00',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
        [
          { id: '01', datum: '2016/02/07' },
          { id: '02', datum: '日' },
          {
            id: '03',
            datum: '公休',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: 'なし',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '', textAlign: 'left' },

          {
            id: '06',
            datum: '00',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '00', textAlign: 'right' },

          {
            id: '07',
            datum: '00',
            options: [
              { display: '00' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '0702', datum: '00', textAlign: 'right' },

          {
            id: '08',
            datum: '00',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '00',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
        [
          { id: '01', datum: '2016/02/08' },
          { id: '02', datum: '月' },
          {
            id: '03',
            datum: '出勤',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: '08:40-17:30(Z)',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '予算策定' },

          {
            id: '06',
            datum: '08',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '40', textAlign: 'right' },

          {
            id: '07',
            datum: '20',
            options: [
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '0702', datum: '00', textAlign: 'right' },

          {
            id: '08',
            datum: '12',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '13',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
        [
          { id: '01', datum: '2016/02/09' },
          { id: '02', datum: '火' },
          {
            id: '03',
            datum: '出勤',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: '08:40-17:30(Z)',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '予算資料作成' },

          {
            id: '06',
            datum: '08',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '40', textAlign: 'right' },

          {
            id: '07',
            datum: '20',
            options: [
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '0702', datum: '00', textAlign: 'right' },

          {
            id: '08',
            datum: '12',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '13',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
        [
          { id: '01', datum: '2016/02/10' },
          { id: '02', datum: '水' },
          {
            id: '03',
            datum: '出勤',
            options: [
              { display: '出勤' },
              { display: '公休' },
              { display: '定休' },
            ],
          },
          {
            id: '04',
            datum: '08:40-17:30(Z)',
            options: [{ display: '08:40-17:30(Z)' }, { display: 'なし' }],
          },
          { id: '05', datum: '', textAlign: 'left' },

          {
            id: '06',
            datum: '08',
            options: [
              { display: '00' },
              { display: '01' },
              { display: '02' },
              { display: '03' },
              { display: '04' },
              { display: '05' },
              { display: '06' },
              { display: '07' },
              { display: '08' },
              { display: '09' },
              { display: '10' },
              { display: '11' },
              { display: '12' },
              { display: '13' },
              { display: '14' },
              { display: '15' },
              { display: '16' },
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '21' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0601', datum: '：', textAlign: 'center' },
          { id: '0602', datum: '40', textAlign: 'right' },

          {
            id: '07',
            datum: '17',
            options: [
              { display: '17' },
              { display: '18' },
              { display: '19' },
              { display: '20' },
              { display: '21' },
              { display: '22' },
              { display: '23' },
            ],
          },
          { id: '0701', datum: '：', textAlign: 'center' },
          { id: '0702', datum: '30', textAlign: 'right' },

          {
            id: '08',
            datum: '12',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0801', datum: '：', textAlign: 'center' },
          { id: '0802', datum: '00', textAlign: 'right' },

          {
            id: '09',
            datum: '13',
            options: [{ display: '00' }, { display: '12' }, { display: '13' }],
          },
          { id: '0901', datum: '：', textAlign: 'center' },
          { id: '0902', datum: '00', textAlign: 'right' },

          { id: '10', datum: '9:99' },
          { id: '11', datum: '9:99' },
          { id: '12', datum: '' },
        ],
      ]"
    />
  </div>
  <!-- No.109 -->
  <div style="height: 35rem">
    <div>No.109 スプレッドシート12（ページャー付き）</div>
    <PageChangeButtonGroupWithPaging
      style="padding-top: 10px"
      x="17rem"
      :pageInputWidth="30"
      :totalPage="2"
      :changePage="
        () => {
          console.info('change page')
        }
      "
      :prePageButton="{
        title: '前頁(F6)',
        width: '60',
      }"
      :nextPageButton="{
        title: '次頁(F7)',
        width: '60',
      }"
      :moveButton="{
        title: '移動',
        width: '40',
        onClick: () => {
          console.info('move')
        },
      }"
    />
    <TotalAllItems style="padding-top: 10px" :countValue="20" x="45rem" />
    <TableCommon
      y="6rem"
      height="30rem"
      width="50rem"
      headBorderColor="var(--color-deep-gray)"
      datumBorderColor="var(--color-deep-gray)"
      :heads="[
        [
          {
            id: '01',
            datumType: 'checkbox',
            head: '削除',
            textAlign: 'center',
            width: 2,
            height: 20,
          },

          {
            id: '02',
            datumType: 'input-text',
            head: '製造順',
            textAlign: 'right',
            width: 2,
          },
          {
            id: '03',
            datumType: 'input-text',

            width: 3,
            head: 'コード',
          },
          {
            id: '04',
            head: '名称',

            textAlign: 'left',
            width: 10,
          },
          {
            id: '05',
            head: '切替時間',
            datumType: 'input-time',
            textAlign: 'right',
            width: 5,
          },
        ],
      ]"
      :data="[
        [
          { id: '01' },
          { id: '02', datum: '1' },
          { id: '03', datum: '447965' },
          { id: '04', datum: 'メグミルク牛乳ESL　1000mlx12' },
          { id: '05', datum: '00:10' },
        ],
        [
          { id: '01' },
          { id: '02', datum: '2' },
          { id: '03', datum: '000455' },
          { id: '04', datum: '雪印牛乳　　　　　 1000mlx12' },
          { id: '05', datum: '00:10' },
        ],
        [
          { id: '01' },
          { id: '02', datum: '3' },
          { id: '03', datum: '429874' },
          { id: '04', datum: '草原の季節牛乳　 　1000mlx12' },
          { id: '05', datum: '00:10' },
        ],
        [
          { id: '01' },
          { id: '02', datum: '4' },
          { id: '03', datum: '407380' },
          { id: '04', datum: 'おれたちの牛乳(厚木)1000mlx12' },
          { id: '05', datum: '00:10' },
        ],
        [
          { id: '01' },
          { id: '02', datum: '5' },
          { id: '03', datum: '445631' },
          { id: '04', datum: 'セブンイレブン牛乳ESL　　1000ml' },
          { id: '05', datum: '00:10' },
        ],
        [
          { id: '01' },
          { id: '02', datum: '6' },
          { id: '03', datum: '450190' },
          { id: '04', datum: 'キャブテンクック牛乳ESL　1000ml' },
          { id: '05', datum: '00:10' },
        ],
        [
          { id: '01' },
          { id: '02', datum: '7' },
          { id: '03', datum: '447953' },
          { id: '04', datum: 'メグミルク牛乳ESL　500mlx20' },
          { id: '05', datum: '00:10' },
        ],
        [
          { id: '01' },
          { id: '02', datum: '8' },
          { id: '03', datum: '000335' },
          { id: '04', datum: 'メグミルク牛乳ESL　500mlx20' },
          { id: '05', datum: '00:10' },
        ],
        [
          { id: '01' },
          { id: '02', datum: '9' },
          { id: '03', datum: '447762' },
          { id: '04', datum: '雪印牛乳　　　500mlx20' },
          { id: '05', datum: '00:10' },
        ],
        [
          { id: '01' },
          { id: '02', datum: '10' },
          { id: '03', datum: '460156' },
          { id: '04', datum: 'セブンイレブン牛乳ESL　　500ml' },
          { id: '05', datum: '00:10' },
        ],
      ]"
    />
  </div>
  <!-- No.110 -->
  <div>
    <div>№110:スプレッドシート13（スプレッドシート3と基本同じ、縦並び）</div>
    <TableCommonLengthways
      headBorderColor="rgb(192 192 192)"
      :heads="[
        [
          {
            id: 'paidVacation',
            head: '有\n給',
            width: '2rem',
            headTextAlign: 'left',
            rowspan: 4,
          },
        ],
        [
          {
            id: '01',
            skipTableHeadMix: true,
          },
        ],
        [
          {
            id: '02',
            skipTableHeadMix: true,
          },
        ],
        [
          {
            id: '03',
            skipTableHeadMix: true,
          },
        ],
      ]"
      :data="[
        [
          {
            id: 'paidVacation',
            datum: '前月残',
            datumWidth: '8rem',
            rowspan: 1,
            datumBackground: 'rgb(190 255 150)',
          },
          {
            datum: '',
            datumWidth: '6rem',
            rowspan: 1,
          },
        ],
        [
          {
            id: '01',
            datum: '+ 付　与',
            datumWidth: '8rem',
            rowspan: 1,
            datumBackground: 'rgb(190 255 150)',
          },
          {
            id: '01',
            datum: '',
            datumWidth: '6rem',
            rowspan: 1,
          },
        ],
        [
          {
            id: '02',
            datum: '- 使　用',
            datumWidth: '8rem',
            rowspan: 1,
            datumBackground: 'rgb(190 255 150)',
          },
          {
            id: '02',
            datum: '',
            datumWidth: '6rem',
            rowspan: 1,
          },
        ],
        [
          {
            id: '03',
            datum: '当月残',
            datumWidth: '8rem',
            rowspan: 1,
            datumBackground: 'rgb(190 255 150)',
          },
          {
            id: '03',
            datum: '',
            datumWidth: '6rem',
            rowspan: 1,
          },
        ],
      ]"
    />
  </div>

  <!-- No.111 -->

  <!-- No.112 -->
  <div style="height: 16rem">
    <div>
      No.112
      スプレッドシート15（スプレッドシート2の上で、全選択、全解除、表示ボタン付き）
    </div>
    <div>
      <ButtonGroupSelectAll
        :buttons="[
          {
            title: '全選択',
            disabled: false,
            width: 'auto',
            onClick: () => console.log('全選択押下'),
          },
          {
            title: '全解除',
            disabled: false,
            width: 'auto',
            onClick: () => console.log('全解除押下'),
          },
        ]"
      />
      <ButtonExtend
        button-title="表示"
        :disabled="false"
        button-width="36"
        x="47.7rem"
      />
      <TableCommon
        height="130"
        width="50rem"
        y="50"
        :heads="[
          [
            {
              id: '01',
              head: 'No',
              rowspan: 2,
              width: 30,
              textAlign: 'right',
            },
            {
              id: '02',
              datumType: 'checkbox',
              head: '取消',
              headTextAlign: 'left',
              rowspan: 2,
              textAlign: 'center',
              width: 30,
            },
            {
              id: '03',
              datumType: 'checkbox',
              head: '選択',
              headTextAlign: 'left',
              rowspan: 2,
              textAlign: 'center',
              width: 30,
            },
            {
              id: '04',
              head: '',
              buttonTitle: '詳細',
              datumType: 'button',
              rowspan: 2,
              width: 30,
            },
            { id: '05', head: '倉庫', textAlign: 'left', width: 100 },
            { id: '06', head: 'エリア', textAlign: 'left', width: 100 },
            {
              id: '07',
              head: '状態',
              rowspan: 2,
              textAlign: 'left',
              width: 65,
            },
            {
              id: '08',
              head: '棚卸指示日',
              rowspan: 2,
              textAlign: 'left',
              width: 80,
            },
            {
              id: '09',
              head: '棚卸承認日',
              rowspan: 2,
              textAlign: 'left',
              width: 80,
            },
          ],
          [
            {
              id: '10',
              head: '倉庫(略式名称)',
              textAlign: 'left',
              width: 100,
            },
            {
              id: '11',
              head: 'エリア(略式名称)',
              textAlign: 'left',
              width: 100,
            },
          ],
        ]"
        :data="[
          [
            { id: '01', datum: '1' },
            { id: '02' },
            { id: '03' },
            { id: '04' },
            { id: '05', datum: '025' },
            { id: '06', datum: '999' },
            { id: '07', datum: '在庫なし' },
            { id: '08', datum: '2013/07/01' },
            { id: '09', datum: '' },
          ],
          [
            {
              id: '10',
              datum: 'カートン外装',
            },
            {
              id: '11',
              datum: 'カートン外装',
            },
          ],
          [
            { id: '01', datum: '2' },
            { id: '02' },
            { id: '03' },
            { id: '04' },
            { id: '05', datum: '035' },
            { id: '06', datum: '999' },
            { id: '07', datum: '未指示' },
            { id: '08', datum: '2013/07/31' },
            { id: '09', datum: '' },
          ],
          [
            {
              id: '10',
              datum: 'カートン乳化',
            },
            {
              id: '11',
              datum: 'カートン乳化',
            },
          ],
        ]"
      />
    </div>
  </div>
  <!-- No.113 -->
  <div style="height: 20rem">
    <div>
      No.113 スプレッドシート16（スプレッドシート2の上で、ページャー付き2）
    </div>
    <div>
      <ButtonGroupSelectAll
        :buttons="[
          {
            title: '全削除',
            disabled: false,
            width: 'auto',
            onClick: () => console.log('全削除押下'),
          },
          {
            title: '全選択',
            disabled: false,
            width: 'auto',
            onClick: () => console.log('全選択押下'),
          },
          {
            title: '全解除',
            disabled: false,
            width: 'auto',
            onClick: () => console.log('全解除押下'),
          },
        ]"
      />
      <PagingSample
        :current-page="1"
        :current-count="100"
        :total-count="471"
        x="31rem"
      />
      <TableCommon
        height="130"
        width="50rem"
        y="49"
        :heads="[
          [
            {
              id: '01',
              head: 'No',
              rowspan: 2,
              width: 30,
              textAlign: 'right',
            },
            {
              id: '02',
              datumType: 'checkbox',
              head: '削除',
              headTextAlign: 'center',
              rowspan: 2,
              textAlign: 'center',
              width: 30,
            },
            {
              id: '03',
              datumType: 'checkbox',
              head: '選択',
              headTextAlign: 'center',
              rowspan: 2,
              textAlign: 'center',
              width: 30,
            },
            {
              id: '04',
              head: '棚札No',
              rowspan: 2,
              textAlign: 'center',
              width: 45,
            },
            { id: '05', head: 'ゾーン', textAlign: 'left', width: 100 },
            { id: '06', head: '区分', textAlign: 'left', width: 100 },
            {
              id: '07',
              head: '品目名称(略式名称)',
              rowspan: 2,
              textAlign: 'left',
              width: 230,
            },
            {
              id: '08',
              head: '在庫数量',
              commaNumber: true,
              textAlign: 'right',
              width: 80,
            },
            {
              id: '09',
              head: '差異数量',
              commaNumber: true,
              rowspan: 2,
              textAlign: 'right',
              width: 80,
            },
            {
              id: '10',
              head: '単位',
              rowspan: 2,
              textAlign: 'center',
              width: 30,
            },
            {
              id: '11',
              head: '在庫数量',
              commaNumber: true,
              textAlign: 'right',
              width: 100,
            },
            {
              id: '12',
              head: '単位',
              rowspan: 2,
              textAlign: 'center',
              width: 30,
            },
            {
              id: '13',
              head: '在庫',
              textAlign: 'right',
              width: 80,
            },
          ],
          [
            {
              id: '14',
              head: 'ゾーン(略式名称)',
              textAlign: 'left',
              width: 100,
            },
            { id: '15', head: '品目コード', textAlign: 'left', width: 100 },
            {
              id: '16',
              head: '棚卸数量',
              commaNumber: true,
              textAlign: 'right',
              width: 100,
            },
            {
              id: '17',
              head: '棚卸数量',
              commaNumber: true,
              textAlign: 'right',
              width: 100,
            },
            {
              id: '18',
              head: '棚卸',
              textAlign: 'right',
              width: 80,
            },
          ],
        ]"
        :data="[
          [
            { id: '01', datum: '1' },
            { id: '02' },
            { id: '03' },
            { id: '04', datum: '02060' },
            { id: '05', datum: '999' },
            { id: '06', datum: '原材料' },
            { id: '07', datum: 'カートン　Gチェダーチーズ オキナワ 2KG' },
            { id: '08', datum: '0' },
            { id: '09', datum: '1200' },
            { id: '10', datum: 'コ' },
            { id: '11', datum: '0' },
            { id: '12', datum: 'コ' },
            { id: '13', datum: '' },
          ],
          [
            { id: '14', datum: '阿見原材料共通' },
            { id: '15', datum: '026641' },
            { id: '16', datum: '1200' },
            { id: '17', datum: '0' },
            { id: '18', datum: '' },
          ],
          [
            { id: '01', datum: '2' },
            { id: '02' },
            { id: '03' },
            { id: '04', datum: '02067' },
            { id: '05', datum: '999' },
            { id: '06', datum: '原材料' },
            { id: '07', datum: 'カートン　ギョウムヨウチーズ カクN 2KG' },
            { id: '08', datum: '0' },
            { id: '09', datum: '600' },
            { id: '10', datum: 'コ' },
            { id: '11', datum: '0' },
            { id: '12', datum: 'コ' },
            { id: '13', datum: '' },
          ],
          [
            { id: '14', datum: '阿見原材料共通' },
            { id: '15', datum: '028718' },
            { id: '16', datum: '600' },
            { id: '17', datum: '0' },
            { id: '18', datum: '' },
          ],
        ]"
      />

      <PagingWithChangeCurrent
        x="285"
        y="180"
        :currentPage="1"
        :totalPage="5"
        :page-input-width="30"
        :change-page="
          () => {
            console.info('change page')
          }
        "
        :set-page-button="{
          title: '頁指定',
          width: '40',
          onClick: () => {
            console.info('set page')
          },
        }"
        :pre-page-button="{
          title: '<',
          width: '40',
          onClick: () => {
            console.info('pre page')
          },
        }"
        :next-page-button="{
          title: '>',
          width: '40',
          onClick: () => {
            console.info('next')
          },
        }"
      />
    </div>
  </div>

  <!-- No.114 -->

  <!-- No.115 -->

  <!-- No.116 -->

  <!-- No.117 -->

  <!-- No.118 -->

  <!-- No.119 -->
  <div style="height: 6rem">
    <div>
      No.119 スプレッドシート19(1列は複数列で構成,列の分割数が異なる 例:(
      ヘッダ／ボディ ) 1/2 )
    </div>
    <div>
      <TableCommon
        width="50rem"
        :heads="[
          [
            {
              id: 'CD',
              head: '製品CD',
              colspan: 2,
              headTextAlign: 'left',
            },
            {
              id: 'name',
              head: '製品名称',
              colspan: 3,
              headTextAlign: 'left',
            },
            {
              id: 'expiration-date',
              head: '賞味期限',
              textAlign: 'center',
            },
            {
              id: 'quantity',
              head: '出荷予定数',
              colspan: 2,
            },
          ],
        ]"
        :data="[
          [
            { id: 'select', datum: '選択' },
            { id: 'factoryCD', datum: '工場CD' },
            { id: 'factory-name', datum: '工場名称' },
            { id: 'productCD', datum: '製品CD' },
            { id: 'product-name', datum: '製品名称' },
            { id: 'expiration-date', datum: '2023-01-01' },
            { id: 'palletNo', datum: 'パレットNo.' },
            { id: 'shipment-quantity', datum: '出荷実績数' },
          ],
        ]"
      />
    </div>
  </div>
  <!-- No.120 -->

  <!-- No.121 -->
  <div style="height: 20rem">
    <div>
      No.121 スプレッドシート21(1列は複数列で構成,列の分割数が異なる 例:( 上／下
      ) 2/4)
    </div>
    <div>
      <TableCommon
        height="17rem"
        :heads="[
          [
            {
              id: 'select',
              head: '選\n択',
              datumType: 'checkbox',
              rowspan: 2,
              textAlign: 'left',
              width: '20px',
            },
            {
              id: 'budget-actual',
              head: '予実',
              textAlign: 'center',
              width: '60px',
            },
            {
              id: 'received-date',
              head: '受信日',
              width: '60px',
            },
            {
              id: 'shipping-location',
              head: '出荷場所',
              width: '230px',
            },
            {
              id: 'raw-materials',
              head: '原材料',
              colspan: 6,
              width: '120px',
            },
            {
              id: 'delivery-number',
              head: '納入番号',
              width: '50px',
            },
            {
              id: 'sales-destination',
              head: '売却先',
              colspan: 2,
              width: '230px',
            },
          ],
          [
            {
              id: 'status',
              head: '状態',
              textAlign: 'center',
              width: '60px',
            },
            {
              id: 'date',
              head: '日付',
              width: '60px',
            },
            {
              id: 'receiving-location',
              head: '入荷場所',
              width: '230px',
            },
            {
              id: 'quantity',
              head: '数量',
              colspan: 2,
            },
            {
              id: 'unit',
              head: '単位',
            },
            {
              id: 'payment-date',
              head: '払出日',
              colspan: 2,
            },
            {
              id: 'business-partner',
              head: '取引先',
              colspan: 2,
            },
            {
              id: 'expiration-date',
              head: '賞味期限',
            },
            {
              id: 'lot-sub',
              head: 'ロット-SUB',
            },
          ],
        ]"
        :data="[
          [
            { id: 'select', rowspan: '4' },
            { id: 'budget-actual', datum: '予定' },
            { id: 'received-date', datum: '' },
            { id: 'shipping-location', datum: '' },
            { id: 'raw-materials', datum: '' },
            { id: 'delivery-number', datum: '' },
            {
              id: 'sales-destination',
              datum: '000001-店名称４５６７８９０１２３４５',
            },
          ],
          [
            { id: 'status', datum: '' },
            { id: 'date', datum: '' },
            { id: 'receiving-location', datum: '' },
            { id: 'quantity', datum: '' },
            { id: 'unit', datum: '' },
            {
              id: 'payment-date',
              datum: '',
            },
            {
              id: 'business-partner',
              datum: '',
            },
            {
              id: 'expiration-date',
              datum: '2013/08/30',
            },
            {
              id: 'lot-sub',
              datum: '1234567890-123456',
            },
          ],
          [
            { id: 'budget-actual', datum: '実績' },
            { id: 'received-date', datum: '2013/03/31' },
            {
              id: 'shipping-location',
              datum: '000044-100-001-000 キョクレイ大黒',
            },
            { id: 'raw-materials', datum: '024741  AST  クリームLGB 20KG' },
            { id: 'delivery-number', datum: '' },
            {
              id: 'sales-destination',
              datum: '000001-店名称４５６７８９０１２３４５',
            },
          ],
          [
            { id: 'status', datum: '' },
            { id: 'date', datum: '2013/03/31' },
            {
              id: 'receiving-location',
              datum: '000044-100-002-000 (株)キョクレイ大黒',
            },
            { id: 'quantity', datum: '' },
            { id: 'unit', datum: '' },
            {
              id: 'payment-date',
              datum: '',
            },
            {
              id: 'business-partner',
              datum: '',
            },
            {
              id: 'expiration-date',
              datum: '',
            },
            {
              id: 'lot-sub',
              datum: '',
            },
          ],
          [
            { id: 'select', rowspan: '4' },
            { id: 'budget-actual', datum: '予定' },
            { id: 'received-date', datum: '' },
            { id: 'shipping-location', datum: '' },
            { id: 'raw-materials', datum: '' },
            { id: 'delivery-number', datum: '' },
            {
              id: 'sales-destination',
              datum: '000001-店名称４５６７８９０１２３４５',
            },
          ],
          [
            { id: 'status', datum: '' },
            { id: 'date', datum: '' },
            { id: 'receiving-location', datum: '' },
            { id: 'quantity', datum: '' },
            { id: 'unit', datum: '' },
            {
              id: 'payment-date',
              datum: '',
            },
            {
              id: 'business-partner',
              datum: '',
            },
            {
              id: 'expiration-date',
              datum: '2013/08/30',
            },
            {
              id: 'lot-sub',
              datum: '1234567890-123456',
            },
          ],
          [
            { id: 'budget-actual', datum: '実績' },
            { id: 'received-date', datum: '2013/03/31' },
            {
              id: 'shipping-location',
              datum: '000044-100-001-000 キョクレイ大黒',
            },
            { id: 'raw-materials', datum: '024741  AST  クリームLGB 20KG' },
            { id: 'delivery-number', datum: '' },
            {
              id: 'sales-destination',
              datum: '000001-店名称４５６７８９０１２３４５',
            },
          ],
          [
            { id: 'status', datum: '' },
            { id: 'date', datum: '2013/03/31' },
            {
              id: 'receiving-location',
              datum: '000044-100-002-000 (株)キョクレイ大黒',
            },
            { id: 'quantity', datum: '' },
            { id: 'unit', datum: '' },
            {
              id: 'payment-date',
              datum: '',
            },
            {
              id: 'business-partner',
              datum: '',
            },
            {
              id: 'expiration-date',
              datum: '',
            },
            {
              id: 'lot-sub',
              datum: '',
            },
          ],
          [
            { id: 'select', rowspan: '4' },
            { id: 'budget-actual', datum: '予定' },
            { id: 'received-date', datum: '' },
            { id: 'shipping-location', datum: '' },
            { id: 'raw-materials', datum: '' },
            { id: 'delivery-number', datum: '' },
            {
              id: 'sales-destination',
              datum: '000001-店名称４５６７８９０１２３４５',
            },
          ],
          [
            { id: 'status', datum: '' },
            { id: 'date', datum: '' },
            { id: 'receiving-location', datum: '' },
            { id: 'quantity', datum: '' },
            { id: 'unit', datum: '' },
            {
              id: 'payment-date',
              datum: '',
            },
            {
              id: 'business-partner',
              datum: '',
            },
            {
              id: 'expiration-date',
              datum: '2013/08/30',
            },
            {
              id: 'lot-sub',
              datum: '1234567890-123456',
            },
          ],
          [
            { id: 'budget-actual', datum: '実績' },
            { id: 'received-date', datum: '2013/03/31' },
            {
              id: 'shipping-location',
              datum: '000044-100-001-000 キョクレイ大黒',
            },
            { id: 'raw-materials', datum: '024741  AST  クリームLGB 20KG' },
            { id: 'delivery-number', datum: '' },
            {
              id: 'sales-destination',
              datum: '000001-店名称４５６７８９０１２３４５',
            },
          ],
          [
            { id: 'status', datum: '' },
            { id: 'date', datum: '2013/03/31' },
            {
              id: 'receiving-location',
              datum: '000044-100-002-000 (株)キョクレイ大黒',
            },
            { id: 'quantity', datum: '' },
            { id: 'unit', datum: '' },
            {
              id: 'payment-date',
              datum: '',
            },
            {
              id: 'business-partner',
              datum: '',
            },
            {
              id: 'expiration-date',
              datum: '',
            },
            {
              id: 'lot-sub',
              datum: '',
            },
          ],
        ]"
      />
    </div>
  </div>

  <!-- No.122 -->

  <!-- No.123 -->

  <!-- No.124 -->

  <!-- No.125 -->

  <!-- No.126 -->

  <!-- No.127 -->

  <!-- No.128 -->

  <!-- No.129 -->

  <!-- No.130 -->

  <!-- No.131 -->

  <!-- No.132 -->

  <!-- No.133 -->

  <!-- No.134 -->

  <!-- No.135 -->

  <!-- No.136 -->

  <!-- No.137 -->
  <div>
    <div>No.137 番号（番号表示）</div>
    <TextNumberDisplay
      label="* 出荷場所"
      :data="['XXXXXX', 'XXX', 'XXX', 'XXX']"
      textValue="ＮＮＮＮＮＮＮＮＮＮＮＮＮ"
    />
    <br />
    <TextNumberDisplay label="出荷場所" />
  </div>

  <!-- No.138 -->

  <!-- No.139 -->

  <!-- No.140 -->
  <div style="height: 5rem">
    <div>No.140 画面 ID テキスト</div>
    <TextPageID pageId="YPMGNSF071M" />
  </div>

  <!-- No.141 -->
  <div>
    <div>No.141 項目ラベル</div>
    <BaseLabel label="example" label-width="6rem" />
    <br />
    <BaseLabel
      label="example"
      label-width="8rem"
      label-background="lightpink"
    />
  </div>

  <!-- No.142 -->
  <div>
    <div>No.142 項目ボックス</div>
    <ItemWrapper label="example" />
  </div>

  <!-- No.143 -->
  <div>
    <div>
      <div>No.143 プレッドシートデータセルミックス</div>
      <table style="border-collapse: collapse; width: 50rem; height: 4rem">
        <tbody>
          <tr>
            <TableDatumMix type="checkbox" text-align="center" />
            <TableDatumMix
              type="dropdown"
              :options="[
                {
                  disabled: true,
                  display: '-- please select charactor --',
                  value: '',
                },
                { display: '下江コハル' },
                { display: '棗イロハ' },
                { display: '春原ココナ' },
              ]"
            />
            <TableDatumMix :datum="123456" />
            <TableDatumMix
              datum="456789"
              text-align="center"
              :comma-number="false"
            />
            <TableDatumMix type="button" button-title="example" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- No.144 -->
  <div>
    <div>№144:日付開始終了（年月日時分秒</div>
    <DateInputYMDHmsStartEnd label="取込日時" />
  </div>

  <!-- No.145 -->

  <!-- No.146 -->

  <!-- No.147 -->

  <!-- No.148 -->

  <!-- No.149 -->

  <!-- No.150 -->

  <!-- No.151 -->

  <!-- No.152 -->
  <div style="height: 200px">
    <div>No.152 コード検索ツリー</div>
    <TreeSearch />
  </div>
  <!-- No.153 -->

  <!-- No.154 -->

  <!-- No.155 -->

  <!-- No.156 -->

  <!-- No.157 -->

  <!-- No.158 -->
  <div>
    <div>No.158:link text</div>
    <LinkText text="3671" target="_blank" /><br />
    <LinkText text="4417" target="_self" />
  </div>

  <!-- No.159 -->
  <div>
    <div>No.159:入力_説明</div>
    <InputWithDescription :disabled="false" width="100" description="G" />
  </div>

  <!-- No.160 -->
  <div>
    <div>No.160 スプレッドシートセルボックス</div>
    <TableDatumButton button-title="example" />
  </div>

  <!-- No.161 -->
  <div>
    <div>№161:グループボックス</div>
    <GroupBox
      height="120"
      width="180"
      border-style="2px solid rgb(53, 105, 237)"
    />
  </div>

  <!-- No.162日付入力欄（年月日・年月日時分秒・年月・年月日時分秒曜日切り替え可） -->
  <div>
    <div>No.162日付入力欄</div>
    <label>払出日:</label> <DateInput type="time" />
  </div>

  <div>
    <div>№163:日付入力欄（年・月・日切り替え可）</div>
    <BaseSingleDateInput />
  </div>
</template>

<script setup lang="ts">
import BaseCheckbox from '@/components/atoms/BaseCheckbox.vue'
import BaseDivider from '@/components/atoms/BaseDivider.vue'
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import BaseNumberInput from '@/components/atoms/BaseNumberInput.vue'
import BaseLabel from '@/components/atoms/BaseLabel.vue'
import BasePageTitle from '@/components/atoms/BasePageTitle.vue'
import BaseRadioButton from '@/components/atoms/BaseRadioButton.vue'
import BaseSingleDateInput from '@/components/atoms/BaseSingleDateInput.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import BaseTextarea from '@/components/atoms/BaseTextarea.vue'
import BaseTextInput from '@/components/atoms/BaseTextInput.vue'
import BaseTime from '@/components/atoms/BaseTime.vue'
import BaseTimeInput from '@/components/atoms/BaseTimeInput.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import DateInput from '@/components/atoms/DateInput.vue'
import DateInputYMD from '@/components/atoms/DateInputYMD.vue'
import DateInputYMDHms from '@/components/atoms/DateInputYMDHms.vue'
import DateInputYearMonthWithDropdown from '@/components/molecules/DateInputYearMonthWithDropdown.vue'
import DateInputYearMonthDouble from '@/components/molecules/DateInputYearMonthDouble.vue'
import DateInputYearMonthWithDoubleDate from '@/components/molecules/DateInputYearMonthWithDoubleDate.vue'
import DateInputYearMonthDayWithDoubleDate from '@/components/molecules/DateInputYearMonthDayWithDoubleDate.vue'
import DateInputYearWithDropdown from '@/components/molecules/DateInputYearWithDropdown.vue'
import GroupBox from '@/components/atoms/GroupBox.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'
import TableHead from '@/components/atoms/TableHead.vue'
import TableHeadMarked from '@/components/atoms/TableHeadMarked.vue'
import TextExtendCannotChangeBgColor from '@/components/atoms/TextExtendCannotChangeBgColor.vue'
import TextExtendCanChangeBgColor from '@/components/atoms/TextExtendCanChangeBgColor.vue'
import TextTimeSelectHMDouble from '@/components/molecules/TextTimeSelectHMDouble.vue'
import TextTimeSelectHMDoubleWithClearButton from '@/components/molecules/TextTimeSelectHMDoubleWithClearButton.vue'

import ButtonGroup from '@/components/molecules/ButtonGroup.vue'
import ButtonGroupSelectAll from '@/components/molecules/ButtonGroupSelectAll.vue'
import ButtonWithText from '@/components/molecules/ButtonWithText.vue'
import CheckboxText from '@/components/molecules/CheckboxText.vue'
import ConfirmationDialog from '@/components/molecules/ConfirmationDialog.vue'
import CheckboxGroup from '@/components/molecules/CheckboxGroup.vue'
import DateInputYMDHmsStartEnd from '@/components/molecules/DateInputYMDHmsStartEnd.vue'
import DateInputYMWithDropdownD from '@/components/molecules/DateInputYMWithDropdownD.vue'
import DropdownInputSearchButtonWithResult from '@/components/molecules/DropdownInputSearchButtonWithResult.vue'
import DropdownInputYM from '@/components/molecules/DropdownInputYM.vue'
import DropdownInputYMD from '@/components/molecules/DropdownInputYMD.vue'
import FileUpload from '@/components/molecules/FileUpload.vue'
import InputHourSelectMin from '@/components/molecules/InputHourSelectMin.vue'
import InputHourMinuteEditable from '@/components/molecules/InputHourMinuteEditable.vue'
import InputHourMinuteReadonly from '@/components/molecules/InputHourMinuteReadonly.vue'
import InputSearchButtonWithResult from '@/components/molecules/InputSearchButtonWithResult.vue'
import InputWithDescription from '@/components/molecules/InputWithDescription.vue'
import LinkText from '@/components/atoms/LinkText.vue'
import NumberInputFree from '@/components/molecules/NumberInputFree.vue'
import PageChangeButtonGroupWithPaging from '@/components/molecules/PageChangeButtonGroupWithPaging.vue'
import PagingSample from '@/components/molecules/PagingSample.vue'
import PagingWithChange from '@/components/molecules/PagingWithChange.vue'
import RadioButtonDateInputYM from '@/components/molecules/RadioButtonDateInputYM.vue'
import RadioButtonDateInputYMWithDropdown from '@/components/molecules/RadioButtonDateInputYMWithDropdown.vue'
import PagingWithChangeCurrent from '@/components/molecules/PagingWithChangeCurrent.vue'
import RadioButtonGroup from '@/components/molecules/RadioButtonGroup.vue'
import RadioButtonDateInputYMDDouble from '@/components/molecules/RadioButtonDateInputYMDDouble.vue'
import RadioGroupInputSearchButtonWithResult from '@/components/molecules/RadioGroupInputSearchButtonWithResult.vue'
import SelectStartYMDInputEndDay from '@/components/molecules/SelectStartYMDInputEndDay.vue'
import TableCommon from '@/components/molecules/TableCommon.vue'
import TableCommonLengthways from '@/components/molecules/TableCommonLengthways.vue'
import TableDatumButton from '@/components/molecules/TableDatumButton.vue'
import TableDatumDropdown from '@/components/molecules/TableDatumDropdown.vue'
import TableDatumMix from '@/components/molecules/TableDatumMix.vue'
import TableDateText from '@/components/molecules/TableDatumText.vue'
import TextareaButton from '@/components/molecules/TextareaButton.vue'
import TextDateInputYM from '@/components/molecules/TextDateInputYM.vue'
import TextDateInputYMDDouble from '@/components/molecules/TextDateInputYMDDouble.vue'
import TextDateInputYMDHmsStartEnd from '@/components/molecules/TextDateInputYMDHmsStartEnd.vue'
import TextDateInputYMDouble from '@/components/molecules/TextDateInputYMDouble.vue'
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'
import TextNumberDisplay from '@/components/molecules/TextNumberDisplay.vue'
import TextPageID from '@/components/molecules/TextPageID.vue'
import TimeSelectHMDouble from '@/components/molecules/TimeSelectHMDouble.vue'
import TotalAllItems from '@/components/atoms/TotalAllItems.vue'
import TotalAllItemsCanChangeColor from '@/components/molecules/TotalAllItemsCanChangeColor.vue'
import TotalAllItemsTable from '@/components/molecules/TotalAllItemsTable.vue'
import TreeSearch from '@/components/molecules/TreeSearch.vue'

import { MSGPositions, MSGTypes } from '@/enums'
import type { Button } from '@/types/components/button'
import { handlerMessage } from '@/utils/message'
import { useDialog } from '@/stores/dialog'

function showDialog(msg: string) {
  const { setShowDialog } = useDialog()
  const buttonConfigs: Button.Config[] = [
    {
      title: 'はい',
      disabled: false,
      width: '80',
      height: '15',
      onClick: () => {},
    },
    {
      title: 'いいえ',
      disabled: false,
      width: '80',
      height: '15',
      onClick: () => {
        setShowDialog(false)
      },
    },
  ]
  handlerMessage(MSGPositions.POPUP, MSGTypes.ERROR, msg, buttonConfigs)
}
</script>

<style scoped>
#app > * {
  margin-bottom: 1rem;
  background-color: #eee;
  padding: 1rem;
  position: relative;
  box-sizing: border-box;
}

.base-divider {
  position: static !important;
}

.custom-table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
