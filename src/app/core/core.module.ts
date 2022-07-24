import { NgModule } from "@angular/core";
import { BaseHttpService } from "./services/base-http.service";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    providers:[
        BaseHttpService
    ],
    declarations: [
      HeaderComponent
    ],
    exports:[
        HeaderComponent
    ]
})
export class CoreModule {

}