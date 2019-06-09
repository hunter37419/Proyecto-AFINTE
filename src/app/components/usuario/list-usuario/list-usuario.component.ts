import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css'],
  styles: []
})
export class ListUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private router: Router, private service: UsuarioService) {}

  ngOnInit() {
    this.service.getCustomers().subscribe(data => (this.usuarios = data));
  }

  deleteCustomer(usuario: Usuario): void {
        this.service.deleteCustomer(usuario.id).subscribe(data => {
          this.usuarios = this.usuarios.filter(c => c !== usuario);
        });
  }

  editCustomer(usuario: Usuario): void {
    localStorage.removeItem('editUsuarioId');
    localStorage.setItem('editUsuarioId', usuario.id.toString());
    this.router.navigate(['edit-usuario']);
  }

  addCustomer(): void {
    this.router.navigate(['add-usuario']);
  }
}
