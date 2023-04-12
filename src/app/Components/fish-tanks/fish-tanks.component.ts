import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrebuiltsModel } from 'src/app/shared/Models/Prebuilts.model';
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';
@Component({
  selector: 'app-fish-tanks',
  templateUrl: './fish-tanks.component.html',
  styleUrls: ['./fish-tanks.component.scss']
})
export class FishTanksComponent implements OnInit {
  constructor(private buildsService: PrebuildsService, private cdr: ChangeDetectorRef){}
  searchQuery = new FormControl('')
  quickFilterItems: number[] = [60, 100, 200, 250];
  userBuilds: PrebuiltsModel[];
  userName: string;

  searchInventory(){
    console.log(this.searchQuery.value)
  }

  ngOnInit(): void {
    this.buildsService.getUserBuilds().subscribe((data) =>{
      this.userBuilds = data;
      // console.log(data)
    })

    this.userName = sessionStorage.getItem('username')
  }


}
