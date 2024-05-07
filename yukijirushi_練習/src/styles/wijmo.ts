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

import { insertCSS } from '@/utils/css/insertCSS'
if (import.meta.env.DEV) {
  insertCSS(`
div:has(a[href="https://developer.mescius.jp/wijmo/about-license"]) {
  display: none !important;
}
body::after {
  position: fixed;
  content: 'DEV';
  bottom: 0;
  right: 0;
  background-color: orange;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
  font-weight: 550;
}
`)
}
