import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/shared/models/news/article.model';
import { ReportsService } from '../services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit,OnDestroy {

  constructor(private _reportsService:ReportsService) { }

  private unsubscribe!:Subscription;
  reports:IArticle[] = [];

  ngOnInit(): void {
    this.unsubscribe = this._reportsService.getReports()
    .subscribe((data)=>{
      this.reports = data;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe?.unsubscribe();
  }

}
