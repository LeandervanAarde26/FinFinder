import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCardComponent } from './inventory-card.component';

describe('InventoryCardComponent', () => {
  let component: InventoryCardComponent;
  let fixture: ComponentFixture<InventoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
