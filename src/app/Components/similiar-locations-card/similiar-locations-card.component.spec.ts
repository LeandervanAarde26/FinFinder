import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimiliarLocationsCardComponent } from './similiar-locations-card.component';

describe('SimiliarLocationsCardComponent', () => {
  let component: SimiliarLocationsCardComponent;
  let fixture: ComponentFixture<SimiliarLocationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimiliarLocationsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimiliarLocationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
