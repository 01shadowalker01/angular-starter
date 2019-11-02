import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { AlertComponent } from "../../components/alert/alert.component";
import { AlertType } from "../alert-type";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  showSnackbar(_message: string, _type: AlertType = "INFO") {
    let panelClass = "alert-info";
    switch (_type) {
      case "DEFAULT":
        panelClass = "alert-default";
        break;
      case "DANGER":
        panelClass = "alert-danger";
        break;
      case "SUCCESS":
        panelClass = "alert-success";
        break;
      case "WARNING":
        panelClass = "alert-warning";
        break;
    }
    this.snackBar.openFromComponent(AlertComponent, {
      data: { message: _message, type: _type },
      panelClass: panelClass
    });
  }
}
