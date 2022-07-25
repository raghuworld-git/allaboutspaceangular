import { IAstronautModel } from "./astronauts.model";

export interface ISpacecraftStageModel {    
    destination:string,
    launch_crew :IAstronautModel[],
    onboard_crew : IAstronautModel[],
    landing_crew : IAstronautModel[],
    spacecraft: {
        id:number,
        name:string,
    }       
}