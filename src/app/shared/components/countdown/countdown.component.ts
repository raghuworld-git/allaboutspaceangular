import {  Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit,OnDestroy {

  constructor() { }  

  @Input() finalDate!: string|null;

  private subscription!: Subscription;

  public dateNow!: Date;
  public dDay!: dayjs.Dayjs;


  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: number = 0;
  public secondsToDday: number = 0;
  public minutesToDday: number = 0;
  public hoursToDday: number = 0;
  public daysToDday: number = 0;

  private getTimeDifference() {
    this.timeDifference = this.dDay.diff(dayjs());//.tz(this.currentZone)
    this.allocateTimeUnits(this.timeDifference);
  }
  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  islaunchTimePast(): boolean {
    return  (dayjs().isAfter(this.dDay));// (dayjs().tz(this.currentZone).isAfter(this.dDay));
  }

  ngOnInit(): void {
    //this.changeDetector.detach();
    this.dDay = dayjs(this.finalDate);//.tz(tZone);     
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnDestroy():void{
    this.subscription?.unsubscribe();
  }
}
