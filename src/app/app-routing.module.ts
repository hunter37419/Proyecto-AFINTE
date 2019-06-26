import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenteComponent } from './components/perfil/gerente/gerente.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CarteraComponent } from './components/cartera/cartera.component';
import { CobranzaComponent } from './components/cobranza/cobranza.component';
import { SaldosComponent } from './components/saldos/saldos.component';
import { ImportacionXlxComponent } from './components/importacion-xlx/importacion-xlx.component';
import {AddCustomerComponent} from './components/customer/add-customer/add-customer.component';
import {EditCustomerComponent} from './components/customer/edit-customer/edit-customer.component';
import {ListCustomerComponent} from './components/customer/list-customer/list-customer.component';
import { AddUsuarioComponent } from './components/usuario/add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './components/usuario/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { AddEmpresaComponent } from './components/empresa/add-empresa/add-empresa.component';
import { EditEmpresaComponent } from './components/empresa/edit-empresa/edit-empresa.component';
import { ListEmpresaComponent } from './components/empresa/list-empresa/list-empresa.component';
import { ListaCarteraComponent } from './components/cartera/lista-cartera/lista-cartera.component';
import { ListaCobranzaCierreComponent } from './components/saldos/lista-cobranza-cierre/lista-cobranza-cierre.component';
import { AsignarCustomerComponent } from './components/customer/asignar-customer/asignar-customer.component';
import { AsignarCustomer2Component } from './components/customer/asignar-customer2/asignar-customer2.component';
import { ListCobranzaComponent } from './components/list-cobranza/list-cobranza.component';
import { CobrarComponent } from './components/cobrar/cobrar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,data: {animation: 'HomeView'}},
  // {path: 'gerente', component: GerenteComponent},
  {path: 'gerente/:id', component: GerenteComponent},
  {path: 'nosotros', component: NosotrosComponent,data: {animation: 'NosotrosView'}},
  {path: 'cartera', component: CarteraComponent},
  {path: 'cobranza', component: CobranzaComponent},
  {path: 'saldos', component: SaldosComponent},
  {path: 'importacion', component: ImportacionXlxComponent},
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'edit-customer', component: EditCustomerComponent },
  { path: 'list-customer', component: ListCustomerComponent },
  { path: 'asignar-customer', component: AsignarCustomerComponent },
  { path: 'asignar-customer2', component: AsignarCustomer2Component },
  { path: 'add-usuario', component: AddUsuarioComponent },
  { path: 'edit-usuario', component: EditUsuarioComponent },
  { path: 'list-usuario', component: ListUsuarioComponent },
  { path: 'add-empresa', component: AddEmpresaComponent },
  { path: 'edit-empresa', component: EditEmpresaComponent },
  { path: 'lista-cartera', component: ListaCarteraComponent },
  { path: 'list-empresa', component: ListEmpresaComponent },
  { path: 'list-cobranza', component: ListCobranzaComponent },
  { path: 'cobrar', component: CobrarComponent },
  { path: 'lista-cobranza-cierre', component: ListaCobranzaCierreComponent },
  {path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
