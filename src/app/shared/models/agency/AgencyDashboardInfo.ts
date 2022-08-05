import { ISimpleLaunch } from "../launch/SimpleLaunch.model";

export interface IAgencyDashboardInfo {
    agencyName:string;
    country:string;
    total_launch_count:number;
    successful_launches : number;
    upcomingLaunch: ISimpleLaunch
}