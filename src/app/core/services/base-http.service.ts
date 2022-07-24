import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable()
export class BaseHttpService {

    constructor(private httpClient:HttpClient){}

    private readonly APIUrl = environment.apiURL;       

    get<T>(action:string,params:{name:string,value:string}[]=[]):Observable<T>{
        let paramsString ="";
        params.forEach((item,index) =>{
            if(index===0){
                paramsString =`?${item.name}=${item.value}`;
            } else{
                paramsString+=`&${item.name}=${item.value}`
            }                       
        });
        return this.httpClient.get<T>(`${this.APIUrl}/${action}/${paramsString}`)
        .pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {        
        return throwError(()=> console.log(error));
      }
}