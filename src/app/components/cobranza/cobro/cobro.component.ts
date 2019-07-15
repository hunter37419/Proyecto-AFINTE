import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/modals/Empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';
import { Cartera } from 'src/app/modals/Cartera';
import { CarteraService } from 'src/app/services/cartera.service';


@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.css']
})
export class CobroComponent implements OnInit {

  public ruc: string;
  public codigo_sip: number;
  registros: Cartera[];
  registro: Cartera;
  registrotemp: Cartera;
  buscarEmpresa: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private router: Router, private carteraService: CarteraService) { }


  ngOnInit() {
    console.log("ingrese");
    this.buscarEmpresa = this.formBuilder.group({
      ruc: ['', Validators.required],
      codigo_sip: ['', Validators.required]

    });

  }

  onSubmit() {

    console.log(this.buscarEmpresa.value.ruc);
    this.ruc = this.buscarEmpresa.value.ruc.toString();
    this.codigo_sip = this.buscarEmpresa.value.codigo_sip.toString();
    console.log(this.ruc);
    this.carteraService.getCarteraxRucCodigo(
      this.ruc,
      this.codigo_sip
    ).subscribe(data => {

      this.registros = data;
      console.log(this.registro);
    });
  }
}
