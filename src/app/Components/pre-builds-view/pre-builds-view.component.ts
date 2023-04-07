import { Component, OnInit } from '@angular/core';
import { PrebuiltsModel } from 'src/app/shared/Models/Prebuilts.model';
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';

@Component({
  selector: 'app-pre-builds-view',
  templateUrl: './pre-builds-view.component.html',
  styleUrls: ['./pre-builds-view.component.scss']
})
export class PreBuildsViewComponent implements OnInit {
    constructor(private buildService: PrebuildsService){}
    prebuilds: PrebuiltsModel[];

  ngOnInit(): void {
      this.buildService.getAllBuilds().subscribe(data =>{
        this.prebuilds = data;
        console.log(this.prebuilds)
      })
  }
}
