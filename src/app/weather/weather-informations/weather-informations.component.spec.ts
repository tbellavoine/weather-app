import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformationsComponent } from './weather-informations.component';

describe('WeatherInformationsComponent', () => {
  let component: WeatherInformationsComponent;
  let fixture: ComponentFixture<WeatherInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
