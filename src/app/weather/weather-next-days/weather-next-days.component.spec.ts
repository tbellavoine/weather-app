import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNextDaysComponent } from './weather-next-days.component';

describe('WeatherNextDaysComponent', () => {
  let component: WeatherNextDaysComponent;
  let fixture: ComponentFixture<WeatherNextDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherNextDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherNextDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
