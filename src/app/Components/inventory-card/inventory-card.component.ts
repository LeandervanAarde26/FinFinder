import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrls: ['./inventory-card.component.scss']
})
export class InventoryCardComponent implements OnInit {
  @Input() name: string;
  @Input() image: string; 
  @Input() quantity: number;
  @Input() id : string;
  @Output() clickHandler = new EventEmitter<any>();
  edit: boolean = false;
  newValue: number 

  onClickHandler(e) {
    this.clickHandler.emit(e)
  }

  changeUpdateState(){
    this.edit = !this.edit
  }

  editItem(id){
    console.log(id)
  }

  Increment(){
      this.newValue ++
  }

  Decrement(){
    this.newValue --
  }

  ngOnInit(){
    this.newValue = this.quantity
  }
}
