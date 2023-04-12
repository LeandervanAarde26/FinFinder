import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrebuiltsModel } from 'src/app/shared/Models/Prebuilts.model';
import { PrebuildsService } from 'src/app/shared/services/Prebuild.service';

@Component({
  selector: 'app-my-fish-tank-card',
  templateUrl: './my-fish-tank-card.component.html',
  styleUrls: ['./my-fish-tank-card.component.scss'],
})
export class MyFishTankCardComponent {
  constructor(
    private buildService: PrebuildsService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input() name: string;
  @Input() place: string;
  @Input() address: string;
  @Input() image: string;
  @Input() decorations: number;
  @Input() fish: [];
  @Input() remainingSpace: number;
  @Input() totalLiters: number;
  @Input() id: string;
  @Output('refresh') refresh = new EventEmitter();

  deleteBuild(id: string) {
    console.log(id);
    this.buildService.deleteUserBuild(id).subscribe({
      next: (data) => {
        this.refresh.emit(true);
        this.router.navigate([`/dashboard/builds`], {
          relativeTo: this.route,
          queryParamsHandling: 'preserve',
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
