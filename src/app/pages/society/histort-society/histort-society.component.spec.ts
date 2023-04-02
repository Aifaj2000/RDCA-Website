import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistortSocietyComponent } from './histort-society.component';

describe('HistortSocietyComponent', () => {
  let component: HistortSocietyComponent;
  let fixture: ComponentFixture<HistortSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistortSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistortSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
