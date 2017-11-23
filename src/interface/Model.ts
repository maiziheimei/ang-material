// export interface Model {
//    ID: string;
//    Kriterium: string;
//    Beschreibung: string;
//    Auspraegung0: string
//    Auspraegung1: string;
//    Auspraegung2: string;
//    Auspraegung3: string;
//    Auspraegung4: string
//    Auspraegung5: string;
//    Auspraegung6: string;
//    Auspraegung7: string;
// }

export class Model {
  // members
  ID: string;
  Kriterium: string;
  Beschreibung: string;
  Auspraegung0: string;
  Auspraegung1: string;
  Auspraegung2: string;
  Auspraegung3: string;
  Auspraegung4: string;
  Auspraegung5: string;
  Auspraegung6: string;
  Auspraegung7: string;

  constructor(id, kri, bes, aus0, aus1, aus2, aus3,aus4,aus5,aus6,aus7){
  this.ID =id;
  this.Kriterium= kri;
  this.Beschreibung= bes;
  this.Auspraegung0= aus0;
  this.Auspraegung1= aus1;
  this.Auspraegung2= aus2;
  this.Auspraegung3= aus3;
  this.Auspraegung4= aus4;
  this.Auspraegung5= aus5;
  this.Auspraegung6= aus6;
  this.Auspraegung7= aus7;
  };
  //id: string, kri: string, bes: string, aus0:string, aus1:string, aus2:string, aus3:string,aus4:string,aus5:string,aus6:string,aus7:string)
}

// export class Model {
//   constructor(// members
//     public ID: string,
//     public Kriterium: string,
//     public Beschreibung: string,
//     public Auspraegung0: string,
//     public Auspraegung1: string,
//     public Auspraegung2: string,
//     public Auspraegung3: string,
//     public Auspraegung4: string,
//     public Auspraegung5: string,
//     public Auspraegung6: string,
//     public Auspraegung7: string,
// ){}
// }
//
// export class Person {
//   constructor(
//     public id:number,
//     public name:string,
//   ){}
// }
