import { Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DatesComponent } from './pages/dates/dates.component';

export const routes: Routes = [
    
    {path: 'formulario', component:FormularioComponent},
    {path: 'dates', component:DatesComponent},
    {path: '**', redirectTo:'home'}
];
