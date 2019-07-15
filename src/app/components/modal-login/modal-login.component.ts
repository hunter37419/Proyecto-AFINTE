import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';

declare var $:any;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  error=false;
  usuario:Usuario;
  usuarios: Usuario[];
  loginForm: FormGroup;
  mostrar:Boolean=true;

  constructor(private formBuilder: FormBuilder,private router: Router, private service: UsuarioService) { }

  ngOnInit() {
    this.service.getCustomers().subscribe(data => (this.usuarios = data));

    this.loginForm = this.formBuilder.group({
      usuario : ['', Validators.required],
      contra: ['', Validators.required]
    });
  }


  logearse(){
    
    console.log(this.loginForm.value.usuario);
    console.log(this.loginForm.value.contra);
    
    for (let usuario of this.usuarios) {
      if(usuario.usuario== this.loginForm.value.usuario && usuario.contrase==this.loginForm.value.contra){
        console.log("Ingresaste");
        this.error=false;
        this. mostrar=false;
        this.router.navigate(['/gerente',usuario.id]);

        $('#modal_login').modal('toggle');
        
        $("#logout").show();
        break;
      }else{
        this.error=true;
      }
    }
   
    
  };

  

}