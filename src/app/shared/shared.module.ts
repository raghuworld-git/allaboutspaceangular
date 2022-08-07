import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CountdownComponent } from './components/countdown/countdown.component';

@NgModule({
    declarations:[
        CountdownComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        CountdownComponent,
        CommonModule
    ]
})
export class SharedModule {

}
