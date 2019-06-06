import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImportarService {

	private fileReader;
	private data:any;


  constructor( private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  UploadFile( file:File): any{

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
		      var d = XLSX.utils.sheet_to_json(worksheet,{raw:true});
		      //console.log(d);
		      this.data=d;
		      //return d;
		  }

  }

  GetJSON(): Observable<any[]>{
  	console.log(this.data);
  	return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

}
