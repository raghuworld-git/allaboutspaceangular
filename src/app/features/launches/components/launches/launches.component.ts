import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILaunchStatus } from 'src/app/shared/models/launch/launchStatus.model';
import { ISimpleLaunch } from 'src/app/shared/models/launch/SimpleLaunch.model';
import { LaunchesService } from '../../services/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit, OnDestroy {

  constructor(private _launchService: LaunchesService) { }

  private $launchesSubscription !:Subscription;

  launchStatus: ILaunchStatus[] = [];
  launchList:ISimpleLaunch[]=[];
  launchesDynamicDisplayText: string = 'Upcoming';

  ngOnInit(): void {
     this.getlaunches(true);
  }

  private getlaunches(isUpcoming:boolean):void{
    this.$launchesSubscription = this._launchService.getLaunchesList(isUpcoming)
    .subscribe((data)=>{
         this.launchList = data;
    });
  }

  onLaunchesSwtichToggle(event): void {
    if (event.target.checked) {
      this.launchesDynamicDisplayText = "Upcoming";
      this.getlaunches(true);
    } else {
      this.launchesDynamicDisplayText = "Previous";
      this.getlaunches(false);
    }
  }

  ngOnDestroy(): void {
    this.$launchesSubscription?.unsubscribe();
  }

}
