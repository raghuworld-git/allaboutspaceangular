import { IProgramModel } from "./program.model";
import { ISpacecraftStageModel } from "./spacecraft_stage.model";

export interface IRocketModel {
    configuration:{
        description:string,
        full_name:string,
        program:IProgramModel
    },
    spacecraft_stage:ISpacecraftStageModel,    
}