import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFishTankCardComponent } from './my-fish-tank-card.component';

describe('MyFishTankCardComponent', () => {
  let component: MyFishTankCardComponent;
  let fixture: ComponentFixture<MyFishTankCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFishTankCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFishTankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
