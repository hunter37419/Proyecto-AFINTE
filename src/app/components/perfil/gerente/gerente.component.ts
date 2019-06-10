import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css'],

})
export class GerenteComponent implements OnInit {
id:string;
  usuario:Usuario;
  man_empleados=false;

  constructor(private _route:ActivatedRoute,private router: Router, private service: UsuarioService) {
    this.id=this._route.snapshot.paramMap.get('id');
    
   }
  ngOnInit() {
   
    this.service.getCustomer(Number(this.id))
    .subscribe(data => {
      this.usuario=data;
    });

  }


}
