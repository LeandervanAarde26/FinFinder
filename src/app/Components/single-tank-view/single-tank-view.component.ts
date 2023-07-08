import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrebuiltsModel } from 'src/app/shared/Models/Prebuilts.model';
import { UserMaterialModel } from 'src/app/shared/Models/userMaterials.model';
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';
import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';

@Component({
  selector: 'app-single-tank-view',
  templateUrl: './single-tank-view.component.html',
  styleUrls: ['./single-tank-view.component.scss'],
})
export class SingleTankViewComponent implements OnInit {
  buildId: string;
  buildData: PrebuiltsModel;
  userMaterials: UserMaterialModel[];
  userData: [] = [];
  filteredBuild: [] = [];
  matchedData: [] = []
  isLoading: Boolean = true
  

  constructor(
    private userBuilService: PrebuildsService,
    private userMaterialService: UserMaterialService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.buildId = params['id'];
    });
  }

  ngOnInit(): void {
    this.userBuilService.getUserBuild(this.buildId).subscribe((data) => {
      this.buildData = data['userBuild'];
      this.userData = data['filter'];
      this.filteredBuild = data['filteredBuild']
      // console.log(this.userData);
      console.log(this.buildData);
      console.log(data)

      const buildMap = new Map(
        this.filteredBuild.map((item) => [item['id'], item])
      );
      const userMap = new Map(
        this.userData.map((item) => [item['id'], item])
      );

      for (const [id, buildItem] of buildMap) {
        const userItem = userMap.get(id);
        if (userItem) {
          this.matchedData.push(userItem);
        }
      }
      this.isLoading = false
    });
  }



}
