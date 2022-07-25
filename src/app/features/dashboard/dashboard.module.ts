import { NgModule } from "@angular/core";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
    declarations:[
    DashboardComponent
  ],
    imports:[DashboardRoutingModule]
})
export class DashboardModule {

}