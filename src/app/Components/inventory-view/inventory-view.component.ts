import {OnInit, Component} from "@angular/core";
import { FormControl } from '@angular/forms';
import { FishModel } from 'src/app/shared/Models/Fish.model';
import { UserMaterialModel } from "src/app/shared/Models/userMaterials.model";
import { FishService } from 'src/app/shared/services/fish.service';
import { UserMaterialService } from "src/app/shared/services/userMaterials.service";

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent implements OnInit {
  constructor(private fishService: FishService, private userMaterialService: UserMaterialService){}
 // allItems: FishModel[] | DecorModel [] | UtilityModel[] = [];
  quickFilterItems: string[] = ["Fish", "Utilities", "Decorations", "Tanks"];
  filterState: boolean = false;
  searchQuery = new FormControl('')
  fish : FishModel[] = []
  userMaterial: UserMaterialModel[] = [];
  searchInventory(){
    console.log(this.searchQuery.value)
  }

  ngOnInit() {
    // this.fishService.getAllFish().subscribe((data)=>{
    //   this.fish = data;
    //      console.log(this.fish)  
    // })

    this.userMaterialService.getAllUserMaterials().subscribe((data) =>{
      this.userMaterial = data
      console.log(this.userMaterial)
    })

  }

}


