import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemViewComponent } from './single-item-view.component';

describe('SingleItemViewComponent', () => {
  let component: SingleItemViewComponent;
  let fixture: ComponentFixture<SingleItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleItemViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
