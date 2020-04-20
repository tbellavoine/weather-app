import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherVideosComponent } from './weather-videos.component';

describe('WeatherVideosComponent', () => {
  let component: WeatherVideosComponent;
  let fixture: ComponentFixture<WeatherVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
