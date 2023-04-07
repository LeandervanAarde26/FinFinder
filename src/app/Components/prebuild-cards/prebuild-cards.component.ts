import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prebuild-cards',
  templateUrl: './prebuild-cards.component.html',
  styleUrls: ['./prebuild-cards.component.scss']
})
export class PrebuildCardsComponent {
  @Input() name: string;
  @Input() fish: {};
  @Input() utilities: {};
  @Input() decorations: string[];
  @Input() imagePath: string[];
  @Input() tank: number;
  quantity: 2
}
