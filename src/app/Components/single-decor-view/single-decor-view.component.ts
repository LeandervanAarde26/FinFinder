import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecorModel } from 'src/app/shared/Models/Decor.model';
import { DecorService } from 'src/app/shared/services/decor.service';

@Component({
  selector: 'app-single-decor-view',
  templateUrl: './single-decor-view.component.html',
  styleUrls: ['./single-decor-view.component.scss']
})
export class SingleDecorViewComponent implements OnInit{
    id: string;
    decoration: DecorModel[];

    constructor(private decorationService: DecorService, private activatedRoute: ActivatedRoute){
        this.activatedRoute.params.subscribe((params) =>{
          this.id = params['id']
        })
    }

  ngOnInit(){
    this.decorationService.getIndividual(this.id).subscribe((data) =>{
      this.decoration = data;
      console.log(this.decoration)
    })
    
  }

}
