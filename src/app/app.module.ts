import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { GruposComponent } from './components/grupos/grupos/grupos.component';
import { NuevoGrupoComponent } from './components/grupos/nuevo-grupo/nuevo-grupo.component';
import { LoginComponent } from './components/sesion/login/login.component';
import { CheckinComponent } from './components/sesion/checkin/checkin.component';
import { AvisosComponent } from './components/mensajes/avisos/avisos.component';
import { LeccionComponent } from './components/lecciones/leccion/leccion.component';
import { Nvl1Component } from './components/lecciones/nvl1/nvl1.component';
import { Nvl2Component } from './components/lecciones/nvl2/nvl2.component';
import { Nvl3Component } from './components/lecciones/nvl3/nvl3.component';
import { SesionComponent } from './components/sesion/sesion/sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent,
    GruposComponent,
    NuevoGrupoComponent,
    LoginComponent,
    CheckinComponent,
    AvisosComponent,
    LeccionComponent,
    Nvl1Component,
    Nvl2Component,
    Nvl3Component,
    SesionComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
