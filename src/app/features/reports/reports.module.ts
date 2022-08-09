import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ReportsComponent } from "./components/reports/reports.component";
import { ReportsRoutingModule } from "./reports-routing.module";


@NgModule({
  declarations:[ReportsComponent],
  imports:[ReportsRoutingModule,SharedModule],
})
export class ReportModule {

}
