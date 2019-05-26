import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services

//Routes
import { APP_ROUTING } from './app-routing.module'  ;
//Components

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { GerenteComponent } from './components/perfil/gerente/gerente.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadosComponent } from './components/mantenimiento/empleados/empleados.component';

//Servicios

//
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
    HomeComponent,
    EmpleadosComponent
  ],
  imports: [
  
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule
    // AppRoutingModule
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
