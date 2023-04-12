import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.scss'],
})
export class UpdateCardComponent implements OnInit {
  @Input() fishname: string;
  @Input() fishImage: string;
  @Input() currentAmount: number;
  @Input() userAmount: number;
  @Output() clickHandler = new EventEmitter<any>();
  @Output() clickHandler2 = new EventEmitter<any>();
  newValue: number;
  newUserAmount: number;

  onClickHandler(event) {
    this.clickHandler.emit(event);
  }

  onClickHandler2(event) {
    this.clickHandler2.emit(event);
  }

  Increment() {
    if (this.newUserAmount !== 0) {
      this.newValue++;
      this.newUserAmount--;
    }
  }

  Decrement() {
    if (this.newValue !== 0) {
      this.newValue--;
      this.newUserAmount++;
    }
  }

  ngOnInit(): void {
    this.newValue = this.currentAmount;
    this.newUserAmount = this.userAmount;
  }
}
