/// <reference path="./crud.d.ts"/>
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js'

let row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);

// Update row
const updatedRow: RowElement = JSON.parse(JSON.stringify(row));
updatedRow.age = 23;
CRUD.updateRow(newRowID, updatedRow);


// Delete row
CRUD.deleteRow(newRowID);