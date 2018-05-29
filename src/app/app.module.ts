import { MatComponentsModule } from './mat-components/mat-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';  // Hay que importar esto si no hemos añadido el paquete de angular/animations
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component;
import { ThemeCompComponent } from './theme-comp/theme-comp.component'';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponen,
    ThemeCompComponentt
  ],
  entryComponents: [EditCourseComponent],   // Aquí hay que añadir los componentes que se añaden de forma dinamica (por codigo, que no estén en la template)
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [
    //{provide: DIALOG_DATA, useValue: {} }   // En la fase de iny. de dependencias, cuando se cree algo del tipo dialog_data, pasar un objeto vacío
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
