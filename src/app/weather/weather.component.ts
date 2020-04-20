import { Component, OnInit, ViewChild , AfterViewInit, ElementRef  } from '@angular/core';
import { WeatherApiService} from '../../shared/services/weather-api.service';
import { FormGroup, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @ViewChild('video') video: ElementRef;
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
    const promise = this.video.nativeElement.play();

    if (promise !== undefined) {
      promise.then(_ => {
        this.video.nativeElement.play();
        this.isPlaying = true;
      }).catch(error => {
        this.isPlaying = false;
      });
    }    
  }

  muteVideo(){
    console.log("mute",this.isSound);
    if(this.isSound){
      this.video.nativeElement.muted = true;
      this.isSound = false;
    }else{
      this.video.nativeElement.muted = false;
      this.isSound = true;
    }
  }

  pauseVideo(){
    this.video.nativeElement.pause();
    this.isPlaying = false;
  }
 
}
