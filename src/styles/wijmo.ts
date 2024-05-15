import { insertCSS } from '@/utils/css/insertCSS'

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

import * as wjcCore from '@grapecity/wijmo'

/**
 * Wijmo ライセンスキー使用説明
 * @see https://itacsolution.sharepoint.com/sites/megmilksnow/_layouts/15/Doc.aspx?sourcedoc={2794e86a-c997-4aa3-9d82-6fc59c04c1b9}&action=edit&wd=target%28%E6%A5%AD%E5%8B%99%E3%83%AD%E3%82%B8%E3%83%83%E3%82%AF%E6%A4%9C%E8%A8%8E.one%7C7ef69dea-fd25-4630-a6a1-da48a95e6f05%2FWijmo%20%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9%E3%82%AD%E3%83%BC%20%E4%BD%BF%E7%94%A8%E8%AA%AC%E6%98%8E%7C1a2ad5e9-4a1e-4d81-a756-763a0ba17a64%2F%29&wdorigin=703
 */
wjcCore.setLicenseKey(
  '477492474881697#B0XzzWYmpjIyNHZisnOiwmbBJye0ICRiwiI34TUuJFMStWbqFzZ8MGbHx6NhZ5ROlTdolGen9GUvx4KBRXNPVUW5Y5SaplcG3UbQVTOYp6atB5L8MzKodjQ7ImQINzRylVW4IWTlxWR0BVOORXRQRjMHNXO6l5K9BTd92EOrITTGt6K8AVZNtkdvlTYY3CTEpEdsVTc6QXQERVd7R7diR5Y6VmcjB7TJJzUSFESvIDOldEZyE4ZFpkZolWT6lFWZN5SGVVUy2mUOB5cyVXMBtCd8dzUXJkcW9kUrQkQFlkQ6cHMGR7NpF7boJWd5tkZwIWWDF4ZTl7b4ckbqRFe6llNBJWd5FzcBNUdsVVZRRTO584KYh7cnBFaUlncQd6SUxGRk9ka7cmepVESaF4KtZ5Q6gVc48kYHxWekJ7bmZTUzN4ZRhkR7Y4TKdWWOlFePZmMMdDcpVkdxNlcvQ6KNBjRGlVOstCeoR5ZhNVOYNmTQdkI0IyUiwiIyQURygTRwEjI0ICSiwyNyYDN8kDNxcTM0IicfJye&Qf35VfikEMyIlI0IyQiwiIu3Waz9WZ4hXRgACdlVGaThXZsZEIv5mapdlI0IiTisHL3JSNJ9UUiojIDJCLi86bpNnblRHeFBCIyV6dllmV4J7bwVmUg2Wbql6ViojIOJyes4nILdDOIJiOiMkIsIibvl6cuVGd8VEIgc7bSlGdsVXTg2Wbql6ViojIOJyes4nI4YkNEJiOiMkIsIibvl6cuVGd8VEIgAVQM3EIg2Wbql6ViojIOJyes4nIzMEMCJiOiMkIsISZy36Qg2Wbql6ViojIOJyes4nIVhzNBJiOiMkIsIibvl6cuVGd8VEIgQnchh6QsFWaj9WYulmRg2Wbql6ViojIOJyebpjIkJHUiwiI4IjNwcDMgATM5AzMyAjMiojI4J7QiwiIx8CMuAjL7ITMiojIz5GRiwiI+S09ayL9Pyb9qCq9jK88GO887K88XO882O88sO88wK88iojIh94QiwiI7kjNxgDO4cDNykDN7cDNiojIklkIs4XXbpjInxmZiwiIyY7MyAjMiojIyVmWiDS',
)

// 試用標識を隠す
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
