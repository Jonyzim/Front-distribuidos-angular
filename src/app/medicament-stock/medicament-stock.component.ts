import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {MatTooltip} from "@angular/material/tooltip";
import {Medicament} from "../app.types";
import {sideBarItens} from "../../constants/contants";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-medicament-stock',
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
  templateUrl: './medicament-stock.component.html',
})

export class MedicamentStockComponent implements OnInit{

  medicaments: Medicament[]= [];
  selectedMedicament:Medicament=new Medicament();
  constructor(private _changeDetectorRef:ChangeDetectorRef) {
  }
  ngOnInit(): void {
    for(let i=0;i<10;i++) this.addRandomMedicament();
    this.selectedMedicament=this.medicaments[0];
    this._changeDetectorRef.markForCheck();
  }


  tableSortEvent(sort: Sort) {
    switch (sort.active){
      case "id":
        if(sort.direction=='asc')
          this.medicaments.sort((a,b)=>a.id!=null&&b.id!=null&&a.id<b.id?-1:1);
        else if(sort.direction=='desc')
          this.medicaments.sort((a,b)=>a.id!=null&&b.id!=null&&a.id>b.id?-1:1);
        break;
      case "name":
        if(sort.direction=='asc')
          this.medicaments.sort((a,b)=>a.name!=null&&b.name!=null&&a.name<b.name?-1:1);
        else if(sort.direction=='desc')
          this.medicaments.sort((a,b)=>a.name!=null&&b.name!=null&&a.name>b.name?-1:1);
        break;
    }
  }

  addRandomMedicament(){
    let med:Medicament=new Medicament();
    med.id=Math.floor(Math.random()*100);
    med.name="Med. "+med.id;
    med.activePrinciple="Zinco";
    med.form="Comprimido";
    med.price=Math.floor(Math.random()*50);
    med.producer="Prod X";
    med.validDate="2024-06-30";
    this.medicaments.push(med);
  }

  selectMedicament(item:Medicament) {
    this.selectedMedicament={...item};
  }

  saveMedicament() {

  }

  protected readonly sideBarItens = sideBarItens;
  selectedSideItem: number = 1;
}
