import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILaunchStats } from 'src/app/shared/models/launch/launchStats.model';
import { ISimpleLaunch } from 'src/app/shared/models/launch/SimpleLaunch.model';
import { LaunchUtilService } from 'src/app/shared/services/launchUtil.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy, DoCheck {

  constructor(private dashboardService: DashboardService,public launchUtilService:LaunchUtilService) { }
  ngDoCheck(): void {
    // console.log(" Dashboard COmponent - DoCheck  ");
  }

  private lastmonthStatsSubs!: Subscription;
  private nextlaunchServiceSubs!: Subscription;

  highLightLaunch: ISimpleLaunch | null;
  launchStats: ILaunchStats[] = [];  

  ngOnInit(): void {
    this.nextlaunchServiceSubs = this.dashboardService.getNextLaunch()
      .subscribe(
        data => {
          this.highLightLaunch = data;
        }
      );

    this.lastmonthStatsSubs = this.dashboardService.getPastMonthLaunchStats()
      .subscribe(
        data => {
          this.launchStats = data;
        }
      );     
  }


  ngOnDestroy(): void {
    this.lastmonthStatsSubs?.unsubscribe();
    this.nextlaunchServiceSubs?.unsubscribe();
  }
}
