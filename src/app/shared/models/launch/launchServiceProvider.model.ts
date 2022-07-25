export interface ILaunchServiceProviderModel {   
         id:number,
         name:string,
         type:string| null,
         country_code: string,
         abbrev:string,
         description: string | null,
         administrator : string | null,
         founding_year : string | null,
         launchers : string,
         spacecraft :string,
         info_url:string | null,
         wiki_url : string | null,
         logo_url : string | null,
         image_url : string | null,
         nation_url : string | null    
}