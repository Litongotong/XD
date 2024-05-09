// FWClib/properties/client/SMSCheckField.properties

export default {
  // ---------------------------------------------
  //  使用不可文字
  // ---------------------------------------------
  DISABLECHARS1:
    '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]_`abcdefghijklmnopqrstu‾ｇョх援括窮欠合紫潤焉ﾟ∫島煤縺ﾛ∠凵諱ｿ∪',

  DISABLECHARS2:
    '\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾淫戒期釧厚匙囚嘱穿凧諦日琵放愈簾傅哄奧廈戌曉檄滯｡｢L､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜ',

  DISABLECHARS3:
    'ﾝﾞﾟ瓏磅糶脣蕣褝踰鋺顫鴾@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾胤拐棋屑口冊収埴箭蛸蹄乳眉方油練傴哈奬廐戔暾檢漲',

  DISABLECHARS4:
    '｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ瓔',

  DISABLECHARS5: '糺脯蕘襠踴鍄顯鵆@ABCDEFGHIJK',

  DISABLECHARS6: '@ABCDEFGHI¬UVW@ABCDEFGHITUVWXYZ[\\]¬UVW括ｇп',

  // ---------------------------------------------
  // 使用不可文字を置換する文字（1文字目のみ有効）
  // ---------------------------------------------
  // 使用不可文字の置換有無（true：置換する、false：置換しない）
  REPLACE: 'false',
  // 使用不可文字を置換する文字（1文字目のみ有効）
  REPLACE_CHAR: '',

  // ---------------------------------------------
  //  項目の文字種毎のチェックパターン  (正規表現)
  // ---------------------------------------------
  // -- 半角文字 --
  // FIELD_A=[\p{Graph}]+   #2004.10.11 変更
  // FIELD_A=[\p{InHalfwidthandFullwidthForms}\p{ASCII}]+
  FIELD_A: '[\\p{ASCII}]+',
  // -- 普通番号 --
  // FIELD_B=-{0,1}[[\p{Digit}]{1,3},{0,1}]+.{0,1}[\p{Digit}]+   #2013.12.25 変更
  FIELD_B:
    '^[-]?(([1-9]{1}[\\p{Digit}]{0,2}(,[\\p{Digit}]{3})*)|0)(\\.[\\p{Digit}]+$)?',
  // -- 日付 --
  FIELD_D: '([0-9]{4})(12|11|10|0[1-9])(31|[123]0|[012][1-9])',
  // -- E-mailアドレス --
  // FIELD_E=[\p{Alnum}[_][-]]+@{1}[\p{Alnum}[_][-][.]]+ #2022.01.19 KK-XXX-043 UPDATE
  FIELD_E: '[\\p{Alnum}[_][-][.]]+@{1}[\\p{Alnum}[_][-][.]]+',
  // -- フリー --
  FIELD_F: '',
  // -- 英数字 --
  FIELD_H: '[\\p{Alnum}]+',
  // -- 英字 --
  FIELD_I: '[\\p{Alpha}]+',
  // -- 数字（カンマNG) --
  FIELD_N: '[\\p{Digit}]+',
  // -- 数値（カンマOK) --
  FIELD_S: '[\\p{Digit},]+',
  // -- 数値（カンマOK、マイナスOK) --
  FIELD_M: '[\\p{Digit},-]+',
  // -- 自然数 --
  FIELD_NA: '',
  // -- 数値（カンマNG、0チェック) --
  FIELD_SO: '[\\p{Digit}]+',
  // -- 電話番号 --
  // FIELD_T=[0-9]{10,12}
  // FIELD_T=[0-9-]{12,14}
  // FIELD_T=\d{1,4}?-\d{1,4}?-\d{1,4}
  FIELD_T: '\\d{1,5}?-\\d{1,4}?-\\d{1,4}',
  // -- 郵便番号 --
  FIELD_Y: '[\\d]{3}-[\\d]{4}',
  // -- 全角 --
  FIELD_Z: '[^\\p{ASCII}｡-ﾟ]+',
  // -- 英大文字 --
  FIELD_O: '[\\p{Upper}]+',
  // -- 0-9,A-Z --
  FIELD_P: '[0-9A-Z]+',
  // -- 0-9,半角空白 --
  FIELD_NS: '[0-9\\s]+',
  // -- 数値（カンマOK、ピリオドOK) --
  FIELD_SP: '[\\p{Digit},.]+',
  // -- 半角カタカナ --
  FIELD_K: '[ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝﾞﾟｧｨｩｪｫｯｬｭｮｰ]+',
  // -- 単位（製品) --
  FIELD_TS: 'CS| ｺ| ｺ| G,KG| G| G| G,CS| G| G| G,CS| ｺ| ｺ|ML',
  // -- 単位（原材料) --
  FIELD_TG:
    ' ｺ| G| G| G,KG| G| G| G, ｺ|ML|ML|ML, ｺ|MM|MM|MM, ｺ|CM|CM|CM, ｺ| M| M| M, ｺ| G| G| G, ｺ| ｺ| ｺ| ｺ,CT| G| G| G, ｺ|MG|MG|MG,KL| L| L| L,巻|MM|MM|MM,巻|CM|CM|CM,巻| M| M| M,缶| G| G| G,缶|MG|MG|MG,袋| G| G| G,袋|MG|MG|MG,円|円|円|円,缶| L| L| L,缶|ML|ML|ML, ｺ| L| L| L, M| M| M| M, M|MM|MM|MM, M|CM|CM|CM, L|ML|ML|ML, G|MG|MG|MG, ｺ| ｺ| ｺ| G',
  // -- 単位（貯蔵品) --
  FIELD_TC:
    ' ｺ| ｺ| ｺ| ｺ,本|本|本|本,式|式|式|式,足|足|足|足,枚|枚|枚|枚,台|台|台|台,組|組|組|組,円|円|円|円,CS| ｺ| ｺ| ｺ, ｺ|KG|KG|KG, ｺ| L| L| L, ｺ|M3|M3|M3, ｺ| G| G| G',
  // -- 英数字（ハイフン(マイナス)OK） --
  FIELD_HH: '[\\p{Alnum}-]+',
  // -- 禁則文字（指定文字以外：true　指定文字：false） --
  FIELD_DISABLE: '[^|"\',]+',
}
