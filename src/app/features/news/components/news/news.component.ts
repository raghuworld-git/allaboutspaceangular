import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/shared/models/news/article.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit,OnDestroy {

  constructor(private _newsService:NewsService ) { }

  news:IArticle[] = [];
  private $subscription?:Subscription;

  ngOnInit(): void {
      this.$subscription = this._newsService.getNews()
      .subscribe((data)=>{
          this.news = data;
      });
  }

  ngOnDestroy(): void {
    this.$subscription?.unsubscribe();
  }

}
