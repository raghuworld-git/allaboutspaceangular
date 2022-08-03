import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ImageCardComponent } from "./components/image-card/image-card.component";
import { LaunchDescriptionCardComponent } from "./components/launch-description-card/launch-description-card.component";
import { CountdownComponent } from './components/countdown/countdown.component';

@NgModule({
    declarations:[
        ImageCardComponent,
        LaunchDescriptionCardComponent,
        CountdownComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        ImageCardComponent,
        LaunchDescriptionCardComponent,
        CountdownComponent,
        CommonModule
    ]    
})
export class SharedModule {

}
