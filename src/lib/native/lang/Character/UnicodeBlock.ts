import { IllegalArgumentException } from '../IllegalArgumentException'
import { Subset } from './Subset'

enum EUnicodeBlock {
  BASIC_LATIN = 'BASIC_LATIN',
  LATIN_1_SUPPLEMENT = 'LATIN_1_SUPPLEMENT',
  LATIN_EXTENDED_A = 'LATIN_EXTENDED_A',
  LATIN_EXTENDED_B = 'LATIN_EXTENDED_B',
  IPA_EXTENSIONS = 'IPA_EXTENSIONS',
  SPACING_MODIFIER_LETTERS = 'SPACING_MODIFIER_LETTERS',
  COMBINING_DIACRITICAL_MARKS = 'COMBINING_DIACRITICAL_MARKS',
  GREEK = 'GREEK',
  CYRILLIC = 'CYRILLIC',
  CYRILLIC_SUPPLEMENTARY = 'CYRILLIC_SUPPLEMENTARY',
  ARMENIAN = 'ARMENIAN',
  HEBREW = 'HEBREW',
  ARABIC = 'ARABIC',
  SYRIAC = 'SYRIAC',
  ARABIC_SUPPLEMENT = 'ARABIC_SUPPLEMENT',
  THAANA = 'THAANA',
  NKO = 'NKO',
  SAMARITAN = 'SAMARITAN',
  MANDAIC = 'MANDAIC',
  SYRIAC_SUPPLEMENT = 'SYRIAC_SUPPLEMENT',
  ARABIC_EXTENDED_A = 'ARABIC_EXTENDED_A',
  DEVANAGARI = 'DEVANAGARI',
  BENGALI = 'BENGALI',
  GURMUKHI = 'GURMUKHI',
  GUJARATI = 'GUJARATI',
  ORIYA = 'ORIYA',
  TAMIL = 'TAMIL',
  TELUGU = 'TELUGU',
  KANNADA = 'KANNADA',
  MALAYALAM = 'MALAYALAM',
  SINHALA = 'SINHALA',
  THAI = 'THAI',
  LAO = 'LAO',
  TIBETAN = 'TIBETAN',
  MYANMAR = 'MYANMAR',
  GEORGIAN = 'GEORGIAN',
  HANGUL_JAMO = 'HANGUL_JAMO',
  ETHIOPIC = 'ETHIOPIC',
  ETHIOPIC_SUPPLEMENT = 'ETHIOPIC_SUPPLEMENT',
  CHEROKEE = 'CHEROKEE',
  UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS = 'UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS',
  OGHAM = 'OGHAM',
  RUNIC = 'RUNIC',
  TAGALOG = 'TAGALOG',
  HANUNOO = 'HANUNOO',
  BUHID = 'BUHID',
  TAGBANWA = 'TAGBANWA',
  KHMER = 'KHMER',
  MONGOLIAN = 'MONGOLIAN',
  UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED = 'UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED',
  LIMBU = 'LIMBU',
  TAI_LE = 'TAI_LE',
  NEW_TAI_LUE = 'NEW_TAI_LUE',
  KHMER_SYMBOLS = 'KHMER_SYMBOLS',
  BUGINESE = 'BUGINESE',
  TAI_THAM = 'TAI_THAM',
  COMBINING_DIACRITICAL_MARKS_EXTENDED = 'COMBINING_DIACRITICAL_MARKS_EXTENDED',
  BALINESE = 'BALINESE',
  SUNDANESE = 'SUNDANESE',
  BATAK = 'BATAK',
  LEPCHA = 'LEPCHA',
  OL_CHIKI = 'OL_CHIKI',
  CYRILLIC_EXTENDED_C = 'CYRILLIC_EXTENDED_C',
  SUNDANESE_SUPPLEMENT = 'SUNDANESE_SUPPLEMENT',
  VEDIC_EXTENSIONS = 'VEDIC_EXTENSIONS',
  PHONETIC_EXTENSIONS = 'PHONETIC_EXTENSIONS',
  PHONETIC_EXTENSIONS_SUPPLEMENT = 'PHONETIC_EXTENSIONS_SUPPLEMENT',
  COMBINING_DIACRITICAL_MARKS_SUPPLEMENT = 'COMBINING_DIACRITICAL_MARKS_SUPPLEMENT',
  LATIN_EXTENDED_ADDITIONAL = 'LATIN_EXTENDED_ADDITIONAL',
  GREEK_EXTENDED = 'GREEK_EXTENDED',
  GENERAL_PUNCTUATION = 'GENERAL_PUNCTUATION',
  SUPERSCRIPTS_AND_SUBSCRIPTS = 'SUPERSCRIPTS_AND_SUBSCRIPTS',
  CURRENCY_SYMBOLS = 'CURRENCY_SYMBOLS',
  COMBINING_MARKS_FOR_SYMBOLS = 'COMBINING_MARKS_FOR_SYMBOLS',
  LETTERLIKE_SYMBOLS = 'LETTERLIKE_SYMBOLS',
  NUMBER_FORMS = 'NUMBER_FORMS',
  ARROWS = 'ARROWS',
  MATHEMATICAL_OPERATORS = 'MATHEMATICAL_OPERATORS',
  MISCELLANEOUS_TECHNICAL = 'MISCELLANEOUS_TECHNICAL',
  CONTROL_PICTURES = 'CONTROL_PICTURES',
  OPTICAL_CHARACTER_RECOGNITION = 'OPTICAL_CHARACTER_RECOGNITION',
  ENCLOSED_ALPHANUMERICS = 'ENCLOSED_ALPHANUMERICS',
  BOX_DRAWING = 'BOX_DRAWING',
  BLOCK_ELEMENTS = 'BLOCK_ELEMENTS',
  GEOMETRIC_SHAPES = 'GEOMETRIC_SHAPES',
  MISCELLANEOUS_SYMBOLS = 'MISCELLANEOUS_SYMBOLS',
  DINGBATS = 'DINGBATS',
  MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A = 'MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A',
  SUPPLEMENTAL_ARROWS_A = 'SUPPLEMENTAL_ARROWS_A',
  BRAILLE_PATTERNS = 'BRAILLE_PATTERNS',
  SUPPLEMENTAL_ARROWS_B = 'SUPPLEMENTAL_ARROWS_B',
  MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B = 'MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B',
  SUPPLEMENTAL_MATHEMATICAL_OPERATORS = 'SUPPLEMENTAL_MATHEMATICAL_OPERATORS',
  MISCELLANEOUS_SYMBOLS_AND_ARROWS = 'MISCELLANEOUS_SYMBOLS_AND_ARROWS',
  GLAGOLITIC = 'GLAGOLITIC',
  LATIN_EXTENDED_C = 'LATIN_EXTENDED_C',
  COPTIC = 'COPTIC',
  GEORGIAN_SUPPLEMENT = 'GEORGIAN_SUPPLEMENT',
  TIFINAGH = 'TIFINAGH',
  ETHIOPIC_EXTENDED = 'ETHIOPIC_EXTENDED',
  CYRILLIC_EXTENDED_A = 'CYRILLIC_EXTENDED_A',
  SUPPLEMENTAL_PUNCTUATION = 'SUPPLEMENTAL_PUNCTUATION',
  CJK_RADICALS_SUPPLEMENT = 'CJK_RADICALS_SUPPLEMENT',
  KANGXI_RADICALS = 'KANGXI_RADICALS',
  IDEOGRAPHIC_DESCRIPTION_CHARACTERS = 'IDEOGRAPHIC_DESCRIPTION_CHARACTERS',
  CJK_SYMBOLS_AND_PUNCTUATION = 'CJK_SYMBOLS_AND_PUNCTUATION',
  HIRAGANA = 'HIRAGANA',
  KATAKANA = 'KATAKANA',
  BOPOMOFO = 'BOPOMOFO',
  HANGUL_COMPATIBILITY_JAMO = 'HANGUL_COMPATIBILITY_JAMO',
  KANBUN = 'KANBUN',
  BOPOMOFO_EXTENDED = 'BOPOMOFO_EXTENDED',
  CJK_STROKES = 'CJK_STROKES',
  KATAKANA_PHONETIC_EXTENSIONS = 'KATAKANA_PHONETIC_EXTENSIONS',
  ENCLOSED_CJK_LETTERS_AND_MONTHS = 'ENCLOSED_CJK_LETTERS_AND_MONTHS',
  CJK_COMPATIBILITY = 'CJK_COMPATIBILITY',
  CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A = 'CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A',
  YIJING_HEXAGRAM_SYMBOLS = 'YIJING_HEXAGRAM_SYMBOLS',
  CJK_UNIFIED_IDEOGRAPHS = 'CJK_UNIFIED_IDEOGRAPHS',
  YI_SYLLABLES = 'YI_SYLLABLES',
  YI_RADICALS = 'YI_RADICALS',
  LISU = 'LISU',
  VAI = 'VAI',
  CYRILLIC_EXTENDED_B = 'CYRILLIC_EXTENDED_B',
  BAMUM = 'BAMUM',
  MODIFIER_TONE_LETTERS = 'MODIFIER_TONE_LETTERS',
  LATIN_EXTENDED_D = 'LATIN_EXTENDED_D',
  SYLOTI_NAGRI = 'SYLOTI_NAGRI',
  COMMON_INDIC_NUMBER_FORMS = 'COMMON_INDIC_NUMBER_FORMS',
  PHAGS_PA = 'PHAGS_PA',
  SAURASHTRA = 'SAURASHTRA',
  DEVANAGARI_EXTENDED = 'DEVANAGARI_EXTENDED',
  KAYAH_LI = 'KAYAH_LI',
  REJANG = 'REJANG',
  HANGUL_JAMO_EXTENDED_A = 'HANGUL_JAMO_EXTENDED_A',
  JAVANESE = 'JAVANESE',
  MYANMAR_EXTENDED_B = 'MYANMAR_EXTENDED_B',
  CHAM = 'CHAM',
  MYANMAR_EXTENDED_A = 'MYANMAR_EXTENDED_A',
  TAI_VIET = 'TAI_VIET',
  MEETEI_MAYEK_EXTENSIONS = 'MEETEI_MAYEK_EXTENSIONS',
  ETHIOPIC_EXTENDED_A = 'ETHIOPIC_EXTENDED_A',
  LATIN_EXTENDED_E = 'LATIN_EXTENDED_E',
  CHEROKEE_SUPPLEMENT = 'CHEROKEE_SUPPLEMENT',
  MEETEI_MAYEK = 'MEETEI_MAYEK',
  HANGUL_SYLLABLES = 'HANGUL_SYLLABLES',
  HANGUL_JAMO_EXTENDED_B = 'HANGUL_JAMO_EXTENDED_B',
  HIGH_SURROGATES = 'HIGH_SURROGATES',
  HIGH_PRIVATE_USE_SURROGATES = 'HIGH_PRIVATE_USE_SURROGATES',
  LOW_SURROGATES = 'LOW_SURROGATES',
  PRIVATE_USE_AREA = 'PRIVATE_USE_AREA',
  CJK_COMPATIBILITY_IDEOGRAPHS = 'CJK_COMPATIBILITY_IDEOGRAPHS',
  ALPHABETIC_PRESENTATION_FORMS = 'ALPHABETIC_PRESENTATION_FORMS',
  ARABIC_PRESENTATION_FORMS_A = 'ARABIC_PRESENTATION_FORMS_A',
  VARIATION_SELECTORS = 'VARIATION_SELECTORS',
  VERTICAL_FORMS = 'VERTICAL_FORMS',
  COMBINING_HALF_MARKS = 'COMBINING_HALF_MARKS',
  CJK_COMPATIBILITY_FORMS = 'CJK_COMPATIBILITY_FORMS',
  SMALL_FORM_VARIANTS = 'SMALL_FORM_VARIANTS',
  ARABIC_PRESENTATION_FORMS_B = 'ARABIC_PRESENTATION_FORMS_B',
  HALFWIDTH_AND_FULLWIDTH_FORMS = 'HALFWIDTH_AND_FULLWIDTH_FORMS',
  SPECIALS = 'SPECIALS',
  LINEAR_B_SYLLABARY = 'LINEAR_B_SYLLABARY',
  LINEAR_B_IDEOGRAMS = 'LINEAR_B_IDEOGRAMS',
  AEGEAN_NUMBERS = 'AEGEAN_NUMBERS',
  ANCIENT_GREEK_NUMBERS = 'ANCIENT_GREEK_NUMBERS',
  ANCIENT_SYMBOLS = 'ANCIENT_SYMBOLS',
  PHAISTOS_DISC = 'PHAISTOS_DISC',
  LYCIAN = 'LYCIAN',
  CARIAN = 'CARIAN',
  COPTIC_EPACT_NUMBERS = 'COPTIC_EPACT_NUMBERS',
  OLD_ITALIC = 'OLD_ITALIC',
  GOTHIC = 'GOTHIC',
  OLD_PERMIC = 'OLD_PERMIC',
  UGARITIC = 'UGARITIC',
  OLD_PERSIAN = 'OLD_PERSIAN',
  DESERET = 'DESERET',
  SHAVIAN = 'SHAVIAN',
  OSMANYA = 'OSMANYA',
  OSAGE = 'OSAGE',
  ELBASAN = 'ELBASAN',
  CAUCASIAN_ALBANIAN = 'CAUCASIAN_ALBANIAN',
  LINEAR_A = 'LINEAR_A',
  CYPRIOT_SYLLABARY = 'CYPRIOT_SYLLABARY',
  IMPERIAL_ARAMAIC = 'IMPERIAL_ARAMAIC',
  PALMYRENE = 'PALMYRENE',
  NABATAEAN = 'NABATAEAN',
  HATRAN = 'HATRAN',
  PHOENICIAN = 'PHOENICIAN',
  LYDIAN = 'LYDIAN',
  MEROITIC_HIEROGLYPHS = 'MEROITIC_HIEROGLYPHS',
  MEROITIC_CURSIVE = 'MEROITIC_CURSIVE',
  KHAROSHTHI = 'KHAROSHTHI',
  OLD_SOUTH_ARABIAN = 'OLD_SOUTH_ARABIAN',
  OLD_NORTH_ARABIAN = 'OLD_NORTH_ARABIAN',
  MANICHAEAN = 'MANICHAEAN',
  AVESTAN = 'AVESTAN',
  INSCRIPTIONAL_PARTHIAN = 'INSCRIPTIONAL_PARTHIAN',
  INSCRIPTIONAL_PAHLAVI = 'INSCRIPTIONAL_PAHLAVI',
  PSALTER_PAHLAVI = 'PSALTER_PAHLAVI',
  OLD_TURKIC = 'OLD_TURKIC',
  OLD_HUNGARIAN = 'OLD_HUNGARIAN',
  RUMI_NUMERAL_SYMBOLS = 'RUMI_NUMERAL_SYMBOLS',
  BRAHMI = 'BRAHMI',
  KAITHI = 'KAITHI',
  SORA_SOMPENG = 'SORA_SOMPENG',
  CHAKMA = 'CHAKMA',
  MAHAJANI = 'MAHAJANI',
  SHARADA = 'SHARADA',
  SINHALA_ARCHAIC_NUMBERS = 'SINHALA_ARCHAIC_NUMBERS',
  KHOJKI = 'KHOJKI',
  MULTANI = 'MULTANI',
  KHUDAWADI = 'KHUDAWADI',
  GRANTHA = 'GRANTHA',
  NEWA = 'NEWA',
  TIRHUTA = 'TIRHUTA',
  SIDDHAM = 'SIDDHAM',
  MODI = 'MODI',
  MONGOLIAN_SUPPLEMENT = 'MONGOLIAN_SUPPLEMENT',
  TAKRI = 'TAKRI',
  AHOM = 'AHOM',
  WARANG_CITI = 'WARANG_CITI',
  ZANABAZAR_SQUARE = 'ZANABAZAR_SQUARE',
  SOYOMBO = 'SOYOMBO',
  PAU_CIN_HAU = 'PAU_CIN_HAU',
  BHAIKSUKI = 'BHAIKSUKI',
  MARCHEN = 'MARCHEN',
  MASARAM_GONDI = 'MASARAM_GONDI',
  CUNEIFORM = 'CUNEIFORM',
  CUNEIFORM_NUMBERS_AND_PUNCTUATION = 'CUNEIFORM_NUMBERS_AND_PUNCTUATION',
  EARLY_DYNASTIC_CUNEIFORM = 'EARLY_DYNASTIC_CUNEIFORM',
  EGYPTIAN_HIEROGLYPHS = 'EGYPTIAN_HIEROGLYPHS',
  ANATOLIAN_HIEROGLYPHS = 'ANATOLIAN_HIEROGLYPHS',
  BAMUM_SUPPLEMENT = 'BAMUM_SUPPLEMENT',
  MRO = 'MRO',
  BASSA_VAH = 'BASSA_VAH',
  PAHAWH_HMONG = 'PAHAWH_HMONG',
  MIAO = 'MIAO',
  IDEOGRAPHIC_SYMBOLS_AND_PUNCTUATION = 'IDEOGRAPHIC_SYMBOLS_AND_PUNCTUATION',
  TANGUT = 'TANGUT',
  TANGUT_COMPONENTS = 'TANGUT_COMPONENTS',
  KANA_SUPPLEMENT = 'KANA_SUPPLEMENT',
  KANA_EXTENDED_A = 'KANA_EXTENDED_A',
  NUSHU = 'NUSHU',
  DUPLOYAN = 'DUPLOYAN',
  SHORTHAND_FORMAT_CONTROLS = 'SHORTHAND_FORMAT_CONTROLS',
  BYZANTINE_MUSICAL_SYMBOLS = 'BYZANTINE_MUSICAL_SYMBOLS',
  MUSICAL_SYMBOLS = 'MUSICAL_SYMBOLS',
  ANCIENT_GREEK_MUSICAL_NOTATION = 'ANCIENT_GREEK_MUSICAL_NOTATION',
  TAI_XUAN_JING_SYMBOLS = 'TAI_XUAN_JING_SYMBOLS',
  COUNTING_ROD_NUMERALS = 'COUNTING_ROD_NUMERALS',
  MATHEMATICAL_ALPHANUMERIC_SYMBOLS = 'MATHEMATICAL_ALPHANUMERIC_SYMBOLS',
  SUTTON_SIGNWRITING = 'SUTTON_SIGNWRITING',
  GLAGOLITIC_SUPPLEMENT = 'GLAGOLITIC_SUPPLEMENT',
  MENDE_KIKAKUI = 'MENDE_KIKAKUI',
  ADLAM = 'ADLAM',
  ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS = 'ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS',
  MAHJONG_TILES = 'MAHJONG_TILES',
  DOMINO_TILES = 'DOMINO_TILES',
  PLAYING_CARDS = 'PLAYING_CARDS',
  ENCLOSED_ALPHANUMERIC_SUPPLEMENT = 'ENCLOSED_ALPHANUMERIC_SUPPLEMENT',
  ENCLOSED_IDEOGRAPHIC_SUPPLEMENT = 'ENCLOSED_IDEOGRAPHIC_SUPPLEMENT',
  MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS = 'MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS',
  EMOTICONS = 'EMOTICONS',
  ORNAMENTAL_DINGBATS = 'ORNAMENTAL_DINGBATS',
  TRANSPORT_AND_MAP_SYMBOLS = 'TRANSPORT_AND_MAP_SYMBOLS',
  ALCHEMICAL_SYMBOLS = 'ALCHEMICAL_SYMBOLS',
  GEOMETRIC_SHAPES_EXTENDED = 'GEOMETRIC_SHAPES_EXTENDED',
  SUPPLEMENTAL_ARROWS_C = 'SUPPLEMENTAL_ARROWS_C',
  SUPPLEMENTAL_SYMBOLS_AND_PICTOGRAPHS = 'SUPPLEMENTAL_SYMBOLS_AND_PICTOGRAPHS',
  CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B = 'CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B',
  CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C = 'CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C',
  CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D = 'CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D',
  CJK_UNIFIED_IDEOGRAPHS_EXTENSION_E = 'CJK_UNIFIED_IDEOGRAPHS_EXTENSION_E',
  CJK_UNIFIED_IDEOGRAPHS_EXTENSION_F = 'CJK_UNIFIED_IDEOGRAPHS_EXTENSION_F',
  CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT = 'CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT',
  TAGS = 'TAGS',
  VARIATION_SELECTORS_SUPPLEMENT = 'VARIATION_SELECTORS_SUPPLEMENT',
  SUPPLEMENTARY_PRIVATE_USE_AREA_A = 'SUPPLEMENTARY_PRIVATE_USE_AREA_A',
  SUPPLEMENTARY_PRIVATE_USE_AREA_B = 'SUPPLEMENTARY_PRIVATE_USE_AREA_B',
}

