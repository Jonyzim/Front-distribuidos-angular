export class Medicament {
  id: number | undefined ;
  name:string | undefined;
  activePrinciple:string | undefined;
  producer:string | undefined;
  validDate: string | undefined;
  price: number | undefined;
  form: string | undefined;
}

export class Receipt {
  code: number | undefined;
  medic: Medic | undefined;

}
export class Patient{
  cpf: string |undefined;
  name : string | undefined;
  birthDate : string | undefined;
  region : string | undefined;
  healthUnit : number | undefined;
}
export class Medic {
  crm : number | undefined;
  cpf : string |undefined;
  name : string | undefined;
  age : number | undefined;
}

export class SideBarItem {
  id:number|undefined;
  name: string | undefined;
  url: string | undefined;
}
