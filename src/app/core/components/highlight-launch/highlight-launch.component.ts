import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ISimpleLaunch } from 'src/app/shared/models/launch/SimpleLaunch.model';
import { HeaderService } from '../../services/header.services';

@Component({
  selector: 'app-highlight-launch',
  templateUrl: './highlight-launch.component.html',
  styleUrls: ['./highlight-launch.component.scss']
})
export class HighlightLaunchComponent implements OnInit,OnDestroy {

  constructor(private _headerService:HeaderService) { }

  nextlaunch: ISimpleLaunch | null = null ;
  private $nextlaunchSubscription : Subscription;

  ngOnInit(): void {
    this.$nextlaunchSubscription = this._headerService.getNextLaunch()
    .subscribe((data)=>{
        this.nextlaunch = data;
    });
  }

  ngOnDestroy(): void {
    this.$nextlaunchSubscription?.unsubscribe();
  }

}
