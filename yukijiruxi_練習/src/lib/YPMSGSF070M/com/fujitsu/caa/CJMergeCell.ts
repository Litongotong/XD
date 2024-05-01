/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.caa {
    export class CJMergeCell extends com.java.Rectangle {
        public constructor(row?: any, column?: any, rowspan?: any, columnspan?: any) {
            if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((typeof rowspan === 'number') || rowspan === null) && ((typeof columnspan === 'number') || columnspan === null)) {
                let __args = arguments;
                super();
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.caa.CJPosition) || row === null) && ((typeof column === 'number') || column === null) && ((typeof rowspan === 'number') || rowspan === null) && columnspan === undefined) {
                let __args = arguments;
                let position: any = __args[0];
                let rowspan: any = __args[1];
                let columnspan: any = __args[2];
                super();
            } else if (((row != null && row instanceof <any>com.java.Rectangle) || row === null) && column === undefined && rowspan === undefined && columnspan === undefined) {
                let __args = arguments;
                let mcell: any = __args[0];
                super();
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.caa.CJCellField) || row === null) && column === undefined && rowspan === undefined && columnspan === undefined) {
                let __args = arguments;
                let cellfield: any = __args[0];
                super();
            } else throw new Error('invalid overload');
        }

        public getRow(): number {
            return 0;
        }

        public getColumn(): number {
            return 0;
        }

        public getRowSpan(): number {
            return 0;
        }

        public getColumnSpan(): number {
            return 0;
        }

        public getPosition(): lib.com.fujitsu.caa.CJPosition {
            return new lib.com.fujitsu.caa.CJPosition(this.getRow(), this.getColumn());
        }

        public equalPos$int$int(row: number, column: number): boolean {
            return this.comparePos$int$int(row, column) === 0;
        }

        public equalPos(row?: any, column?: any): boolean {
            if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.equalPos$int$int(row, column);
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.caa.CJMergeCell) || row === null) && column === undefined) {
                return <any>this.equalPos$com_fujitsu_caa_CJMergeCell(row);
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.caa.CJPosition) || row === null) && column === undefined) {
                return <any>this.equalPos$com_fujitsu_caa_CJPosition(row);
            } else throw new Error('invalid overload');
        }

        public equalPos$com_fujitsu_caa_CJMergeCell(merge: CJMergeCell): boolean {
            if (merge == null)return false;
            return this.comparePos$com_fujitsu_caa_CJMergeCell(merge) === 0;
        }

        public equalPos$com_fujitsu_caa_CJPosition(pos: lib.com.fujitsu.caa.CJPosition): boolean {
            if (pos == null)return false;
            return this.comparePos$com_fujitsu_caa_CJPosition(pos) === 0;
        }

        public compareTo(obj: any): number {
            if (obj != null && obj instanceof <any>lib.com.fujitsu.caa.CJMergeCell){
                const merge: CJMergeCell = <CJMergeCell>obj;
                return this.comparePos$com_fujitsu_caa_CJMergeCell(merge);
            }
            if (obj != null && obj instanceof <any>lib.com.fujitsu.caa.CJPosition){
                const target: lib.com.fujitsu.caa.CJPosition = <lib.com.fujitsu.caa.CJPosition>obj;
                return this.comparePos$com_fujitsu_caa_CJPosition(target);
            } else {
                throw Object.defineProperty(new Error("obj must be CJMergeCell or CJPosition."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.ClassCastException','java.lang.Exception'] });
            }
        }

        public comparePos$com_fujitsu_caa_CJMergeCell(merge: CJMergeCell): number {
            return this.comparePos$int$int(merge.getRow(), merge.getColumn());
        }

        public comparePos$com_fujitsu_caa_CJPosition(pos: lib.com.fujitsu.caa.CJPosition): number {
            return this.comparePos$int$int(pos.row, pos.column);
        }

        public comparePos$int$int(row: number, column: number): number {
            const rowdiff: number = this.getRow() - row;
            if (rowdiff !== 0){
                return rowdiff;
            } else {
                const columndiff: number = this.getColumn() - column;
                return columndiff;
            }
        }

        public comparePos(row?: any, column?: any): number {
            if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.comparePos$int$int(row, column);
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.caa.CJMergeCell) || row === null) && column === undefined) {
                return <any>this.comparePos$com_fujitsu_caa_CJMergeCell(row);
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.caa.CJPosition) || row === null) && column === undefined) {
                return <any>this.comparePos$com_fujitsu_caa_CJPosition(row);
            } else throw new Error('invalid overload');
        }

        public containsPos(row: number, column: number): boolean {
            return false;
        }

        public getTranslate(rows: number, columns: number): CJMergeCell {
            return null;
        }

        public static searchCell(row: number, column: number, table: com.java.Dictionary): CJMergeCell {
            return null;
        }

        /*private*/ readObject(stream: com.java.ObjectInputStream) {
        }

        /*private*/ writeObject(stream: com.java.ObjectOutputStream) {
        }

        static Header: string = "$Header: /CAA/ClientJ/SpreadB/Current/src/com/fujitsu/caa/CJMergeCell.java 14    04/10/04 10:27 Kura $";

        static Modtime: string = "$Modtime: 04/10/02 8:42 $";

        static Workfile: string = "$Workfile: CJMergeCell.java $";

        static COPYRIGHT: string = "@(#) $Revision: 14 $ Copyright (C) 2000-2004, FFC Limited.\n";

        static Revision: string; public static Revision_$LI$(): string { if (CJMergeCell.Revision == null) { CJMergeCell.Revision = "@(#) $Revision: 14 $ Copyright (C) 2000-2004, FFC Limited.\n".substring("@(#) $Revision: 14 $ Copyright (C) 2000-2004, FFC Limited.\n".indexOf('$'), "@(#) $Revision: 14 $ Copyright (C) 2000-2004, FFC Limited.\n".lastIndexOf('$') + 1); }  return CJMergeCell.Revision; }

        static serialVersionUID: number = 4925658675615206336;
    }
    CJMergeCell["__class"] = "lib.com.fujitsu.caa.CJMergeCell";

}

