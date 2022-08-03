import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Subscription } from 'rxjs';
import { IAgencyMini } from 'src/app/shared/models/agency/AgencyMini.model';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-agency-modal',
  templateUrl: './agency-modal.component.html',
  styleUrls: ['./agency-modal.component.scss']
})
export class AgencyModalComponent implements OnInit,OnDestroy {

  favouriteAgency:string | null = null;
  agencyList : IAgencyMini[] = [];
  selectedAgency:string;
  @ViewChild('agencyDropdownRef') agencyDropdownRef!: ElementRef;

  private subscription!:Subscription;

  constructor(public _modelRef:MdbModalRef<AgencyModalComponent>,
              private _configService:ConfigService
    ) { }

  ngOnInit(): void {
    this.subscription = this._configService.getAgencyList()
    .subscribe((data)=>{
      this.agencyList = data;
    })
  }

  ngOnDestroy():void{
    this.subscription?.unsubscribe();
  }

  close(): void {   
    this._modelRef.close();
  }

  save():void{    
    this._modelRef.close(this.agencyDropdownRef.nativeElement.value);
  }

}
