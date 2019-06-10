import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var $;

@Injectable({
  providedIn: 'root'
})
export class ImportarService {

	private fileReader;
	private datos:any = "Test";

  constructor( ) {}

  UploadFile( file:File){

	this.fileReader = new FileReader();
	this.fileReader.readAsArrayBuffer(file);
	this.fileReader.onload = (e) => {
	      var data = new Uint8Array(this.fileReader.result);
	      var arr = new Array();
	      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
	      var bstr = arr.join("");
	      var workbook = XLSX.read(bstr, {type:"binary"});
	      var first_sheet_name = workbook.SheetNames[0];
	      var worksheet = workbook.Sheets[first_sheet_name];
	      var info = XLSX.utils.sheet_to_json(worksheet,{raw:true});
	      //this.TransferData(JSON.stringify(info));
	      
	  }

  }

   TransferData(passdata:any){
  	//console.log(passdata);
  	this.datos = passdata;
  	//console.log(this.datos);
  	//alert(this.datos);
  	//return this.datos
  }

  GetDataExcel():any{
  	return this.datos;
  }

}
