<template>
  
 <BaseTextInput
  :label="`1.従業員コード`"
  labelWidth="152"
      x="40"
      y="48"
      width="90px"
      textAlign="left"
      :needHandle="true"
      v-model="logic.cdJyuugyouin"
      pattern="[0-9A-Z]*"
    />

  <InputSearchButtonWithResult
    x="40"
    y="80"
    type="text"
    label="2.損益管理組織コード"
    maxLength="6"
    :disabled="false"
    labelWidth="152"
    buttonWidth="36"
    inputWidth="48"
    @on-click="logic.GeneralSearch021"
    v-model="logic.Search021Result"

  />

  <RadioButtonGroup
    :x="40"
    :y="112"
    label="3.管理フラグ"
    label-width="152" 
        :isInlineDisplay="true"
        :radios="[
          {
            name: 'radioGroup_Kanri',
            value: 'fujitu',
            disabled: false,
            display: '一般職',
          },
          {
            name: 'radioGroup_Kanri',
            value: 'mitubishi',
            disabled: false,
            display: '管理職',
          },
        
        ]"
        v-model="logic.kanriFlag"
      />

  <BaseDropdown
      x="40"
      y="144"
      label="4.社員区分"
      label-width="152"
      :options="logic.syainKubunOpt"
      v-model="logic.syainKubun"
    />

  <BaseText
    :x="40"
    :y="176"
    :height="24"
    :width="96"
    :label="`5.従業員名称`"
    :font-size="14"
  />
  <BaseText
    :x="184"
    :y="176"
    :height="24"
    :width="16"
    :label="`:`"
    :font-size="14"
  />
  <BaseText
    :x="200"
    :y="176"
    :height="24"
    :width="48"
    :label="`(苗字)`"
    :font-size="14"
  />

  <BaseTextInput
      label="&nbsp;"
      :x="175"
      :y="208"
      width="140px"
      textAlign="left"
      value="temp"
      :needHandle="true"
      v-model="logic.jyuugyouinMj"
    />

    <BaseText
    :x="360"
    :y="176"
    :height="24"
    :width="48"
    :label="`(名前)`"
    :font-size="14"
  />

  <BaseTextInput
      :x="360"
      :y="208"
      width="140px"
      textAlign="left"
      value="temp"
      :needHandle="true"
      v-model="logic.jyuugyouinNm"

    />


  <BaseText
    :x="40"
    :y="240"
    :height="24"
    :width="128"
    :label="`6.従業員カナ名称`"
    :font-size="14"
  />
  <BaseText
    :x="184"
    :y="240"
    :height="24"
    :width="16"
    :label="`:`"
    :font-size="14"
  />
  <BaseText
    :x="200"
    :y="240"
    :height="24"
    :width="48"
    :label="`(苗字)`"
    :font-size="14"
  />

  <BaseTextInput
      label="&nbsp;"
      :x="175"
      :y="270"
      width="140px"
      textAlign="left"
      value="temp"
      v-model="logic.jyuugyouinKanaMj"

    />

  <BaseText
    :x="360"
    :y="240"
    :height="24"
    :width="48"
    :label="`(名前)`"
    :font-size="14"
  />
  <BaseTextInput
      :x="360"
      :y="270"
      width="140px"
      textAlign="left"
      value="temp"
      v-model="logic.jyuugyouinKanaNm"
    />

  <BaseTextInput
      :label="`7.メールアドレス`"
      labelWidth="152"
      :x="40"
      :y="304"
      width="430px"
      textAlign="left"
      value="temp"
      v-model="logic.mail"
    />

  <BaseDropdown
      :x="40"
      :y="336"
      label="8.在籍区分"
      label-width="152"
      :options="logic.zaisekiKubunOpt"
      v-model="logic.zaisekiKubun"
    />

  <RadioButtonGroup
    :x="40"
    :y="368"
    label="9.休職判定フラグ"
    label-width="152" 
    :isInlineDisplay="true"
   :radios="[
     {
      name: 'radioGroupA',
      value: '1',
      display: '対象',
    },
     {
      name: 'radioGroupA',
      value: '01',
      display: '対象外',
  },     
   ]"
    v-model="logic.kyuusyokuhanteiFlag"
   
   />
    <RadioButtonGroup
    :x="40"
    :y="400"
    label="10.退職判定フラグ"
    label-width="152" 
        :isInlineDisplay="true"
        :radios="[
          {
            name: 'radioGroupB',
            value: '1',
            display: '対象',
          },
          {
            name: 'radioGroupB',
            value: '01',
            display: '対象外',
          },        
        ]"
    v-model="logic.taisyokuhanteiFlag"
      />

  <DateInputYMD   
    :x="32"
    :y="432"
    label="11.休職開始年月日"
    label-width="161" 
    :display-weekday="true" 
    type="date"
    v-model="logic.kyuusyokuKaishi"
    />

  <DateInputYMD     
    :x="32"
    :y="464"
    label="12.退職年月日"
    label-width="161" 
    :display-weekday="true" />
  
  <DateInputYMD     
  :x="528"
  :y="336"
  label="13.入社日"
  label-width="104" 
  :display-weekday="true" />

  <DateInputYMD     
  :x="800"
  :y="336"
  label="14.SS終了日"
  label-width="104" 
  :display-weekday="true" />


  <BaseTextInput
  :label="`15.作成日時`"
  labelWidth="104"
    :x="528"
    :y="368"
      width="185px"
      textAlign="left"
      value="temp"
      v-model="logic.sakuseiNj"
    />

 
  <BaseTextInput
  :label="`16.作成者`"
  labelWidth="104"
    :x="528"
    :y="400"
      width="395px"
      textAlign="left"
      value="temp"
      v-model="logic.sakuseiSya"
    />

  <BaseTextInput
      :label="`17.更新日時`"
      labelWidth="104"
      :x="528"
      :y="432"
      width="185px"
      textAlign="left"
      value="temp"
      v-model="logic.koushinNj"
    />

    <BaseTextInput
      :label="`18.更新者`"
      labelWidth="104"
      :x="528"
      :y="464"
      width="395px"
      textAlign="left"
      value="temp"
      v-model="logic.koushinSya"
    />

 
  <ButtonExtend
    button-title="削除"
    :disabled="false"
    button-width="56"
    button-height="24"
    :x ="56"
    :y ="16"
    v-model="logic.body_delete"

    />
  <ButtonExtend
    :x ="120"
    :y ="16"
    :disabled="false"
    button-width="56"
    button-height="24"
    button-title="複写"
    v-model="logic.body_copy"
    
  />
  <ButtonExtend
    :x ="184"
    :y ="16"
    :disabled="false"
    button-width="88"
    button-height="24"
    button-title="削除解除"
    v-model="logic.body_cancel"
  />
  <PagingWithChange
      :x ="830"
      :y ="8"
      :pre-page-button="{
        title: '前のデータ',
        width: '60',
        height: '20',
        disabled:true,
       
      }"
      :next-page-button="{
        title: '次のデータ',
        width: '60',
        height: '20',
        disabled:true,
      }"
    :current-page="logic.currenPage"
    :totalPage= "logic.totalPage"
    />
      <!-- 
     , -->   
     <BaseText 
     :label="logic.message" 
     x="8"
     y="545"
     />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import CheckboxText from '@/components/molecules/CheckboxText.vue'
import InputSearchButtonWithResult from '@/components/molecules/InputSearchButtonWithResult.vue'
import BaseTextInput from '@/components/atoms/BaseTextInput.vue'
import DateInput from '@/components/atoms/DateInput.vue'
import RadioButtonGroup from '@/components/molecules/RadioButtonGroup.vue'
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import PagingWithChange from '@/components/molecules/PagingWithChange.vue'



// ロジックを導入する。
import useYCMKMSFB31SLogic from './YCMKMSFB31S-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive } from 'vue'

const logic = reactive(useYCMKMSFB31SLogic())
</script>