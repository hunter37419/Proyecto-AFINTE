import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenteComponent } from './components/perfil/gerente/gerente.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,data: {animation: 'HomeView'}},
  {path: 'gerente', component: GerenteComponent},
  {path: 'nosotros', component: NosotrosComponent,data: {animation: 'NosotrosView'}},
  {path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
