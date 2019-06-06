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

const routes: Routes = [
  {path: 'home', component: HomeComponent,data: {animation: 'HomeView'}},
  {path: 'gerente', component: GerenteComponent},
  {path: 'nosotros', component: NosotrosComponent,data: {animation: 'NosotrosView'}},
  {path: 'cartera', component: CarteraComponent},
  {path: 'cobranza', component: CobranzaComponent},
  {path: 'saldos', component: SaldosComponent},
  {path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
