import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {Medicament} from "./patient-view.types";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import {sideBarItens} from "../../constants/contants";
import {Patient} from "../app.types";


@Component({
  selector: 'app-tela-farmaceutico',
  standalone: true,
  imports: [
    MatInput,
    ReactiveFormsModule,
    FormsModule,
    DecimalPipe,
    MatSort,
    MatSortHeader,
    NgForOf,
    NgIf,
    MatTooltip,
    RouterLink
  ],
  templateUrl: './patient-view.component.html',
})

export class PatientViewComponent implements OnInit{
  selectedSideItem:number = 0;
  patients: Patient[]= [];
  selectedPatient:Patient=new Patient();
  constructor(private _changeDetectorRef:ChangeDetectorRef) {
  }
  ngOnInit(): void {
    for(let i=0;i<10;i++) this.addRandomPatient();
    this.selectedPatient=this.patients[0];
    this._changeDetectorRef.markForCheck();
  }


  tableSortEvent(sort: Sort) {
    switch (sort.active){
      case "cpf":
        if(sort.direction=='asc')
          this.patients.sort((a,b)=>a.cpf!=null&&b.cpf!=null&&a.cpf<b.cpf?-1:1);
        else if(sort.direction=='desc')
          this.patients.sort((a,b)=>a.cpf!=null&&b.cpf!=null&&a.cpf>b.cpf?-1:1);
        break;
      case "name":
        if(sort.direction=='asc')
          this.patients.sort((a,b)=>a.name!=null&&b.name!=null&&a.name<b.name?-1:1);
        else if(sort.direction=='desc')
          this.patients.sort((a,b)=>a.name!=null&&b.name!=null&&a.name>b.name?-1:1);
        break;
    }
  }

  addRandomPatient(){
    let pat:Patient=new Patient();

    pat.cpf=Math.floor(Math.random()*999)+"."+Math.floor(Math.random()*999)+"."+Math.floor(Math.random()*999)+"-"+Math.floor(Math.random()*99);
    pat.name="João "+Math.floor(Math.random()*999);
    pat.birthDate="1999-01-30";
    pat.region="Bauru";
    pat.healthUnit = 1111;
    this.patients.push(pat);
  }

  selectPatient(item:Patient) {
    this.selectedPatient={...item};
  }


  protected readonly sideBarItens = sideBarItens;

  createPatient() {

  }
  deletePatient() {

  }
  updatePatient() {

  }
}
