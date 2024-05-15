<template>
  <div class="page">
    <div class="title">JCFFieldString</div>
    <div class="component">
      <JCFFieldString
        :id="`string1`"
        :editable="false"
        :borderType="JFLineType.NOTHING"
        :name="`JCFFieldString1`"
        :focusable="false"
        :caretVisible="false"
        :text="`test01`"
      />
    </div>
    <div class="component">
      <JCFFieldString
        :id="`string2`"
        :editable="true"
        :borderType="JFLineType.NOTHING"
        :name="`JCFFieldString2`"
        :focusable="false"
        :caretVisible="false"
        :text="`test02`"
      />
    </div>
    <div class="component">
      <div class="sub-title">数字と英字：</div>
      <JCFFieldString
        :id="`string3`"
        :editable="true"
        :inputMode="JFField.MODE_NATIVE"
        :name="`JCFFieldString3`"
        :maxLength="5.0"
        :maxByteLength="5.0"
        :enableType="JFEnableType.TYPE_DIGIT | JFEnableType.TYPE_LETTER"
        :text="`test03`"
      />
    </div>
    <div class="component">
      <div class="sub-title">数字のみ　：</div>
      <JCFFieldString
        :id="`string4`"
        :editable="true"
        :inputMode="JFField.MODE_NATIVE"
        :name="`JCFFieldString4`"
        :enableType="JFEnableType.TYPE_DIGIT"
        :text="`test04`"
      />
    </div>

    <div class="title">他の部品</div>
    <div class="component">//todo</div>
  </div>
</template>

<script setup lang="ts">
import {
  JCFFieldString,
  JFLineType,
  JFField,
  JFEnableType,
} from '@/components/jcf/entry'
</script>

<style>
.page {
  border: 2px solid rgb(0, 0, 0);
  height: 100%;
  width: 1034px;
}
.title {
  margin-top: 3px;
  font-size: 16px;
  font-weight: bold;
  background-color: blanchedalmond;
}
.component {
  display: flex;
  flex-direction: row;
  margin: 2px 10px;
  height: 24px;
}
.sub-title {
  height: 100%;
  margin: 0 2px;
  display: flex;
  align-items: center;
}
</style>
