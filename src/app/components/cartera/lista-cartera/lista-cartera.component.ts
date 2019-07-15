import { Component, OnInit } from '@angular/core';
import { Cartera } from '../../../modals/Cartera';
import { Router } from '@angular/router';
import { CarteraService } from 'src/app/services/cartera.service';

declare var $:any;

@Component({
  selector: 'app-lista-cartera',
  templateUrl: './lista-cartera.component.html',
  styleUrls: ['./lista-cartera.component.css']
})
export class ListaCarteraComponent implements OnInit {

  cartera: Cartera[];
  pageActual:number = 1;

  constructor(private router: Router,private service: CarteraService) {}

  findByRuc(ruc: string){
    this.service.buscarxRuc2(ruc).subscribe(data =>(this.cartera = data));

    //console.log(this.cartera);
  }

  ngOnInit() {
  }

  onKey(event: any) { 
     
     if(event.target.value != ""){
       this.findByRuc(event.target.value);
     }

  }

}
