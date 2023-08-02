import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

interface FurnInfo {
furnit: any;
furniture :boolean;
}
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(130%)' }),
        animate('1200ms 200ms ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
    ])
  ]
})
export class FurnitureComponent {


}
