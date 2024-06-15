import { Component } from '@angular/core';
import {MedicamentStockComponent} from "../medicament-stock/medicament-stock.component";
import {MedicamentFormComponent} from "../medicament-stock/medicament-form/medicament-form.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MedicamentStockComponent,
    MedicamentFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor() {
  }

    protected readonly MedicamentStockComponent = MedicamentStockComponent;
}
