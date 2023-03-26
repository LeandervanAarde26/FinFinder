import { Component, OnInit } from '@angular/core';
import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';
import { UserMaterialModel } from 'src/app/shared/Models/userMaterials.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit{

  constructor(private userMaterialService: UserMaterialService){}
  userMaterial: UserMaterialModel[] = [];
  inventorySize: number;
  currentInventory : number;
  lowStock: number;

  ngOnInit(): void {
    this.userMaterialService.getAllUserMaterials().subscribe((data) =>{
      let newData = data['fish']
      
      // Get the total size of data to display
      this.inventorySize = newData.length;
      console.log(this.inventorySize);
      
      //Display fish with a quantity more than 7
      this.currentInventory = newData.filter((j: number) => {return j['quantity'] > 7}).length;

      //Display fish with a quantity less than 4
      this.lowStock = newData.filter((j: number) => {return j['quantity'] < 4}).length;

    })
  }

}