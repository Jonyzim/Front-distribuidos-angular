import { Routes } from '@angular/router';
import {MedicamentStockComponent} from "./medicament-stock/medicament-stock.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PatientViewComponent} from "./patient-view/patient-view.component";

export const routes: Routes = [
  { path:  '', component:  PatientViewComponent},
  { path:  'medicamentos', component:  MedicamentStockComponent},
  { path:  'pacientes', component:  PatientViewComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];
