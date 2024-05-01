/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace com.java {
    export class BigDecimal {
        public static ROUND_HALF_UP: string = null;

        public constructor(val?: any) {
            if (((typeof val === 'string') || val === null)) {
                let __args = arguments;
            } else if (((typeof val === 'number') || val === null)) {
                let __args = arguments;
                let i: any = __args[0];
            } else throw new Error('invalid overload');
        }

        public compareTo(bigDecimal: BigDecimal): number {
            return 0;
        }

        public divide$com_java_BigDecimal$int$java_lang_String(yoryo: BigDecimal, i: number, roundHalfUp: string): BigDecimal {
            return null;
        }

        public divide(yoryo?: any, i?: any, roundHalfUp?: any): BigDecimal {
            if (((yoryo != null && yoryo instanceof <any>lib.com.jdk.BigDecimal) || yoryo === null) && ((typeof i === 'number') || i === null) && ((typeof roundHalfUp === 'string') || roundHalfUp === null)) {
                return <any>this.divide$com_java_BigDecimal$int$java_lang_String(yoryo, i, roundHalfUp);
            } else if (((yoryo != null && yoryo instanceof <any>lib.com.jdk.BigDecimal) || yoryo === null) && ((typeof i === 'number') || i === null) && ((typeof roundHalfUp === 'number') || roundHalfUp === null)) {
                return <any>this.divide$com_java_BigDecimal$int$int(yoryo, i, roundHalfUp);
            } else throw new Error('invalid overload');
        }

        public divide$com_java_BigDecimal$int$int(decIrisu: BigDecimal, scale: number, roundJoken: number): BigDecimal {
            return null;
        }

        public setScale(scale: number, roundJoken: number): BigDecimal {
            return null;
        }

        public multiply(decYoryo: BigDecimal): BigDecimal {
            return null;
        }
    }
    BigDecimal["__class"] = "lib.com.jdk.BigDecimal";

}

