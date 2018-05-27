import { Component } from '@angular/core';
//import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  isChecked= true;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  foodSel = 'tacos-2';

  onChange($event){
    console.log($event)
  }
}
