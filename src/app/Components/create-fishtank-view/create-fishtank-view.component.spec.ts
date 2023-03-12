import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFishtankViewComponent } from './create-fishtank-view.component';

describe('CreateFishtankViewComponent', () => {
  let component: CreateFishtankViewComponent;
  let fixture: ComponentFixture<CreateFishtankViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFishtankViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFishtankViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
