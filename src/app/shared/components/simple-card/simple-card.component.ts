import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../models/news/article.model';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  constructor() { }

  @Input() item!:IArticle

  ngOnInit(): void {
  }

}
