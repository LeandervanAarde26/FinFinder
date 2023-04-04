import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBuildsViewComponent } from './pre-builds-view.component';

describe('PreBuildsViewComponent', () => {
  let component: PreBuildsViewComponent;
  let fixture: ComponentFixture<PreBuildsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreBuildsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreBuildsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
