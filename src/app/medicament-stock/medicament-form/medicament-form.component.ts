import { Component } from '@angular/core';
import {MatFormField,MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {Medicament} from "../medicament-stock.types";
import {MatTooltip} from "@angular/material/tooltip";
import {MatButton} from "@angular/material/button";
import {Input} from "postcss";

@Component({
  selector: 'app-medicament-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatTooltip,
    MatButton
  ],
  templateUrl: './medicament-form.component.html',
  styleUrl: './medicament-form.component.css'
})
export class MedicamentFormComponent {

  medicament:Medicament=new Medicament();

  saveMedicament() {

  }
}
