import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportsComponent } from "./components/reports/reports.component";


const route:Routes = [
  {
    path:'',component:ReportsComponent
  }
]

@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class ReportsRoutingModule {


}
