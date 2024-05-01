import { DISABLECHARS1, DISABLECHARS2, DISABLECHARS3, DISABLECHARS4, DISABLECHARS5, DISABLECHARS6 } from "./disabled-chars"

export function downloadToLocal(csvData: any) {
  const fileName = 'test_download'
  const link = document.createElement('a')
  // \ufeff: BOM を付ける。付けないと Excel で開ける際は文字化けになる。
  link.href =
    'data:text/csv;charset=utf-8,' + encodeURIComponent('\ufeff' + csvData)
  link.target = '_blank'
  link.download = `${fileName ?? 'new-item'}.csv`
  link.click()
}

export function checkFile(file: File): boolean {
  let result = true
  const fileName = file.name
  const fileSize = file.size
  const extend = fileName.toLowerCase().substring(fileName.length - 4, fileName.length)

  // 必須入力チェック：ファイル名
  if (!fileName || fileName === null || fileName.trim().length === 0) {
    result = false
  }

  // 拡張子チェック
  if (extend !== '.csv') {
    result = false
  }

  // 禁止文字チェック
  if (hasDisableChars(fileName)) {
    result = false
  }

  // ファイル名長チェック
  const maxLenthFileName = 20
  if (fileName.length > maxLenthFileName) {
    result = false
  }

  // ファイルサイズチェック
  const TEN_MB = 10 * 1024 * 1024
  if (fileSize > TEN_MB) {
    result = false
  }

  return result
}

function hasDisableChars(fileName: string): boolean {
  const checkResult = indexofDisableChar(fileName, 0)

  return checkResult !== -1
}

/**
 * 文字列内の禁止文字の位置を通知します。
 * @param inStr String 走査を行う文字列
 * @param pos int 走査を行う文字列の開始位置
 * @return int 禁止文字が出現した位置、出現しない場合は-1
 */
function indexofDisableChar(inStr: string, pos: number): number {
  // チェック対象の文字列がnullまたは、空文字の場合は、禁止文字がないと判断します。
  if (inStr == null || inStr.length === 0) {
    return -1;
  }

  // チェック開始位置のチェック
  const inStrLen = inStr.length
  if (pos >= inStrLen) {
    return -1;
  }

  // 指定された走査位置からチェック対象の文字列長分、チェックを行います。
  for (let len = pos; len < inStrLen; len++) {
    let ch = inStr.charAt(len);

    /** 外字の開始です。 */
    const GAIJI_START = '0xe000';
    /** 外字の終了です。 */
    const GAIJI_END = '0xe757';

    // 外字の場合は、禁止文字と判断します。
    if (GAIJI_START <= ch && ch <= GAIJI_END) {
      return len;						// 外字の位置を通知します
    }

    const DISABLECHARS = DISABLECHARS1 + DISABLECHARS2 + DISABLECHARS3 + DISABLECHARS4 + DISABLECHARS5 + DISABLECHARS6
    // 禁止文字の文字列長分、チェックを行います。
    for (let cnt = 0; cnt < DISABLECHARS.length; cnt++) {
      if (ch == DISABLECHARS.charAt(cnt)) {
        return len;					// 禁止文字の位置を通知します
      }
    }
  }
  return -1;
}