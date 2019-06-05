import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-add-empresa',
  templateUrl: './add-empresa.component.html',
  styles: []
})
export class AddEmpresaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmpresaService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      ruc: ['', Validators.required],
      nombre: ['', Validators.required],
      dir_legal: ['', Validators.required],
      dis_legal: ['', Validators.required],
      dir_entrega: ['', Validators.required],
      dis_entrega: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createEmpresa( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-empresa']);
      });
  }


}
