import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LaunchesDetailsComponent } from "./components/launches-details/launches-details.component";
import { PreviousComponent } from "./components/previous/previous.component";
import { UpcomingComponent } from "./components/upcoming/upcoming.component";


const routes:Routes=[       
            {
                path:"upcoming",component:UpcomingComponent
            },
            {
                path:"previous",component:PreviousComponent
            } ,
            {
                path:":slug",component:LaunchesDetailsComponent
            }        
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LaunchesRoutingModule {

}