import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
//Services

//Routes
import { APP_ROUTING } from './app-routing.module';

//Components


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { ContactComponent } from './components/contact/contact.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { Sidebar2Component } from './components/shared/sidebar2/sidebar2.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { GerenteComponent } from './components/perfil/gerente/gerente.component';
import { CobradorComponent } from './components/perfil/cobrador/cobrador.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { ImportacionXlxComponent } from './components/importacion-xlx/importacion-xlx.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadosComponent } from './components/mantenimiento/empleados/empleados.component';
import { LibroComponent } from './components/libro/libro.component';
import { CarteraComponent } from './components/cartera/cartera.component';
import { CobranzaComponent } from './components/cobranza/cobranza.component';
import { SaldosComponent } from './components/saldos/saldos.component';


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
import { ListaCarteraComponent } from './components/cartera/lista-cartera/lista-cartera.component';
import { ListaCobranzaCierreComponent } from './components/saldos/lista-cobranza-cierre/lista-cobranza-cierre.component';
import { AsignarCustomerComponent } from './components/customer/asignar-customer/asignar-customer.component';
import { AsignarCustomer2Component } from './components/customer/asignar-customer2/asignar-customer2.component';
import { CobrarComponent } from './components/cobrar/cobrar.component';
import { ListCobranzaComponent } from './components/list-cobranza/list-cobranza.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    NosotrosComponent,
    ModalLoginComponent,
    FooterComponent,
    ContactComponent,
    GerenteComponent,
    SidebarComponent,
    Sidebar2Component,
    HomeComponent,
    EmpleadosComponent,
    LibroComponent,
    CarteraComponent,
    CobranzaComponent,
    SaldosComponent, 
    ImportacionXlxComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    UsuarioComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    EditUsuarioComponent,
    ListEmpresaComponent,
    EditEmpresaComponent,
    AddEmpresaComponent,
    ListaCarteraComponent,
    ListaCobranzaCierreComponent,
    AsignarCustomerComponent,
    AsignarCustomer2Component,
    CobrarComponent,
    ListCobranzaComponent,
    CobradorComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  //  AppRoutingModule,