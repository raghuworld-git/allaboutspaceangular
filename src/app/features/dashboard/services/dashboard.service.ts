import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { BaseHttpService } from "src/app/core/services/base-http.service";
import { IAgencyDashboardInfo } from "src/app/shared/models/agency/AgencyDashboardInfo";
import { ISimpleLaunch } from "src/app/shared/models/launch/SimpleLaunch.model";
import { LaunchUtilService } from "src/app/shared/services/launchUtil.service";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private baseHttpService: BaseHttpService,private launchUtilService:LaunchUtilService) { }

    private launchesEndPoint: string = 'Launches';    
    private agencyEndPoint: string = 'Agency';        

    getTopUpcomingLaunches(spaceAgency: string | null = null): Observable<ISimpleLaunch[]> {
        return this.baseHttpService.get<ISimpleLaunch[]>(`${this.launchesEndPoint}/GetTopUpcomingLaunches`).pipe(map((res)=>{
                return res.map((value)=>{
                    return {... value,launchStatusColor:this.launchUtilService.getBadgeColor(value.launchStatus?.abbrev)}
                })
        }));
    }

    getAgencyDashboardInfoByAgencyId(agencyId:string){
        return this.baseHttpService.get<IAgencyDashboardInfo>(`${this.agencyEndPoint}/GetAgencyDetailsForDashboardById/${agencyId}`);
    }
   
}