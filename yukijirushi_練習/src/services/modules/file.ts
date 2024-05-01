import { HTTPMethods } from '@/enums'
import { API_URLS } from '@/config'

import { http } from '@/services/axios'

// FIXME: data 及び戻り値にタイプを付ける
export async function checkClientUpload(
  file: File,
  fgTitleUmu: string
): Promise<any> {
  try {
    console.log('uploadApi start')
    const fileName = file.name
    const input = '{' +
      '"logicId":"YEMTSSF470MLogic",' +
      //-----------------
      '"fileUploadMsg": {' +
      '"nmFile": "' + fileName + '",' +
      '"ifUploadDataList": null' +
      '},' +
      //-----------------
      '"commonMsg": {' +
      '"cdKaisha":"1001",' +
      '"cdUser":"0001",' +
      '"cdProgram":"YEMTSSF470M",' +
      '"dtUnyo":"20231215",' +
      '"nmHost":"local",' +
      '"qtSaidaiKensaku":"500",' +
      '"qtSaidaiHyouji":"200"' +
      '},' +
      //-----------------
      '"FileUploadJokenCBMMsg":{' +
      '"fgTitleUmu":"' + fgTitleUmu + '"' +
      '},' +
      //-----------------
      '"UploadRirekiCBMMsg":{' +
      '"cdUploadMenu":"YEMTSSF470M",' +
      '"tmUploadShori":"1",' +
      '"cdKaisha":"1001",' +
      '"cdJisshitantosha":"001",' +
      '"cdUploadUserId":"caz38741",' +
      '"cdSonekikanriSoshiki":"1",' +
      '"nmFile":"' + fileName + '",' +
      '"stUploadShoriJokyo":"30",' +
      '"nuRecordkensu":"",' +
      '"nuErrorRecordKensu":"0",' +
      '"nuTorikomiRecordKensu":"0"' +
      '},' +
      //-----------------
      '"UploadRirekiMeisaiCBMMsgList":[]' +
      //-----------------
      '}'
    const formData = new FormData()
    formData.append('file', file)
    formData.append('input', input)

    // TODO: response
    const response = await http({
      headers: { 'Content-Type': 'multipart/form-data' },
      url: API_URLS.YEMCMNF040M.checkClientUpload,
      method: HTTPMethods.POST,
      data: formData,
    })

    console.log('uploadApi end')
    return response
  } catch (error) {
    console.log('uploadApi error')
    // TODO: error handler
  }
}

// FIXME: data 及び戻り値にタイプを付ける
export async function checkDownload(noSentakuUpload: string): Promise<any> {
  console.log('download start')
  const temp = {
    commonMsg: {
      cdGamen: 'YEMCMNF040M',
      cdKaisha: '3001',
      cdUser: 'caz38741',
      qtSaidaiKensaku: '100',
    },
    UploadRirekiJokenCBMMsg: {
      cdUserID: '',
      nmUserShimei: '',
      tmTorikomiKaishi: '',
      tmTorikomiShuryo: '',
      noSentakuUpload: noSentakuUpload,
      cdUploadMenu: '',
    },
  }

  try {
    //TODO: response
    //csvファイル作成API
    const response = await http({
      url: API_URLS.YEMCMNF040M.download,
      method: HTTPMethods.POST,
      data: temp,
    })

    console.log('download end')
    return response.data
  } catch (error) {
    console.log('download error')
    // TODO: error handler
  }
}

// FIXME: data 及び戻り値にタイプを付ける
export async function downloadFile(data: any): Promise<any> {
  console.log('downloadFile start')
  const temp = {
    nmFile: data.nmFile,
    cdDirectory: data.cdDirectory,
  }

  try {
    //TODO: response
    //csvファイルダウンロードAPI
    const response = await http({
      url: API_URLS.YEMCMNF040M.downloadFile,
      method: HTTPMethods.POST,
      data: temp,
    })

    console.log('downloadFile end')
    return response.data
  } catch (error) {
    console.log('downloadFile error')
    // TODO: error handler
  }
}

// FIXME: data 及び戻り値にタイプを付ける
export async function getUploadRireki(params: any): Promise<any> {
  console.log('getUploadRireki start')
  const temp = {
    commonMsg: {
      dtUnyo: '20231101',
      cdKaisha: '1001',
      qtSaidaiKensaku: '100',
    },
    UploadRirekiJokenCBMMsg: {
      commonMsg: {
        cdKaisha: '1001',
        qtSaidaiKensaku: '100',
      },
      cdUserID: params.txtUserId,
      nmUserShimei: params.txtUserNm ?? '',
      tmTorikomiKaishi: params.datTorikomiKaishi ?? '20231001000000',
      tmTorikomiShuryo: params.datTorikomiSyuryo ?? '20231231235959',
      noSentakuUpload: '',
      cdUploadMenu: 'YEMTSSF470M',
    },
  }

  try {
    //TODO: response
    const response = await http({
      url: API_URLS.YEMCMNF040M.getUploadRireki,
      method: HTTPMethods.POST,
      data: temp,
    })

    console.log('getUploadRireki end')
    return response.data
  } catch (error) {
    console.log('getUploadRireki error')
    // TODO: error handler
  }
}

// FIXME: data 及び戻り値にタイプを付ける
export async function rgsUploadRirekiStatus(data: any): Promise<any> {
  console.log('rgsUploadRirekiStatus start')
  const temp = {
    commonMsg: {
      nmHost: 'zhang-pc',
      dtUnyo: '20231101',
      qtSaidaiKensaku: '100',
      cdUser: 'user1234',
      cdProgram: 'YEMTSSF470M',
      cdKaisha: '3001',
    },
    UploadRirekiCBMMsg: {
      nuRecordbyte: '600',
      tmUpload: '1',
      stUploadShoriJokyo: '30',
      nmschema: 'アップロードが正常終了しました。',
      nuTorikomiRecordKensu: '99',
      cdJisshitantosha: '123456789',
      nmFile: 'テスト',
      nuRecordkensu: '100',
      tmUploadShori: '1',
      nuErrorRecordKensu: '1',
      cdDatanyushumoto: '123456',
      cdUploadMenu: '11000000000',
      cdKaisha: '3001',
      cdUploadUserId: 'user1234',
      noUpload: '000000000002',
      cdSonekikanriSoshiki: '123456',
      cdschemaId: 'YCSCMNMSI019',
    },
    UploadRirekiMeisaiCBMMsgList: [
      {
        noRecord: '10',
        ifKomokuIchi: '0',
        ntKomokuNaiyo: '項目内容',
        nmschema: 'ッセージ',
        noUploadMeisai: '12345678',
        nmKomoku: '項目名',
        cdKaisha: '3001',
        noUpload: '000000000002',
      },
    ],
  }

  try {
    //TODO: response
    const response = await http({
      url: API_URLS.YEMCMNF040M.rgsUploadRirekiStatus,
      method: HTTPMethods.POST,
      data: temp,
    })

    console.log('rgsUploadRirekiStatus end')
    return response.data
  } catch (error) {
    console.log('rgsUploadRirekiStatus error')
    // TODO: error handler
  }
}
