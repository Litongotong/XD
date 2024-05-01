/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJPosition {
        public constructor(row?: any, column?: any) {
            if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                let __args = arguments;
                if (this.row === undefined) { this.row = 0; } 
                if (this.column === undefined) { this.column = 0; } 
                this.row = row;
                this.column = column;
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.caa.CJPosition) || row === null) && column === undefined) {
                let __args = arguments;
                let pos: any = __args[0];
                if (this.row === undefined) { this.row = 0; } 
                if (this.column === undefined) { this.column = 0; } 
                this.row = pos.row;
                this.column = pos.column;
            } else if (row === undefined && column === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let row: any = 0;
                    let column: any = 0;
                    if (this.row === undefined) { this.row = 0; } 
                    if (this.column === undefined) { this.column = 0; } 
                    this.row = row;
                    this.column = column;
                }
                if (this.row === undefined) { this.row = 0; } 
                if (this.column === undefined) { this.column = 0; } 
            } else throw new Error('invalid overload');
        }

        public duplicate(): CJPosition {
            return new CJPosition(this);
        }

        public clone(): any {
            try {
                const copy: CJPosition = <CJPosition>/* clone *//* clone */((o: any) => { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; })(this);
                return copy;
            } catch(e) {
                return new CJPosition(this.row, this.column);
            }
        }

        public equals(obj: any): boolean {
            if (obj != null && (obj != null && obj instanceof <any>lib.com.fujitsu.caa.CJPosition)){
                const compare: number = this.compareTo(obj);
                return compare === 0;
            } else {
                return false;
            }
        }

        public hashCode(): number {
            return this.row ^ this.column * 31;
        }

        public paramString(): string {
            const buf: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str += <any>"row="; return sb; })(buf);
            /* append */(sb => { sb.str += <any>this.row; return sb; })(buf);
            /* append */(sb => { sb.str += <any>",column="; return sb; })(buf);
            /* append */(sb => { sb.str += <any>this.column; return sb; })(buf);
            return buf.str;
        }

        public toString(): string {
            return /* toString *//* append */(sb => { sb.str += <any>"]"; return sb; })(/* append */(sb => { sb.str += <any>this.paramString(); return sb; })(/* append */(sb => { sb.str += <any>"["; return sb; })(({ str: /* valueOf */String(/* getName */(c => typeof c === 'string' ? c : c["__class"] ? c["__class"] : c["name"])((<any>this.constructor))).toString(), toString: function() { return this.str; } })))).str;
        }

        public compareTo(obj: any): number {
            const target: CJPosition = <CJPosition>obj;
            return this.comparePos(target.row, target.column);
        }

        public comparePos(row: number, column: number): number {
            const rowdiff: number = this.row - row;
            if (rowdiff !== 0){
                return rowdiff;
            } else {
                const coldiff: number = this.column - column;
                return coldiff;
            }
        }

        public translate(rows: number, columns: number) {
            this.row += rows;
            this.column += columns;
        }

        public getTranslate(rows: number, columns: number): CJPosition {
            const translatePos: CJPosition = <CJPosition>/* clone */((o: any) => { if (o.clone != undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this);
            translatePos.translate(rows, columns);
            return translatePos;
        }

        public setLocation$com_fujitsu_caa_CJPosition(pos: CJPosition) {
            this.row = pos.row;
            this.column = pos.column;
        }

        public setLocation$int$int(row: number, column: number) {
            this.row = row;
            this.column = column;
        }

        public setLocation(row?: any, column?: any) {
            if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.setLocation$int$int(row, column);
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.caa.CJPosition) || row === null) && column === undefined) {
                return <any>this.setLocation$com_fujitsu_caa_CJPosition(row);
            } else throw new Error('invalid overload');
        }

        public invalidate() {
            this.setLocation$int$int(-1, -1);
        }

        public isValid(): boolean {
            return this.isValidateRow() && this.isValidateColumn();
        }

        public isValidateRow(): boolean {
            return this.row >= 0;
        }

        public isValidateColumn(): boolean {
            return this.column >= 0;
        }

        public getRowNum(): number {
            return new Number(this.row).valueOf();
        }

        public getColNum(): number {
            return new Number(this.column).valueOf();
        }

        public containsRow(r1: number, r2: number): boolean {
            const min: number = Math.min(r1, r2);
            const max: number = Math.max(r1, r2);
            return this.row >= min && this.row <= max;
        }

        public containsCol(c1: number, c2: number): boolean {
            const min: number = Math.min(c1, c2);
            const max: number = Math.max(c1, c2);
            return this.column >= min && this.column <= max;
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJPosition.java 15    04/09/07 11:13 Kura $";

        static Modtime: string = "$Modtime: 04/09/07 11:13 $";

        static Workfile: string = "$Workfile: CJPosition.java $";

        static COPYRIGHT: string = "@(#) $Revision: 15 $ Copyright (C) 1997-2004, FFC Limited. & FUJITSU LIMITED.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJPosition.Revision == null) { CJPosition.Revision = "@(#) $Revision: 15 $ Copyright (C) 1997-2004, FFC Limited. & FUJITSU LIMITED.\n".substring("@(#) $Revision: 15 $ Copyright (C) 1997-2004, FFC Limited. & FUJITSU LIMITED.\n".indexOf('$'), "@(#) $Revision: 15 $ Copyright (C) 1997-2004, FFC Limited. & FUJITSU LIMITED.\n".lastIndexOf('$') + 1); }  return CJPosition.Revision; }

        static serialVersionUID: number = 250531566737665790;

        public row: number;

        public column: number;
    }
    CJPosition["__class"] = "lib.com.fujitsu.caa.CJPosition";

}

