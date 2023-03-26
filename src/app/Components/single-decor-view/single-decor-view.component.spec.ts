import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDecorViewComponent } from './single-decor-view.component';

describe('SingleDecorViewComponent', () => {
  let component: SingleDecorViewComponent;
  let fixture: ComponentFixture<SingleDecorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDecorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDecorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
