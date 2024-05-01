import './assets/base.css'
import './assets/main.css'

/**
 * @description Wijmo を正常に表示及び作動させる為に CSS ファイルの導入が必要
 * @see https://demo.mescius.jp/wijmo/docs/GettingStarted/Vue-Components#wijmo-css%E3%81%AE%E8%BF%BD%E5%8A%A0
 */
import '@grapecity/wijmo.styles/wijmo.css'

/**
 * 日本語化カルチャ
 * @description 金額符号等を日本版にする
 * @see https://demo.mescius.jp/wijmo/docs/GettingStarted/QuickStart/QuickStart-Vue3
 */
import '@grapecity/wijmo.cultures/wijmo.culture.ja'

import App from './App.vue'

import { createApp } from 'vue'
import router from './router'
import pinia from './stores'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
