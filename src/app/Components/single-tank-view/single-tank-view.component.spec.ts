import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTankViewComponent } from './single-tank-view.component';

describe('SingleTankViewComponent', () => {
  let component: SingleTankViewComponent;
  let fixture: ComponentFixture<SingleTankViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTankViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTankViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
