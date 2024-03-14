/** Task 8. Ambient Namespaces */
// import 
import { RowID, RowElement } from "./interface";

// declarations for each crud function
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowid: RowID): void;
export function updateRow(rowid: RowID, row: RowElement): RowID;
