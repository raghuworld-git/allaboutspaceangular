import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './components/agencies/agencies.component'
import { AgencyDetailComponent } from './components/agency-detail/agency-detail.component';

@NgModule({

  declarations: [
    AgenciesComponent,
    AgencyDetailComponent
  ],
  imports:[
    CommonModule,
    AgenciesRoutingModule
  ]
})
export class AgenciesModule { }
