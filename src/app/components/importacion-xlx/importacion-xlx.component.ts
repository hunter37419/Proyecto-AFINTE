import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportarService} from '../../services/importacion/importar.service';

declare var $:any;

@Component({
  selector: 'app-importacion-xlx',
  templateUrl: './importacion-xlx.component.html',
  styleUrls: ['./importacion-xlx.component.css']
})
export class ImportacionXlxComponent implements OnInit {

  @ViewChild("example") table;
  datatable:any;
  dropoptions:any;
  data:any[];

  //	arrayBuffer:any;
	file:File;

  constructor( private service: ImportarService ) {}

  ngOnInit() {

  }

  incomingfile(event) {
  	this.file= event.target.files[0]; 
	}

  Upload(){
    this.service.UploadFile(this.file);
    this.service.GetJSON().subscribe(data => this.data = data);
    this.dropoptions = {
      /*
      processing: true,
      data: "https://jsonplaceholder.typicode.com/users",
      columns: [
            { "users": "id" },
            { "users": "name" },
            { "users": "username" },
            { "users": "email" },
            { "users": "address.street" },
            { "users": "address.suite" },
            { "users": "address.city" },
            { "users": "address.zipcode" },
            { "users": "address.geo.lat" },
            { "users": "address.geo.lng" },
            { "users": "phone" },
            { "users": "website" },
            { "users": "company.name" },
            { "users": "company.catchPhrase" },
            { "users": "address.bs" }
            ]
            */
    }
    this.datatable = $(this.table.nativeElement);
    this.datatable.DataTable(this.dropoptions);
  }


}
