import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './shared/services/alert.service';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [AlertComponent],
  entryComponents: [AlertComponent],
  providers: [AlertService]
})
export class AlertModule { }
