import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { PreviousComponent } from "./components/previous/previous.component";
import { UpcomingComponent } from "./components/upcoming/upcoming.component";
import { LaunchesRoutingModule } from "./launches-routing.module";
import { LaunchesService } from "./services/launches.service";
import { LaunchesDetailsComponent } from './components/launches-details/launches-details.component';



@NgModule({
    declarations:[        
        UpcomingComponent,
        PreviousComponent,
        LaunchesDetailsComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        LaunchesRoutingModule
    ],
    providers:[
        LaunchesService
    ]
})
export class LaunchesModule {

}