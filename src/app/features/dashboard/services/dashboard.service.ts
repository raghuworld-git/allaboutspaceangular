import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import * as dayjs from 'dayjs'
import { BaseHttpService } from "src/app/core/services/base-http.service";
import { IAgencyDashboardInfo } from "src/app/shared/models/agency/AgencyDashboardInfo";
import { ILaunchStats } from "src/app/shared/models/launch/launchStats.model";
import { ISimpleLaunch } from "src/app/shared/models/launch/SimpleLaunch.model";
import { IArticle } from "src/app/shared/models/news/article.model";
import { LaunchUtilService } from "src/app/shared/services/launchUtil.service";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private baseHttpService: BaseHttpService, private launchUtilService: LaunchUtilService) { }

    private launchesEndPoint: string = 'Launches';
    private agencyEndPoint: string = 'Agency';
    private newsEndPoint: string = 'News';

    getTopUpcomingLaunches(spaceAgency: string | null = null): Observable<ISimpleLaunch[]> {
        return this.baseHttpService.get<ISimpleLaunch[]>(`${this.launchesEndPoint}/GetTopUpcomingLaunches`).pipe(map((res) => {
            return res.map((value) => {
                return { ...value, launchStatusColor: this.launchUtilService.getBadgeColor(value.launchStatus?.abbrev) }
            })
        }));
    }

    getNextLaunch(): Observable<ISimpleLaunch> {
        return this.baseHttpService.get<ISimpleLaunch>(`${this.launchesEndPoint}/GetNextLaunch`);
    };

    getAgencyDashboardInfoByAgencyId(agencyId: string) {
        return this.baseHttpService.get<IAgencyDashboardInfo>(`${this.agencyEndPoint}/GetAgencyDetailsForDashboardById/${agencyId}`);
    }

    getPastMonthLaunchStats(): Observable<ILaunchStats[]> {
        let pastMonthDateTime = dayjs().subtract(1, 'month');
        return this.baseHttpService.get<ILaunchStats[]>(`${this.launchesEndPoint}/GetStatsOfPastlaunchesByMonth?month=${pastMonthDateTime.month() + 1}&year=${pastMonthDateTime.year()}`).pipe(map(data => {
           return data.map(
               data=>{
                   return {...data,color:this.launchUtilService.getStatColor(data.title)}
               }
           );
        }));
    }

    getTopNewsFromAllCategories(): Observable<IArticle[]> {
        return this.baseHttpService.get<IArticle[]>(`${this.newsEndPoint}/GetTopNewsFromAllCategories`);
    }    

}
