import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorCollegeComponent } from './junior-college.component';

describe('JuniorCollegeComponent', () => {
  let component: JuniorCollegeComponent;
  let fixture: ComponentFixture<JuniorCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuniorCollegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
