import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ILaunchDetail } from 'src/app/shared/models/launch/launchDetail.model';
import { LaunchesService } from '../../services/launches.service';

@Component({
  selector: 'app-launches-details',
  templateUrl: './launches-details.component.html',
  styleUrls: ['./launches-details.component.scss']
})
export class LaunchesDetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute,private _launchesService:LaunchesService) { }

  launchDetail!: ILaunchDetail;
  slug!:string | null;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.slug = params.get('slug');
    });
  }

}
