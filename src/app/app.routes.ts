// importar los modulos del router de angular

import {ModuleWithProviders} from '@angular/core';

import {Routes, RouterModule} from '@angular/router'

// Importar componentes a los cuales quiero hacer una pagina exclusiva

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {ErrorComponent} from './components/error/error.component';
import {HeroesComponent} from './components/heroes/heroes.component';



// Array de rutas

const APPROUTES: Routes= [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: '**', component: ErrorComponent}
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APPROUTES);
