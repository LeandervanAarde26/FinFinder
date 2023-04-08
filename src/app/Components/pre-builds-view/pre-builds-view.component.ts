import { Component, OnInit } from '@angular/core';
import { PrebuiltsModel } from 'src/app/shared/Models/Prebuilts.model';
import { UserMaterialModel } from 'src/app/shared/Models/userMaterials.model';
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';
import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';
import { FishModel } from 'src/app/shared/Models/Fish.model';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-pre-builds-view',
  templateUrl: './pre-builds-view.component.html',
  styleUrls: ['./pre-builds-view.component.scss']
})
export class PreBuildsViewComponent implements OnInit {
    constructor(private buildService: PrebuildsService, private userMaterialService: UserMaterialService, private authService: AuthService){}
    prebuilds: PrebuiltsModel[];
    userMaterial: UserMaterialModel[];
    filterState: boolean = false;
    userId: string;
    fish: FishModel[] = [];
    allMaterials: any[];
    filterSet: string = "All items";
    buildable: [];

  ngOnInit(): void {
      this.userId = this.authService.user
      this.buildService.getAllBuilds().subscribe(data =>{
        this.prebuilds = data;
        // this.buildable = data[]

        console.log(data)
      });
  }
}
