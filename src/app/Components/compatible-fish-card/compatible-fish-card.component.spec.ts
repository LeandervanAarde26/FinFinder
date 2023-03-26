import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibleFishCardComponent } from './compatible-fish-card.component';

describe('CompatibleFishCardComponent', () => {
  let component: CompatibleFishCardComponent;
  let fixture: ComponentFixture<CompatibleFishCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompatibleFishCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompatibleFishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
