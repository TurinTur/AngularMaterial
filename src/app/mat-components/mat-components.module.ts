import { MatIconModule, MatButtonModule, MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule,MatDialogModule, MatTableModule,
  MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule,MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatCheckboxModule} from '@angular/material/checkbox';
// import { MatRadioModule} from '@angular/material/radio';
// import { MatSelectModule} from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  exports: [MatCheckboxModule, MatRadioModule,MatSelectModule,MatInputModule,MatDatepickerModule, MatNativeDateModule, MatMomentDateModule, MatButtonModule,
    MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule, MatTableModule,
    MatIconModule]
})
export class MatComponentsModule { }

