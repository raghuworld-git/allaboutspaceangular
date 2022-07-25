import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LaunchInfoModel } from 'src/app/shared/models/launch/launchInfo.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {

  constructor(private dashboardService:DashboardService) { }

  private dashboardServiceSubs!: Subscription;
  launchInfoModel:LaunchInfoModel[]=[];

  ngOnInit(): void {
     this.dashboardServiceSubs =  this.dashboardService.getTop4UpcomingLaunches()
      .subscribe(
        data=>{
            this.launchInfoModel = data;
            console.log(data);
        }
      );
  }


  ngOnDestroy():void{
      this.dashboardServiceSubs?.unsubscribe();
  }
}
