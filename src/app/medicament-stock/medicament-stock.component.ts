import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Medicament} from "./medicament-stock.types";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-medicament-stock',
  standalone: true,
  imports: [
    MatSort,
    NgForOf,
    MatSortHeader,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './medicament-stock.component.html',
  styleUrl: './medicament-stock.component.css'
})
export class MedicamentStockComponent implements OnInit{
  medicaments: Medicament[]= [];
  selected:Medicament=new Medicament();
  constructor(
    private _changeDetectorRef: ChangeDetectorRef) {
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
    med.validDate="30/06/2024";
    this.medicaments.push(med);
  }
  ngOnInit(): void {
    for(let i=0;i<10;i++) this.addRandomMedicament();
    this.selected=this.medicaments[0];
    this._changeDetectorRef.markForCheck();
  }

  selectMedicament(item:Medicament) {
    this.selected=item;
  }
}
