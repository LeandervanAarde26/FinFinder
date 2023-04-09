import { Component , OnInit} from '@angular/core';
import { UserMaterialModel } from 'src/app/shared/Models/userMaterials.model';
import { UserMaterialService } from 'src/app/shared/services/userMaterials.service';

@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrls: ['./add-fish.component.scss']
})
export class AddFishComponent  implements OnInit{

  constructor(private userMaterialService: UserMaterialService){}
  itemsToAdd: UserMaterialModel;

  ngOnInit(): void {
  }
}
