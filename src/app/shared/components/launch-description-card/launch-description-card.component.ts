import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ISimpleLaunch } from '../../models/launch/SimpleLaunch.model';

@Component({
  selector: 'app-description-card',
  templateUrl: './launch-description-card.component.html',
  styleUrls: ['./launch-description-card.component.scss']  
})
export class LaunchDescriptionCardComponent implements OnInit {

  constructor() {  }
  

  ngOnInit(): void {       
  }
  
  @Input() launchInfo!:ISimpleLaunch;
}
