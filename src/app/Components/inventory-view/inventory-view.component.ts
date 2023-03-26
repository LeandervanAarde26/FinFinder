import { OnInit, Component } from "@angular/core";
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
  constructor(private fishService: FishService, private userMaterialService: UserMaterialService) { }
  // allItems: FishModel[] | DecorModel [] | UtilityModel[] = [];
  quickFilterItems: string[] = ["Fish", "Utilities", "Decorations", "Tanks"];
  filterState: boolean = false;
  searchQuery = new FormControl('')
  fish: FishModel[] = []
  userMaterial: UserMaterialModel[] = [];
  newmats: UserMaterialModel[] = []
  searchInventory() {
    console.log(this.searchQuery.value)
  }

  ngOnInit() {
    this.userMaterialService.getAllUserMaterials().subscribe((data) => {
      this.userMaterial = data
      console.log(this.userMaterial)
    })

  }

  searchItem() {
     let query = this.searchQuery.value;
      this.userMaterial = this.userMaterial['fish'].filter(item => item.name.includes(query))
      console.log(this.userMaterial)
  }

  viewId(id) {
    console.log(id)
    console.log("Hey there!!")
  }

}


