import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorCollegeComponent } from './senior-college.component';

describe('SeniorCollegeComponent', () => {
  let component: SeniorCollegeComponent;
  let fixture: ComponentFixture<SeniorCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorCollegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
