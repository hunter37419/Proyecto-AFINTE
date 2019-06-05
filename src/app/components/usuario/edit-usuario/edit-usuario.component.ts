import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styles: []
})
export class EditUsuarioComponent implements OnInit {

  usuario: Usuario;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UsuarioService) { }

  ngOnInit() {

    const usuarioId = localStorage.getItem('editUsuarioId');

    if ( !usuarioId ) {
      alert('Acción invalida');
      this.router.navigate(['list-usuario']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      usuario : ['', Validators.required],
      contrase: ['', Validators.required],
      cargo: ['', Validators.required],
      nombres: ['', Validators.required]
    
    });

    this.service.getCustomer(+usuarioId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateCustomer(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-usuario']);
      },
      error => {
        alert(error);
      });
  }

}
