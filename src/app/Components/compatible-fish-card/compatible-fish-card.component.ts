import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compatible-fish-card',
  templateUrl: './compatible-fish-card.component.html',
  styleUrls: ['./compatible-fish-card.component.scss'],
})
export class CompatibleFishCardComponent {
  @Input() name: string;
  @Input() image: string;
  @Input() quantity: number;
  @Output() clickHandler = new EventEmitter<any>();

  onClickHandler(e) {
    this.clickHandler.emit(e);
  }
}
