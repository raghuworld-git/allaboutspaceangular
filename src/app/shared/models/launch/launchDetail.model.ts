import { IAstronautModel } from "./astronauts.model";
import { ILaunchPadModel } from "./launchPads.model";
import { ILaunchServiceProviderModel } from "./launchServiceProvider.model";
import { ILaunchStatusModel } from "./launchStatus.model";
import { ILaunchUpdatesModel } from "./launchUpdates.model";
import { IRocketModel } from "./rocket.model";
import { IMissionModel } from "./mission.model";
import { IVidURL } from "./videoURL.model";

export interface ILaunchDetailModel {   
         name:string,
         image:string,
         status : ILaunchStatusModel,
         statusColor:string,         
         updates: ILaunchUpdatesModel[],
         net:string,
         launch_service_provider:ILaunchServiceProviderModel,        
         rocket: IRocketModel,
         mission:IMissionModel | null,
         customCrewMembers : IAstronautModel[],
         pad:ILaunchPadModel,   
         vidURLs:IVidURL[],
         vidURLCustom : string | null,
         failreason:string | null,
         holdreason:string | null,
         isLaunchCompleted:boolean
}