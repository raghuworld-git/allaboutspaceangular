import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ImageCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
  }

    @Input() image!:string;
    @Input() name:string;    
}
