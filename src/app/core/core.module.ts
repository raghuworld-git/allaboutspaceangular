import { NgModule, Optional, SkipSelf } from "@angular/core";
// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BaseHttpService } from "./services/base-http.service";
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HighlightLaunchComponent } from "./components/highlight-launch/highlight-launch.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    providers:[
        BaseHttpService
    ],
    declarations: [
      HeaderComponent,
      HighlightLaunchComponent,
    ],
    exports:[
        // Components
        HeaderComponent,
        HighlightLaunchComponent,

        //Common Core Built in Modules
        CommonModule,
        HttpClientModule,

    ],
    imports:[
        RouterModule,
        CommonModule,
        HttpClientModule,
        MdbCollapseModule,
        MdbDropdownModule,

        SharedModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core: CoreModule) {
        if (core) {
            throw new Error("You should import core module only in the root module")
        }
    }
}
