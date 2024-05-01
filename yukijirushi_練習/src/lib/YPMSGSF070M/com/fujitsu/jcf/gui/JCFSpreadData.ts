/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadData extends lib.com.fujitsu.jcf.gui.JCFItemData {
        public constructor(newItemID: string) {
            super(newItemID);
            if (this.hederColumnData === undefined) { this.hederColumnData = null; }
            if (this.columnHederCells === undefined) { this.columnHederCells = null; }
            if (this.columnData === undefined) { this.columnData = null; }
            if (this.rowHederCellsVec === undefined) { this.rowHederCellsVec = null; }
            if (this.dataCellsVec === undefined) { this.dataCellsVec = null; }
            if (this.rowCount === undefined) { this.rowCount = 0; }
            if (this.columnCount === undefined) { this.columnCount = 0; }
            if (this.headerRows === undefined) { this.headerRows = 0; }
            if (this.headerColumns === undefined) { this.headerColumns = 0; }
            if (this.viewport === undefined) { this.viewport = null; }
            if (this.selectedRowsPosition === undefined) { this.selectedRowsPosition = null; }
            if (this.selectedCellsPosition === undefined) { this.selectedCellsPosition = null; }
            if (this.multipleMode === undefined) { this.multipleMode = false; }
            if (this.lastSorted === undefined) { this.lastSorted = null; }
            if (this.lastSortOrder === undefined) { this.lastSortOrder = 0; }
            if (this.visibleRowCount === undefined) { this.visibleRowCount = 0; }
            if (this.dateMode === undefined) { this.dateMode = 0; }
            if (this.viewMode === undefined) { this.viewMode = false; }
            if (this.layout === undefined) { this.layout = null; }
            if (this.selectedChanged === undefined) { this.selectedChanged = false; }
            if (this.zeroSuppress === undefined) { this.zeroSuppress = 0; }
            if (this.transferableCheckMode === undefined) { this.transferableCheckMode = false; }
            if (this.transferableNumberCheckMode === undefined) { this.transferableNumberCheckMode = false; }
            if (this.transferableDateCheckMode === undefined) { this.transferableDateCheckMode = false; }
            if (this.position === undefined) { this.position = null; }
        }

        public getValue(): string {
            return null;
        }

        public setValue(s: string) {
        }

        public isReverse(): boolean {
            return false;
        }

        public setReverse(flag: boolean) {
        }

        public getCommunicationData(): any {
            const communicationData: string[][] = <any> (function(dims) { let allocate = function(dims) { if (dims.length === 0) { return null; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([this.rowCount, this.columnCount]);
            for(let row: number = 0; row < this.rowCount; row++) {{
                for(let column: number = 0; column < this.columnCount; column++) {try {
                    communicationData[row][column] = this.getCellValue(row, column);
                } catch(exception) {
                };}
            };}
            return communicationData;
        }

        public setCommunicationData(newValue: any) {
        }

        public setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData: lib.com.fujitsu.jcf.gui.JCFItemData) {
        }

        public setDataAndAttributes(itemData?: any) {
            if (((itemData != null && itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFItemData) || itemData === null)) {
                return <any>this.setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData);
            } else if (((itemData != null && itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFDataBean) || itemData === null)) {
                super.setDataAndAttributes(itemData);
            } else throw new Error('invalid overload');
        }

        public setData(itemData: lib.com.fujitsu.jcf.gui.JCFItemData) {
        }

        setSpreadDataBean(itemData: lib.com.fujitsu.jcf.gui.JCFItemData, attribute: boolean) {
        }

        isTransferable(spreadData: JCFSpreadData): boolean {
            return true;
        }

        isCellSelectionTransferable(spreadData: JCFSpreadData): boolean {
            return false;
        }

        setCellDataAndAttributes(column: number, spreadData: JCFSpreadData, attribute: boolean) {
        }

        setCellCheckboxDataAndAttributes(column: number, spreadData: JCFSpreadData, attribute: boolean) {
        }

        setCellComboboxDataAndAttributes(column: number, spreadData: JCFSpreadData, attribute: boolean) {
        }

        setCellButtonDataAndAttributes(column: number, spreadData: JCFSpreadData, attribute: boolean) {
        }

        setCellDateDataAndAttributes(column: number, spreadData: JCFSpreadData, attribute: boolean) {
        }

        setRowHeaderCellDataAndAttributes(rhcolumn: number, spreadData: JCFSpreadData, attribute: boolean) {
        }

        setColumnHeaderCellDataAndAttributes(chcolumn: number, spreadData: JCFSpreadData, attribute: boolean) {
        }

        setCellsSelection(spreadData: JCFSpreadData) {
        }

        public getColumnCount(): number {
            return this.columnCount;
        }

        setColumnCount(count: number) {
        }

        public getRowCount(): number {
            return this.rowCount;
        }

        public setRowCount(count: number) {
        }

        createCells(): lib.com.fujitsu.jcf.gui.JCFSpreadCellData[] {
            return null;
        }

        initializeCells(cells: lib.com.fujitsu.jcf.gui.JCFSpreadCellData[]) {
        }

        initializeCell(cell: lib.com.fujitsu.jcf.gui.JCFSpreadCellData, columnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnData) {
        }

        createAndInitializeCells(): lib.com.fujitsu.jcf.gui.JCFSpreadCellData[] {
            return null;
        }

        setCellComboboxInitialSelectedValue(columnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnData, cell: lib.com.fujitsu.jcf.gui.JCFSpreadCellData) {
        }

        createRowHeaderCells(): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellData[] {
            return null;
        }

        initializeRowHeaderCells(rhcells: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellData[]) {
        }

        initializeRowHeaderCell(rhcell: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellData, rhcolumnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnData) {
        }

        createAndInitializeRowHeaderCells(): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellData[] {
            return null;
        }

        public addRow$() {
            super.callChangedListener();
            this.addRow$int(this.rowCount);
        }

        public removeRow(row: number) {
        }

        /*private*/ rmRow(row: number) {
        }

        public removeAllRow() {
        }

        public insertRow(row: number) {
        }

        public addRow$int(row: number) {
            this.dataCellsVec.add$int$com_fujitsu_jcf_gui_JCFSpreadCellData_A(row, this.createAndInitializeCells());
            this.rowHederCellsVec.add$int$com_fujitsu_jcf_gui_JCFSpreadHeaderCellData_A(row, this.createAndInitializeRowHeaderCells());
            this.rowCount++;
            if (this.visibleRowCount >= 0){
                this.setVRPos(row, this.visibleRowCount);
                this.visibleRowCount++;
            }
            if (this.position != null && this.position.row >= row)this.position.row = Math.min(this.position.row + 1, this.rowCount - 1);
            const loader: lib.com.fujitsu.jcf.gui.JCFSpreadPropertyLoader = lib.com.fujitsu.jcf.gui.JCFSpreadPropertyLoader.getPropertyLoader();
            if (loader.getModifyRowCountBehavior() !== 1)this.setSelectedChanged(true);
        }

        public addRow(row?: any) {
            if (((typeof row === 'number') || row === null)) {
                return <any>this.addRow$int(row);
            } else if (row === undefined) {
                return <any>this.addRow$();
            } else throw new Error('invalid overload');
        }

        public getHeaderColumns(): number {
            return this.headerColumns;
        }

        setHeaderColumns(hcolumn: number) {
        }

        public getHeaderRows(): number {
            return this.headerRows;
        }

        setHeaderRows(count: number) {
        }

        public getViewport(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition {
            return this.viewport;
        }

        public setViewport(position: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition) {
            if (position == null)throw Object.defineProperty(new Error("ERROR_TYPE"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            if (JCFSpreadData.VIEWPORT_LASTROW_$LI$() !== position && JCFSpreadData.VIEWPORT_LASTROWCOLUMN_$LI$() !== position){
                const totalRows: number = this.getVisibleRowCount() * this.getRecordRows();
                if (position.row < 0 || totalRows <= position.row)throw Object.defineProperty(new Error("ERROR_RANGE_ROW"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
                if (position.column < 0 || this.columnCount <= position.column)throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
                const columns: number = this.getRecordColumns();
                if (position.column >= columns){
                    position = new lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition(position);
                    position.column = columns - 1;
                }
            }
            super.callChangedListener();
            this.viewport = position;
        }

        clearViewport() {
            this.viewport = null;
        }

        public getSelectedCellsPosition(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[] {
            return this.selectedCellsPosition;
        }

        setSelectedCellsPosition(cellsPosition: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[]) {
            this.selectedCellsPosition = cellsPosition;
        }

        public getSelectedRowsPosition(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[] {
            return this.selectedRowsPosition;
        }

        setSelectedRowsPosition(rowsPosition: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[]) {
            this.selectedRowsPosition = rowsPosition;
        }

        getCell(row: number, column: number): lib.com.fujitsu.jcf.gui.JCFSpreadCellData {
            return null;
        }

        public isCellSelected(row: number, column: number): boolean {
            return false;
        }

        public setCellSelected(row: number, column: number, select: boolean) {
        }

        public getCellBackground(row: number, column: number): com.java.Color {
            return null;
        }

        public setCellBackground(row: number, column: number, color: com.java.Color) {
            if (row < 0 || this.rowCount <= row)throw Object.defineProperty(new Error("ERROR_RANGE_ROW"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            if (column < 0 || this.columnCount <= column){
                throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            } else {
                super.callChangedListener();
                this.getCell(row, column).setBackground(color);
                return;
            }
        }

        public getCellForeground(row: number, column: number): com.java.Color {
            return null;
        }

        public setCellForeground(row: number, column: number, color: com.java.Color) {
        }

        public getCellValue(row: number, column: number): string {
            if (row < 0 || this.rowCount <= row)throw Object.defineProperty(new Error("ERROR_RANGE_ROW"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            if (column < 0 || this.columnCount <= column)throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            let value: string = "";
            switch((this.getColumnData(column).getEditType())) {
            case 4:
            case 6:
            case 9:
            default:
                break;
            case 1:
            case 2:
            case 8:
                value = this.getCell(row, column).getValue();
                break;
            case 7:
            case 10:
                value = this.getCell(row, column).getBooleanValue() ? "true" : "false";
                break;
            case 5:
            case 11:
                value = this.getCellComboboxValue(row, column);
                break;
            case 3:
                if (this.dateMode === 1){
                    const dateFormatter: lib.com.fujitsu.jcf.gui.JCFSpreadCellDateFormatter = this.getCellDateFormatter(column);
                    value = this.getCell(row, column).getDateValue() == null ? "" : dateFormatter.format(this.getCell(row, column).getDateValue());
                } else {
                    const dateFormatter: com.java.DateFormat = this.getDateFormat(column);
                    value = this.getCell(row, column).getDateValue() == null ? "" : dateFormatter.format(this.getCell(row, column).getDateValue());
                }
                break;
            }
            return value;
        }

        getDatePattern(column: number): string {
            return null;
        }

        getCellDateFormatter(column: number): lib.com.fujitsu.jcf.gui.JCFSpreadCellDateFormatter {
            return null;
        }

        getDateFormat(column: number): com.java.DateFormat {
            return null;
        }

        getCellComboboxValue(row: number, column: number): string {
            return null;
        }

        public setCellValue$int$int$java_lang_String(row: number, column: number, value: string) {
            if (row < 0 || this.rowCount <= row)throw Object.defineProperty(new Error("ERROR_RANGE_ROW"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            if (column < 0 || this.columnCount <= column)throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            if (value == null)throw Object.defineProperty(new Error("ERROR_TYPE"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            super.callChangedListener();
            const columnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnData = this.getColumnData(column);
            switch((columnInfo.getEditType())) {
            case 4:
            case 6:
            case 8:
            case 9:
            default:
                break;
            case 1:
                const maxByteLength: number = columnInfo.getMaxByteLength();
                if (-1 < maxByteLength && maxByteLength < /* getBytes */(value).split('').map(s => s.charCodeAt(0)).length)throw Object.defineProperty(new Error("ERROR_RANGE"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
                this.getCell(row, column).setValue(value);
                break;
            case 7:
            case 10:
                this.getCell(row, column).setValue$boolean(/* booleanValue */(<boolean>new Boolean(value)));
                break;
            case 5:
            case 11:
                this.setCellComboboxValue(row, column, value);
                break;
            case 2:
                this.setCellNumberValue(row, column, value);
                break;
            case 3:
                this.setCellDateValue(row, column, value);
                break;
            }
        }

        public setCellValue(row?: any, column?: any, value?: any) {
            if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((typeof value === 'string') || value === null)) {
                return <any>this.setCellValue$int$int$java_lang_String(row, column, value);
            } else if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((value != null && value instanceof <any>Array && (value.length == 0 || value[0] == null ||(value[0] != null && value[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSelectableElement))) || value === null)) {
                return <any>this.setCellValue$int$int$com_fujitsu_jcf_gui_JCFSelectableElement_A(row, column, value);
            } else if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((value != null && value instanceof <any>com.java.Date) || value === null)) {
                return <any>this.setCellValue$int$int$com_java_Date(row, column, value);
            } else if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((typeof value === 'boolean') || value === null)) {
                return <any>this.setCellValue$int$int$boolean(row, column, value);
            } else if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null) && ((typeof value === 'number') || value === null)) {
                return <any>this.setCellValue$int$int$long(row, column, value);
            } else throw new Error('invalid overload');
        }

        setCellDateValue(row: number, column: number, value: string) {
        }

        setCellNumberValue(row: number, column: number, value: string) {
        }

        setCellComboboxValue(row: number, column: number, value: string) {
        }

        public getCellBooleanValue(row: number, column: number): boolean {
            if (row < 0 || this.rowCount <= row)throw Object.defineProperty(new Error("ERROR_RANGE_ROW"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            if (column < 0 || this.columnCount <= column)throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            let value: boolean = false;
            const type: number = this.getColumnData(column).getEditType();
            if (type === 10 || type === 7)value = this.getCell(row, column).getBooleanValue();
            return value;
        }

        public setCellValue$int$int$boolean(row: number, column: number, value: boolean) {
            if (row < 0 || this.rowCount <= row)throw Object.defineProperty(new Error("ERROR_RANGE_ROW"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            if (column < 0 || this.columnCount <= column)throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            super.callChangedListener();
            const type: number = this.getColumnData(column).getEditType();
            if (type === 10 || type === 7)this.getCell(row, column).setValue$boolean(value);
        }

        public getCellLongValue(row: number, column: number): number {
            return 0;
        }

        public setCellValue$int$int$long(row: number, column: number, value: number) {
        }

        public getCellSelectableElementValue(row: number, column: number): lib.com.fujitsu.jcf.gui.JCFSelectableElement[] {
            return null;
        }

        public setCellValue$int$int$com_fujitsu_jcf_gui_JCFSelectableElement_A(row: number, column: number, value: lib.com.fujitsu.jcf.gui.JCFSelectableElement[]) {
        }

        public getCellDateValue(row: number, column: number): com.java.Date {
            return null;
        }

        public setCellValue$int$int$com_java_Date(row: number, column: number, value: com.java.Date) {
        }

        public isMultipleMode(): boolean {
            return this.multipleMode;
        }

        setMultipleMode(newValue: boolean) {
            this.multipleMode = newValue;
        }

        public isRowSelected(row: number): boolean {
            return false;
        }

        public setRowSelected(row: number, select: boolean) {
        }

        getRowHeaderCell(rhrow: number, rhcolumn: number): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellData {
            return null;
        }

        public getRowHeaderCellBackground(rhrow: number, rhcolumn: number): com.java.Color {
            return null;
        }

        public setRowHeaderCellBackground(rhrow: number, rhcolumn: number, color: com.java.Color) {
        }

        public getRowHeaderCellForeground(rhrow: number, rhcolumn: number): com.java.Color {
            return null;
        }

        public setRowHeaderCellForeground(rhrow: number, rhcolumn: number, color: com.java.Color) {
        }

        public getRowHeaderCellValue(rhrow: number, rhcolumn: number): string {
            return null;
        }

        public setRowHeaderCellValue(rhrow: number, rhcolumn: number, value: string) {
        }

        getColumnHeaderCell(chrow: number, chcolumn: number): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellData {
            return null;
        }

        public getColumnHeaderCellBackground(chrow: number, chcolumn: number): com.java.Color {
            return null;
        }

        public setColumnHeaderCellBackground(chrow: number, chcolumn: number, color: com.java.Color) {
        }

        public getColumnHeaderCellForeground(chrow: number, chcolumn: number): com.java.Color {
            return null;
        }

        public setColumnHeaderCellForeground(chrow: number, chcolumn: number, color: com.java.Color) {
        }

        public getColumnHeaderCellValue(chrow: number, chcolumn: number): string {
            return null;
        }

        public setColumnHeaderCellValue(chrow: number, chcolumn: number, value: string) {
        }

        getColumnData(column: number): lib.com.fujitsu.jcf.gui.JCFSpreadColumnData {
            return this.columnData[column];
        }

        public getColumnInformationBackground(column: number): com.java.Color {
            return null;
        }

        public setColumnInformationBackground(column: number, color: com.java.Color) {
        }

        public getColumnInformationForeground(column: number): com.java.Color {
            return null;
        }

        public setColumnInformationForeground(column: number, color: com.java.Color) {
        }

        public getColumnInformationEditType(column: number): number {
            return 0;
        }

        public isColumnInformationEditable(column: number): boolean {
            return false;
        }

        public getColumnInformationLabel(column: number): string {
            return null;
        }

        public getColumnInformationSelectableElements(column: number): lib.com.fujitsu.jcf.gui.JCFSelectableElement[] {
            return null;
        }

        public setColumnInformationSelectableElements(column: number, items: lib.com.fujitsu.jcf.gui.JCFSelectableElement[]) {
        }

        getHeaderColumnData(rhcolumn: number): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnData {
            return this.hederColumnData[rhcolumn];
        }

        public getRowHeaderColumnInformationBackground(rhcolumn: number): com.java.Color {
            return null;
        }

        public setRowHeaderColumnInformationBackground(rhcolumn: number, color: com.java.Color) {
        }

        public getRowHeaderColumnInformationForeground(rhcolumn: number): com.java.Color {
            return null;
        }

        public setRowHeaderColumnInformationForeground(rhcolumn: number, color: com.java.Color) {
        }

        insertSeparator(column: number, value: string): string {
            return null;
        }

        public isCellEditable(row: number, column: number): boolean {
            return false;
        }

        public setCellEditable(row: number, column: number, editable: boolean) {
            if (row < 0 || this.rowCount <= row)throw Object.defineProperty(new Error("ERROR_RANGE_ROW"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            if (column < 0 || this.columnCount <= column)throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            const cell: lib.com.fujitsu.jcf.gui.JCFSpreadCellData = this.getCell(row, column);
            if (cell.isEditable() === editable){
                return;
            } else {
                super.callChangedListener();
                cell.setEditable(editable);
                return;
            }
        }

        public isRowDeleted(row: number): boolean {
            return false;
        }

        public deleteRow(row: number) {
        }

        getVRPos(row: number): number {
            return -1;
        }

        setVRPos(row: number, pos: number) {
        }

        public getDisplayPos(row: number): number {
            return 0;
        }

        public getLastSorted(): string {
            return this.lastSorted;
        }

        public setLastSorted(column: string) {
        }

        public getLastSortOrder(): number {
            return this.lastSortOrder;
        }

        public setLastSortOrder(order: number) {
        }

        public getColumnInformationName(column: number): string {
            if (column < 0 || this.columnCount <= column){
                throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            } else {
                const columnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnData = this.getColumnData(column);
                return columnInfo.getName();
            }
        }

        public isHiddenColumn(column: number): boolean {
            return false;
        }

        public setColumnInformationLabel(column: number, label: string) {
        }

        public getVisibleRowCount(): number {
            return this.visibleRowCount;
        }

        setVisibleRowCount(rowCount: number) {
            this.visibleRowCount = rowCount;
        }

        public getColumnInformationDatePattern(column: number): string {
            return null;
        }

        public getColumnInformationDatePatternId(column: number): number {
            return 0;
        }

        public getColumnInformationMaxByteLength(column: number): number {
            return 0;
        }

        public isColumnInformationDecimalpointAllowed(column: number): boolean {
            return false;
        }

        public isColumnInformationCommaEditAllowed(column: number): boolean {
            return false;
        }

        public isColumnInformationEnableInputNegativeValue(column: number): boolean {
            return false;
        }

        public static getDateTimePatterns(): string[] {
            return null;
        }

        public setViewMode(mode: boolean) {
        }

        public isViewMode(): boolean {
            return this.viewMode;
        }

        public getLayout(): string[][] {
            return this.layout;
        }

        setLayout(layout: string[][]) {
            this.layout = layout;
        }

        public getRecordRows(): number {
            return 1;
        }

        public getRecordColumns(): number {
            return 0;
        }

        public getColumnInformationMaxIntegerDigit(column: number): number {
            return 0;
        }

        public getColumnInformationMaxDecimalDigit(column: number): number {
            return 1;
        }

        isSelectedChanged(): boolean {
            return this.selectedChanged;
        }

        setSelectedChanged(selectedChanged: boolean) {
            this.selectedChanged = selectedChanged;
        }

        public getZeroSuppress(): number {
            return this.zeroSuppress;
        }

        setZeroSuppress(newValue: number) {
        }

        static fillRight(from: string, c: string, len: number): string {
            return null;
        }

        static makeString(c: string, len: number): string {
            return null;
        }

        static trimRight(from: string, c: string, minlen: number): string {
            return null;
        }

        public getColumnName(column: number): string {
            return null;
        }

        searchColumn(colname: string): number {
            const column: number = -1;
            return column;
        }

        searchRow(recno: number): number {
            return -1;
        }

        makePositionFromDisplayPos(recno: number, colname: string): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition {
            return null;
        }

        public getPosition(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition {
            return null;
        }

        isDisplayColumn(colname: string): boolean {
            return false;
        }

        jcfSetPosition(newPos: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition) {
            this.position = newPos;
        }

        public setPosition(position: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition) {
            if (position.row < 0 || position.row >= this.rowCount)throw Object.defineProperty(new Error("ERROR_RANGE_ROW"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            if (position.column < 0 || position.column >= this.columnCount)throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            const recno: number = this.getVRPos(position.row);
            if (recno < 0)throw Object.defineProperty(new Error("ERROR_RANGE_ROW"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            const colname: string = this.getColumnName(position.column);
            if (!this.isDisplayColumn(colname)){
                throw Object.defineProperty(new Error("ERROR_RANGE_COLUMN"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
            } else {
                super.callChangedListener();
                const newPos: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition = <lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition>/* clone *//* clone */((o: any) => { if (o.clone != undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(position);
                newPos.colname = colname;
                newPos.recno = recno;
                this.jcfSetPosition(newPos);
                return;
            }
        }

        public isColumnVisible(column: number): boolean {
            return false;
        }

        public setColumnVisible(column: number, visible: boolean) {
        }

        public isRowVisible(row: number): boolean {
            return true;
        }

        public setRowVisible(row: number, visible: boolean) {
        }

        /*private*/ static deepCopy(src: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[]): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[] {
            return null;
        }

        /*private*/ static shallowCopy$com_java_Vector(src: com.java.Vector): com.java.Vector {
            return null;
        }

        public static shallowCopy$com_fujitsu_jcf_gui_JCFSpreadData$com_fujitsu_jcf_gui_JCFSpreadData(src: JCFSpreadData, dest: JCFSpreadData) {
            dest.hederColumnData = src.hederColumnData;
            dest.columnHederCells = src.columnHederCells;
            dest.columnData = src.columnData;
            dest.rowHederCellsVec = JCFSpreadData.shallowCopy$com_java_Vector(src.rowHederCellsVec);
            dest.dataCellsVec = JCFSpreadData.shallowCopy$com_java_Vector(src.dataCellsVec);
            dest.rowCount = src.rowCount;
            dest.columnCount = src.columnCount;
            dest.headerRows = src.headerRows;
            dest.headerColumns = src.headerColumns;
            if (src.viewport == null)dest.viewport = null; else dest.viewport = new lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition(src.viewport);
            dest.selectedRowsPosition = JCFSpreadData.deepCopy(src.selectedRowsPosition);
            dest.selectedCellsPosition = JCFSpreadData.deepCopy(src.selectedCellsPosition);
            dest.multipleMode = src.multipleMode;
            dest.lastSorted = src.lastSorted;
            dest.lastSortOrder = src.lastSortOrder;
            dest.visibleRowCount = src.visibleRowCount;
            dest.dateMode = src.dateMode;
            dest.viewMode = src.viewMode;
            dest.layout = src.layout;
            dest.selectedChanged = src.selectedChanged;
            dest.zeroSuppress = src.zeroSuppress;
            dest.transferableCheckMode = src.transferableCheckMode;
            dest.transferableNumberCheckMode = src.transferableNumberCheckMode;
            dest.transferableDateCheckMode = src.transferableDateCheckMode;
            if (src.position == null)dest.position = null; else dest.position = new lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition(src.position);
        }

        public static shallowCopy(src?: any, dest?: any) {
            if (((src != null && src instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || src === null) && ((dest != null && dest instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || dest === null)) {
                return <any>lib.com.fujitsu.jcf.gui.JCFSpreadData.shallowCopy$com_fujitsu_jcf_gui_JCFSpreadData$com_fujitsu_jcf_gui_JCFSpreadData(src, dest);
            } else if (((src != null && src instanceof <any>com.java.Vector) || src === null) && dest === undefined) {
                return <any>lib.com.fujitsu.jcf.gui.JCFSpreadData.shallowCopy$com_java_Vector(src);
            } else throw new Error('invalid overload');
        }

        public setSortOrder(sortorder: lib.com.fujitsu.jcf.gui.JCFSpreadSortOrder) {
        }

        shallowCopy(): JCFSpreadData {
            return null;
        }

        createRowCompare(column: number, order: number): lib.com.fujitsu.jcf.gui.JCFSpreadRowCompare {
            return null;
        }

        createSorter(): lib.com.fujitsu.jcf.gui.JCFSpreadSorter {
            return null;
        }

        public sort$int_A$int_A(orders: number[], keys: number[]) {
        }

        public sort$int$int$int$int(order: number, key1: number, key2: number, key3: number) {
        }

        public sort(order?: any, key1?: any, key2?: any, key3?: any) {
            if (((typeof order === 'number') || order === null) && ((typeof key1 === 'number') || key1 === null) && ((typeof key2 === 'number') || key2 === null) && ((typeof key3 === 'number') || key3 === null)) {
                return <any>this.sort$int$int$int$int(order, key1, key2, key3);
            } else if (((order != null && order instanceof <any>Array && (order.length == 0 || order[0] == null ||(typeof order[0] === 'number'))) || order === null) && ((key1 != null && key1 instanceof <any>Array && (key1.length == 0 || key1[0] == null ||(typeof key1[0] === 'number'))) || key1 === null) && key2 === undefined && key3 === undefined) {
                return <any>this.sort$int_A$int_A(order, key1);
            } else throw new Error('invalid overload');
        }

        public clearDisplayOrder() {
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadData.java 50    12/09/18 14:52 Kura $";

        static Modtime: string = "$Modtime: 12/09/18 14:51 $";

        static Workfile: string = "$Workfile: JCFSpreadData.java $";

        static Revision: string = "$Revision: 50 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2011";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadData";

        static serialVersionUID: number = 5495569213270199398;

        hederColumnData: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnData[];

        columnHederCells: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellData[][];

        columnData: lib.com.fujitsu.jcf.gui.JCFSpreadColumnData[];

        rowHederCellsVec: com.java.Vector;

        dataCellsVec: com.java.Vector;

        rowCount: number;

        columnCount: number;

        headerRows: number;

        headerColumns: number;

        viewport: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition;

        static NUMBER_COLUMN_INITIAL_VALUE: string = "";

        selectedRowsPosition: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[];

        selectedCellsPosition: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition[];

        public static ERROR_STATE: string = "ERROR_STATE";

        public static ERROR_RANGE_ROW: string = "ERROR_RANGE_ROW";

        public static ERROR_RANGE_COLUMN: string = "ERROR_RANGE_COLUMN";

        multipleMode: boolean;

        static DATE_COLUMN_INITIAL_VALUE: string = "";

        static DATE_COLUMN_INITIAL_VALUE_V01L20: string = "//";

        static dateCellFormatter: lib.com.fujitsu.jcf.gui.JCFSpreadCellDateFormatter; public static dateCellFormatter_$LI$(): lib.com.fujitsu.jcf.gui.JCFSpreadCellDateFormatter { if (JCFSpreadData.dateCellFormatter == null) { JCFSpreadData.dateCellFormatter = new lib.com.fujitsu.jcf.gui.JCFSpreadCellDateFormatter(); }  return JCFSpreadData.dateCellFormatter; }

        static MAX_DECIMAL_DIGIT: number = 4;

        lastSorted: string;

        lastSortOrder: number;

        visibleRowCount: number;

        static DATEMODE_USEPATTERN: number = 1;

        static DATEMODE_USEDEFAULT: number = 0;

        dateMode: number;

        public static DATETIMEPATTERN_LOCAL_FULLDATETIME: number = 0;

        public static DATETIMEPATTERN_LOCAL_MMddHmmss: number = 1;

        public static DATETIMEPATTERN_LOCAL_yyyyMMddHmm: number = 2;

        public static DATETIMEPATTERN_LOCAL_FULLDATE: number = 3;

        public static DATETIMEPATTERN_LOCAL_yyyyMM: number = 4;

        public static DATETIMEPATTERN_LOCAL_MMdd: number = 5;

        public static DATETIMEPATTERN_LOCAL_FULLTIME: number = 6;

        public static DATETIMEPATTERN_LOCAL_Hmm: number = 7;

        public static DATETIMEPATTERN_LOCAL_mmss: number = 8;

        public static DATETIMEPATTERN_FULLDATETIME: number = 9;

        public static DATETIMEPATTERN_MMddHmmss: number = 10;

        public static DATETIMEPATTERN_yyyyMMddHmm: number = 11;

        public static DATETIMEPATTERN_MMddHmm: number = 12;

        public static DATETIMEPATTERN_FULLDATE: number = 13;

        public static DATETIMEPATTERN_yyyyMM: number = 14;

        public static DATETIMEPATTERN_MMdd: number = 15;

        public static DATETIMEPATTERN_FULLTIME: number = 16;

        public static DATETIMEPATTERN_Hmm: number = 17;

        public static DATETIMEPATTERN_mmss: number = 18;

        public static STRING: number = 1;

        public static NUMBER: number = 2;

        public static DATE: number = 3;

        public static COMBOBOX: number = 5;

        public static COMBOBOX2: number = 11;

        public static CHECKBOX: number = 7;

        public static PUSHBUTTON: number = 8;

        public static TOGGLEBUTTON: number = 10;

        viewMode: boolean;

        layout: string[][];

        public static VIEWPORT_LASTROW: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition; public static VIEWPORT_LASTROW_$LI$(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition { if (JCFSpreadData.VIEWPORT_LASTROW == null) { JCFSpreadData.VIEWPORT_LASTROW = new lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition(-1, 0); }  return JCFSpreadData.VIEWPORT_LASTROW; }

        public static VIEWPORT_LASTROWCOLUMN: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition; public static VIEWPORT_LASTROWCOLUMN_$LI$(): lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition { if (JCFSpreadData.VIEWPORT_LASTROWCOLUMN == null) { JCFSpreadData.VIEWPORT_LASTROWCOLUMN = new lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition(-1, -1); }  return JCFSpreadData.VIEWPORT_LASTROWCOLUMN; }

        /*private*/ selectedChanged: boolean;

        public static FRACTION_ZEROSUPPRESS: number = 0;

        public static FRACTION_ZEROFILL: number = 1;

        zeroSuppress: number;

        transferableCheckMode: boolean;

        transferableNumberCheckMode: boolean;

        transferableDateCheckMode: boolean;

        position: lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition;

        public static SORT_NONE: number = 0;

        public static SORT_ASCEND: number = 1;

        public static SORT_DESCEND: number = 2;

        public static INVALID_SORT_ORDER: string = "INVALID_SORT_ORDER";
    }
    JCFSpreadData["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadData";

}

