import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { FormularioComponent } from './app/pages/formulario/formulario.component';
import { DatesComponent } from './app/pages/dates/dates.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
