import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes:Routes=[
    {
        path:'' , pathMatch:'full',
        loadChildren:()=>import('./features/dashboard/dashboard.module').then(m=>m.DashboardModule)
    }    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}