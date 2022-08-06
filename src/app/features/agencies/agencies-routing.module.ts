import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { AgencyDetailComponent } from './components/agency-detail/agency-detail.component';



const routes: Routes = [{
  path: '', component: AgenciesComponent
},
{
  path: ':agencyId', component: AgencyDetailComponent
}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AgenciesRoutingModule { }
