import { ChangeDetectionStrategy, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { AgencyModalComponent } from '../agency-modal/agency-modal.component';

@Component({
  selector: 'app-favourite-agency',
  templateUrl: './favourite-agency.component.html',
  styleUrls: ['./favourite-agency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouriteAgencyComponent implements OnInit,OnDestroy {

  constructor(private _modalService: MdbModalService,
        private _localStorageService:LocalStorageService
    ) { }

  modelRef: MdbModalRef<AgencyModalComponent> | null = null;

  private subscription!:Subscription;
  private favouriteAgency:string="favouriteAgency";

   

  ngOnInit(): void {      
  }
  ngOnDestroy():void{
    this.subscription?.unsubscribe();
  }

  openModal() {
    let config = {
      animation: true,
      backdrop: true,
      containerClass: 'right',
      data: {
        favouriteAgency: this._localStorageService.loadInfo(this.favouriteAgency)
      },
      ignoreBackdropClick: true,
      keyboard: false    
    }
    this.modelRef = this._modalService.open(AgencyModalComponent, config);
    this.modelRef.onClose.subscribe((message)=>{      
        if(message != undefined){
              this._localStorageService.setInfo({key:this.favouriteAgency,value:message});
        }
    });
  }

}
