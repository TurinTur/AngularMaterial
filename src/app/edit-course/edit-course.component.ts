import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

//export const DIALOG_DATA = new InjectionToken('DIALOG_DATA'); // token de inyeccion para usarlo como proveedor en el modulo
//esto realmente no hacia falta, solo nos estaba enseñando como funciona angular material por dentro. ya trae un mat_dialog_data que lo hace solo!
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  // Este data es un parámetro que se pasará desde la llamada del dialogo. Para que funcione, hay que crear un proveedor con un token propio
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {  
    console.log( data);
  }

  ngOnInit() {
  }

 
  
}

