const RowID = require('./inteface.ts');
const RowElement = require('./inteface.ts');


export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;