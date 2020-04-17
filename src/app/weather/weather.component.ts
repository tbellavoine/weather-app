import { Component, OnInit,  } from '@angular/core';
import { WeatherApiService} from '../../shared/services/weather-api.service';
import { FormGroup, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cityForm:FormGroup; 

  constructor(public weatherApiService: WeatherApiService,fb: FormBuilder) { 
    this.cityForm = fb.group({
      name: [""]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.weatherApiService.cityName = this.cityForm.value.name;
    this.weatherApiService.getWeatherByName(this.weatherApiService.cityName);
  }
 
}
