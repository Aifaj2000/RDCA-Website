import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGraduationComponent } from './post-graduation.component';

describe('PostGraduationComponent', () => {
  let component: PostGraduationComponent;
  let fixture: ComponentFixture<PostGraduationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGraduationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
