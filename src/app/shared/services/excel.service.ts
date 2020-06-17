import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], headers: any, excelFileName: string): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const range = XLSX.utils.decode_range(ws['!ref']);
    const wscols =[];
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const address = XLSX.utils.encode_col(C) + "1";
      wscols.push({wch: 20});
      if (!ws[address]) {
         continue;
      }
      ws[address].v = headers[ws[address].v];
    }
    ws['!cols'] = wscols;
    const workbook: XLSX.WorkBook = { Sheets: { 'Sheet 1': ws }, SheetNames: ['Sheet 1'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array', });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
