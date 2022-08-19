import { ILaunchStatus } from "./launchStatus.model";
import { IMission } from "./mission.model";

export interface ISimpleLaunch {
    slug:string;
    ismanned:boolean;
    image:string;
    name:string;
    launchDate:string;
    net:string;
    launchpad:string;
    agency:string;
    launchStatus:ILaunchStatus
    launchStatusColor:string;
    mission:IMission;
}
