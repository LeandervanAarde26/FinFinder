import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-found-in-buids-card',
  templateUrl: './found-in-buids-card.component.html',
  styleUrls: ['./found-in-buids-card.component.scss'],
})
export class FoundInBuidsCardComponent {
  @Input() name: string;
  @Input() fishTotal: number;
  @Input() utilitiesTotal: number;
  @Input() decorationsTotal: number;
  @Input() image: string;
}
