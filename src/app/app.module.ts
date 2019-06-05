import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';

// Importar rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

// Importar ReactiveFormsModule para los formularios
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AddUsuarioComponent } from './components/usuario/add-usuario/add-usuario.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { EditUsuarioComponent } from './components/usuario/edit-usuario/edit-usuario.component';
import { ListEmpresaComponent } from './components/empresa/list-empresa/list-empresa.component';
import { EditEmpresaComponent } from './components/empresa/edit-empresa/edit-empresa.component';
import { AddEmpresaComponent } from './components/empresa/add-empresa/add-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    UsuarioComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    EditUsuarioComponent,
    ListEmpresaComponent,
    EditEmpresaComponent,
    AddEmpresaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }