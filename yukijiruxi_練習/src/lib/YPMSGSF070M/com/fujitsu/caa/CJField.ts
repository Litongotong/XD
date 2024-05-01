/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export abstract class CJField extends lib.com.fujitsu.caa.CJFieldComponent implements lib.com.fujitsu.caa.CJTextOperator, lib.com.fujitsu.caa.CJEditOperator {
        public constructor(src?: any, owner?: any) {
            if (((src != null && src instanceof <any>lib.com.fujitsu.caa.CJField) || src === null) && ((owner != null && owner instanceof <any>com.java.Component) || owner === null)) {
                let __args = arguments;
                super();
                if (this.startPos === undefined) { this.startPos = 0; } 
                if (this.inputContext === undefined) { this.inputContext = null; } 
                if (this.displayForeground === undefined) { this.displayForeground = null; } 
                if (this.displayBackground === undefined) { this.displayBackground = null; } 
                if (this.font === undefined) { this.font = null; } 
                if (this.fontMetrics === undefined) { this.fontMetrics = null; } 
                if (this.fontAscent === undefined) { this.fontAscent = 0; } 
                if (this.fontDescent === undefined) { this.fontDescent = 0; } 
                if (this.fontAdvance === undefined) { this.fontAdvance = 0; } 
                if (this.fontLeading === undefined) { this.fontLeading = 0; } 
                if (this.caretPosition === undefined) { this.caretPosition = 0; } 
                if (this.selectionStart === undefined) { this.selectionStart = 0; } 
                if (this.selectionEnd === undefined) { this.selectionEnd = 0; } 
                if (this.startSelect === undefined) { this.startSelect = 0; } 
                if (this.endSelect === undefined) { this.endSelect = 0; } 
                if (this.beforeSelected === undefined) { this.beforeSelected = null; } 
                if (this.selected === undefined) { this.selected = null; } 
                if (this.afterSelected === undefined) { this.afterSelected = null; } 
                if (this.beforeCaret === undefined) { this.beforeCaret = null; } 
                if (this.afterCaret === undefined) { this.afterCaret = null; } 
                if (this.text === undefined) { this.text = null; } 
                if (this.echoText === undefined) { this.echoText = null; } 
                if (this.columns === undefined) { this.columns = 0; } 
                if (this.maxLength === undefined) { this.maxLength = 0; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.enableChars === undefined) { this.enableChars = null; } 
                if (this.fullField === undefined) { this.fullField = false; } 
                if (this.indispensableField === undefined) { this.indispensableField = false; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.columnBaseChars === undefined) { this.columnBaseChars = null; } 
                if (this.defaultBaseChars === undefined) { this.defaultBaseChars = null; } 
                if (this.disableChars === undefined) { this.disableChars = null; } 
                if (this.prefixWord === undefined) { this.prefixWord = null; } 
                if (this.prefixLen === undefined) { this.prefixLen = 0; } 
                if (this.suffixWord === undefined) { this.suffixWord = null; } 
                if (this.suffixLen === undefined) { this.suffixLen = 0; } 
                if (this.jenableType === undefined) { this.jenableType = 0; } 
                if (this.autoEscapeMode === undefined) { this.autoEscapeMode = false; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.resetCaretPos === undefined) { this.resetCaretPos = false; } 
                if (this.inspectpos === undefined) { this.inspectpos = null; } 
                if (this.aesc_delay2release === undefined) { this.aesc_delay2release = false; } 
                if (this.conversionflag === undefined) { this.conversionflag = false; } 
                if (this.conversionLock === undefined) { this.conversionLock = null; } 
                if (this.showchgO === undefined) { this.showchgO = null; } 
                if (this.showchL === undefined) { this.showchL = null; } 
            } else if (((typeof src === 'string') || src === null) && ((typeof owner === 'number') || owner === null)) {
                let __args = arguments;
                let string: any = __args[0];
                let cols: any = __args[1];
                super();
                if (this.startPos === undefined) { this.startPos = 0; } 
                if (this.inputContext === undefined) { this.inputContext = null; } 
                if (this.displayForeground === undefined) { this.displayForeground = null; } 
                if (this.displayBackground === undefined) { this.displayBackground = null; } 
                if (this.font === undefined) { this.font = null; } 
                if (this.fontMetrics === undefined) { this.fontMetrics = null; } 
                if (this.fontAscent === undefined) { this.fontAscent = 0; } 
                if (this.fontDescent === undefined) { this.fontDescent = 0; } 
                if (this.fontAdvance === undefined) { this.fontAdvance = 0; } 
                if (this.fontLeading === undefined) { this.fontLeading = 0; } 
                if (this.caretPosition === undefined) { this.caretPosition = 0; } 
                if (this.selectionStart === undefined) { this.selectionStart = 0; } 
                if (this.selectionEnd === undefined) { this.selectionEnd = 0; } 
                if (this.startSelect === undefined) { this.startSelect = 0; } 
                if (this.endSelect === undefined) { this.endSelect = 0; } 
                if (this.beforeSelected === undefined) { this.beforeSelected = null; } 
                if (this.selected === undefined) { this.selected = null; } 
                if (this.afterSelected === undefined) { this.afterSelected = null; } 
                if (this.beforeCaret === undefined) { this.beforeCaret = null; } 
                if (this.afterCaret === undefined) { this.afterCaret = null; } 
                if (this.text === undefined) { this.text = null; } 
                if (this.echoText === undefined) { this.echoText = null; } 
                if (this.columns === undefined) { this.columns = 0; } 
                if (this.maxLength === undefined) { this.maxLength = 0; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.enableChars === undefined) { this.enableChars = null; } 
                if (this.fullField === undefined) { this.fullField = false; } 
                if (this.indispensableField === undefined) { this.indispensableField = false; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.columnBaseChars === undefined) { this.columnBaseChars = null; } 
                if (this.defaultBaseChars === undefined) { this.defaultBaseChars = null; } 
                if (this.disableChars === undefined) { this.disableChars = null; } 
                if (this.prefixWord === undefined) { this.prefixWord = null; } 
                if (this.prefixLen === undefined) { this.prefixLen = 0; } 
                if (this.suffixWord === undefined) { this.suffixWord = null; } 
                if (this.suffixLen === undefined) { this.suffixLen = 0; } 
                if (this.jenableType === undefined) { this.jenableType = 0; } 
                if (this.autoEscapeMode === undefined) { this.autoEscapeMode = false; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.resetCaretPos === undefined) { this.resetCaretPos = false; } 
                if (this.inspectpos === undefined) { this.inspectpos = null; } 
                if (this.aesc_delay2release === undefined) { this.aesc_delay2release = false; } 
                if (this.conversionflag === undefined) { this.conversionflag = false; } 
                if (this.conversionLock === undefined) { this.conversionLock = null; } 
                if (this.showchgO === undefined) { this.showchgO = null; } 
                if (this.showchL === undefined) { this.showchL = null; } 
            } else if (((typeof src === 'string') || src === null) && owner === undefined) {
                let __args = arguments;
                let string: any = __args[0];
                {
                    let __args = arguments;
                    let cols: any = 0;
                    super();
                    if (this.startPos === undefined) { this.startPos = 0; } 
                    if (this.inputContext === undefined) { this.inputContext = null; } 
                    if (this.displayForeground === undefined) { this.displayForeground = null; } 
                    if (this.displayBackground === undefined) { this.displayBackground = null; } 
                    if (this.font === undefined) { this.font = null; } 
                    if (this.fontMetrics === undefined) { this.fontMetrics = null; } 
                    if (this.fontAscent === undefined) { this.fontAscent = 0; } 
                    if (this.fontDescent === undefined) { this.fontDescent = 0; } 
                    if (this.fontAdvance === undefined) { this.fontAdvance = 0; } 
                    if (this.fontLeading === undefined) { this.fontLeading = 0; } 
                    if (this.caretPosition === undefined) { this.caretPosition = 0; } 
                    if (this.selectionStart === undefined) { this.selectionStart = 0; } 
                    if (this.selectionEnd === undefined) { this.selectionEnd = 0; } 
                    if (this.startSelect === undefined) { this.startSelect = 0; } 
                    if (this.endSelect === undefined) { this.endSelect = 0; } 
                    if (this.beforeSelected === undefined) { this.beforeSelected = null; } 
                    if (this.selected === undefined) { this.selected = null; } 
                    if (this.afterSelected === undefined) { this.afterSelected = null; } 
                    if (this.beforeCaret === undefined) { this.beforeCaret = null; } 
                    if (this.afterCaret === undefined) { this.afterCaret = null; } 
                    if (this.text === undefined) { this.text = null; } 
                    if (this.echoText === undefined) { this.echoText = null; } 
                    if (this.columns === undefined) { this.columns = 0; } 
                    if (this.maxLength === undefined) { this.maxLength = 0; } 
                    if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                    if (this.enableChars === undefined) { this.enableChars = null; } 
                    if (this.fullField === undefined) { this.fullField = false; } 
                    if (this.indispensableField === undefined) { this.indispensableField = false; } 
                    if (this.autoIME === undefined) { this.autoIME = false; } 
                    if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                    if (this.inputMode === undefined) { this.inputMode = 0; } 
                    if (this.columnBaseChars === undefined) { this.columnBaseChars = null; } 
                    if (this.defaultBaseChars === undefined) { this.defaultBaseChars = null; } 
                    if (this.disableChars === undefined) { this.disableChars = null; } 
                    if (this.prefixWord === undefined) { this.prefixWord = null; } 
                    if (this.prefixLen === undefined) { this.prefixLen = 0; } 
                    if (this.suffixWord === undefined) { this.suffixWord = null; } 
                    if (this.suffixLen === undefined) { this.suffixLen = 0; } 
                    if (this.jenableType === undefined) { this.jenableType = 0; } 
                    if (this.autoEscapeMode === undefined) { this.autoEscapeMode = false; } 
                    if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                    if (this.resetCaretPos === undefined) { this.resetCaretPos = false; } 
                    if (this.inspectpos === undefined) { this.inspectpos = null; } 
                    if (this.aesc_delay2release === undefined) { this.aesc_delay2release = false; } 
                    if (this.conversionflag === undefined) { this.conversionflag = false; } 
                    if (this.conversionLock === undefined) { this.conversionLock = null; } 
                    if (this.showchgO === undefined) { this.showchgO = null; } 
                    if (this.showchL === undefined) { this.showchL = null; } 
                }
                if (this.startPos === undefined) { this.startPos = 0; } 
                if (this.inputContext === undefined) { this.inputContext = null; } 
                if (this.displayForeground === undefined) { this.displayForeground = null; } 
                if (this.displayBackground === undefined) { this.displayBackground = null; } 
                if (this.font === undefined) { this.font = null; } 
                if (this.fontMetrics === undefined) { this.fontMetrics = null; } 
                if (this.fontAscent === undefined) { this.fontAscent = 0; } 
                if (this.fontDescent === undefined) { this.fontDescent = 0; } 
                if (this.fontAdvance === undefined) { this.fontAdvance = 0; } 
                if (this.fontLeading === undefined) { this.fontLeading = 0; } 
                if (this.caretPosition === undefined) { this.caretPosition = 0; } 
                if (this.selectionStart === undefined) { this.selectionStart = 0; } 
                if (this.selectionEnd === undefined) { this.selectionEnd = 0; } 
                if (this.startSelect === undefined) { this.startSelect = 0; } 
                if (this.endSelect === undefined) { this.endSelect = 0; } 
                if (this.beforeSelected === undefined) { this.beforeSelected = null; } 
                if (this.selected === undefined) { this.selected = null; } 
                if (this.afterSelected === undefined) { this.afterSelected = null; } 
                if (this.beforeCaret === undefined) { this.beforeCaret = null; } 
                if (this.afterCaret === undefined) { this.afterCaret = null; } 
                if (this.text === undefined) { this.text = null; } 
                if (this.echoText === undefined) { this.echoText = null; } 
                if (this.columns === undefined) { this.columns = 0; } 
                if (this.maxLength === undefined) { this.maxLength = 0; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.enableChars === undefined) { this.enableChars = null; } 
                if (this.fullField === undefined) { this.fullField = false; } 
                if (this.indispensableField === undefined) { this.indispensableField = false; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.columnBaseChars === undefined) { this.columnBaseChars = null; } 
                if (this.defaultBaseChars === undefined) { this.defaultBaseChars = null; } 
                if (this.disableChars === undefined) { this.disableChars = null; } 
                if (this.prefixWord === undefined) { this.prefixWord = null; } 
                if (this.prefixLen === undefined) { this.prefixLen = 0; } 
                if (this.suffixWord === undefined) { this.suffixWord = null; } 
                if (this.suffixLen === undefined) { this.suffixLen = 0; } 
                if (this.jenableType === undefined) { this.jenableType = 0; } 
                if (this.autoEscapeMode === undefined) { this.autoEscapeMode = false; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.resetCaretPos === undefined) { this.resetCaretPos = false; } 
                if (this.inspectpos === undefined) { this.inspectpos = null; } 
                if (this.aesc_delay2release === undefined) { this.aesc_delay2release = false; } 
                if (this.conversionflag === undefined) { this.conversionflag = false; } 
                if (this.conversionLock === undefined) { this.conversionLock = null; } 
                if (this.showchgO === undefined) { this.showchgO = null; } 
                if (this.showchL === undefined) { this.showchL = null; } 
                (() => {
                    this.setColumns(this.text.length);
                })();
            } else if (((src != null && src instanceof <any>com.java.Component) || src === null) && owner === undefined) {
                let __args = arguments;
                let owner: any = __args[0];
                super();
                if (this.startPos === undefined) { this.startPos = 0; } 
                if (this.inputContext === undefined) { this.inputContext = null; } 
                if (this.displayForeground === undefined) { this.displayForeground = null; } 
                if (this.displayBackground === undefined) { this.displayBackground = null; } 
                if (this.font === undefined) { this.font = null; } 
                if (this.fontMetrics === undefined) { this.fontMetrics = null; } 
                if (this.fontAscent === undefined) { this.fontAscent = 0; } 
                if (this.fontDescent === undefined) { this.fontDescent = 0; } 
                if (this.fontAdvance === undefined) { this.fontAdvance = 0; } 
                if (this.fontLeading === undefined) { this.fontLeading = 0; } 
                if (this.caretPosition === undefined) { this.caretPosition = 0; } 
                if (this.selectionStart === undefined) { this.selectionStart = 0; } 
                if (this.selectionEnd === undefined) { this.selectionEnd = 0; } 
                if (this.startSelect === undefined) { this.startSelect = 0; } 
                if (this.endSelect === undefined) { this.endSelect = 0; } 
                if (this.beforeSelected === undefined) { this.beforeSelected = null; } 
                if (this.selected === undefined) { this.selected = null; } 
                if (this.afterSelected === undefined) { this.afterSelected = null; } 
                if (this.beforeCaret === undefined) { this.beforeCaret = null; } 
                if (this.afterCaret === undefined) { this.afterCaret = null; } 
                if (this.text === undefined) { this.text = null; } 
                if (this.echoText === undefined) { this.echoText = null; } 
                if (this.columns === undefined) { this.columns = 0; } 
                if (this.maxLength === undefined) { this.maxLength = 0; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.enableChars === undefined) { this.enableChars = null; } 
                if (this.fullField === undefined) { this.fullField = false; } 
                if (this.indispensableField === undefined) { this.indispensableField = false; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.columnBaseChars === undefined) { this.columnBaseChars = null; } 
                if (this.defaultBaseChars === undefined) { this.defaultBaseChars = null; } 
                if (this.disableChars === undefined) { this.disableChars = null; } 
                if (this.prefixWord === undefined) { this.prefixWord = null; } 
                if (this.prefixLen === undefined) { this.prefixLen = 0; } 
                if (this.suffixWord === undefined) { this.suffixWord = null; } 
                if (this.suffixLen === undefined) { this.suffixLen = 0; } 
                if (this.jenableType === undefined) { this.jenableType = 0; } 
                if (this.autoEscapeMode === undefined) { this.autoEscapeMode = false; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.resetCaretPos === undefined) { this.resetCaretPos = false; } 
                if (this.inspectpos === undefined) { this.inspectpos = null; } 
                if (this.aesc_delay2release === undefined) { this.aesc_delay2release = false; } 
                if (this.conversionflag === undefined) { this.conversionflag = false; } 
                if (this.conversionLock === undefined) { this.conversionLock = null; } 
                if (this.showchgO === undefined) { this.showchgO = null; } 
                if (this.showchL === undefined) { this.showchL = null; } 
            } else if (((src != null && src instanceof <any>lib.com.fujitsu.caa.CJField) || src === null) && owner === undefined) {
                let __args = arguments;
                super();
                if (this.startPos === undefined) { this.startPos = 0; } 
                if (this.inputContext === undefined) { this.inputContext = null; } 
                if (this.displayForeground === undefined) { this.displayForeground = null; } 
                if (this.displayBackground === undefined) { this.displayBackground = null; } 
                if (this.font === undefined) { this.font = null; } 
                if (this.fontMetrics === undefined) { this.fontMetrics = null; } 
                if (this.fontAscent === undefined) { this.fontAscent = 0; } 
                if (this.fontDescent === undefined) { this.fontDescent = 0; } 
                if (this.fontAdvance === undefined) { this.fontAdvance = 0; } 
                if (this.fontLeading === undefined) { this.fontLeading = 0; } 
                if (this.caretPosition === undefined) { this.caretPosition = 0; } 
                if (this.selectionStart === undefined) { this.selectionStart = 0; } 
                if (this.selectionEnd === undefined) { this.selectionEnd = 0; } 
                if (this.startSelect === undefined) { this.startSelect = 0; } 
                if (this.endSelect === undefined) { this.endSelect = 0; } 
                if (this.beforeSelected === undefined) { this.beforeSelected = null; } 
                if (this.selected === undefined) { this.selected = null; } 
                if (this.afterSelected === undefined) { this.afterSelected = null; } 
                if (this.beforeCaret === undefined) { this.beforeCaret = null; } 
                if (this.afterCaret === undefined) { this.afterCaret = null; } 
                if (this.text === undefined) { this.text = null; } 
                if (this.echoText === undefined) { this.echoText = null; } 
                if (this.columns === undefined) { this.columns = 0; } 
                if (this.maxLength === undefined) { this.maxLength = 0; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.enableChars === undefined) { this.enableChars = null; } 
                if (this.fullField === undefined) { this.fullField = false; } 
                if (this.indispensableField === undefined) { this.indispensableField = false; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.columnBaseChars === undefined) { this.columnBaseChars = null; } 
                if (this.defaultBaseChars === undefined) { this.defaultBaseChars = null; } 
                if (this.disableChars === undefined) { this.disableChars = null; } 
                if (this.prefixWord === undefined) { this.prefixWord = null; } 
                if (this.prefixLen === undefined) { this.prefixLen = 0; } 
                if (this.suffixWord === undefined) { this.suffixWord = null; } 
                if (this.suffixLen === undefined) { this.suffixLen = 0; } 
                if (this.jenableType === undefined) { this.jenableType = 0; } 
                if (this.autoEscapeMode === undefined) { this.autoEscapeMode = false; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.resetCaretPos === undefined) { this.resetCaretPos = false; } 
                if (this.inspectpos === undefined) { this.inspectpos = null; } 
                if (this.aesc_delay2release === undefined) { this.aesc_delay2release = false; } 
                if (this.conversionflag === undefined) { this.conversionflag = false; } 
                if (this.conversionLock === undefined) { this.conversionLock = null; } 
                if (this.showchgO === undefined) { this.showchgO = null; } 
                if (this.showchL === undefined) { this.showchL = null; } 
            } else if (src === undefined && owner === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let string: any = "";
                    let cols: any = 0;
                    super();
                    if (this.startPos === undefined) { this.startPos = 0; } 
                    if (this.inputContext === undefined) { this.inputContext = null; } 
                    if (this.displayForeground === undefined) { this.displayForeground = null; } 
                    if (this.displayBackground === undefined) { this.displayBackground = null; } 
                    if (this.font === undefined) { this.font = null; } 
                    if (this.fontMetrics === undefined) { this.fontMetrics = null; } 
                    if (this.fontAscent === undefined) { this.fontAscent = 0; } 
                    if (this.fontDescent === undefined) { this.fontDescent = 0; } 
                    if (this.fontAdvance === undefined) { this.fontAdvance = 0; } 
                    if (this.fontLeading === undefined) { this.fontLeading = 0; } 
                    if (this.caretPosition === undefined) { this.caretPosition = 0; } 
                    if (this.selectionStart === undefined) { this.selectionStart = 0; } 
                    if (this.selectionEnd === undefined) { this.selectionEnd = 0; } 
                    if (this.startSelect === undefined) { this.startSelect = 0; } 
                    if (this.endSelect === undefined) { this.endSelect = 0; } 
                    if (this.beforeSelected === undefined) { this.beforeSelected = null; } 
                    if (this.selected === undefined) { this.selected = null; } 
                    if (this.afterSelected === undefined) { this.afterSelected = null; } 
                    if (this.beforeCaret === undefined) { this.beforeCaret = null; } 
                    if (this.afterCaret === undefined) { this.afterCaret = null; } 
                    if (this.text === undefined) { this.text = null; } 
                    if (this.echoText === undefined) { this.echoText = null; } 
                    if (this.columns === undefined) { this.columns = 0; } 
                    if (this.maxLength === undefined) { this.maxLength = 0; } 
                    if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                    if (this.enableChars === undefined) { this.enableChars = null; } 
                    if (this.fullField === undefined) { this.fullField = false; } 
                    if (this.indispensableField === undefined) { this.indispensableField = false; } 
                    if (this.autoIME === undefined) { this.autoIME = false; } 
                    if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                    if (this.inputMode === undefined) { this.inputMode = 0; } 
                    if (this.columnBaseChars === undefined) { this.columnBaseChars = null; } 
                    if (this.defaultBaseChars === undefined) { this.defaultBaseChars = null; } 
                    if (this.disableChars === undefined) { this.disableChars = null; } 
                    if (this.prefixWord === undefined) { this.prefixWord = null; } 
                    if (this.prefixLen === undefined) { this.prefixLen = 0; } 
                    if (this.suffixWord === undefined) { this.suffixWord = null; } 
                    if (this.suffixLen === undefined) { this.suffixLen = 0; } 
                    if (this.jenableType === undefined) { this.jenableType = 0; } 
                    if (this.autoEscapeMode === undefined) { this.autoEscapeMode = false; } 
                    if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                    if (this.resetCaretPos === undefined) { this.resetCaretPos = false; } 
                    if (this.inspectpos === undefined) { this.inspectpos = null; } 
                    if (this.aesc_delay2release === undefined) { this.aesc_delay2release = false; } 
                    if (this.conversionflag === undefined) { this.conversionflag = false; } 
                    if (this.conversionLock === undefined) { this.conversionLock = null; } 
                    if (this.showchgO === undefined) { this.showchgO = null; } 
                    if (this.showchL === undefined) { this.showchL = null; } 
                }
                if (this.startPos === undefined) { this.startPos = 0; } 
                if (this.inputContext === undefined) { this.inputContext = null; } 
                if (this.displayForeground === undefined) { this.displayForeground = null; } 
                if (this.displayBackground === undefined) { this.displayBackground = null; } 
                if (this.font === undefined) { this.font = null; } 
                if (this.fontMetrics === undefined) { this.fontMetrics = null; } 
                if (this.fontAscent === undefined) { this.fontAscent = 0; } 
                if (this.fontDescent === undefined) { this.fontDescent = 0; } 
                if (this.fontAdvance === undefined) { this.fontAdvance = 0; } 
                if (this.fontLeading === undefined) { this.fontLeading = 0; } 
                if (this.caretPosition === undefined) { this.caretPosition = 0; } 
                if (this.selectionStart === undefined) { this.selectionStart = 0; } 
                if (this.selectionEnd === undefined) { this.selectionEnd = 0; } 
                if (this.startSelect === undefined) { this.startSelect = 0; } 
                if (this.endSelect === undefined) { this.endSelect = 0; } 
                if (this.beforeSelected === undefined) { this.beforeSelected = null; } 
                if (this.selected === undefined) { this.selected = null; } 
                if (this.afterSelected === undefined) { this.afterSelected = null; } 
                if (this.beforeCaret === undefined) { this.beforeCaret = null; } 
                if (this.afterCaret === undefined) { this.afterCaret = null; } 
                if (this.text === undefined) { this.text = null; } 
                if (this.echoText === undefined) { this.echoText = null; } 
                if (this.columns === undefined) { this.columns = 0; } 
                if (this.maxLength === undefined) { this.maxLength = 0; } 
                if (this.maxByteLength === undefined) { this.maxByteLength = 0; } 
                if (this.enableChars === undefined) { this.enableChars = null; } 
                if (this.fullField === undefined) { this.fullField = false; } 
                if (this.indispensableField === undefined) { this.indispensableField = false; } 
                if (this.autoIME === undefined) { this.autoIME = false; } 
                if (this.inputStyle === undefined) { this.inputStyle = 0; } 
                if (this.inputMode === undefined) { this.inputMode = 0; } 
                if (this.columnBaseChars === undefined) { this.columnBaseChars = null; } 
                if (this.defaultBaseChars === undefined) { this.defaultBaseChars = null; } 
                if (this.disableChars === undefined) { this.disableChars = null; } 
                if (this.prefixWord === undefined) { this.prefixWord = null; } 
                if (this.prefixLen === undefined) { this.prefixLen = 0; } 
                if (this.suffixWord === undefined) { this.suffixWord = null; } 
                if (this.suffixLen === undefined) { this.suffixLen = 0; } 
                if (this.jenableType === undefined) { this.jenableType = 0; } 
                if (this.autoEscapeMode === undefined) { this.autoEscapeMode = false; } 
                if (this.inputAssist === undefined) { this.inputAssist = 0; } 
                if (this.resetCaretPos === undefined) { this.resetCaretPos = false; } 
                if (this.inspectpos === undefined) { this.inspectpos = null; } 
                if (this.aesc_delay2release === undefined) { this.aesc_delay2release = false; } 
                if (this.conversionflag === undefined) { this.conversionflag = false; } 
                if (this.conversionLock === undefined) { this.conversionLock = null; } 
                if (this.showchgO === undefined) { this.showchgO = null; } 
                if (this.showchL === undefined) { this.showchL = null; } 
                (() => {
                    this.setColumns(this.text.length);
                })();
            } else throw new Error('invalid overload');
        }

        copyFrom(src: CJField) {
        }

        internalcopy(src: CJField) {
        }

        pri_transientInit() {
        }

        readObject(stream: com.java.ObjectInputStream) {
        }

        actAction(keyEvent: com.java.KeyEvent): boolean {
            return true;
        }

        actBackspace(keyEvent: com.java.KeyEvent): boolean {
            return true;
        }

        actCopy(keyEvent: com.java.KeyEvent) {
        }

        actCut(keyEvent: com.java.KeyEvent) {
        }

        actDelete(keyEvent: com.java.KeyEvent) {
        }

        actDeleteEnd(keyEvent: com.java.KeyEvent) {
        }

        actEnd(keyEvent: com.java.KeyEvent) {
        }

        actHome(keyEvent: com.java.KeyEvent) {
        }

        actLeft(keyEvent: com.java.KeyEvent): boolean {
            return false;
        }

        actPageDown(keyEvent: com.java.KeyEvent) {
        }

        actPageUp(keyEvent: com.java.KeyEvent) {
        }

        actPaste(keyEvent: com.java.KeyEvent) {
        }

        actRight(keyEvent: com.java.KeyEvent): boolean {
            return false;
        }

        actSelectAll() {
        }

        actSelectEnd(keyEvent: com.java.KeyEvent) {
        }

        actSelectHome(keyEvent: com.java.KeyEvent) {
        }

        actSelectLeft(keyEvent: com.java.KeyEvent) {
        }

        actSelectPageDown(keyEvent: com.java.KeyEvent) {
        }

        actSelectPageUp(keyEvent: com.java.KeyEvent) {
        }

        actSelectRight(keyEvent: com.java.KeyEvent) {
        }

        actToggleOvertype() {
        }

        addListeners() {
        }

        insertString(str: string, keyEvent: com.java.KeyEvent) {
        }

        public setAutoIME(auto: boolean) {
            this.autoIME = auto;
        }

        public isAutoIME(): boolean {
            return this.autoIME;
        }

        public setInputMode(mode: number) {
        }

        public getInputMode(): number {
            return this.inputMode;
        }

        public setInputStyle(style: number) {
        }

        public getInputStyle(): number {
            return this.inputStyle;
        }

        public setInputAssist(mode: number) {
        }

        public getInputAssist(): number {
            return this.inputAssist;
        }

        public getCaretPosition(): number {
            return this.caretPosition;
        }

        public setCaretPosition(position: number) {
        }

        public getSelectedText(): string {
            return this.selected;
        }

        public getSelectionEnd(): number {
            return this.selectionEnd;
        }

        public getSelectionStart(): number {
            return this.selectionStart;
        }

        public setSelectionEnd(endPos: number) {
        }

        public setSelectionStart(start: number) {
        }

        public getText(): string {
            return this.text;
        }

        public setText$java_lang_String(string: string) {
            this.cji_setText(string, false);
        }

        cji_setText(string: string, movecaret: boolean) {
        }

        public getCombinedText(): string {
            return null;
        }

        public getDefault(): string {
            return null;
        }

        public setCombinedText(combText: string) {
        }

        public checkCombinedText(combText: string): number {
            return 0;
        }

        public setEchoChar(echoChar: string) {
        }

        public getColumns(): number {
            return this.columns;
        }

        public setColumns(columns: number) {
        }

        public setMaxLength(length: number) {
        }

        public getMaxLength(): number {
            return this.maxLength;
        }

        public setMaxByteLength(byteLength: number) {
        }

        public getMaxByteLength(): number {
            return this.maxByteLength;
        }

        public setEnableType(enableType: number) {
        }

        public setEnableJType(enableType: number) {
        }

        public getEnableType(): number {
            return (<number>this.jenableType|0);
        }

        public getEnableJType(): number {
            return this.jenableType;
        }

        public addEnableChar(enableChar: string) {
        }

        public setEnableChars(enableChars: string[]) {
        }

        public getEnableChars(): string[] {
            return null;
        }

        public setFullField(c: boolean) {
            this.fullField = c;
        }

        public isFullField(): boolean {
            return this.fullField;
        }

        isFullLength$int(length: number): boolean {
            return false;
        }

        public isFullLength$java_lang_String(srctext: string): boolean {
            return false;
        }

        public isFullLength(srctext?: any): boolean {
            if (((typeof srctext === 'string') || srctext === null)) {
                return <any>this.isFullLength$java_lang_String(srctext);
            } else if (((typeof srctext === 'number') || srctext === null)) {
                return <any>this.isFullLength$int(srctext);
            } else throw new Error('invalid overload');
        }

        public checkFullField$(): boolean {
            return this.isFullLength$java_lang_String(this.text);
        }

        public setIndispensableField(c: boolean) {
            this.indispensableField = c;
        }

        public isIndispensableField(): boolean {
            return this.indispensableField;
        }

        isIndispensableText$int(length: number): boolean {
            if (!this.indispensableField)return true;
            return length > 0;
        }

        public isIndispensableText$java_lang_String(srctext: string): boolean {
            return false;
        }

        public isIndispensableText(srctext?: any): boolean {
            if (((typeof srctext === 'string') || srctext === null)) {
                return <any>this.isIndispensableText$java_lang_String(srctext);
            } else if (((typeof srctext === 'number') || srctext === null)) {
                return <any>this.isIndispensableText$int(srctext);
            } else throw new Error('invalid overload');
        }

        public checkIndispensableField$(): boolean {
            return this.isIndispensableText$java_lang_String(this.text);
        }

        public getLength(): number {
            return this.text.length;
        }

        public getByteLength(): number {
            return /* getBytes */(this.text).split('').map(s => s.charCodeAt(0)).length;
        }

        public getStringForRange(start: number, end: number): string {
            const string: string = this.text.substring(start, end);
            return string;
        }

        public setEnabled(enabled: boolean) {
        }

        public setForeground(color: com.java.Color) {
        }

        public setFont(font: com.java.Font) {
        }

        public canCopy(): boolean {
            return false;
        }

        public canCut(): boolean {
            return false;
        }

        public canPaste(): boolean {
            return true;
        }

        public copy$() {
            this.copy$com_java_AWTEvent(null);
        }

        public copy$com_java_AWTEvent(trigger: com.java.AWTEvent) {
        }

        public copy(trigger?: any) {
            if (((trigger != null && trigger instanceof <any>com.java.AWTEvent) || trigger === null)) {
                return <any>this.copy$com_java_AWTEvent(trigger);
            } else if (trigger === undefined) {
                return <any>this.copy$();
            } else throw new Error('invalid overload');
        }

        public cut$() {
        }

        cut$boolean(setmodified: boolean) {
        }

        public cut$boolean$com_java_AWTEvent(setmodified: boolean, trigger: com.java.AWTEvent) {
        }

        public cut(setmodified?: any, trigger?: any) {
            if (((typeof setmodified === 'boolean') || setmodified === null) && ((trigger != null && trigger instanceof <any>com.java.AWTEvent) || trigger === null)) {
                return <any>this.cut$boolean$com_java_AWTEvent(setmodified, trigger);
            } else if (((typeof setmodified === 'boolean') || setmodified === null) && trigger === undefined) {
                return <any>this.cut$boolean(setmodified);
            } else if (setmodified === undefined && trigger === undefined) {
                return <any>this.cut$();
            } else throw new Error('invalid overload');
        }

        public paste$() {
        }

        paste$boolean(setmodified: boolean) {
        }

        public paste$boolean$com_java_AWTEvent(setmodified: boolean, trigger: com.java.AWTEvent) {
        }

        public paste(setmodified?: any, trigger?: any) {
            if (((typeof setmodified === 'boolean') || setmodified === null) && ((trigger != null && trigger instanceof <any>com.java.AWTEvent) || trigger === null)) {
                return <any>this.paste$boolean$com_java_AWTEvent(setmodified, trigger);
            } else if (((typeof setmodified === 'boolean') || setmodified === null) && trigger === undefined) {
                return <any>this.paste$boolean(setmodified);
            } else if (setmodified === undefined && trigger === undefined) {
                return <any>this.paste$();
            } else throw new Error('invalid overload');
        }

        public select(start: number, end: number) {
        }

        public selectAll() {
        }

        public insertText(text: string) {
        }

        public getPreferredSize$(): com.java.Dimension {
            return null;
        }

        public getPreferredSize$int(columns: number): com.java.Dimension {
            return null;
        }

        public getPreferredSize(columns?: any): com.java.Dimension {
            if (((typeof columns === 'number') || columns === null)) {
                return <any>this.getPreferredSize$int(columns);
            } else if (columns === undefined) {
                return <any>this.getPreferredSize$();
            } else throw new Error('invalid overload');
        }

        public invalidate() {
        }

        public paint(graphics: com.java.Graphics) {
        }

        changeColor() {
        }

        checkText(string: string) {
        }

        isShortThanMaxLength$int(length: number): boolean {
            if (this.maxLength === -1)return true;
            return length <= this.maxLength;
        }

        isShortThanMaxByteLength(length: number): boolean {
            if (this.maxByteLength === -1)return true;
            return length <= this.maxByteLength;
        }

        public isShortThanMaxLength$java_lang_String(srctext: string): boolean {
            if (this.maxLength === -1)return true;
            const length: number = srctext.length;
            return length <= this.maxLength;
        }

        public isShortThanMaxLength(srctext?: any): boolean {
            if (((typeof srctext === 'string') || srctext === null)) {
                return <any>this.isShortThanMaxLength$java_lang_String(srctext);
            } else if (((typeof srctext === 'number') || srctext === null)) {
                return <any>this.isShortThanMaxLength$int(srctext);
            } else throw new Error('invalid overload');
        }

        checkMaxLength$(): boolean {
            return this.isShortThanMaxLength$java_lang_String(this.text);
        }

        public checkMaxLength$java_lang_String(string: string) {
        }

        public checkMaxLength(string?: any) {
            if (((typeof string === 'string') || string === null)) {
                return <any>this.checkMaxLength$java_lang_String(string);
            } else if (string === undefined) {
                return <any>this.checkMaxLength$();
            } else throw new Error('invalid overload');
        }

        checkMaxByteLength(string: string) {
        }

        public checkEnableChar$java_lang_String(string: string) {
        }

        public checkEnableChar(string?: any) {
            if (((typeof string === 'string') || string === null)) {
                return <any>this.checkEnableChar$java_lang_String(string);
            } else if (string === undefined) {
                return <any>this.checkEnableChar$();
            } else throw new Error('invalid overload');
        }

        public checkIndispensableField$java_lang_String(string: string) {
        }

        public checkIndispensableField(string?: any) {
            if (((typeof string === 'string') || string === null)) {
                return <any>this.checkIndispensableField$java_lang_String(string);
            } else if (string === undefined) {
                return <any>this.checkIndispensableField$();
            } else throw new Error('invalid overload');
        }

        public checkFullField$java_lang_String(string: string) {
        }

        public checkFullField(string?: any) {
            if (((typeof string === 'string') || string === null)) {
                return <any>this.checkFullField$java_lang_String(string);
            } else if (string === undefined) {
                return <any>this.checkFullField$();
            } else throw new Error('invalid overload');
        }

        formatting$java_lang_String(text: string): string {
            return null;
        }

        public formatting$java_lang_String$int_A(str: string, caretpos: number[]): string {
            return null;
        }

        public formatting(str?: any, caretpos?: any): string {
            if (((typeof str === 'string') || str === null) && ((caretpos != null && caretpos instanceof <any>Array && (caretpos.length == 0 || caretpos[0] == null ||(typeof caretpos[0] === 'number'))) || caretpos === null)) {
                return <any>this.formatting$java_lang_String$int_A(str, caretpos);
            } else if (((typeof str === 'string') || str === null) && caretpos === undefined) {
                return <any>this.formatting$java_lang_String(str);
            } else throw new Error('invalid overload');
        }

        cji_setCaretPos(str: string, caretpos: number[]) {
        }

        getDisplayForeground(): com.java.Color {
            return null;
        }

        getDisplayBackground(): com.java.Color {
            return null;
        }

        paramString(): string {
            return null;
        }

        processMouseEvent(mouseEvent: com.java.MouseEvent) {
        }

        processMouseMotionEvent(mouseEvent: com.java.MouseEvent) {
        }

        setText$java_lang_String$int$int$int$boolean(string: string, caretPos: number, selectionStart: number, selectionEnd: number, setmodified: boolean) {
            this.setText$java_lang_String$int$int$int$boolean$com_java_AWTEvent(string, caretPos, selectionStart, selectionEnd, setmodified, null);
        }

        public setText$java_lang_String$int$int$int$boolean$com_java_AWTEvent(string: string, caretPos: number, selectionStart: number, selectionEnd: number, setmodified: boolean, trigger: com.java.AWTEvent) {
        }

        public setText(string?: any, caretPos?: any, selectionStart?: any, selectionEnd?: any, setmodified?: any, trigger?: any) {
            if (((typeof string === 'string') || string === null) && ((typeof caretPos === 'number') || caretPos === null) && ((typeof selectionStart === 'number') || selectionStart === null) && ((typeof selectionEnd === 'number') || selectionEnd === null) && ((typeof setmodified === 'boolean') || setmodified === null) && ((trigger != null && trigger instanceof <any>com.java.AWTEvent) || trigger === null)) {
                return <any>this.setText$java_lang_String$int$int$int$boolean$com_java_AWTEvent(string, caretPos, selectionStart, selectionEnd, setmodified, trigger);
            } else if (((typeof string === 'string') || string === null) && ((typeof caretPos === 'number') || caretPos === null) && ((typeof selectionStart === 'number') || selectionStart === null) && ((typeof selectionEnd === 'number') || selectionEnd === null) && ((typeof setmodified === 'boolean') || setmodified === null) && trigger === undefined) {
                return <any>this.setText$java_lang_String$int$int$int$boolean(string, caretPos, selectionStart, selectionEnd, setmodified);
            } else if (((typeof string === 'string') || string === null) && caretPos === undefined && selectionStart === undefined && selectionEnd === undefined && setmodified === undefined && trigger === undefined) {
                return <any>this.setText$java_lang_String(string);
            } else throw new Error('invalid overload');
        }

        public isEnableChar$char(ch: string): boolean {
            return false;
        }

        public isEnableChar$java_lang_String$int(str: string, pos: number): boolean {
            return false;
        }

        public isEnableSurrogateChar(highChar: string, lowChar: string): boolean {
            return false;
        }

        isEnableChar$char$int$char_A(c: string, type: number, other: string[]): boolean {
            return this.isEnableChar$char$int$char_A$char_A(c, type, other, this.disableChars);
        }

        isEnableChar$char$long$char_A(c: string, type: number, other: string[]): boolean {
            return this.isEnableChar$char$long$char_A$char_A(c, type, other, this.disableChars);
        }

        isEnableChar$java_lang_String$int$long$char_A(str: string, pos: number, type: number, other: string[]): boolean {
            return this.isEnableChar$java_lang_String$int$long$char_A$char_A(str, pos, type, other, this.disableChars);
        }

        isEnableChar$char$int$char_A$char_A(c: string, type: number, enables: string[], disables: string[]): boolean {
            return this.isEnableChar$char$int$char_A$char_A(c, type, enables, disables);
        }

        isEnableChar$char$long$char_A$char_A(ch: string, type: number, enables: string[], disables: string[]): boolean {
            return false;
        }

        public isEnableChar$java_lang_String$int$long$char_A$char_A(str: string, pos: number, type: number, enables: string[], disables: string[]): boolean {
            return false;
        }

        public isEnableChar(str?: any, pos?: any, type?: any, enables?: any, disables?: any): boolean {
            if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((typeof type === 'number') || type === null) && ((enables != null && enables instanceof <any>Array && (enables.length == 0 || enables[0] == null ||(typeof enables[0] === 'string'))) || enables === null) && ((disables != null && disables instanceof <any>Array && (disables.length == 0 || disables[0] == null ||(typeof disables[0] === 'string'))) || disables === null)) {
                return <any>this.isEnableChar$java_lang_String$int$long$char_A$char_A(str, pos, type, enables, disables);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((typeof type === 'number') || type === null) && ((enables != null && enables instanceof <any>Array && (enables.length == 0 || enables[0] == null ||(typeof enables[0] === 'string'))) || enables === null) && disables === undefined) {
                return <any>this.isEnableChar$java_lang_String$int$long$char_A(str, pos, type, enables);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((type != null && type instanceof <any>Array && (type.length == 0 || type[0] == null ||(typeof type[0] === 'string'))) || type === null) && ((enables != null && enables instanceof <any>Array && (enables.length == 0 || enables[0] == null ||(typeof enables[0] === 'string'))) || enables === null) && disables === undefined) {
                return <any>this.isEnableChar$char$int$char_A$char_A(str, pos, type, enables);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((type != null && type instanceof <any>Array && (type.length == 0 || type[0] == null ||(typeof type[0] === 'string'))) || type === null) && ((enables != null && enables instanceof <any>Array && (enables.length == 0 || enables[0] == null ||(typeof enables[0] === 'string'))) || enables === null) && disables === undefined) {
                return <any>this.isEnableChar$char$long$char_A$char_A(str, pos, type, enables);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((type != null && type instanceof <any>Array && (type.length == 0 || type[0] == null ||(typeof type[0] === 'string'))) || type === null) && enables === undefined && disables === undefined) {
                return <any>this.isEnableChar$char$int$char_A(str, pos, type);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && ((type != null && type instanceof <any>Array && (type.length == 0 || type[0] == null ||(typeof type[0] === 'string'))) || type === null) && enables === undefined && disables === undefined) {
                return <any>this.isEnableChar$char$long$char_A(str, pos, type);
            } else if (((typeof str === 'string') || str === null) && ((typeof pos === 'number') || pos === null) && type === undefined && enables === undefined && disables === undefined) {
                return <any>this.isEnableChar$java_lang_String$int(str, pos);
            } else if (((typeof str === 'string') || str === null) && pos === undefined && type === undefined && enables === undefined && disables === undefined) {
                return <any>this.isEnableChar$char(str);
            } else throw new Error('invalid overload');
        }

        getCaretIndex(x: number, y: number): number {
            return this.getCaretIndexFromX(x);
        }

        getCaretIndexFromX(x: number): number {
            return this.getCharIndexFromX(x, true);
        }

        public getCharIndexFromX(x: number, round: boolean = false): number {
            return 0;
        }

        drawField() {
        }

        drawField2() {
        }

        setFontInformation() {
        }

        setSelectionInformation() {
        }

        public getDisableChars(): string[] {
            return null;
        }

        public setDefault() {
        }

        public setDisableChars(disableChars: string[]) {
        }

        public addDisableChar(disableChar: string) {
        }

        /**
         * @deprecated Method getColumnBaseChar is deprecated
         * @return {string}
         */
        public getColumnBaseChar(): string {
            return this.columnBaseChars != null ? this.columnBaseChars[0] : '\u0000';
        }

        public getColumnBaseChars(): string[] {
            return null;
        }

        getColumnBaseWidth(): number {
            return 0;
        }

        /**
         * @deprecated Method setColumnBaseChar is deprecated
         * @param {string} base
         */
        public setColumnBaseChar(base: string) {
        }

        public setColumnBaseChars$java_lang_String(base: string) {
        }

        public setColumnBaseChars(base?: any) {
            if (((typeof base === 'string') || base === null)) {
                return <any>this.setColumnBaseChars$java_lang_String(base);
            } else if (((base != null && base instanceof <any>Array && (base.length == 0 || base[0] == null ||(typeof base[0] === 'string'))) || base === null)) {
                return <any>this.setColumnBaseChars$char_A(base);
            } else throw new Error('invalid overload');
        }

        public setColumnBaseChars$char_A(base: string[]) {
        }

        public getCaretRect(): com.java.Rectangle {
            return null;
        }

        public getExtentSize(): com.java.Dimension {
            return null;
        }

        public getModifyingColor(): com.java.Color {
            return null;
        }

        public setModifyingColor(color: com.java.Color) {
        }

        setModified(flag: boolean) {
        }

        public getPrefixWord(): string {
            return this.prefixWord;
        }

        public setPrefixWord(prefix: string) {
        }

        public getSuffixWord(): string {
            return this.suffixWord;
        }

        public setSuffixWord(suffix: string) {
        }

        isEnableChars(srctext: string, start: number, end: number): boolean {
            return true;
        }

        checkEnableChar$(): boolean {
            return this.isEnableChars(this.text, 0, this.text.length);
        }

        inspectText(srctext: string): number {
            return 0;
        }

        public checkStatus(key: any): number {
            return this.inspectText(this.text);
        }

        public getEchoText(): string {
            return this.echoText;
        }

        public isEmpty(): boolean {
            return this.text === ("");
        }

        keyTyped(evt: com.java.KeyEvent) {
        }

        insertCharacter(keyChar: string, keyEvent: com.java.AWTEvent): boolean {
            return false;
        }

        insertSurrogateCharacter(highChar: string, lowChar: string, keyEvent: com.java.AWTEvent): boolean {
            return false;
        }

        keyReleased(keyEvent: com.java.KeyEvent) {
        }

        isCaretShowing(): boolean {
            return false;
        }

        cji_isEnableConversion(): boolean {
            return false;
        }

        enableConversion(onoff: boolean) {
        }

        cji_enableConversion(onoff: boolean) {
        }

        focusGained(focusEvent: com.java.FocusEvent): boolean {
            return true;
        }

        focusLost(focusEvent: com.java.FocusEvent): boolean {
            return false;
        }

        public setToCell(cell: lib.com.fujitsu.caa.CJCell) {
        }

        public removeFromCell(cell: lib.com.fujitsu.caa.CJCell) {
            cell.inputArea = null;
        }

        public removeNotify() {
        }

        public isAutoEscapeMode(): boolean {
            return this.autoEscapeMode;
        }

        public setAutoEscapeMode(mode: boolean) {
            this.autoEscapeMode = mode;
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJField.java 85    11/06/21 14:44 Kura $";

        static Modtime: string = "$Modtime: 11/06/21 14:30 $";

        static Workfile: string = "$Workfile: CJField.java $";

        static COPYRIGHT: string = "@(#) $Revision: 85 $ Copyright (C) 1998-2011, Fujitsu Advanced Engineering Limited.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJField.Revision == null) { CJField.Revision = "@(#) $Revision: 85 $ Copyright (C) 1998-2011, Fujitsu Advanced Engineering Limited.\n".substring("@(#) $Revision: 85 $ Copyright (C) 1998-2011, Fujitsu Advanced Engineering Limited.\n".indexOf('$'), "@(#) $Revision: 85 $ Copyright (C) 1998-2011, Fujitsu Advanced Engineering Limited.\n".lastIndexOf('$') + 1); }  return CJField.Revision; }

        static serialVersionUID: number = -5626621146771949534;

        static bName: string = "lib.com.fujitsu.caa.resources.CJMessageResource";

        static CLASS_NAME: string = "lib.com.fujitsu.caa.CJField";

        static CLASS_NAME_PAINT: string = "lib.com.fujitsu.caa.CJField::paint";

        static logstr_null: string = "";

        /*private*/ startPos: number;

        inputContext: any;

        displayForeground: com.java.Color;

        displayBackground: com.java.Color;

        font: com.java.Font;

        fontMetrics: com.java.FontMetrics;

        fontAscent: number;

        fontDescent: number;

        fontAdvance: number;

        fontLeading: number;

        caretPosition: number;

        selectionStart: number;

        selectionEnd: number;

        startSelect: number;

        endSelect: number;

        beforeSelected: string;

        selected: string;

        afterSelected: string;

        beforeCaret: string;

        afterCaret: string;

        text: string;

        echoText: string;

        columns: number;

        maxLength: number;

        maxByteLength: number;

        enableChars: string[];

        fullField: boolean;

        indispensableField: boolean;

        autoIME: boolean;

        inputStyle: number;

        inputMode: number;

        columnBaseChars: string[];

        defaultBaseChars: string[];

        disableChars: string[];

        prefixWord: string;

        prefixLen: number;

        suffixWord: string;

        suffixLen: number;

        jenableType: number;

        /*private*/ autoEscapeMode: boolean;

        inputAssist: number;

        resetCaretPos: boolean;

        inspectpos: lib.com.fujitsu.caa.CJPosition;

        aesc_delay2release: boolean;

        conversionflag: boolean;

        conversionLock: any;

        showchgO: lib.com.fujitsu.caa.event.CJShowingChange;

        showchL: lib.com.fujitsu.caa.event.CJShowingChangeListener;
    }
    CJField["__class"] = "lib.com.fujitsu.caa.CJField";
    CJField["__interfaces"] = ["lib.com.fujitsu.caa.CJTextOperator","lib.com.fujitsu.caa.CJEditOperator"];



    export namespace CJField {

        export class ClipboardDataSource extends lib.com.fujitsu.caa.CJClipboardDataSource {
            public constructor(owner: com.java.Component, operation: number, status: number) {
                super();
            }
        }
        ClipboardDataSource["__class"] = "lib.com.fujitsu.caa.CJField.ClipboardDataSource";


        export class ShowingChangedReceiver implements lib.com.fujitsu.caa.event.CJShowingChangeListener {
            public __parent: any;
            public showingChanged(evt: lib.com.fujitsu.caa.event.CJShowingChangeEvent) {
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ShowingChangedReceiver["__class"] = "lib.com.fujitsu.caa.CJField.ShowingChangedReceiver";
        ShowingChangedReceiver["__interfaces"] = ["lib.com.fujitsu.caa.event.CJShowingChangeListener"];


    }

}

