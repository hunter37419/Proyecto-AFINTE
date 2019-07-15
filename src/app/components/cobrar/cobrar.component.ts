import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CobranzaService } from 'src/app/services/cobranza.service';
import { Cobranza } from '../../modals/list-cobranza';

@Component({
  selector: 'app-cobrar',
  templateUrl: './cobrar.component.html',
  styleUrls: ['./cobrar.component.css']
})
export class CobrarComponent implements OnInit {
  realizarCobranza: FormGroup;
  registro: Cobranza;
  llave:number;
	cliente?:string;
	sucursal?:string;
	cod_cliente?:number;
	banco?:string;
	factura?:string;
	monto_fact_ind?:number;
	fecha_trans?:Date;
	fecha_depo?:Date;
	depo_total?:number;
	estado?:string;
  constructor(private formBuilder: FormBuilder, private router: Router, private cobranzaService: CobranzaService) { }

  ngOnInit() {
    this.realizarCobranza = this.formBuilder.group({
      cliente: ['', Validators.required],
      sucursal: ['', Validators.required],
      cod_cliente: ['', Validators.required],
      banco: ['', Validators.required],
      factura: ['', Validators.required],
      monto_fact_ind: ['', Validators.required],
      depo_total: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {

    console.log(this.realizarCobranza.value.ruc);
    this.registro = {
      cliente: this.realizarCobranza.value.cliente,
      sucursal: this.realizarCobranza.value.sucursal,
      cod_cliente: this.realizarCobranza.value.cod_cliente,
      banco: this.realizarCobranza.value.banco,
      factura: this.realizarCobranza.value.factura,
      monto_fact_ind: this.realizarCobranza.value.monto_fact_ind,
      depo_total: this.realizarCobranza.value.depo_total,
      estado: this.realizarCobranza.value.estado,
      llave: null,
      fecha_trans: new Date(),
      fecha_Depo:  new Date()
    }
  
    this.cobranzaService.createCobranza(this.registro )
    .subscribe(data => {
    
    });
  }
}
