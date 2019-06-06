import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
//Services

//Routes
import { APP_ROUTING } from './app-routing.module';

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
import { HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadosComponent } from './components/mantenimiento/empleados/empleados.component';
import { LibroComponent } from './components/libro/libro.component';
import { CarteraComponent } from './components/cartera/cartera.component';
import { CobranzaComponent } from './components/cobranza/cobranza.component';
import { SaldosComponent } from './components/saldos/saldos.component';

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
    EmpleadosComponent,
    LibroComponent,
    CarteraComponent,
    CobranzaComponent,
    SaldosComponent, 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    // AppRoutingModule
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
