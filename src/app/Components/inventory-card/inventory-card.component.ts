import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';

@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrls: ['./inventory-card.component.scss'],
})
export class InventoryCardComponent implements OnInit {
  constructor(private userMaterialService: UserMaterialService) {}

  @Input() name: string;
  @Input() image: string;
  @Input() quantity: number;
  @Input() id: string;
  @Input() category: string;
  @Input() routingType: string;
  @Output() clickHandler = new EventEmitter<any>();
  edit: boolean = false;
  newValue: number;

  onClickHandler(e) {
    this.clickHandler.emit(e);
  }

  changeUpdateState() {
    this.edit = !this.edit;
  }

  editItem(id) {
    console.log(id);
  }

  updateQuantity(category, id) {
    let requestBody: {} = {
      itemId: id,
      category: category,
      amount: this.newValue,
    };
    this.userMaterialService.updateUserMaterial(requestBody);
    this.quantity = this.newValue;
    this.edit = !this.edit;
  }

  Increment() {
    this.newValue++;
  }

  Decrement() {
    this.newValue <= 0 ? 0 : this.newValue--;
  }

  ngOnInit() {
    this.newValue = this.quantity;
  }
}
