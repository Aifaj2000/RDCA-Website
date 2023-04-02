import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderGraduationComponent } from './under-graduation.component';

describe('UnderGraduationComponent', () => {
  let component: UnderGraduationComponent;
  let fixture: ComponentFixture<UnderGraduationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderGraduationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
