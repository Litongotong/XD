/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJCellBorder implements lib.com.fujitsu.caa.CJOrientation {
        public constructor(left?: any, top?: any, right?: any, bottom?: any, lc?: any, tc?: any, rc?: any, bc?: any) {
            if (((typeof left === 'number') || left === null) && ((typeof top === 'number') || top === null) && ((typeof right === 'number') || right === null) && ((typeof bottom === 'number') || bottom === null) && ((lc != null && lc instanceof <any>com.java.Color) || lc === null) && ((tc != null && tc instanceof <any>com.java.Color) || tc === null) && ((rc != null && rc instanceof <any>com.java.Color) || rc === null) && ((bc != null && bc instanceof <any>com.java.Color) || bc === null)) {
                let __args = arguments;
                if (this.topColor === undefined) { this.topColor = null; } 
                if (this.bottomColor === undefined) { this.bottomColor = null; } 
                if (this.rightColor === undefined) { this.rightColor = null; } 
                if (this.leftColor === undefined) { this.leftColor = null; } 
                if (this.topWidth === undefined) { this.topWidth = 0; } 
                if (this.bottomWidth === undefined) { this.bottomWidth = 0; } 
                if (this.rightWidth === undefined) { this.rightWidth = 0; } 
                if (this.leftWidth === undefined) { this.leftWidth = 0; } 
                if (this.topLeft === undefined) { this.topLeft = 0; } 
                if (this.topRight === undefined) { this.topRight = 0; } 
                if (this.bottomLeft === undefined) { this.bottomLeft = 0; } 
                if (this.bottomRight === undefined) { this.bottomRight = 0; } 
            } else if (((typeof left === 'number') || left === null) && ((typeof top === 'number') || top === null) && ((right != null && right instanceof <any>com.java.Color) || right === null) && ((bottom != null && bottom instanceof <any>com.java.Color) || bottom === null) && lc === undefined && tc === undefined && rc === undefined && bc === undefined) {
                let __args = arguments;
                let hwidth: any = __args[0];
                let vwidth: any = __args[1];
                let hcolor: any = __args[2];
                let vcolor: any = __args[3];
                if (this.topColor === undefined) { this.topColor = null; } 
                if (this.bottomColor === undefined) { this.bottomColor = null; } 
                if (this.rightColor === undefined) { this.rightColor = null; } 
                if (this.leftColor === undefined) { this.leftColor = null; } 
                if (this.topWidth === undefined) { this.topWidth = 0; } 
                if (this.bottomWidth === undefined) { this.bottomWidth = 0; } 
                if (this.rightWidth === undefined) { this.rightWidth = 0; } 
                if (this.leftWidth === undefined) { this.leftWidth = 0; } 
                if (this.topLeft === undefined) { this.topLeft = 0; } 
                if (this.topRight === undefined) { this.topRight = 0; } 
                if (this.bottomLeft === undefined) { this.bottomLeft = 0; } 
                if (this.bottomRight === undefined) { this.bottomRight = 0; } 
            } else if (((typeof left === 'number') || left === null) && ((typeof top === 'number') || top === null) && ((typeof right === 'number') || right === null) && ((typeof bottom === 'number') || bottom === null) && lc === undefined && tc === undefined && rc === undefined && bc === undefined) {
                let __args = arguments;
                if (this.topColor === undefined) { this.topColor = null; } 
                if (this.bottomColor === undefined) { this.bottomColor = null; } 
                if (this.rightColor === undefined) { this.rightColor = null; } 
                if (this.leftColor === undefined) { this.leftColor = null; } 
                if (this.topWidth === undefined) { this.topWidth = 0; } 
                if (this.bottomWidth === undefined) { this.bottomWidth = 0; } 
                if (this.rightWidth === undefined) { this.rightWidth = 0; } 
                if (this.leftWidth === undefined) { this.leftWidth = 0; } 
                if (this.topLeft === undefined) { this.topLeft = 0; } 
                if (this.topRight === undefined) { this.topRight = 0; } 
                if (this.bottomLeft === undefined) { this.bottomLeft = 0; } 
                if (this.bottomRight === undefined) { this.bottomRight = 0; } 
            } else if (((typeof left === 'number') || left === null) && ((top != null && top instanceof <any>com.java.Color) || top === null) && right === undefined && bottom === undefined && lc === undefined && tc === undefined && rc === undefined && bc === undefined) {
                let __args = arguments;
                let width: any = __args[0];
                let color: any = __args[1];
                if (this.topColor === undefined) { this.topColor = null; } 
                if (this.bottomColor === undefined) { this.bottomColor = null; } 
                if (this.rightColor === undefined) { this.rightColor = null; } 
                if (this.leftColor === undefined) { this.leftColor = null; } 
                if (this.topWidth === undefined) { this.topWidth = 0; } 
                if (this.bottomWidth === undefined) { this.bottomWidth = 0; } 
                if (this.rightWidth === undefined) { this.rightWidth = 0; } 
                if (this.leftWidth === undefined) { this.leftWidth = 0; } 
                if (this.topLeft === undefined) { this.topLeft = 0; } 
                if (this.topRight === undefined) { this.topRight = 0; } 
                if (this.bottomLeft === undefined) { this.bottomLeft = 0; } 
                if (this.bottomRight === undefined) { this.bottomRight = 0; } 
            } else if (((left != null && left instanceof <any>lib.com.fujitsu.caa.CJCellBorder) || left === null) && top === undefined && right === undefined && bottom === undefined && lc === undefined && tc === undefined && rc === undefined && bc === undefined) {
                let __args = arguments;
                let src: any = __args[0];
                if (this.topColor === undefined) { this.topColor = null; } 
                if (this.bottomColor === undefined) { this.bottomColor = null; } 
                if (this.rightColor === undefined) { this.rightColor = null; } 
                if (this.leftColor === undefined) { this.leftColor = null; } 
                if (this.topWidth === undefined) { this.topWidth = 0; } 
                if (this.bottomWidth === undefined) { this.bottomWidth = 0; } 
                if (this.rightWidth === undefined) { this.rightWidth = 0; } 
                if (this.leftWidth === undefined) { this.leftWidth = 0; } 
                if (this.topLeft === undefined) { this.topLeft = 0; } 
                if (this.topRight === undefined) { this.topRight = 0; } 
                if (this.bottomLeft === undefined) { this.bottomLeft = 0; } 
                if (this.bottomRight === undefined) { this.bottomRight = 0; } 
            } else if (((typeof left === 'number') || left === null) && top === undefined && right === undefined && bottom === undefined && lc === undefined && tc === undefined && rc === undefined && bc === undefined) {
                let __args = arguments;
                let width: any = __args[0];
                if (this.topColor === undefined) { this.topColor = null; } 
                if (this.bottomColor === undefined) { this.bottomColor = null; } 
                if (this.rightColor === undefined) { this.rightColor = null; } 
                if (this.leftColor === undefined) { this.leftColor = null; } 
                if (this.topWidth === undefined) { this.topWidth = 0; } 
                if (this.bottomWidth === undefined) { this.bottomWidth = 0; } 
                if (this.rightWidth === undefined) { this.rightWidth = 0; } 
                if (this.leftWidth === undefined) { this.leftWidth = 0; } 
                if (this.topLeft === undefined) { this.topLeft = 0; } 
                if (this.topRight === undefined) { this.topRight = 0; } 
                if (this.bottomLeft === undefined) { this.bottomLeft = 0; } 
                if (this.bottomRight === undefined) { this.bottomRight = 0; } 
            } else if (left === undefined && top === undefined && right === undefined && bottom === undefined && lc === undefined && tc === undefined && rc === undefined && bc === undefined) {
                let __args = arguments;
                if (this.topColor === undefined) { this.topColor = null; } 
                if (this.bottomColor === undefined) { this.bottomColor = null; } 
                if (this.rightColor === undefined) { this.rightColor = null; } 
                if (this.leftColor === undefined) { this.leftColor = null; } 
                if (this.topWidth === undefined) { this.topWidth = 0; } 
                if (this.bottomWidth === undefined) { this.bottomWidth = 0; } 
                if (this.rightWidth === undefined) { this.rightWidth = 0; } 
                if (this.leftWidth === undefined) { this.leftWidth = 0; } 
                if (this.topLeft === undefined) { this.topLeft = 0; } 
                if (this.topRight === undefined) { this.topRight = 0; } 
                if (this.bottomLeft === undefined) { this.bottomLeft = 0; } 
                if (this.bottomRight === undefined) { this.bottomRight = 0; } 
            } else throw new Error('invalid overload');
        }

        static Header: string = "$Header: /CAA/Java/Current/com/fujitsu/caa/CJCellBorder.java 3     04/02/02 10:14 Kura $";

        static Modtime: string = "$Modtime: 04/02/02 10:12 $";

        static Workfile: string = "$Workfile: CJCellBorder.java $";

        static COPYRIGHT: string = "@(#) $Revision: 3 $ Copyright (C) 1998-2004, FFC Limited. & FUJITSU LIMITED.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJCellBorder.Revision == null) { CJCellBorder.Revision = "@(#) $Revision: 3 $ Copyright (C) 1998-2004, FFC Limited. & FUJITSU LIMITED.\n".substring("@(#) $Revision: 3 $ Copyright (C) 1998-2004, FFC Limited. & FUJITSU LIMITED.\n".indexOf('$'), "@(#) $Revision: 3 $ Copyright (C) 1998-2004, FFC Limited. & FUJITSU LIMITED.\n".lastIndexOf('$') + 1); }  return CJCellBorder.Revision; }

        public topColor: com.java.Color;

        public bottomColor: com.java.Color;

        public rightColor: com.java.Color;

        public leftColor: com.java.Color;

        public topWidth: number;

        public bottomWidth: number;

        public rightWidth: number;

        public leftWidth: number;

        public topLeft: number;

        public topRight: number;

        public bottomLeft: number;

        public bottomRight: number;
    }
    CJCellBorder["__class"] = "lib.com.fujitsu.caa.CJCellBorder";
    CJCellBorder["__interfaces"] = ["lib.com.fujitsu.caa.CJOrientation"];


}

