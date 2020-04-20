import { Component, OnInit,AfterViewInit, Input } from '@angular/core';
import { WeatherApiService} from '../../../shared/services/weather-api.service';

@Component({
  selector: 'app-weather-hour',
  templateUrl: './weather-hour.component.html',
  styleUrls: ['./weather-hour.component.scss']
})
export class WeatherHourComponent implements OnInit { 

  @Input('hour') hour: any;
  @Input('index') index: any;
  previousDay:string;
  date:string;
  time:string;
  temperature:number;
  weatherIcon:string;

  constructor(public weatherApiService: WeatherApiService) { }

  ngOnInit() {
    this.previousDay =  this.weatherApiService.previousDay;

    const date =  new Date(this.hour['dt'] * 1000);
    const dateoptions = {weekday: 'long'};
    const timeoptions = {hour:"numeric"};

    this.date = date.toLocaleDateString('fr-FR',dateoptions);
    this.time = date.toLocaleTimeString('fr-FR',timeoptions);
    this.temperature = this.hour['temp'];
    this.weatherIcon = this.hour['weather'][0].icon
  }

  ngAfterViewInit(){
    this.weatherApiService.previousDay = this.date;
  }

}
