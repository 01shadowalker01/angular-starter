import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertModule } from "./modules/alert/alert.module";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { HttpErrorInterceptor } from "./services/http-interceptors/http-error.interceptor";
import { AlertService } from "./modules/alert/shared/services/alert.service";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule,

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader();
  // http,
  // `${environment.i18nPrefix}/assets/i18n/`,
  // '.json'
}
