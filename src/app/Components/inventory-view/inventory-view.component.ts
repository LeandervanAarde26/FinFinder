import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent {
 // allItems: FishModel[] | DecorModel [] | UtilityModel[] = [];
  quickFilterItems: string[] = ["Fish", "Utilities", "Decorations", "Tanks"];
  filterState: boolean = false;
}
