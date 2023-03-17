import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishTanksComponent } from './fish-tanks.component';

describe('FishTanksComponent', () => {
  let component: FishTanksComponent;
  let fixture: ComponentFixture<FishTanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishTanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
