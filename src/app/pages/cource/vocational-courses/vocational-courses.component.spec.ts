import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalCoursesComponent } from './vocational-courses.component';

describe('VocationalCoursesComponent', () => {
  let component: VocationalCoursesComponent;
  let fixture: ComponentFixture<VocationalCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocationalCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocationalCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
