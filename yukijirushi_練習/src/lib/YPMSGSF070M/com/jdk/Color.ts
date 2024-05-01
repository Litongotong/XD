/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace com.java {
    export class Color {
        public constructor(a?: any, b?: any, c?: any) {
            if (((typeof a === 'number') || a === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null)) {
                let __args = arguments;
            } else if (((typeof a === 'string') || a === null) && b === undefined && c === undefined) {
                let __args = arguments;
                let warning: any = __args[0];
            } else throw new Error('invalid overload');
        }
    }
    Color["__class"] = "lib.com.jdk.Color";

}

