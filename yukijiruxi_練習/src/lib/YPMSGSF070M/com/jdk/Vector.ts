/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace com.java {
    export class Vector {
        public add$int$com_fujitsu_jcf_gui_JCFSpreadCellData_A(row: number, createAndInitializeCells: com.fujitsu.jcf.gui.JCFSpreadCellData[]) {
        }

        public add(row?: any, createAndInitializeCells?: any) {
            if (((typeof row === 'number') || row === null) && ((createAndInitializeCells != null && createAndInitializeCells instanceof <any>Array && (createAndInitializeCells.length == 0 || createAndInitializeCells[0] == null ||(createAndInitializeCells[0] != null && createAndInitializeCells[0] instanceof <any>com.fujitsu.jcf.gui.JCFSpreadCellData))) || createAndInitializeCells === null)) {
                return <any>this.add$int$com_fujitsu_jcf_gui_JCFSpreadCellData_A(row, createAndInitializeCells);
            } else if (((typeof row === 'number') || row === null) && ((createAndInitializeCells != null && createAndInitializeCells instanceof <any>Array && (createAndInitializeCells.length == 0 || createAndInitializeCells[0] == null ||(createAndInitializeCells[0] != null && createAndInitializeCells[0] instanceof <any>com.fujitsu.jcf.gui.JCFSpreadHeaderCellData))) || createAndInitializeCells === null)) {
                return <any>this.add$int$com_fujitsu_jcf_gui_JCFSpreadHeaderCellData_A(row, createAndInitializeCells);
            } else throw new Error('invalid overload');
        }

        public add$int$com_fujitsu_jcf_gui_JCFSpreadHeaderCellData_A(row: number, createAndInitializeRowHeaderCells: com.fujitsu.jcf.gui.JCFSpreadHeaderCellData[]) {
        }
    }
    Vector["__class"] = "lib.com.jdk.Vector";

}

