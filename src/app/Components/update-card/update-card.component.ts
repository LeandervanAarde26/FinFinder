import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';
import { patchRequestBody } from 'src/app/shared/Interfaces/patchRequestBody.interface';
import { ActivatedRoute, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.scss'],
})
export class UpdateCardComponent implements OnInit {
  constructor(private userBuildService: PrebuildsService, private router: ActivatedRoute) {
    this.router.params.subscribe((params) => {
      this.route = params['id']
    })
  }

  @Input() fishname: string;
  @Input() fishId: string;
  @Input() fishImage: string;
  @Input() currentAmount: number;
  @Input() userAmount: number;
  @Input() category: string
  @Output() clickHandler = new EventEmitter<any>();
  @Output() clickHandler2 = new EventEmitter<any>();
  newValue: number;
  newUserAmount: number;
  requestBody: patchRequestBody;
  route: string;

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

  updateFishQuantity(id: string) {
    this.requestBody = {
      id: id,
      qty: this.newValue,
      userQty: this.newUserAmount,
    }
    this.userBuildService.updatedUserBuild(this.route, this.requestBody)
  }
  ngOnInit(): void {
    this.newValue = this.currentAmount;
    this.newUserAmount = this.userAmount;
  }
}
