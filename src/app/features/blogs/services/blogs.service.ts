import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpService } from "src/app/core/services/base-http.service";
import { IArticle } from "src/app/shared/models/news/article.model";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private baseHttpService: BaseHttpService) { }

  private newsEndPoint: string = 'News';

  getBlogs():Observable<IArticle[]> {
    return this.baseHttpService.get<IArticle[]>(`${this.newsEndPoint}/GetBlogs`);
  }


}
