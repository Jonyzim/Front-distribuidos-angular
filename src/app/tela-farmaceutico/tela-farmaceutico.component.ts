import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatFormField, MatInput} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {MatTooltip} from "@angular/material/tooltip";
import {EntregaMedicamento, Farmaceutico, Medicament, Requerimento, SideBarItem} from "../app.types";
import {RouterLink} from "@angular/router";
import {MatOption, MatSelect} from "@angular/material/select";


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
    RouterLink,
    MatFormField,
    MatSelect,
    MatOption
  ],
  templateUrl: './tela-farmaceutico.component.html',
})

export class TelaFarmaceuticoComponent implements OnInit{
   farmaceuticoSideBarItens:SideBarItem[] = [
    {'id':0,'name':'Entregar Medicamento','url':'/farm-medicamento'},
     {'id':1,'name':'Criar Requerimento','url':'/farm-requerimento'},
    {'id':2,'name':'Estoque Local','url':'/farm-estoque'},
  ];
  selectedSideItem: number = 0;
  farmaceutico:Farmaceutico=new Farmaceutico();
  medicaments: Medicament[]= [];
  selectedMedicament:Medicament=new Medicament();
  entregaMedicamento:EntregaMedicamento=new EntregaMedicamento();
  requerimento:Requerimento = new Requerimento();
  constructor(private _changeDetectorRef:ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.loadMedicamentStock();

    /*TESTE*/ for(let i=0;i<10;i++) this.addRandomMedicament();

    this.selectedMedicament=this.medicaments[0];
    this.getFarmaceuticoInfos();
    this._changeDetectorRef.markForCheck();
  }
  loadMedicamentStock(){
    //TODO carregar estoque
  }

  getFarmaceuticoInfos():void{
    //TODO receber infos do farmaceutico

    /* TESTE */
    this.farmaceutico.cpf="129.123.123-11";
    this.farmaceutico.nome="Jônatas Lopes";
    this.farmaceutico.dataNasc="05/02/2001";
    this.farmaceutico.unidadeDeSaude="Unidade 1";
    /*      */
  }
  sendEntregaMedicamento():void{
    this.entregaMedicamento.cpf_farmaceutico=this.farmaceutico.cpf;
    //TODO escrever lógica de entrega
  }

  createRequerimento():void{
    this.requerimento.cpf_farmaceutico=this.farmaceutico.cpf;
    //TODO escrever lógica da criação do requerimento
  }
  selectItem(id: number | undefined){
    if(id!=undefined)
      this.selectedSideItem=id;
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
          this.medicaments.sort((a,b)=>a.produto!=null&&b.produto!=null&&a.produto<b.produto?-1:1);
        else if(sort.direction=='desc')
          this.medicaments.sort((a,b)=>a.produto!=null&&b.produto!=null&&a.produto>b.produto?-1:1);
        break;
    }
  }

  addRandomMedicament(){
    let med:Medicament=new Medicament();
    med.id=Math.floor(Math.random()*100);
    med.produto="Med. "+med.id;
    med.estoque="Estoque 1";
    med.municipio="São Carlos";
    med.quantidade=Math.floor(Math.random()*50);
    this.medicaments.push(med);
  }

  selectMedicament(item:Medicament) {
    this.selectedMedicament={...item};
  }


}
