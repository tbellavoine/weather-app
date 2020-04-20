import { Component, OnInit, ViewChild , AfterViewInit, ElementRef  } from '@angular/core';
import { WeatherApiService} from '../../shared/services/weather-api.service';
import { FormGroup, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cityForm:FormGroup; 
  isOpen:boolean = false;
  isPlaying:boolean = true;
  isSound:boolean = true;

  constructor(public weatherApiService: WeatherApiService,fb: FormBuilder) { 
    this.cityForm = fb.group({
      name: [""]
    });
  }

  ngOnInit(){}

  ngAfterViewInit(){
    
    setTimeout(() => {
      this.playVideo();
    }, 500);
  }

  onSubmit() {
    this.weatherApiService.cityName = this.cityForm.value.name;
    this.weatherApiService.getWeatherByName(this.weatherApiService.cityName);
  }

  openAside(){
    this.isOpen = !this.isOpen;
  }

  playVideo(){
    const promise = document.querySelector('video').play();

    if (promise !== undefined) {
      promise.then(_ => {
        document.querySelector('video').play();
        this.isPlaying = true;
      }).catch(error => {
        this.isPlaying = false;
      });
    }    
  }

  muteVideo(){
    if(this.isSound){
      document.querySelector('video').muted = true;
      this.isSound = false;
    }else{
      document.querySelector('video').muted = false;
      this.isSound = true;
    }
  }

  pauseVideo(){
    document.querySelector('video').pause();
    this.isPlaying = false;
  }

}
