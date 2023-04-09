import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-fish-tank-card',
  templateUrl: './my-fish-tank-card.component.html',
  styleUrls: ['./my-fish-tank-card.component.scss']
})
export class MyFishTankCardComponent {

  @Input() name: string;
  @Input() place: string;
  @Input() address: string;
  @Input() image: string;
  @Input() decorations: number;
  @Input() fish: [];
  @Input() remainingSpace: number
  @Input() totalLiters: number;
  @Input() id: string;
}
