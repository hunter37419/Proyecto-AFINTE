import { Routes } from '@angular/router';
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

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
      {path: 'gerente', component: GerenteComponent},
      {path: 'nosotros', component: NosotrosComponent,data: {animation: 'NosotrosView'}},
      {path: 'cartera', component: CarteraComponent},
      {path: 'cobranza', component: CobranzaComponent},
      {path: 'saldos', component: SaldosComponent},
      {path: 'importacion', component: ImportacionXlxComponent},
      { path: 'add-customer', component: AddCustomerComponent },
      { path: 'edit-customer', component: EditCustomerComponent },
      { path: 'list-customer', component: ListCustomerComponent },
      { path: 'add-usuario', component: AddUsuarioComponent },
      { path: 'edit-usuario', component: EditUsuarioComponent },
      { path: 'list-usuario', component: ListUsuarioComponent },
      { path: 'add-empresa', component: AddEmpresaComponent },
      { path: 'edit-empresa', component: EditEmpresaComponent },
      { path: 'list-empresa', component: ListEmpresaComponent },
      { path: '**', pathMatch: 'full' , redirectTo: 'home'}
];
