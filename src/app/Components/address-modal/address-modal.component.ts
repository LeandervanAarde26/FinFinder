import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent implements OnInit{

  constructor(private buildsService: PrebuildsService){}
  room: FormGroup

  ngOnInit(): void {
    this.room = new FormGroup({
        'RoomName': new FormControl('', Validators.required)
    })
  }

  addBuild(){

  }
}
