import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label : string;
  @Input() placeHolder: string;
  @Input() name: string;
  @Input() type: string;
  @Input() required: boolean;
  @Input() controlname: FormControl; 

}
