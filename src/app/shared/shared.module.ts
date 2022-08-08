import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CountdownComponent } from './components/countdown/countdown.component';
import { ShowDateOnlyPipe } from "./pipes/show-date-only.pipe";
import { SimpleCardComponent } from './components/simple-card/simple-card.component';

@NgModule({
    declarations:[
        CountdownComponent,
        ShowDateOnlyPipe,
        SimpleCardComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        CountdownComponent,
        SimpleCardComponent,
        ShowDateOnlyPipe,
        CommonModule
    ]
})
export class SharedModule {

}
