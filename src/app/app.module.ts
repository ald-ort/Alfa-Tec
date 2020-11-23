import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { GruposComponent } from './components/grupos/grupos/grupos.component';
import { NuevoGrupoComponent } from './components/grupos/nuevo-grupo/nuevo-grupo.component';
import { LoginComponent } from './components/sesion/login/login.component';
import { CheckinComponent } from './components/sesion/checkin/checkin.component';
import { AvisosComponent } from './components/mensajes/avisos/avisos.component';
import { LeccionComponent } from './components/lecciones/leccion/leccion.component';

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
    LeccionComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
