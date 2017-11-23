import { Component } from '@angular/core';
import {Http} from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
import 'rxjs/Rx';
import { Model} from "../interface/Model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  missonTextValue='';
  modelItem:string  = '' ;
  modelItems =[] ;
   id ='';kri=''; bes=''; aus0=''; aus1=''; aus2=''; aus3='';aus4='';aus5='';aus6='';aus7 ='';
  //
  // modelItem = new Model(this.id, this.kri, this.bes, this.aus0, this.aus1, this.aus2, this.aus3,this.aus4,this.aus5,this.aus6,this.aus7) ;
  // modelItems : Model[] =[];

  constructor(private http:Http)
  {
    // this.http.get('assets/data.json')
    //   .map(response => response.json().screenshots)
    //   .subscribe(res => this.spaceScreens = res);

    // this.http.get('assets/files/model5.json')
    //   .map(res => res.json())
    //   .subscribe(data => this.modelData = data,
    //     err => console.log(err),
    //     () => console.log('Completed'));

    this.http.get('assets/files/model5.json')
      .map(res=> res.json())
      .subscribe( data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].ID == '1') {
           this.modelItem = data[i];
           this.modelItems.push(this.modelItem);
          }
        }
      });

  }



  relations = [
    {value: 'Relvant-0', viewValue: 'Relvant'},
    {value: 'Irrelevant-1', viewValue: 'Irrelevant'},
    {value: 'Unknown-2', viewValue: 'Unknown'},
  ];

  auspragung = [
    {value: 'Neutral', viewValue: 'Neutral'},
    {value: 'IST-1', viewValue: 'IST'},
    {value: 'Unknown-2', viewValue: 'Unknown'},
  ];

}


