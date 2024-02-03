import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DatesComponent } from './pages/dates/dates.component';

export const routes: Routes = [
    
    {path: 'home', component:HomeComponent},
    {path: 'formulario', component:FormularioComponent},
    {path: 'dates', component:DatesComponent},
    {path: '**', redirectTo:'home'}
];
