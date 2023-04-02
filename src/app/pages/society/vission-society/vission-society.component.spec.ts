import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VissionSocietyComponent } from './vission-society.component';

describe('VissionSocietyComponent', () => {
  let component: VissionSocietyComponent;
  let fixture: ComponentFixture<VissionSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VissionSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VissionSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
