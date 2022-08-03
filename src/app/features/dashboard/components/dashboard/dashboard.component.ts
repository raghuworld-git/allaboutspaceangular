import { ChangeDetectionStrategy, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISimpleLaunch } from 'src/app/shared/models/launch/SimpleLaunch.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  })
export class DashboardComponent implements OnInit,OnDestroy,DoCheck {

  constructor(private dashboardService:DashboardService) { }
  ngDoCheck(): void {
    // console.log(" Dashboard COmponent - DoCheck  ");
  }

  private dashboardServiceSubs!: Subscription;
  simplelaunches:ISimpleLaunch[]=[];
  highLightLaunch:ISimpleLaunch;

  ngOnInit(): void {
     this.dashboardServiceSubs =  this.dashboardService.getTopUpcomingLaunches()
      .subscribe(
        data=>{            
            this.highLightLaunch = data[0];
            this.simplelaunches = data.slice(1);          
        }
      );
  }


  ngOnDestroy():void{
      this.dashboardServiceSubs?.unsubscribe();
  }
}
