import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css'],

})
export class GerenteComponent implements OnInit {

 
  status = true;
  datosPersonales = true;
  gerente=false;
  mantenimiento = false;
  empleados = false;
  importacion = false;
  empresas =  false;
  reportes = false;

  man_empleados=false;

  constructor() {
    
    console.log(this.mantenimiento);
   }
  ngOnInit() {
  }


}
