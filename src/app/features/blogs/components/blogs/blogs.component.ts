import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/shared/models/news/article.model';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit,OnDestroy {

  constructor(private _blogsService:BlogsService) { }

  private unsubscribe!:Subscription;
  blogs:IArticle[]=[];

  ngOnInit(): void {
    this.unsubscribe = this._blogsService.getBlogs()
    .subscribe((data)=>{
        this.blogs = data;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe?.unsubscribe();
  }

}
