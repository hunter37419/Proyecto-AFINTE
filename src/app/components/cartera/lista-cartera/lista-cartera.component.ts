import { Component, OnInit } from '@angular/core';
import { Cartera } from '../../../modals/Cartera';
import { Router } from '@angular/router';
import { CarteraService } from 'src/app/services/cartera.service';

@Component({
  selector: 'app-lista-cartera',
  templateUrl: './lista-cartera.component.html',
  styleUrls: ['./lista-cartera.component.css']
})
export class ListaCarteraComponent implements OnInit {

  cartera: Cartera[];

  constructor(private router: Router, private service: CarteraService) {}

  ngOnInit() {
    console.log(this.cartera);
    this.service.getCustomers().subscribe(data => (this.cartera = data));
  }


}
