import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrls: ['./inventory-card.component.scss']
})
export class InventoryCardComponent {
  @Input() name: string;
  @Input() image: string; 
  @Input() quantity: number;
  @Output() clickHandler = new EventEmitter<any>();

  onClickHandler(e) {
    this.clickHandler.emit(e)
  }
}
