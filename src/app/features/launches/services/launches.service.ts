import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { BaseHttpService } from "src/app/core/services/base-http.service";
import { ILaunchDetail } from "src/app/shared/models/launch/launchDetail.model";
import { ILaunchStatus } from "src/app/shared/models/launch/launchStatus.model";
import { ISimpleLaunch } from "src/app/shared/models/launch/SimpleLaunch.model";
import { IResult } from "src/app/shared/models/result.model";
import { LaunchUtilService } from "src/app/shared/services/launchUtil.service";

@Injectable()
export class LaunchesService {

  constructor(private baseHttpService: BaseHttpService, private launchUtilService: LaunchUtilService) { }

  private configEndPoint: string = 'Config';
  private launchesEndPoint: string = 'Launches';

  getLaunchStatus(): Observable<ILaunchStatus[]> {
    return this.baseHttpService.get<ILaunchStatus[]>(`${this.configEndPoint}/GetLaunchStatus`);
  }

  getLaunchesList(isUpcoming: boolean = true): Observable<ISimpleLaunch[]> {
    if (isUpcoming) {

      return this.baseHttpService.get<IResult<ISimpleLaunch>>(`${this.launchesEndPoint}/GetUpcomingLaunches`).pipe(map((res) => {
        return res.results.map((value) => {
          return { ...value, launchStatusColor: this.launchUtilService.getBadgeColor(value.status?.abbrev) }
        })
      }));

    }
    else {
      return this.baseHttpService.get<IResult<ISimpleLaunch>>(`${this.launchesEndPoint}/GetPreviousLaunches`).pipe(map((res) => {
        return res.results.map((value) => {
          return { ...value, launchStatusColor: this.launchUtilService.getBadgeColor(value.status?.abbrev) }
        })
      }));

    }
  }

  getLaunchDetailsBySlug(slug: string): Observable<ILaunchDetail> {
    return this.baseHttpService.get<ILaunchDetail>(`${this.launchesEndPoint}/GetlaunchBySlug/${slug}`)
  }


}
