import { Component, OnInit } from '@angular/core';
import { CobranzaCierre } from '../../../modals/cobranza-cierre';
import { Router } from '@angular/router';
import { CobranzaCierreService } from '../../../services/cobranza-cierre';

@Component({
  selector: 'app-lista-cobranza-cierre',
  templateUrl: './lista-cobranza-cierre.component.html',
  styleUrls: ['./lista-cobranza-cierre.component.css']
})
export class ListaCobranzaCierreComponent implements OnInit {
  cobranzaCierre: CobranzaCierre[];
  pageActual: number=1;
  constructor(private router: Router, private service: CobranzaCierreService) {}

  ngOnInit() {
    console.log(this.cobranzaCierre);
    this.service.getCustomers().subscribe(data => (this.cobranzaCierre = data));
  }


}
