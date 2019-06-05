import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder, private router: Router, private service: UsuarioService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      usuario : ['', Validators.required],
      contrase: ['', Validators.required],
      cargo: ['', Validators.required],
      nombres: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createCustomer( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-usuario']);
      });
  }
}
