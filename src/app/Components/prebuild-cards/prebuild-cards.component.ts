import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-prebuild-cards',
  templateUrl: './prebuild-cards.component.html',
  styleUrls: ['./prebuild-cards.component.scss']
})
export class PrebuildCardsComponent  implements OnInit{

  constructor(private buildService: PrebuildsService, private router: Router){}
  room: FormGroup
  @Input() name: string;
  @Input() fish: {};
  @Input() utilities: {};
  @Input() decorations: string[];
  @Input() imagePath: string[];
  @Input() tank: number;
  @Input() craftable: boolean;
  @Input() buildable: boolean;
  @Input() id: string;



  ngOnInit(): void {
    this.room = new FormGroup({
        'RoomName': new FormControl('', Validators.required)
    })
  }


  craftBuild(id: string){
    let buildName = this.room.controls['RoomName'].value
    this.buildService.addUserBuild(id, buildName)
  }
}
