import { IAstronautModel } from "./astronauts.model";
import { ILaunchStatusModel } from "./launchStatus.model";
import { ILaunchServiceProviderModel } from "./launchServiceProvider.model";
import { IRocketModel } from "./rocket.model";

export interface LaunchInfoModel {   
         slug:string,
         name:string,
         image:string | null,
         status : ILaunchStatusModel,
         statusColor:string,
         net:string,
         launch_service_provider:ILaunchServiceProviderModel,
         rocket: IRocketModel
}

