import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecorModel } from 'src/app/shared/Models/Decor.model';
import { DecorService } from 'src/app/shared/services/decor.service';
import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';

@Component({
  selector: 'app-single-decor-view',
  templateUrl: './single-decor-view.component.html',
  styleUrls: ['./single-decor-view.component.scss'],
})
export class SingleDecorViewComponent implements OnInit {
  id: string;
  decoration: DecorModel[];
  category: string;
  foundInBuilds: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private materialService: UserMaterialService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.category = params['category'];
    });
  }

  ngOnInit(): void {
    this.materialService
      .getSingleMaterial(this.id, this.category)
      .subscribe((data) => {
        console.log(data);
        this.decoration = data['mat']['item'];
        this.foundInBuilds = data['builds'];
      });
  }
}
