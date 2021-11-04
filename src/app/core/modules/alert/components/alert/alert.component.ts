import { Component, OnInit, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material";

@Component({
  selector: "shw-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  icon = "notification_important";
  message: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBarRef: MatSnackBarRef<AlertComponent>
  ) {
    // this.message = this.appConfig.snackbarInfoMessage;
  }

  ngOnInit() {
    if (this.data) {
      switch (this.data.type) {
        case "DEFAULT":
          // this.message = this.appConfig.snackbarDefaultMessage;
          break;
        case "DANGER":
          this.icon = "error";
          // this.message = this.appConfig.snackbarDangerMessage;
          break;
        case "SUCCESS":
          this.icon = "check_circle";
          // this.message = this.appConfig.snackbarSuccessMessage;
          break;
        case "WARNING":
          this.icon = "warning";
          // this.message = this.appConfig.snackbarWarningMessage;
          break;
      }
    }
  }

  onClose() {
    this.snackBarRef.dismiss();
  }
}
