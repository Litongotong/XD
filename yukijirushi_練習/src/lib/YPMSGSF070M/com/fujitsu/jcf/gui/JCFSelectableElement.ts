/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSelectableElement {
        public constructor(dsp_text?: any, val?: any, select?: any) {
            if (((typeof dsp_text === 'string') || dsp_text === null) && ((typeof val === 'string') || val === null) && ((typeof select === 'boolean') || select === null)) {
                let __args = arguments;
            } else if (((dsp_text != null && dsp_text instanceof <any>lib.com.fujitsu.jcf.gui.JCFSelectableElement) || dsp_text === null) && val === undefined && select === undefined) {
                let __args = arguments;
                let jcfSelectableElement: any = __args[0];
            } else if (dsp_text === undefined && val === undefined && select === undefined) {
                let __args = arguments;
            } else throw new Error('invalid overload');
        }

        public isSelected(): boolean {
            return false;
        }

        public getID(): string {
            return null;
        }

        public setSelected(b: boolean) {
        }

        public getText(): string {
            return null;
        }
    }
    JCFSelectableElement["__class"] = "lib.com.fujitsu.jcf.gui.JCFSelectableElement";

}

