import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpService } from "src/app/core/services/base-http.service";
import { LaunchInfoModel } from "src/app/shared/models/launch/launchInfo.model";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private baseHttpService: BaseHttpService) { }

    private launchesEndPoint: string = 'Launches';

    getTop4UpcomingLaunches(spaceAgency: string | null = null): Observable<LaunchInfoModel[]> {
        return this.baseHttpService.get<LaunchInfoModel[]>(`${this.launchesEndPoint}/GetTop4UpcomingLaunches`)
    }
}