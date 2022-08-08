import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpService } from "src/app/core/services/base-http.service";
import { IArticle } from "src/app/shared/models/news/article.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private baseHttpService: BaseHttpService) { }

  private newsEndPoint: string = 'News';

  getNews():Observable<IArticle[]> {
    return this.baseHttpService.get<IArticle[]>(`${this.newsEndPoint}/GetArticles`);
  }

}
