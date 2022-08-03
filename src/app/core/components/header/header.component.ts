import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public linksList:ILinks[]=[
    {
      visibleName:"Home",link:"/" 
    },
    {
      visibleName:"Launches",link:""
    }
  ]

}

interface ILinks{
  visibleName:string,
  link:string
}
