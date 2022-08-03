import { ILaunchStatus } from "./launchStatus.model";

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
}
