
export class Receipt {
  code: number | undefined;
  medic: Medic | undefined;

}
export class Patient{
  cpf: string |undefined;
  name : string | undefined;
  birthDate : string | undefined;
}
export class Medic {
  crm : number | undefined;
  cpf : string |undefined;
  name : string | undefined;
  age : number | undefined;
}
