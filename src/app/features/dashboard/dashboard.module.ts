import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { FavouriteAgencyComponent } from './components/favourite-agency/favourite-agency.component';
import { AgencyModalComponent } from './components/agency-modal/agency-modal.component';

@NgModule({
    declarations:[
    DashboardComponent,
    FavouriteAgencyComponent,
    AgencyModalComponent
  ],
    imports:[
      DashboardRoutingModule,
      SharedModule
    ]
})
export class DashboardModule {

}