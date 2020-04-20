import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-next-days',
  templateUrl: './weather-next-days.component.html',
  styleUrls: ['./weather-next-days.component.scss']
})
export class WeatherNextDaysComponent implements OnInit {

  @Input('day') day: any;
  date:string;
  temperature:number;
  temperatureMin:number;
  temperatureMax:number;
  sunrise:number;
  sunset:number;
  weatherIcon:string; 
  weatherDescription:string; 
  windSpeed:string;
  windAngle:string;

  constructor() { }

  ngOnInit(): void {
    const date =  new Date(this.day['dt'] * 1000);
    const dateoptions = {weekday: 'long', day: 'numeric'};

    this.date = date.toLocaleDateString('fr-FR',dateoptions);
    this.temperature = this.day.temp.day;
    this.temperatureMin = this.day.temp.min;
    this.temperatureMax = this.day.temp.max;
    this.sunrise = this.day.sunrise * 1000;
    this.sunset = this.day.sunset * 1000;
    this.weatherIcon = this.day.weather[0].icon;
    this.weatherDescription = this.day.weather[0].description;
    this.windSpeed = this.day.wind_speed;
    this.windAngle = this.day.wind_deg;
  }

}
