import { Component } from '@angular/core';
import { Observable,timer } from 'rxjs';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';    // para moment.js, de aqui a todo lo que hay abajo, incluyendo los providers
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';          

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';      //esto lo marca como error, pero funciona...
import { FormControl } from '@angular/forms';
import { observable } from 'rxjs';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
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

  minDate = new Date(2017,1,1);
  maxDate = new Date(2017,8,1);   //Son fechas nativas de JS. Lo recomendable es usar moment.js, que es la liberia estándar. Para eso hace falta un adapatador : MatMomentDateModule
  date2= moment([2017, 0, 1]);    // Usando moment.js

  onChange($event){
    console.log($event)
  }

  categoriesChips = [
    { name : 'Beginner'},
    { name : 'Intermediate'},
    { name : 'Expert'}
  ]
  
  selectCategory(category){             //En resumen, cuando hago click en chip2, pongo todas except chip2 a falso, y entonces invierto chip2.selected

    this.categoriesChips
     .filter(cat => cat != category )     // filtro para seleccionar todas las cat excepto 'category'
     .forEach(c=>c['selected'] = false) ;  // pongo todo a no-seleccionado. He tenido que usar c['selected'] para forzar y crear el atributo, ya que aquí todavia no está asociado a nada de html
    category.selected = !category.selected;


    // for (let entry of this.categoriesChips) {                  //Forma alternativa de hacer lo de arriba
    //   if (entry != category) {entry['selected']=false}     
    //   else entry['selected'] = !entry['selected'];
    // }
  }  

  isLoading = false;
  constructor (){                                       /* Tras 5 segundos, oculto el spinner */
    this.isLoading= true;
    this.getCourses()
       .subscribe( () => this.isLoading=false);
  }

  getCourses(){
      return timer(5000)
  }


}
