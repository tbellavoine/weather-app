import { Component, OnInit } from '@angular/core';
import { WeatherApiService} from '../../../shared/services/weather-api.service';

@Component({
  selector: 'app-weather-videos',
  templateUrl: './weather-videos.component.html',
  styleUrls: ['./weather-videos.component.scss']
})
export class WeatherVideosComponent implements OnInit {

  constructor(public weatherApiService: WeatherApiService) { }

  ngOnInit(): void {
  }

}
