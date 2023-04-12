import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishModel } from 'src/app/shared/Models/Fish.model';
import { FishService } from 'src/app/shared/services/fish.service';

import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';
import { UserMaterialModel } from 'src/app/shared/Models/userMaterials.model';

@Component({
  selector: 'app-single-item-view',
  templateUrl: './single-item-view.component.html',
  styleUrls: ['./single-item-view.component.scss'],
})
export class SingleItemViewComponent implements OnInit{
  id: string;
  fish: UserMaterialModel;
  diet: string[];
  compat: [];
  quantity: number;
  nonCompat: [];
  constructor(private fishService: FishService, private activatedRoute: ActivatedRoute, private materialService: UserMaterialService){
    this.activatedRoute.params.subscribe(params =>{
      this.id = params['id']
      
    })
  }

  ngOnInit(): void {
  this.materialService.getSingleMaterial(this.id, 'fish').subscribe((data) =>{
      this.fish = data['mat'].item
      this.diet = this.fish['diet']
      this.compat = data['compat'];
      this.nonCompat = data['nonCompat']
      this.quantity = data['mat'].fish.quantity
      console.log(data)
   }); 
  }

}
