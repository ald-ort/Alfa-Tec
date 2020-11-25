// Importar modulos del router de angular
import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
//import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LeccionComponent } from './components/lecciones/leccion/leccion.component';
import { GruposComponent } from './components/grupos/grupos/grupos.component';
import { AvisosComponent } from './components/mensajes/avisos/avisos.component';
import { Nvl1Component } from './components/lecciones/nvl1/nvl1.component';
import { Nvl2Component } from './components/lecciones/nvl2/nvl2.component';
import { Nvl3Component } from './components/lecciones/nvl3/nvl3.component';
import { SesionComponent } from './components/sesion/sesion/sesion.component';
import { LoginComponent } from './components/sesion/login/login.component';
import { CheckinComponent } from './components/sesion/checkin/checkin.component';
import { ErrorComponent } from './components/error/error.component';


// Array de rutas
const appRoutes: Routes = [
    //{path: '', component: },
    {path: 'sesion', component: SesionComponent},
    {path: 'leccion', component: LeccionComponent},
    {path: 'grupos', component: GruposComponent},
    {path: 'avisos', component: AvisosComponent},
    {path: '**', component: ErrorComponent}
];

// Exportar al modulo del router
export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);