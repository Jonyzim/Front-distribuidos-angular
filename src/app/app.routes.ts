import { Routes } from '@angular/router';
import {TelaFarmaceuticoComponent} from "./tela-farmaceutico/tela-farmaceutico.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PatientViewComponent} from "./patient-view/patient-view.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path:  '', component:  LoginComponent},
  { path:  'farmaceutico', component:  TelaFarmaceuticoComponent},
  { path:  'pacientes', component:  PatientViewComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];
