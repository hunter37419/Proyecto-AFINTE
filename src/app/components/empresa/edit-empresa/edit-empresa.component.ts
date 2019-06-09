import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import { Empresa } from 'src/app/model/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-edit-empresa',
  templateUrl: './edit-empresa.component.html',
  styleUrls: ['./edit-empresa.component.css'],
  styles: []
})
export class EditEmpresaComponent implements OnInit {

  empresa: Empresa;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmpresaService) { }

  ngOnInit() {

    const empresaId = localStorage.getItem('editEmpresaId');

    if ( !empresaId ) {
      alert('Acción invalida');
      this.router.navigate(['list-empresa']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      ruc: ['', Validators.required],
      nombre: ['', Validators.required],
      dir_legal: ['', Validators.required],
      dis_legal: ['', Validators.required],
      dir_entrega: ['', Validators.required],
      dis_entrega: ['', Validators.required]
    });

    this.service.getEmpresa(+empresaId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateEmpresa(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-empresa']);
      },
      error => {
        alert(error);
      });
  }


}
