import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { FavouriteAgencyComponent } from './components/favourite-agency/favourite-agency.component';
import { AgencyModalComponent } from './components/agency-modal/agency-modal.component';
import { FormsModule } from "@angular/forms";
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";

@NgModule({
    declarations:[
    DashboardComponent,
    FavouriteAgencyComponent,
    AgencyModalComponent
  ],
    imports:[
      DashboardRoutingModule,
      SharedModule,
      FormsModule,
      MdbCarouselModule
    ]
})
export class DashboardModule {

}
