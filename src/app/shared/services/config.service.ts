import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpService } from "src/app/core/services/base-http.service";
import { IAgencyMini } from "../models/agency/AgencyMini.model";

@Injectable({
    providedIn:'root'
})
export class ConfigService {
    
    constructor(private baseHttpService: BaseHttpService) { }
    
    private configEndpoint:string = "Config";

    getAgencyList(isFeatured:boolean=true):Observable<IAgencyMini[]>{
        return this.baseHttpService.get<IAgencyMini[]>(`${this.configEndpoint}/GetAgencyList`);        
    }
}