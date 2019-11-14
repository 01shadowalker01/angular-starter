import { AlertService } from "src/app/core/modules/alert/shared/services/alert.service";
import { Injector } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";

export class ServiceBase {
  config: ServiceConfig;
  alertService: AlertService;
  http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
    this.alertService = injector.get(AlertService);

    this.config = {
      hasLoading: true,
      showMessage: true
    };
  }

  getById$(url: string, id: number, config: ServiceConfig = this.config) {}

  getList$(url: string, body: any, config: ServiceConfig = this.config) {}

  edit$(url: string, body: any, config: ServiceConfig = this.config) {}

  delete$(url: string, id: number, config: ServiceConfig = this.config) {}
}

export class ServiceConfig {
  hasLoading?: boolean;
  showMessage?: boolean;
}
