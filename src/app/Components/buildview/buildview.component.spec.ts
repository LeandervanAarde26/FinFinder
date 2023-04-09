import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildviewComponent } from './buildview.component';

describe('BuildviewComponent', () => {
  let component: BuildviewComponent;
  let fixture: ComponentFixture<BuildviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
