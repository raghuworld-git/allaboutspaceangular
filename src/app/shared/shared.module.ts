import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CountdownComponent } from './components/countdown/countdown.component';
import { HighlightedLaunchComponent } from './components/highlighted-launch/highlighted-launch.component';

@NgModule({
    declarations:[
        CountdownComponent,
        HighlightedLaunchComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        CountdownComponent,
        HighlightedLaunchComponent,
        CommonModule
    ]
})
export class SharedModule {

}
