import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISimpleLaunch } from 'src/app/shared/models/launch/SimpleLaunch.model';
import { LaunchUtilService } from 'src/app/shared/services/launchUtil.service';
import { BaseHttpService } from './base-http.service';

@Injectable({providedIn: 'root'})
export class HeaderService {

  constructor(private baseHttpService: BaseHttpService,private launchUtilService:LaunchUtilService) { }

    private launchesEndPoint: string = 'Launches';

    getNextLaunch(): Observable<ISimpleLaunch> {
        return this.baseHttpService.get<ISimpleLaunch>(`${this.launchesEndPoint}/GetNextLaunch`);
        };
    }
