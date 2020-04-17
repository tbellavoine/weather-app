import { Component, OnInit } from '@angular/core';
import { WeatherApiService} from '../../../shared/services/weather-api.service';

@Component({
  selector: 'app-weather-informations',
  templateUrl: './weather-informations.component.html',
  styleUrls: ['./weather-informations.component.scss']
})
export class WeatherInformationsComponent implements OnInit {

  constructor(public weatherApiService: WeatherApiService) { }

  ngOnInit(): void {
  }

}
