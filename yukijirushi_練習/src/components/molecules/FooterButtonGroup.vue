<template>
  <ButtonGroup :buttons="buttons" />
</template>

<script lang="ts" setup>
import ButtonGroup from '@/components/molecules/ButtonGroup.vue'

import type { Button } from '@/types/components'

import { useButtonConfig } from '@/stores/button-config'
import { computed } from 'vue'

// ボタンの設定を取得する
const buttonConfigs = useButtonConfig()

// ボタンの表示設定を計算する
const buttons = computed<Button.Config[]>(() =>
  // フッターボタンの設定からボタンの表示設定を作成する
  buttonConfigs.footerButtonConfigs.map<Button.Config>((button) => ({
    ...button,
    // ボタンの幅を設定する、幅が指定されていない場合はデフォルトの幅を使用する
    width: button.width ?? 'var(--base-actionkey-button-width)',
  })),
)
</script>
