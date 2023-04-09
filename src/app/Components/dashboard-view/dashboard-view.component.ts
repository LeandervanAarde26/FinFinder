import { Component, OnInit } from '@angular/core';
import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';
import { UserMaterialModel } from 'src/app/shared/Models/userMaterials.model';
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit{

  constructor(private userMaterialService: UserMaterialService, private buildsService: PrebuildsService){}
  userMaterial: UserMaterialModel[] = [];
  inventorySize: number;
  currentInventory : number;
  lowStock: number;
  buildsLength: number;

  ngOnInit(): void {
    this.userMaterialService.getAllUserMaterials().subscribe((data) =>{
      let newData = data['fish']
      
      // Get the total size of data to display
      this.inventorySize = newData.length;
      console.log(this.inventorySize);
      
      //Display fish with a quantity more than 7
      this.currentInventory = newData.filter((j: number) => {return j['quantity'] > 5}).length;

      //Display fish with a quantity less than 4
      this.lowStock = newData.filter((j: number) => {return j['quantity'] < 4}).length;

    })
    
    this.buildsService.getAllBuilds().subscribe((data) =>{
      this.buildsLength = data.length
    })
  }

}