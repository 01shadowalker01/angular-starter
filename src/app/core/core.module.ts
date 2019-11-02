import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertModule } from "./modules/alert/alert.module";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [CommonModule, AlertModule],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2500,
        panelClass: "alert-default"
      }
    }
  ]
})
export class CoreModule {}
