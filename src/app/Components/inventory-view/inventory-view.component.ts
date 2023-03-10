import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent {
 // allItems: FishModel[] | DecorModel [] | UtilityModel[] = [];
  quickFilterItems: string[] = ["Fish", "Utilities", "Decorations", "Tanks"];
  filterState: boolean = false;
  searchQuery = new FormControl('')
  searchInventory(){
    console.log(this.searchQuery.value)
  }

}


