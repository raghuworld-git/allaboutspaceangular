import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { LaunchesRoutingModule } from "./launches-routing.module";
import { LaunchesService } from "./services/launches.service";
import { LaunchesDetailsComponent } from './components/launches-details/launches-details.component';
import { LaunchesComponent } from "./components/launches/launches.component";



@NgModule({
    declarations:[
        LaunchesComponent,
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
