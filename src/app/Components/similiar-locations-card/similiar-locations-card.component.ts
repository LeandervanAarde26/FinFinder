import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-similiar-locations-card',
  templateUrl: './similiar-locations-card.component.html',
  styleUrls: ['./similiar-locations-card.component.scss']
})
export class SimiliarLocationsCardComponent {
  @Input() tankName: string;
  @Input() tankId: string;
}
