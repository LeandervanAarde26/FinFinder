import { OnInit, Component } from "@angular/core";
import { FormControl } from '@angular/forms';
import { lastValueFrom } from "rxjs";
import { FishModel } from 'src/app/shared/Models/Fish.model';
import { UserMaterialModel } from "src/app/shared/Models/userMaterials.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { FishService } from 'src/app/shared/services/fish.service';
import { UserMaterialService } from "src/app/shared/services/userMaterials.service";

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent implements OnInit {
  constructor(private fishService: FishService, private userMaterialService: UserMaterialService, private authService: AuthService) { }
  // allItems: FishModel[] | DecorModel [] | UtilityModel[] = [];
  quickFilterItems: string[] = [ "All items", "Fish", "Utilities", "Decorations", "Tanks"];
  filterState: boolean = false;
  searchQuery = new FormControl('');
  fish: FishModel[] = [];
  userMaterial: UserMaterialModel[] = [];
  allMaterials: any[];
  userId: string = this.authService.user;
  filterSet: string = "All items";
  userName: string

  searchInventory() {
    console.log(this.searchQuery.value)
  }

  ngOnInit() {
    this.userMaterialService.getAllUserMaterials().subscribe((data) => {
      this.userMaterial = data
      let fish= this.userMaterial['fish'].map(i =>  i).filter(item => item.quantity > 0);
      let decorations = this.userMaterial['decorations'].map(i =>  i).map(i =>  i).filter(item => item.quantity > 0);
      let utilities = this.userMaterial['utilities'].map(i =>  i).map(i =>  i).filter(item => item.quantity > 0);
      let tanks = this.userMaterial['tanks'].map(i =>  i).map(i =>  i).filter(item => item.quantity > 0);

      this.authService.getUserName();
      this.userName = sessionStorage.getItem('username');
      
      // let filteredData = {
      //   fish,
      //   decorations,
      //   utilities,
      //   tanks,
      // }

    })
  };

  searchItem() {
    let query = this.searchQuery.value;  
    let filteredMaterials = this.userMaterial.filter(item => item.name.includes(query));
    this.userMaterial = filteredMaterials
    console.log(filteredMaterials);
  }

  filterItems(category){
    console.log(category)
    this.filterSet = category;
  }

  viewId(id) {
    console.log(id)
    console.log("Hey there!!")
  }

}


