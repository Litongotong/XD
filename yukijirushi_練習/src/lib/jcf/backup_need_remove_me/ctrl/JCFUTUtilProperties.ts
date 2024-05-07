import { JCFCMReference } from './JCFCMReference'
import { HashMap } from '@/lib/native/util/HashMap'

export class JCFUTUtilProperties {
  public static readonly FILE_PATH_TYPE_ABSOLUTENESS: number = 0
  public static readonly FILE_PATH_TYPE_RELATIVITY: number = 1
  private reference: JCFCMReference | null = null
  private utilMap: HashMap = new HashMap()

  protected static readonly MESSAGE_TITLE: string = 'messageTitle'
  protected static readonly MESSAGE_CLOSE_MODE: string = 'messageCloseMode'
  protected static readonly LOG_ADAPTER_NAME: string = 'logAdapterName'
  protected static readonly LOG_OUT_LEVEL: string = 'logOutLevel'
  protected static readonly LOG_TIMESTAMP: string = 'logTimestamp'
  protected static readonly LOG_PROPERTY_PATH_TYPE: string =
    'logPropertyPathType'
  protected static readonly LOG_PROPERTY_FILE_NAME: string =
    'logPropertyFileName'
  protected static readonly DATE_SYSTEM_DATE: string = 'systemDate'
  protected static readonly DATE_SYSTEM_TIME: string = 'systemTime'
  protected static readonly IMAGE_JPEG_QUALITY: string = 'JPEGQuality'
  protected static readonly IMAGE_PRINTER_DIALOG: string = 'printerDialog'
  protected static readonly IMAGE_PRINTER_RESIZE: string = 'printerResize'
  protected static readonly IMAGE_PRINTER_SELECTION: string = 'printerSelection'
  protected static readonly IMAGE_PRINTER_FROM_PAGE: string = 'printerFromPage'
  protected static readonly IMAGE_PRINTER_TO_PAGE: string = 'printerToPage'
  protected static readonly IMAGE_PRINTER_DESTINATION: string =
    'printerDestination'
  protected static readonly IMAGE_PRINTER_NAME: string = 'printerName'
  protected static readonly IMAGE_PRINTER_FILE_NAME: string = 'printerFileName'
  protected static readonly IMAGE_PRINTER_SIDES: string = 'printerSides'
  protected static readonly IMAGE_PRINTER_COPIES: string = 'printerCopies'
  protected static readonly IMAGE_PRINTER_COLOR: string = 'printerColor'
  protected static readonly IMAGE_PRINTER_MEDIA: string = 'printerMedia'
  protected static readonly IMAGE_PRINTER_ORIENTATION: string =
    'printerOrientation'
  protected static readonly IMAGE_PRINTER_QUALITY: string = 'printerQuality'
  protected static readonly IMAGE_PRINTER_RESOLUTION: string =
    'printerResolution'
  protected static readonly IMAGE_PRINTER_MARGIN_X: string = 'printerMarginX'
  protected static readonly IMAGE_PRINTER_MARGIN_Y: string = 'printerMarginY'
  protected static readonly IMAGE_PRINTER_AUTO_MAGNIFICATION: string =
    'printerAutoMagnification'
  private messageTitle: string = ''
  protected static readonly MESSAGE_CLOSE_MODE_0: string = '0'
  protected static readonly MESSAGE_CLOSE_MODE_1: string = '1'
  protected static readonly MESSAGE_CLOSE_MODE_2: string = '2'

  private messageCloseMode: string = '0'
  private logAdapterName: string = ''
  private logOutLevel: number = 0
  private logTimestamp: boolean = false
  private static logPropertyPathType: number = 1
  private static logPropertyFileName: string = '/cjfLog'
  private systemDate: string = ''
  private systemTime: string = ''
  private JPEGQuality: number = 0.5
  private printerDialog: any // TODO java.awt.JobAttributes.DialogType
  private printerResize: boolean = false
  private printerSelection: any // TODO java.awt.JobAttributes.DefaultSelectionType
  private printerFromPage: number = 0
  private printerToPage: number = 0
  private printerDistination: any // TODO java.awt.JobAttributes.DestinationType
  private printerName: string | null = ''
  private printerFileName: string | null = ''
  private printerSides: any // TODO java.awt.JobAttributes.SidesType
  private printerCopies: number = 0
  private printerColor: any // TODO java.awt.PageAttributes.ColorType
  private printerMedia: any // TODO java.awt.PageAttributes.MediaType
  private printerOrientation: any // TODO java.awt.PageAttributes.OrientationRequestedType
  private printerQuality: any // TODO java.awt.PageAttributes.PrintQualityType
  private printerResolution: number = 0
  private printerMarginX: number = 0
  private printerMarginY: number = 0
  private printerAutoMagnification: boolean = false
  protected static readonly MESSAGE_FONT_NAME: string = 'messageFontName'
  protected static readonly MESSAGE_FONT_SIZE: string = 'messageFontSize'
  private messageFontName: string | null = ''
  private messageFontSize: number = 0

  constructor() {
    // this.printerDialog = DialogType.NATIVE
    this.printerResize = false
    // this.printerSelection = DefaultSelectionType.ALL
    this.printerFromPage = 1
    this.printerToPage = -1
    // this.printerDistination = DestinationType.PRINTER
    this.printerName = null
    this.printerFileName = null
    // this.printerSides = SidesType.ONE_SIDED
    this.printerCopies = 1
    // this.printerColor = ColorType.MONOCHROME
    // this.printerMedia = MediaType.ISO_A4
    // this.printerOrientation = OrientationRequestedType.LANDSCAPE
    // this.printerQuality = PrintQualityType.NORMAL
    this.printerResolution = 72
    this.printerMarginX = 0
    this.printerMarginY = 0
    this.printerAutoMagnification = true
    this.messageFontName = null
    this.messageFontSize = -1
  }

  getMessageTitle(): string {
    return this.messageTitle
  }
}
