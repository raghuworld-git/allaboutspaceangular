import { ChangeDetectionStrategy, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISimpleLaunch } from 'src/app/shared/models/launch/SimpleLaunch.model';
import { IArticle } from 'src/app/shared/models/news/article.model';
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
  articles:IArticle[]=[];

  ngOnInit(): void {
     this.dashboardServiceSubs =  this.dashboardService.getNewsArticles()
      .subscribe(
        data=>{
            this.articles = data;
        }
      );
  }


  ngOnDestroy():void{
      this.dashboardServiceSubs?.unsubscribe();
  }
}
