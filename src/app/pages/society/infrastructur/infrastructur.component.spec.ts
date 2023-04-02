import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructurComponent } from './infrastructur.component';

describe('InfrastructurComponent', () => {
  let component: InfrastructurComponent;
  let fixture: ComponentFixture<InfrastructurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfrastructurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
