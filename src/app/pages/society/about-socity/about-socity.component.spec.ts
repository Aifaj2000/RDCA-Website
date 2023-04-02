import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSocityComponent } from './about-socity.component';

describe('AboutSocityComponent', () => {
  let component: AboutSocityComponent;
  let fixture: ComponentFixture<AboutSocityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSocityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSocityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
