import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';

@Component({
  selector: 'app-prebuild-cards',
  templateUrl: './prebuild-cards.component.html',
  styleUrls: ['./prebuild-cards.component.scss']
})
export class PrebuildCardsComponent {

  constructor(private buildService: PrebuildsService){}

  @Input() name: string;
  @Input() fish: {};
  @Input() utilities: {};
  @Input() decorations: string[];
  @Input() imagePath: string[];
  @Input() tank: number;
  @Input() craftable: boolean;
  @Input() buildable: boolean;
  @Input() id: string;

  craftBuild(id: string){
    this.buildService.addUserBuild(id)
  }
}