export class UnicodeBlock extends Subset {
  static createUnicodeBlockConstant = (block: EUnicodeBlock): UnicodeBlock => {
    const ins = new UnicodeBlock()
    ins._setBlock(block)
    return ins
  }

  static BASIC_LATIN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BASIC_LATIN,
  )
  static LATIN_1_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LATIN_1_SUPPLEMENT,
  )
  static LATIN_EXTENDED_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LATIN_EXTENDED_A,
  )
  static LATIN_EXTENDED_B = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LATIN_EXTENDED_B,
  )
  static IPA_EXTENSIONS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.IPA_EXTENSIONS,
  )
  static SPACING_MODIFIER_LETTERS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SPACING_MODIFIER_LETTERS,
  )
  static COMBINING_DIACRITICAL_MARKS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.COMBINING_DIACRITICAL_MARKS,
  )
  static GREEK = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.GREEK)
  static CYRILLIC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CYRILLIC,
  )
  static CYRILLIC_SUPPLEMENTARY = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CYRILLIC_SUPPLEMENTARY,
  )
  static ARMENIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ARMENIAN,
  )
  static HEBREW = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.HEBREW)
  static ARABIC = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.ARABIC)
  static SYRIAC = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.SYRIAC)
  static ARABIC_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ARABIC_SUPPLEMENT,
  )
  static THAANA = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.THAANA)
  static NKO = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.NKO)
  static SAMARITAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SAMARITAN,
  )
  static MANDAIC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MANDAIC,
  )
  static SYRIAC_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SYRIAC_SUPPLEMENT,
  )
  static ARABIC_EXTENDED_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ARABIC_EXTENDED_A,
  )
  static DEVANAGARI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.DEVANAGARI,
  )
  static BENGALI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BENGALI,
  )
  static GURMUKHI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GURMUKHI,
  )
  static GUJARATI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GUJARATI,
  )
  static ORIYA = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.ORIYA)
  static TAMIL = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.TAMIL)
  static TELUGU = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.TELUGU)
  static KANNADA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KANNADA,
  )
  static MALAYALAM = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MALAYALAM,
  )
  static SINHALA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SINHALA,
  )
  static THAI = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.THAI)
  static LAO = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.LAO)
  static TIBETAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TIBETAN,
  )
  static MYANMAR = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MYANMAR,
  )
  static GEORGIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GEORGIAN,
  )
  static HANGUL_JAMO = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.HANGUL_JAMO,
  )
  static ETHIOPIC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ETHIOPIC,
  )
  static ETHIOPIC_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ETHIOPIC_SUPPLEMENT,
  )
  static CHEROKEE = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CHEROKEE,
  )
  static UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS,
    )
  static OGHAM = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.OGHAM)
  static RUNIC = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.RUNIC)
  static TAGALOG = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TAGALOG,
  )
  static HANUNOO = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.HANUNOO,
  )
  static BUHID = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.BUHID)
  static TAGBANWA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TAGBANWA,
  )
  static KHMER = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.KHMER)
  static MONGOLIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MONGOLIAN,
  )
  static UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED,
    )
  static LIMBU = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.LIMBU)
  static TAI_LE = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.TAI_LE)
  static NEW_TAI_LUE = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.NEW_TAI_LUE,
  )
  static KHMER_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KHMER_SYMBOLS,
  )
  static BUGINESE = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BUGINESE,
  )
  static TAI_THAM = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TAI_THAM,
  )
  static COMBINING_DIACRITICAL_MARKS_EXTENDED =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.COMBINING_DIACRITICAL_MARKS_EXTENDED,
    )
  static BALINESE = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BALINESE,
  )
  static SUNDANESE = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SUNDANESE,
  )
  static BATAK = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.BATAK)
  static LEPCHA = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.LEPCHA)
  static OL_CHIKI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.OL_CHIKI,
  )
  static CYRILLIC_EXTENDED_C = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CYRILLIC_EXTENDED_C,
  )
  static SUNDANESE_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SUNDANESE_SUPPLEMENT,
  )
  static VEDIC_EXTENSIONS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.VEDIC_EXTENSIONS,
  )
  static PHONETIC_EXTENSIONS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PHONETIC_EXTENSIONS,
  )
  static PHONETIC_EXTENSIONS_SUPPLEMENT =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.PHONETIC_EXTENSIONS_SUPPLEMENT,
    )
  static COMBINING_DIACRITICAL_MARKS_SUPPLEMENT =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.COMBINING_DIACRITICAL_MARKS_SUPPLEMENT,
    )
  static LATIN_EXTENDED_ADDITIONAL = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LATIN_EXTENDED_ADDITIONAL,
  )
  static GREEK_EXTENDED = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GREEK_EXTENDED,
  )
  static GENERAL_PUNCTUATION = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GENERAL_PUNCTUATION,
  )
  static SUPERSCRIPTS_AND_SUBSCRIPTS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SUPERSCRIPTS_AND_SUBSCRIPTS,
  )
  static CURRENCY_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CURRENCY_SYMBOLS,
  )
  static COMBINING_MARKS_FOR_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.COMBINING_MARKS_FOR_SYMBOLS,
  )
  static LETTERLIKE_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LETTERLIKE_SYMBOLS,
  )
  static NUMBER_FORMS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.NUMBER_FORMS,
  )
  static ARROWS = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.ARROWS)
  static MATHEMATICAL_OPERATORS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MATHEMATICAL_OPERATORS,
  )
  static MISCELLANEOUS_TECHNICAL = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MISCELLANEOUS_TECHNICAL,
  )
  static CONTROL_PICTURES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CONTROL_PICTURES,
  )
  static OPTICAL_CHARACTER_RECOGNITION =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.OPTICAL_CHARACTER_RECOGNITION,
    )
  static ENCLOSED_ALPHANUMERICS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ENCLOSED_ALPHANUMERICS,
  )
  static BOX_DRAWING = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BOX_DRAWING,
  )
  static BLOCK_ELEMENTS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BLOCK_ELEMENTS,
  )
  static GEOMETRIC_SHAPES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GEOMETRIC_SHAPES,
  )
  static MISCELLANEOUS_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MISCELLANEOUS_SYMBOLS,
  )
  static DINGBATS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.DINGBATS,
  )
  static MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A,
    )
  static SUPPLEMENTAL_ARROWS_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SUPPLEMENTAL_ARROWS_A,
  )
  static BRAILLE_PATTERNS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BRAILLE_PATTERNS,
  )
  static SUPPLEMENTAL_ARROWS_B = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SUPPLEMENTAL_ARROWS_B,
  )
  static MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B,
    )
  static SUPPLEMENTAL_MATHEMATICAL_OPERATORS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.SUPPLEMENTAL_MATHEMATICAL_OPERATORS,
    )
  static MISCELLANEOUS_SYMBOLS_AND_ARROWS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.MISCELLANEOUS_SYMBOLS_AND_ARROWS,
    )
  static GLAGOLITIC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GLAGOLITIC,
  )
  static LATIN_EXTENDED_C = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LATIN_EXTENDED_C,
  )
  static COPTIC = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.COPTIC)
  static GEORGIAN_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GEORGIAN_SUPPLEMENT,
  )
  static TIFINAGH = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TIFINAGH,
  )
  static ETHIOPIC_EXTENDED = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ETHIOPIC_EXTENDED,
  )
  static CYRILLIC_EXTENDED_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CYRILLIC_EXTENDED_A,
  )
  static SUPPLEMENTAL_PUNCTUATION = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SUPPLEMENTAL_PUNCTUATION,
  )
  static CJK_RADICALS_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CJK_RADICALS_SUPPLEMENT,
  )
  static KANGXI_RADICALS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KANGXI_RADICALS,
  )
  static IDEOGRAPHIC_DESCRIPTION_CHARACTERS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.IDEOGRAPHIC_DESCRIPTION_CHARACTERS,
    )
  static CJK_SYMBOLS_AND_PUNCTUATION = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CJK_SYMBOLS_AND_PUNCTUATION,
  )
  static HIRAGANA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.HIRAGANA,
  )
  static KATAKANA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KATAKANA,
  )
  static BOPOMOFO = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BOPOMOFO,
  )
  static HANGUL_COMPATIBILITY_JAMO = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.HANGUL_COMPATIBILITY_JAMO,
  )
  static KANBUN = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.KANBUN)
  static BOPOMOFO_EXTENDED = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BOPOMOFO_EXTENDED,
  )
  static CJK_STROKES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CJK_STROKES,
  )
  static KATAKANA_PHONETIC_EXTENSIONS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KATAKANA_PHONETIC_EXTENSIONS,
  )
  static ENCLOSED_CJK_LETTERS_AND_MONTHS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.ENCLOSED_CJK_LETTERS_AND_MONTHS,
    )
  static CJK_COMPATIBILITY = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CJK_COMPATIBILITY,
  )
  static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A,
    )
  static YIJING_HEXAGRAM_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.YIJING_HEXAGRAM_SYMBOLS,
  )
  static CJK_UNIFIED_IDEOGRAPHS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CJK_UNIFIED_IDEOGRAPHS,
  )
  static YI_SYLLABLES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.YI_SYLLABLES,
  )
  static YI_RADICALS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.YI_RADICALS,
  )
  static LISU = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.LISU)
  static VAI = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.VAI)
  static CYRILLIC_EXTENDED_B = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CYRILLIC_EXTENDED_B,
  )
  static BAMUM = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.BAMUM)
  static MODIFIER_TONE_LETTERS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MODIFIER_TONE_LETTERS,
  )
  static LATIN_EXTENDED_D = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LATIN_EXTENDED_D,
  )
  static SYLOTI_NAGRI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SYLOTI_NAGRI,
  )
  static COMMON_INDIC_NUMBER_FORMS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.COMMON_INDIC_NUMBER_FORMS,
  )
  static PHAGS_PA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PHAGS_PA,
  )
  static SAURASHTRA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SAURASHTRA,
  )
  static DEVANAGARI_EXTENDED = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.DEVANAGARI_EXTENDED,
  )
  static KAYAH_LI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KAYAH_LI,
  )
  static REJANG = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.REJANG)
  static HANGUL_JAMO_EXTENDED_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.HANGUL_JAMO_EXTENDED_A,
  )
  static JAVANESE = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.JAVANESE,
  )
  static MYANMAR_EXTENDED_B = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MYANMAR_EXTENDED_B,
  )
  static CHAM = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.CHAM)
  static MYANMAR_EXTENDED_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MYANMAR_EXTENDED_A,
  )
  static TAI_VIET = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TAI_VIET,
  )
  static MEETEI_MAYEK_EXTENSIONS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MEETEI_MAYEK_EXTENSIONS,
  )
  static ETHIOPIC_EXTENDED_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ETHIOPIC_EXTENDED_A,
  )
  static LATIN_EXTENDED_E = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LATIN_EXTENDED_E,
  )
  static CHEROKEE_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CHEROKEE_SUPPLEMENT,
  )
  static MEETEI_MAYEK = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MEETEI_MAYEK,
  )
  static HANGUL_SYLLABLES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.HANGUL_SYLLABLES,
  )
  static HANGUL_JAMO_EXTENDED_B = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.HANGUL_JAMO_EXTENDED_B,
  )
  static HIGH_SURROGATES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.HIGH_SURROGATES,
  )
  static HIGH_PRIVATE_USE_SURROGATES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.HIGH_PRIVATE_USE_SURROGATES,
  )
  static LOW_SURROGATES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LOW_SURROGATES,
  )
  static PRIVATE_USE_AREA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PRIVATE_USE_AREA,
  )
  static CJK_COMPATIBILITY_IDEOGRAPHS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS,
  )
  static ALPHABETIC_PRESENTATION_FORMS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.ALPHABETIC_PRESENTATION_FORMS,
    )
  static ARABIC_PRESENTATION_FORMS_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ARABIC_PRESENTATION_FORMS_A,
  )
  static VARIATION_SELECTORS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.VARIATION_SELECTORS,
  )
  static VERTICAL_FORMS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.VERTICAL_FORMS,
  )
  static COMBINING_HALF_MARKS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.COMBINING_HALF_MARKS,
  )
  static CJK_COMPATIBILITY_FORMS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CJK_COMPATIBILITY_FORMS,
  )
  static SMALL_FORM_VARIANTS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SMALL_FORM_VARIANTS,
  )
  static ARABIC_PRESENTATION_FORMS_B = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ARABIC_PRESENTATION_FORMS_B,
  )
  static HALFWIDTH_AND_FULLWIDTH_FORMS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.HALFWIDTH_AND_FULLWIDTH_FORMS,
    )
  static SPECIALS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SPECIALS,
  )
  static LINEAR_B_SYLLABARY = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LINEAR_B_SYLLABARY,
  )
  static LINEAR_B_IDEOGRAMS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LINEAR_B_IDEOGRAMS,
  )
  static AEGEAN_NUMBERS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.AEGEAN_NUMBERS,
  )
  static ANCIENT_GREEK_NUMBERS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ANCIENT_GREEK_NUMBERS,
  )
  static ANCIENT_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ANCIENT_SYMBOLS,
  )
  static PHAISTOS_DISC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PHAISTOS_DISC,
  )
  static LYCIAN = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.LYCIAN)
  static CARIAN = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.CARIAN)
  static COPTIC_EPACT_NUMBERS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.COPTIC_EPACT_NUMBERS,
  )
  static OLD_ITALIC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.OLD_ITALIC,
  )
  static GOTHIC = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.GOTHIC)
  static OLD_PERMIC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.OLD_PERMIC,
  )
  static UGARITIC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.UGARITIC,
  )
  static OLD_PERSIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.OLD_PERSIAN,
  )
  static DESERET = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.DESERET,
  )
  static SHAVIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SHAVIAN,
  )
  static OSMANYA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.OSMANYA,
  )
  static OSAGE = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.OSAGE)
  static ELBASAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ELBASAN,
  )
  static CAUCASIAN_ALBANIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CAUCASIAN_ALBANIAN,
  )
  static LINEAR_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.LINEAR_A,
  )
  static CYPRIOT_SYLLABARY = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CYPRIOT_SYLLABARY,
  )
  static IMPERIAL_ARAMAIC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.IMPERIAL_ARAMAIC,
  )
  static PALMYRENE = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PALMYRENE,
  )
  static NABATAEAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.NABATAEAN,
  )
  static HATRAN = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.HATRAN)
  static PHOENICIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PHOENICIAN,
  )
  static LYDIAN = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.LYDIAN)
  static MEROITIC_HIEROGLYPHS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MEROITIC_HIEROGLYPHS,
  )
  static MEROITIC_CURSIVE = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MEROITIC_CURSIVE,
  )
  static KHAROSHTHI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KHAROSHTHI,
  )
  static OLD_SOUTH_ARABIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.OLD_SOUTH_ARABIAN,
  )
  static OLD_NORTH_ARABIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.OLD_NORTH_ARABIAN,
  )
  static MANICHAEAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MANICHAEAN,
  )
  static AVESTAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.AVESTAN,
  )
  static INSCRIPTIONAL_PARTHIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.INSCRIPTIONAL_PARTHIAN,
  )
  static INSCRIPTIONAL_PAHLAVI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.INSCRIPTIONAL_PAHLAVI,
  )
  static PSALTER_PAHLAVI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PSALTER_PAHLAVI,
  )
  static OLD_TURKIC = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.OLD_TURKIC,
  )
  static OLD_HUNGARIAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.OLD_HUNGARIAN,
  )
  static RUMI_NUMERAL_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.RUMI_NUMERAL_SYMBOLS,
  )
  static BRAHMI = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.BRAHMI)
  static KAITHI = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.KAITHI)
  static SORA_SOMPENG = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SORA_SOMPENG,
  )
  static CHAKMA = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.CHAKMA)
  static MAHAJANI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MAHAJANI,
  )
  static SHARADA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SHARADA,
  )
  static SINHALA_ARCHAIC_NUMBERS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SINHALA_ARCHAIC_NUMBERS,
  )
  static KHOJKI = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.KHOJKI)
  static MULTANI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MULTANI,
  )
  static KHUDAWADI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KHUDAWADI,
  )
  static GRANTHA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GRANTHA,
  )
  static NEWA = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.NEWA)
  static TIRHUTA = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TIRHUTA,
  )
  static SIDDHAM = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SIDDHAM,
  )
  static MODI = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.MODI)
  static MONGOLIAN_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MONGOLIAN_SUPPLEMENT,
  )
  static TAKRI = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.TAKRI)
  static AHOM = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.AHOM)
  static WARANG_CITI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.WARANG_CITI,
  )
  static ZANABAZAR_SQUARE = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ZANABAZAR_SQUARE,
  )
  static SOYOMBO = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SOYOMBO,
  )
  static PAU_CIN_HAU = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PAU_CIN_HAU,
  )
  static BHAIKSUKI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BHAIKSUKI,
  )
  static MARCHEN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MARCHEN,
  )
  static MASARAM_GONDI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MASARAM_GONDI,
  )
  static CUNEIFORM = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.CUNEIFORM,
  )
  static CUNEIFORM_NUMBERS_AND_PUNCTUATION =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.CUNEIFORM_NUMBERS_AND_PUNCTUATION,
    )
  static EARLY_DYNASTIC_CUNEIFORM = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.EARLY_DYNASTIC_CUNEIFORM,
  )
  static EGYPTIAN_HIEROGLYPHS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.EGYPTIAN_HIEROGLYPHS,
  )
  static ANATOLIAN_HIEROGLYPHS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ANATOLIAN_HIEROGLYPHS,
  )
  static BAMUM_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BAMUM_SUPPLEMENT,
  )
  static MRO = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.MRO)
  static BASSA_VAH = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BASSA_VAH,
  )
  static PAHAWH_HMONG = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PAHAWH_HMONG,
  )
  static MIAO = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.MIAO)
  static IDEOGRAPHIC_SYMBOLS_AND_PUNCTUATION =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.IDEOGRAPHIC_SYMBOLS_AND_PUNCTUATION,
    )
  static TANGUT = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.TANGUT)
  static TANGUT_COMPONENTS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TANGUT_COMPONENTS,
  )
  static KANA_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KANA_SUPPLEMENT,
  )
  static KANA_EXTENDED_A = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.KANA_EXTENDED_A,
  )
  static NUSHU = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.NUSHU)
  static DUPLOYAN = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.DUPLOYAN,
  )
  static SHORTHAND_FORMAT_CONTROLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SHORTHAND_FORMAT_CONTROLS,
  )
  static BYZANTINE_MUSICAL_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.BYZANTINE_MUSICAL_SYMBOLS,
  )
  static MUSICAL_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MUSICAL_SYMBOLS,
  )
  static ANCIENT_GREEK_MUSICAL_NOTATION =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.ANCIENT_GREEK_MUSICAL_NOTATION,
    )
  static TAI_XUAN_JING_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TAI_XUAN_JING_SYMBOLS,
  )
  static COUNTING_ROD_NUMERALS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.COUNTING_ROD_NUMERALS,
  )
  static MATHEMATICAL_ALPHANUMERIC_SYMBOLS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.MATHEMATICAL_ALPHANUMERIC_SYMBOLS,
    )
  static SUTTON_SIGNWRITING = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SUTTON_SIGNWRITING,
  )
  static GLAGOLITIC_SUPPLEMENT = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GLAGOLITIC_SUPPLEMENT,
  )
  static MENDE_KIKAKUI = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MENDE_KIKAKUI,
  )
  static ADLAM = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.ADLAM)
  static ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS,
    )
  static MAHJONG_TILES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.MAHJONG_TILES,
  )
  static DOMINO_TILES = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.DOMINO_TILES,
  )
  static PLAYING_CARDS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.PLAYING_CARDS,
  )
  static ENCLOSED_ALPHANUMERIC_SUPPLEMENT =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.ENCLOSED_ALPHANUMERIC_SUPPLEMENT,
    )
  static ENCLOSED_IDEOGRAPHIC_SUPPLEMENT =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.ENCLOSED_IDEOGRAPHIC_SUPPLEMENT,
    )
  static MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS,
    )
  static EMOTICONS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.EMOTICONS,
  )
  static ORNAMENTAL_DINGBATS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ORNAMENTAL_DINGBATS,
  )
  static TRANSPORT_AND_MAP_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.TRANSPORT_AND_MAP_SYMBOLS,
  )
  static ALCHEMICAL_SYMBOLS = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.ALCHEMICAL_SYMBOLS,
  )
  static GEOMETRIC_SHAPES_EXTENDED = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.GEOMETRIC_SHAPES_EXTENDED,
  )
  static SUPPLEMENTAL_ARROWS_C = UnicodeBlock.createUnicodeBlockConstant(
    EUnicodeBlock.SUPPLEMENTAL_ARROWS_C,
  )
  static SUPPLEMENTAL_SYMBOLS_AND_PICTOGRAPHS =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.SUPPLEMENTAL_SYMBOLS_AND_PICTOGRAPHS,
    )
  static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B,
    )
  static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C,
    )
  static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D,
    )
  static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_E =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_E,
    )
  static CJK_UNIFIED_IDEOGRAPHS_EXTENSION_F =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_F,
    )
  static CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT,
    )
  static TAGS = UnicodeBlock.createUnicodeBlockConstant(EUnicodeBlock.TAGS)
  static VARIATION_SELECTORS_SUPPLEMENT =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT,
    )
  static SUPPLEMENTARY_PRIVATE_USE_AREA_A =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.SUPPLEMENTARY_PRIVATE_USE_AREA_A,
    )
  static SUPPLEMENTARY_PRIVATE_USE_AREA_B =
    UnicodeBlock.createUnicodeBlockConstant(
      EUnicodeBlock.SUPPLEMENTARY_PRIVATE_USE_AREA_B,
    )

  private static blockStarts: number[] = [
    0x0000, // 0000..007F; Basic Latin
    0x0080, // 0080..00FF; Latin-1 Supplement
    0x0100, // 0100..017F; Latin Extended-A
    0x0180, // 0180..024F; Latin Extended-B
    0x0250, // 0250..02AF; IPA Extensions
    0x02b0, // 02B0..02FF; Spacing Modifier Letters
    0x0300, // 0300..036F; Combining Diacritical Marks
    0x0370, // 0370..03FF; Greek and Coptic
    0x0400, // 0400..04FF; Cyrillic
    0x0500, // 0500..052F; Cyrillic Supplement
    0x0530, // 0530..058F; Armenian
    0x0590, // 0590..05FF; Hebrew
    0x0600, // 0600..06FF; Arabic
    0x0700, // 0700..074F; Syriac
    0x0750, // 0750..077F; Arabic Supplement
    0x0780, // 0780..07BF; Thaana
    0x07c0, // 07C0..07FF; NKo
    0x0800, // 0800..083F; Samaritan
    0x0840, // 0840..085F; Mandaic
    0x0860, // 0860..086F; Syriac Supplement
    0x0870, //             unassigned
    0x08a0, // 08A0..08FF; Arabic Extended-A
    0x0900, // 0900..097F; Devanagari
    0x0980, // 0980..09FF; Bengali
    0x0a00, // 0A00..0A7F; Gurmukhi
    0x0a80, // 0A80..0AFF; Gujarati
    0x0b00, // 0B00..0B7F; Oriya
    0x0b80, // 0B80..0BFF; Tamil
    0x0c00, // 0C00..0C7F; Telugu
    0x0c80, // 0C80..0CFF; Kannada
    0x0d00, // 0D00..0D7F; Malayalam
    0x0d80, // 0D80..0DFF; Sinhala
    0x0e00, // 0E00..0E7F; Thai
    0x0e80, // 0E80..0EFF; Lao
    0x0f00, // 0F00..0FFF; Tibetan
    0x1000, // 1000..109F; Myanmar
    0x10a0, // 10A0..10FF; Georgian
    0x1100, // 1100..11FF; Hangul Jamo
    0x1200, // 1200..137F; Ethiopic
    0x1380, // 1380..139F; Ethiopic Supplement
    0x13a0, // 13A0..13FF; Cherokee
    0x1400, // 1400..167F; Unified Canadian Aboriginal Syllabics
    0x1680, // 1680..169F; Ogham
    0x16a0, // 16A0..16FF; Runic
    0x1700, // 1700..171F; Tagalog
    0x1720, // 1720..173F; Hanunoo
    0x1740, // 1740..175F; Buhid
    0x1760, // 1760..177F; Tagbanwa
    0x1780, // 1780..17FF; Khmer
    0x1800, // 1800..18AF; Mongolian
    0x18b0, // 18B0..18FF; Unified Canadian Aboriginal Syllabics Extended
    0x1900, // 1900..194F; Limbu
    0x1950, // 1950..197F; Tai Le
    0x1980, // 1980..19DF; New Tai Lue
    0x19e0, // 19E0..19FF; Khmer Symbols
    0x1a00, // 1A00..1A1F; Buginese
    0x1a20, // 1A20..1AAF; Tai Tham
    0x1ab0, // 1AB0..1AFF; Combining Diacritical Marks Extended
    0x1b00, // 1B00..1B7F; Balinese
    0x1b80, // 1B80..1BBF; Sundanese
    0x1bc0, // 1BC0..1BFF; Batak
    0x1c00, // 1C00..1C4F; Lepcha
    0x1c50, // 1C50..1C7F; Ol Chiki
    0x1c80, // 1C80..1C8F; Cyrillic Extended-C
    0x1c90, //             unassigned
    0x1cc0, // 1CC0..1CCF; Sundanese Supplement
    0x1cd0, // 1CD0..1CFF; Vedic Extensions
    0x1d00, // 1D00..1D7F; Phonetic Extensions
    0x1d80, // 1D80..1DBF; Phonetic Extensions Supplement
    0x1dc0, // 1DC0..1DFF; Combining Diacritical Marks Supplement
    0x1e00, // 1E00..1EFF; Latin Extended Additional
    0x1f00, // 1F00..1FFF; Greek Extended
    0x2000, // 2000..206F; General Punctuation
    0x2070, // 2070..209F; Superscripts and Subscripts
    0x20a0, // 20A0..20CF; Currency Symbols
    0x20d0, // 20D0..20FF; Combining Diacritical Marks for Symbols
    0x2100, // 2100..214F; Letterlike Symbols
    0x2150, // 2150..218F; Number Forms
    0x2190, // 2190..21FF; Arrows
    0x2200, // 2200..22FF; Mathematical Operators
    0x2300, // 2300..23FF; Miscellaneous Technical
    0x2400, // 2400..243F; Control Pictures
    0x2440, // 2440..245F; Optical Character Recognition
    0x2460, // 2460..24FF; Enclosed Alphanumerics
    0x2500, // 2500..257F; Box Drawing
    0x2580, // 2580..259F; Block Elements
    0x25a0, // 25A0..25FF; Geometric Shapes
    0x2600, // 2600..26FF; Miscellaneous Symbols
    0x2700, // 2700..27BF; Dingbats
    0x27c0, // 27C0..27EF; Miscellaneous Mathematical Symbols-A
    0x27f0, // 27F0..27FF; Supplemental Arrows-A
    0x2800, // 2800..28FF; Braille Patterns
    0x2900, // 2900..297F; Supplemental Arrows-B
    0x2980, // 2980..29FF; Miscellaneous Mathematical Symbols-B
    0x2a00, // 2A00..2AFF; Supplemental Mathematical Operators
    0x2b00, // 2B00..2BFF; Miscellaneous Symbols and Arrows
    0x2c00, // 2C00..2C5F; Glagolitic
    0x2c60, // 2C60..2C7F; Latin Extended-C
    0x2c80, // 2C80..2CFF; Coptic
    0x2d00, // 2D00..2D2F; Georgian Supplement
    0x2d30, // 2D30..2D7F; Tifinagh
    0x2d80, // 2D80..2DDF; Ethiopic Extended
    0x2de0, // 2DE0..2DFF; Cyrillic Extended-A
    0x2e00, // 2E00..2E7F; Supplemental Punctuation
    0x2e80, // 2E80..2EFF; CJK Radicals Supplement
    0x2f00, // 2F00..2FDF; Kangxi Radicals
    0x2fe0, //             unassigned
    0x2ff0, // 2FF0..2FFF; Ideographic Description Characters
    0x3000, // 3000..303F; CJK Symbols and Punctuation
    0x3040, // 3040..309F; Hiragana
    0x30a0, // 30A0..30FF; Katakana
    0x3100, // 3100..312F; Bopomofo
    0x3130, // 3130..318F; Hangul Compatibility Jamo
    0x3190, // 3190..319F; Kanbun
    0x31a0, // 31A0..31BF; Bopomofo Extended
    0x31c0, // 31C0..31EF; CJK Strokes
    0x31f0, // 31F0..31FF; Katakana Phonetic Extensions
    0x3200, // 3200..32FF; Enclosed CJK Letters and Months
    0x3300, // 3300..33FF; CJK Compatibility
    0x3400, // 3400..4DBF; CJK Unified Ideographs Extension A
    0x4dc0, // 4DC0..4DFF; Yijing Hexagram Symbols
    0x4e00, // 4E00..9FFF; CJK Unified Ideographs
    0xa000, // A000..A48F; Yi Syllables
    0xa490, // A490..A4CF; Yi Radicals
    0xa4d0, // A4D0..A4FF; Lisu
    0xa500, // A500..A63F; Vai
    0xa640, // A640..A69F; Cyrillic Extended-B
    0xa6a0, // A6A0..A6FF; Bamum
    0xa700, // A700..A71F; Modifier Tone Letters
    0xa720, // A720..A7FF; Latin Extended-D
    0xa800, // A800..A82F; Syloti Nagri
    0xa830, // A830..A83F; Common Indic Number Forms
    0xa840, // A840..A87F; Phags-pa
    0xa880, // A880..A8DF; Saurashtra
    0xa8e0, // A8E0..A8FF; Devanagari Extended
    0xa900, // A900..A92F; Kayah Li
    0xa930, // A930..A95F; Rejang
    0xa960, // A960..A97F; Hangul Jamo Extended-A
    0xa980, // A980..A9DF; Javanese
    0xa9e0, // A9E0..A9FF; Myanmar Extended-B
    0xaa00, // AA00..AA5F; Cham
    0xaa60, // AA60..AA7F; Myanmar Extended-A
    0xaa80, // AA80..AADF; Tai Viet
    0xaae0, // AAE0..AAFF; Meetei Mayek Extensions
    0xab00, // AB00..AB2F; Ethiopic Extended-A
    0xab30, // AB30..AB6F; Latin Extended-E
    0xab70, // AB70..ABBF; Cherokee Supplement
    0xabc0, // ABC0..ABFF; Meetei Mayek
    0xac00, // AC00..D7AF; Hangul Syllables
    0xd7b0, // D7B0..D7FF; Hangul Jamo Extended-B
    0xd800, // D800..DB7F; High Surrogates
    0xdb80, // DB80..DBFF; High Private Use Surrogates
    0xdc00, // DC00..DFFF; Low Surrogates
    0xe000, // E000..F8FF; Private Use Area
    0xf900, // F900..FAFF; CJK Compatibility Ideographs
    0xfb00, // FB00..FB4F; Alphabetic Presentation Forms
    0xfb50, // FB50..FDFF; Arabic Presentation Forms-A
    0xfe00, // FE00..FE0F; Variation Selectors
    0xfe10, // FE10..FE1F; Vertical Forms
    0xfe20, // FE20..FE2F; Combining Half Marks
    0xfe30, // FE30..FE4F; CJK Compatibility Forms
    0xfe50, // FE50..FE6F; Small Form Variants
    0xfe70, // FE70..FEFF; Arabic Presentation Forms-B
    0xff00, // FF00..FFEF; Halfwidth and Fullwidth Forms
    0xfff0, // FFF0..FFFF; Specials
    0x10000, // 10000..1007F; Linear B Syllabary
    0x10080, // 10080..100FF; Linear B Ideograms
    0x10100, // 10100..1013F; Aegean Numbers
    0x10140, // 10140..1018F; Ancient Greek Numbers
    0x10190, // 10190..101CF; Ancient Symbols
    0x101d0, // 101D0..101FF; Phaistos Disc
    0x10200, //               unassigned
    0x10280, // 10280..1029F; Lycian
    0x102a0, // 102A0..102DF; Carian
    0x102e0, // 102E0..102FF; Coptic Epact Numbers
    0x10300, // 10300..1032F; Old Italic
    0x10330, // 10330..1034F; Gothic
    0x10350, // 10350..1037F; Old Permic
    0x10380, // 10380..1039F; Ugaritic
    0x103a0, // 103A0..103DF; Old Persian
    0x103e0, //               unassigned
    0x10400, // 10400..1044F; Deseret
    0x10450, // 10450..1047F; Shavian
    0x10480, // 10480..104AF; Osmanya
    0x104b0, // 104B0..104FF; Osage
    0x10500, // 10500..1052F; Elbasan
    0x10530, // 10530..1056F; Caucasian Albanian
    0x10570, //               unassigned
    0x10600, // 10600..1077F; Linear A
    0x10780, //               unassigned
    0x10800, // 10800..1083F; Cypriot Syllabary
    0x10840, // 10840..1085F; Imperial Aramaic
    0x10860, // 10860..1087F; Palmyrene
    0x10880, // 10880..108AF; Nabataean
    0x108b0, //               unassigned
    0x108e0, // 108E0..108FF; Hatran
    0x10900, // 10900..1091F; Phoenician
    0x10920, // 10920..1093F; Lydian
    0x10940, //               unassigned
    0x10980, // 10980..1099F; Meroitic Hieroglyphs
    0x109a0, // 109A0..109FF; Meroitic Cursive
    0x10a00, // 10A00..10A5F; Kharoshthi
    0x10a60, // 10A60..10A7F; Old South Arabian
    0x10a80, // 10A80..10A9F; Old North Arabian
    0x10aa0, //               unassigned
    0x10ac0, // 10AC0..10AFF; Manichaean
    0x10b00, // 10B00..10B3F; Avestan
    0x10b40, // 10B40..10B5F; Inscriptional Parthian
    0x10b60, // 10B60..10B7F; Inscriptional Pahlavi
    0x10b80, // 10B80..10BAF; Psalter Pahlavi
    0x10bb0, //               unassigned
    0x10c00, // 10C00..10C4F; Old Turkic
    0x10c50, //               unassigned
    0x10c80, // 10C80..10CFF; Old Hungarian
    0x10d00, //               unassigned
    0x10e60, // 10E60..10E7F; Rumi Numeral Symbols
    0x10e80, //               unassigned
    0x11000, // 11000..1107F; Brahmi
    0x11080, // 11080..110CF; Kaithi
    0x110d0, // 110D0..110FF; Sora Sompeng
    0x11100, // 11100..1114F; Chakma
    0x11150, // 11150..1117F; Mahajani
    0x11180, // 11180..111DF; Sharada
    0x111e0, // 111E0..111FF; Sinhala Archaic Numbers
    0x11200, // 11200..1124F; Khojki
    0x11250, //               unassigned
    0x11280, // 11280..112AF; Multani
    0x112b0, // 112B0..112FF; Khudawadi
    0x11300, // 11300..1137F; Grantha
    0x11380, //               unassigned
    0x11400, // 11400..1147F; Newa
    0x11480, // 11480..114DF; Tirhuta
    0x114e0, //               unassigned
    0x11580, // 11580..115FF; Siddham
    0x11600, // 11600..1165F; Modi
    0x11660, //  11660..1167F; Mongolian Supplement
    0x11680, // 11680..116CF; Takri
    0x116d0, //               unassigned
    0x11700, // 11700..1173F; Ahom
    0x11740, //               unassigned
    0x118a0, // 118A0..118FF; Warang Citi
    0x11900, //               unassigned
    0x11a00, // 11A00..11A4F; Zanabazar Square
    0x11a50, // 11A50..11AAF; Soyombo
    0x11ab0, //               unassigned
    0x11ac0, // 11AC0..11AFF; Pau Cin Hau
    0x11b00, //               unassigned
    0x11c00, // 11C00..11C6F; Bhaiksuki
    0x11c70, // 11C70..11CBF; Marchen
    0x11cc0, //               unassigned
    0x11d00, // 11D00..11D5F; Masaram Gondi
    0x11d60, //               unassigned
    0x12000, // 12000..123FF; Cuneiform
    0x12400, // 12400..1247F; Cuneiform Numbers and Punctuation
    0x12480, // 12480..1254F; Early Dynastic Cuneiform
    0x12550, //               unassigned
    0x13000, // 13000..1342F; Egyptian Hieroglyphs
    0x13430, //               unassigned
    0x14400, // 14400..1467F; Anatolian Hieroglyphs
    0x14680, //               unassigned
    0x16800, // 16800..16A3F; Bamum Supplement
    0x16a40, // 16A40..16A6F; Mro
    0x16a70, //               unassigned
    0x16ad0, // 16AD0..16AFF; Bassa Vah
    0x16b00, // 16B00..16B8F; Pahawh Hmong
    0x16b90, //               unassigned
    0x16f00, // 16F00..16F9F; Miao
    0x16fa0, //               unassigned
    0x16fe0, // 16FE0..16FFF; Ideographic Symbols and Punctuation
    0x17000, // 17000..187FF; Tangut
    0x18800, // 18800..18AFF; Tangut Components
    0x18b00, //               unassigned
    0x1b000, // 1B000..1B0FF; Kana Supplement
    0x1b100, // 1B100..1B12F; Kana Extended-A
    0x1b130, //               unassigned
    0x1b170, // 1B170..1B2FF; Nushu
    0x1b300, //               unassigned
    0x1bc00, // 1BC00..1BC9F; Duployan
    0x1bca0, // 1BCA0..1BCAF; Shorthand Format Controls
    0x1bcb0, //               unassigned
    0x1d000, // 1D000..1D0FF; Byzantine Musical Symbols
    0x1d100, // 1D100..1D1FF; Musical Symbols
    0x1d200, // 1D200..1D24F; Ancient Greek Musical Notation
    0x1d250, //               unassigned
    0x1d300, // 1D300..1D35F; Tai Xuan Jing Symbols
    0x1d360, // 1D360..1D37F; Counting Rod Numerals
    0x1d380, //               unassigned
    0x1d400, // 1D400..1D7FF; Mathematical Alphanumeric Symbols
    0x1d800, // 1D800..1DAAF; Sutton SignWriting
    0x1dab0, //               unassigned
    0x1e000, // 1E000..1E02F; Glagolitic Supplement
    0x1e030, //               unassigned
    0x1e800, // 1E800..1E8DF; Mende Kikakui
    0x1e8e0, //               unassigned
    0x1e900, // 1E900..1E95F; Adlam
    0x1e960, //               unassigned
    0x1ee00, // 1EE00..1EEFF; Arabic Mathematical Alphabetic Symbols
    0x1ef00, //               unassigned
    0x1f000, // 1F000..1F02F; Mahjong Tiles
    0x1f030, // 1F030..1F09F; Domino Tiles
    0x1f0a0, // 1F0A0..1F0FF; Playing Cards
    0x1f100, // 1F100..1F1FF; Enclosed Alphanumeric Supplement
    0x1f200, // 1F200..1F2FF; Enclosed Ideographic Supplement
    0x1f300, // 1F300..1F5FF; Miscellaneous Symbols and Pictographs
    0x1f600, // 1F600..1F64F; Emoticons
    0x1f650, // 1F650..1F67F; Ornamental Dingbats
    0x1f680, // 1F680..1F6FF; Transport and Map Symbols
    0x1f700, // 1F700..1F77F; Alchemical Symbols
    0x1f780, // 1F780..1F7FF; Geometric Shapes Extended
    0x1f800, // 1F800..1F8FF; Supplemental Arrows-C
    0x1f900, // 1F900..1F9FF; Supplemental Symbols and Pictographs
    0x1fa00, //               unassigned
    0x20000, // 20000..2A6DF; CJK Unified Ideographs Extension B
    0x2a6e0, //               unassigned
    0x2a700, // 2A700..2B73F; CJK Unified Ideographs Extension C
    0x2b740, // 2B740..2B81F; CJK Unified Ideographs Extension D
    0x2b820, // 2B820..2CEAF; CJK Unified Ideographs Extension E
    0x2ceb0, // 2CEB0..2EBEF; CJK Unified Ideographs Extension F
    0x2ebf0, //               unassigned
    0x2f800, // 2F800..2FA1F; CJK Compatibility Ideographs Supplement
    0x2fa20, //               unassigned
    0xe0000, // E0000..E007F; Tags
    0xe0080, //               unassigned
    0xe0100, // E0100..E01EF; Variation Selectors Supplement
    0xe01f0, //               unassigned
    0xf0000, // F0000..FFFFF; Supplementary Private Use Area-A
    0x100000, // 100000..10FFFF; Supplementary Private Use Area-B
  ]

  private static blocks: Array<UnicodeBlock | null> = [
    UnicodeBlock.BASIC_LATIN,
    UnicodeBlock.LATIN_1_SUPPLEMENT,
    UnicodeBlock.LATIN_EXTENDED_A,
    UnicodeBlock.LATIN_EXTENDED_B,
    UnicodeBlock.IPA_EXTENSIONS,
    UnicodeBlock.SPACING_MODIFIER_LETTERS,
    UnicodeBlock.COMBINING_DIACRITICAL_MARKS,
    UnicodeBlock.GREEK,
    UnicodeBlock.CYRILLIC,
    UnicodeBlock.CYRILLIC_SUPPLEMENTARY,
    UnicodeBlock.ARMENIAN,
    UnicodeBlock.HEBREW,
    UnicodeBlock.ARABIC,
    UnicodeBlock.SYRIAC,
    UnicodeBlock.ARABIC_SUPPLEMENT,
    UnicodeBlock.THAANA,
    UnicodeBlock.NKO,
    UnicodeBlock.SAMARITAN,
    UnicodeBlock.MANDAIC,
    UnicodeBlock.SYRIAC_SUPPLEMENT,
    null,
    UnicodeBlock.ARABIC_EXTENDED_A,
    UnicodeBlock.DEVANAGARI,
    UnicodeBlock.BENGALI,
    UnicodeBlock.GURMUKHI,
    UnicodeBlock.GUJARATI,
    UnicodeBlock.ORIYA,
    UnicodeBlock.TAMIL,
    UnicodeBlock.TELUGU,
    UnicodeBlock.KANNADA,
    UnicodeBlock.MALAYALAM,
    UnicodeBlock.SINHALA,
    UnicodeBlock.THAI,
    UnicodeBlock.LAO,
    UnicodeBlock.TIBETAN,
    UnicodeBlock.MYANMAR,
    UnicodeBlock.GEORGIAN,
    UnicodeBlock.HANGUL_JAMO,
    UnicodeBlock.ETHIOPIC,
    UnicodeBlock.ETHIOPIC_SUPPLEMENT,
    UnicodeBlock.CHEROKEE,
    UnicodeBlock.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS,
    UnicodeBlock.OGHAM,
    UnicodeBlock.RUNIC,
    UnicodeBlock.TAGALOG,
    UnicodeBlock.HANUNOO,
    UnicodeBlock.BUHID,
    UnicodeBlock.TAGBANWA,
    UnicodeBlock.KHMER,
    UnicodeBlock.MONGOLIAN,
    UnicodeBlock.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS_EXTENDED,
    UnicodeBlock.LIMBU,
    UnicodeBlock.TAI_LE,
    UnicodeBlock.NEW_TAI_LUE,
    UnicodeBlock.KHMER_SYMBOLS,
    UnicodeBlock.BUGINESE,
    UnicodeBlock.TAI_THAM,
    UnicodeBlock.COMBINING_DIACRITICAL_MARKS_EXTENDED,
    UnicodeBlock.BALINESE,
    UnicodeBlock.SUNDANESE,
    UnicodeBlock.BATAK,
    UnicodeBlock.LEPCHA,
    UnicodeBlock.OL_CHIKI,
    UnicodeBlock.CYRILLIC_EXTENDED_C,
    null,
    UnicodeBlock.SUNDANESE_SUPPLEMENT,
    UnicodeBlock.VEDIC_EXTENSIONS,
    UnicodeBlock.PHONETIC_EXTENSIONS,
    UnicodeBlock.PHONETIC_EXTENSIONS_SUPPLEMENT,
    UnicodeBlock.COMBINING_DIACRITICAL_MARKS_SUPPLEMENT,
    UnicodeBlock.LATIN_EXTENDED_ADDITIONAL,
    UnicodeBlock.GREEK_EXTENDED,
    UnicodeBlock.GENERAL_PUNCTUATION,
    UnicodeBlock.SUPERSCRIPTS_AND_SUBSCRIPTS,
    UnicodeBlock.CURRENCY_SYMBOLS,
    UnicodeBlock.COMBINING_MARKS_FOR_SYMBOLS,
    UnicodeBlock.LETTERLIKE_SYMBOLS,
    UnicodeBlock.NUMBER_FORMS,
    UnicodeBlock.ARROWS,
    UnicodeBlock.MATHEMATICAL_OPERATORS,
    UnicodeBlock.MISCELLANEOUS_TECHNICAL,
    UnicodeBlock.CONTROL_PICTURES,
    UnicodeBlock.OPTICAL_CHARACTER_RECOGNITION,
    UnicodeBlock.ENCLOSED_ALPHANUMERICS,
    UnicodeBlock.BOX_DRAWING,
    UnicodeBlock.BLOCK_ELEMENTS,
    UnicodeBlock.GEOMETRIC_SHAPES,
    UnicodeBlock.MISCELLANEOUS_SYMBOLS,
    UnicodeBlock.DINGBATS,
    UnicodeBlock.MISCELLANEOUS_MATHEMATICAL_SYMBOLS_A,
    UnicodeBlock.SUPPLEMENTAL_ARROWS_A,
    UnicodeBlock.BRAILLE_PATTERNS,
    UnicodeBlock.SUPPLEMENTAL_ARROWS_B,
    UnicodeBlock.MISCELLANEOUS_MATHEMATICAL_SYMBOLS_B,
    UnicodeBlock.SUPPLEMENTAL_MATHEMATICAL_OPERATORS,
    UnicodeBlock.MISCELLANEOUS_SYMBOLS_AND_ARROWS,
    UnicodeBlock.GLAGOLITIC,
    UnicodeBlock.LATIN_EXTENDED_C,
    UnicodeBlock.COPTIC,
    UnicodeBlock.GEORGIAN_SUPPLEMENT,
    UnicodeBlock.TIFINAGH,
    UnicodeBlock.ETHIOPIC_EXTENDED,
    UnicodeBlock.CYRILLIC_EXTENDED_A,
    UnicodeBlock.SUPPLEMENTAL_PUNCTUATION,
    UnicodeBlock.CJK_RADICALS_SUPPLEMENT,
    UnicodeBlock.KANGXI_RADICALS,
    null,
    UnicodeBlock.IDEOGRAPHIC_DESCRIPTION_CHARACTERS,
    UnicodeBlock.CJK_SYMBOLS_AND_PUNCTUATION,
    UnicodeBlock.HIRAGANA,
    UnicodeBlock.KATAKANA,
    UnicodeBlock.BOPOMOFO,
    UnicodeBlock.HANGUL_COMPATIBILITY_JAMO,
    UnicodeBlock.KANBUN,
    UnicodeBlock.BOPOMOFO_EXTENDED,
    UnicodeBlock.CJK_STROKES,
    UnicodeBlock.KATAKANA_PHONETIC_EXTENSIONS,
    UnicodeBlock.ENCLOSED_CJK_LETTERS_AND_MONTHS,
    UnicodeBlock.CJK_COMPATIBILITY,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A,
    UnicodeBlock.YIJING_HEXAGRAM_SYMBOLS,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS,
    UnicodeBlock.YI_SYLLABLES,
    UnicodeBlock.YI_RADICALS,
    UnicodeBlock.LISU,
    UnicodeBlock.VAI,
    UnicodeBlock.CYRILLIC_EXTENDED_B,
    UnicodeBlock.BAMUM,
    UnicodeBlock.MODIFIER_TONE_LETTERS,
    UnicodeBlock.LATIN_EXTENDED_D,
    UnicodeBlock.SYLOTI_NAGRI,
    UnicodeBlock.COMMON_INDIC_NUMBER_FORMS,
    UnicodeBlock.PHAGS_PA,
    UnicodeBlock.SAURASHTRA,
    UnicodeBlock.DEVANAGARI_EXTENDED,
    UnicodeBlock.KAYAH_LI,
    UnicodeBlock.REJANG,
    UnicodeBlock.HANGUL_JAMO_EXTENDED_A,
    UnicodeBlock.JAVANESE,
    UnicodeBlock.MYANMAR_EXTENDED_B,
    UnicodeBlock.CHAM,
    UnicodeBlock.MYANMAR_EXTENDED_A,
    UnicodeBlock.TAI_VIET,
    UnicodeBlock.MEETEI_MAYEK_EXTENSIONS,
    UnicodeBlock.ETHIOPIC_EXTENDED_A,
    UnicodeBlock.LATIN_EXTENDED_E,
    UnicodeBlock.CHEROKEE_SUPPLEMENT,
    UnicodeBlock.MEETEI_MAYEK,
    UnicodeBlock.HANGUL_SYLLABLES,
    UnicodeBlock.HANGUL_JAMO_EXTENDED_B,
    UnicodeBlock.HIGH_SURROGATES,
    UnicodeBlock.HIGH_PRIVATE_USE_SURROGATES,
    UnicodeBlock.LOW_SURROGATES,
    UnicodeBlock.PRIVATE_USE_AREA,
    UnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS,
    UnicodeBlock.ALPHABETIC_PRESENTATION_FORMS,
    UnicodeBlock.ARABIC_PRESENTATION_FORMS_A,
    UnicodeBlock.VARIATION_SELECTORS,
    UnicodeBlock.VERTICAL_FORMS,
    UnicodeBlock.COMBINING_HALF_MARKS,
    UnicodeBlock.CJK_COMPATIBILITY_FORMS,
    UnicodeBlock.SMALL_FORM_VARIANTS,
    UnicodeBlock.ARABIC_PRESENTATION_FORMS_B,
    UnicodeBlock.HALFWIDTH_AND_FULLWIDTH_FORMS,
    UnicodeBlock.SPECIALS,
    UnicodeBlock.LINEAR_B_SYLLABARY,
    UnicodeBlock.LINEAR_B_IDEOGRAMS,
    UnicodeBlock.AEGEAN_NUMBERS,
    UnicodeBlock.ANCIENT_GREEK_NUMBERS,
    UnicodeBlock.ANCIENT_SYMBOLS,
    UnicodeBlock.PHAISTOS_DISC,
    null,
    UnicodeBlock.LYCIAN,
    UnicodeBlock.CARIAN,
    UnicodeBlock.COPTIC_EPACT_NUMBERS,
    UnicodeBlock.OLD_ITALIC,
    UnicodeBlock.GOTHIC,
    UnicodeBlock.OLD_PERMIC,
    UnicodeBlock.UGARITIC,
    UnicodeBlock.OLD_PERSIAN,
    null,
    UnicodeBlock.DESERET,
    UnicodeBlock.SHAVIAN,
    UnicodeBlock.OSMANYA,
    UnicodeBlock.OSAGE,
    UnicodeBlock.ELBASAN,
    UnicodeBlock.CAUCASIAN_ALBANIAN,
    null,
    UnicodeBlock.LINEAR_A,
    null,
    UnicodeBlock.CYPRIOT_SYLLABARY,
    UnicodeBlock.IMPERIAL_ARAMAIC,
    UnicodeBlock.PALMYRENE,
    UnicodeBlock.NABATAEAN,
    null,
    UnicodeBlock.HATRAN,
    UnicodeBlock.PHOENICIAN,
    UnicodeBlock.LYDIAN,
    null,
    UnicodeBlock.MEROITIC_HIEROGLYPHS,
    UnicodeBlock.MEROITIC_CURSIVE,
    UnicodeBlock.KHAROSHTHI,
    UnicodeBlock.OLD_SOUTH_ARABIAN,
    UnicodeBlock.OLD_NORTH_ARABIAN,
    null,
    UnicodeBlock.MANICHAEAN,
    UnicodeBlock.AVESTAN,
    UnicodeBlock.INSCRIPTIONAL_PARTHIAN,
    UnicodeBlock.INSCRIPTIONAL_PAHLAVI,
    UnicodeBlock.PSALTER_PAHLAVI,
    null,
    UnicodeBlock.OLD_TURKIC,
    null,
    UnicodeBlock.OLD_HUNGARIAN,
    null,
    UnicodeBlock.RUMI_NUMERAL_SYMBOLS,
    null,
    UnicodeBlock.BRAHMI,
    UnicodeBlock.KAITHI,
    UnicodeBlock.SORA_SOMPENG,
    UnicodeBlock.CHAKMA,
    UnicodeBlock.MAHAJANI,
    UnicodeBlock.SHARADA,
    UnicodeBlock.SINHALA_ARCHAIC_NUMBERS,
    UnicodeBlock.KHOJKI,
    null,
    UnicodeBlock.MULTANI,
    UnicodeBlock.KHUDAWADI,
    UnicodeBlock.GRANTHA,
    null,
    UnicodeBlock.NEWA,
    UnicodeBlock.TIRHUTA,
    null,
    UnicodeBlock.SIDDHAM,
    UnicodeBlock.MODI,
    UnicodeBlock.MONGOLIAN_SUPPLEMENT,
    UnicodeBlock.TAKRI,
    null,
    UnicodeBlock.AHOM,
    null,
    UnicodeBlock.WARANG_CITI,
    null,
    UnicodeBlock.ZANABAZAR_SQUARE,
    UnicodeBlock.SOYOMBO,
    null,
    UnicodeBlock.PAU_CIN_HAU,
    null,
    UnicodeBlock.BHAIKSUKI,
    UnicodeBlock.MARCHEN,
    null,
    UnicodeBlock.MASARAM_GONDI,
    null,
    UnicodeBlock.CUNEIFORM,
    UnicodeBlock.CUNEIFORM_NUMBERS_AND_PUNCTUATION,
    UnicodeBlock.EARLY_DYNASTIC_CUNEIFORM,
    null,
    UnicodeBlock.EGYPTIAN_HIEROGLYPHS,
    null,
    UnicodeBlock.ANATOLIAN_HIEROGLYPHS,
    null,
    UnicodeBlock.BAMUM_SUPPLEMENT,
    UnicodeBlock.MRO,
    null,
    UnicodeBlock.BASSA_VAH,
    UnicodeBlock.PAHAWH_HMONG,
    null,
    UnicodeBlock.MIAO,
    null,
    UnicodeBlock.IDEOGRAPHIC_SYMBOLS_AND_PUNCTUATION,
    UnicodeBlock.TANGUT,
    UnicodeBlock.TANGUT_COMPONENTS,
    null,
    UnicodeBlock.KANA_SUPPLEMENT,
    UnicodeBlock.KANA_EXTENDED_A,
    null,
    UnicodeBlock.NUSHU,
    null,
    UnicodeBlock.DUPLOYAN,
    UnicodeBlock.SHORTHAND_FORMAT_CONTROLS,
    null,
    UnicodeBlock.BYZANTINE_MUSICAL_SYMBOLS,
    UnicodeBlock.MUSICAL_SYMBOLS,
    UnicodeBlock.ANCIENT_GREEK_MUSICAL_NOTATION,
    null,
    UnicodeBlock.TAI_XUAN_JING_SYMBOLS,
    UnicodeBlock.COUNTING_ROD_NUMERALS,
    null,
    UnicodeBlock.MATHEMATICAL_ALPHANUMERIC_SYMBOLS,
    UnicodeBlock.SUTTON_SIGNWRITING,
    null,
    UnicodeBlock.GLAGOLITIC_SUPPLEMENT,
    null,
    UnicodeBlock.MENDE_KIKAKUI,
    null,
    UnicodeBlock.ADLAM,
    null,
    UnicodeBlock.ARABIC_MATHEMATICAL_ALPHABETIC_SYMBOLS,
    null,
    UnicodeBlock.MAHJONG_TILES,
    UnicodeBlock.DOMINO_TILES,
    UnicodeBlock.PLAYING_CARDS,
    UnicodeBlock.ENCLOSED_ALPHANUMERIC_SUPPLEMENT,
    UnicodeBlock.ENCLOSED_IDEOGRAPHIC_SUPPLEMENT,
    UnicodeBlock.MISCELLANEOUS_SYMBOLS_AND_PICTOGRAPHS,
    UnicodeBlock.EMOTICONS,
    UnicodeBlock.ORNAMENTAL_DINGBATS,
    UnicodeBlock.TRANSPORT_AND_MAP_SYMBOLS,
    UnicodeBlock.ALCHEMICAL_SYMBOLS,
    UnicodeBlock.GEOMETRIC_SHAPES_EXTENDED,
    UnicodeBlock.SUPPLEMENTAL_ARROWS_C,
    UnicodeBlock.SUPPLEMENTAL_SYMBOLS_AND_PICTOGRAPHS,
    null,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B,
    null,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_C,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_D,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_E,
    UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_F,
    null,
    UnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS_SUPPLEMENT,
    null,
    UnicodeBlock.TAGS,
    null,
    UnicodeBlock.VARIATION_SELECTORS_SUPPLEMENT,
    null,
    UnicodeBlock.SUPPLEMENTARY_PRIVATE_USE_AREA_A,
    UnicodeBlock.SUPPLEMENTARY_PRIVATE_USE_AREA_B,
  ]

  static MAX_CODE_POINT: number = 0x10ffff

  private block: EUnicodeBlock | null = null

  constructor() {
    super()
  }

  _setBlock(block: EUnicodeBlock | null): void {
    this.block = block
  }

  static isValidCodePoint(codePoint: number): boolean {
    // Optimized form of:
    //     codePoint >= MIN_CODE_POINT && codePoint <= MAX_CODE_POINT
    let plane: number = codePoint >>> 16
    return plane < (this.MAX_CODE_POINT + 1) >>> 16
  }

  static of(codePoint: number): UnicodeBlock | null {
    if (!this.isValidCodePoint(codePoint)) {
      throw new IllegalArgumentException(
        `Not a valid Unicode code point: 0x${codePoint}`,
      )
    }

    let top: number, bottom: number, current: number
    bottom = 0
    top = this.blockStarts.length
    current = top / 2

    // invariant: top > current >= bottom && codePoint >= unicodeBlockStarts[bottom]
    while (top - bottom > 1) {
      if (codePoint >= this.blockStarts[current]) {
        bottom = current
      } else {
        top = current
      }
      current = (top + bottom) / 2
    }

    return this.blocks[current]
  }
}
