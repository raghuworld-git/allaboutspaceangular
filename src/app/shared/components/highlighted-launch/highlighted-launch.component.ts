import { Component, Input, OnInit } from '@angular/core';
import { ISimpleLaunch } from '../../models/launch/SimpleLaunch.model';

@Component({
  selector: 'app-highlighted-launch',
  templateUrl: './highlighted-launch.component.html',
  styleUrls: ['./highlighted-launch.component.scss']
})
export class HighlightedLaunchComponent implements OnInit {

  constructor() { }

  @Input() highLightLaunch!:ISimpleLaunch | null ; 

  ngOnInit(): void {
  }

}
