import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FishModel } from 'src/app/shared/Models/Fish.model';
import { FishService } from 'src/app/shared/services/fish.service';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-single-item-view',
  templateUrl: './single-item-view.component.html',
  styleUrls: ['./single-item-view.component.scss'],
})
export class SingleItemViewComponent implements OnInit{
  id: string;
  fish: FishModel[];
  diet: string[];
  compat: [];
  nonCompat: [];
  constructor(private fishService: FishService, private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
      this.id = params['id']
      
    })
  }

  ngOnInit(): void {
  this.fishService.getIndividual(this.id).subscribe((data) =>{
      this.fish = data
      this.diet = data['diet']
      this.compat = data['compatibility'];
      this.nonCompat = data['notCompatible']
      console.log(this.compat)
   })
    
  }

}
