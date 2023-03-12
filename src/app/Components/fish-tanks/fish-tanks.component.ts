import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-fish-tanks',
  templateUrl: './fish-tanks.component.html',
  styleUrls: ['./fish-tanks.component.scss']
})
export class FishTanksComponent {
  searchQuery = new FormControl('')
  quickFilterItems: number[] = [60, 100, 200, 250]

  searchInventory(){
    console.log(this.searchQuery.value)
  }

}
