export class Medicament {
  id: number | undefined ;
  produto:string | undefined;
  quantidade:number|undefined;
  estoque:string | undefined;
  municipio:string|undefined;
}

export class Receipt {
  code: number | undefined;
  medic: Medic | undefined;

}
export class Farmaceutico{
  cpf: string |undefined;
  nome : string | undefined;
  dataNasc : string | undefined;
  unidadeDeSaude : string | undefined;
}
export class EntregaMedicamento{
  cpf_farmaceutico:string|undefined;
  cpf_paciente: string | undefined;
  id_medicamento: number | undefined;
  quant_medicamento:number | undefined;
}

export class Requerimento{
  cpf_farmaceutico:string|undefined;
  id_medicamento: number | undefined;
  quant_medicamento:number | undefined;
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

export class User{
  cpf:string|undefined;
  password:string|undefined;
}
