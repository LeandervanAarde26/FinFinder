import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() placeHolder: string;
  @Input() controlName: FormControl;
  @Input() name: string;
  @Input() itemName: string;
  @Input() itemImage: string;
  @Input() itemAmount: string;
  @Input() itemId: string;
}
