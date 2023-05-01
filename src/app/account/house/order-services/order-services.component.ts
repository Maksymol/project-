import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-order-services',
  templateUrl: './order-services.component.html',
  styleUrls: ['./order-services.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(130%)' }),
        animate('1200ms 200ms ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
    ])
  ]
})
export class OrderServicesComponent {

}
