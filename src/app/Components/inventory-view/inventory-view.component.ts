import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FishModel } from 'src/app/shared/Models/Fish.model';
import { FishService } from 'src/app/shared/services/fish.service';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent implements OnInit {
  constructor(private fishService: FishService){}
 // allItems: FishModel[] | DecorModel [] | UtilityModel[] = [];
  quickFilterItems: string[] = ["Fish", "Utilities", "Decorations", "Tanks"];
  filterState: boolean = false;
  searchQuery = new FormControl('')
  fish : FishModel[] = []
  searchInventory(){
    console.log(this.searchQuery.value)
  }

  ngOnInit() {
    this.fishService.getAllFish().subscribe((data)=>{
      this.fish = data;
         console.log(this.fish)
    
    })

  }

}


