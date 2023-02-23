import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() Title : string;
  @Input() Content : string;
  @Input() Image : string;

}
