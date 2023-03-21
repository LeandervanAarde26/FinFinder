import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersteptwoanswersComponent } from './registersteptwoanswers.component';

describe('RegistersteptwoanswersComponent', () => {
  let component: RegistersteptwoanswersComponent;
  let fixture: ComponentFixture<RegistersteptwoanswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersteptwoanswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistersteptwoanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
