import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { ILaunchDetail } from 'src/app/shared/models/launch/launchDetail.model';
import { LaunchesService } from '../../services/launches.service';

@Component({
  selector: 'app-launches-details',
  templateUrl: './launches-details.component.html',
  styleUrls: ['./launches-details.component.scss']
})
export class LaunchesDetailsComponent implements OnInit, OnDestroy {

  constructor(private router: ActivatedRoute, private _launchesService: LaunchesService) { }

  launchDetail!: ILaunchDetail;
  private slug!: string | null;
  private launchServiceSubs!: Subscription;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('slug');
      this._launchesService.getLaunchDetailsBySlug(this.slug)
        .subscribe((data) => {
          this.launchDetail = data;
        });
    });
  }

  ngOnDestroy(): void {
    this.launchServiceSubs?.unsubscribe();
  }
}
