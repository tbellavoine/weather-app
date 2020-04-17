import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  lat:any;
  lng:any;
  position:any;
  date:string;
  temperature: number;
  sunrise:number;
  sunset:number;
  weatherIcon:string; 
  weatherDescription:string; 
  windSpeed:string;
  windAngle:string;
  cityName:string;
  daily:any;
  hourly:any; 

  constructor(private httpClient:HttpClient) { 
    this.getUserLocation().then(pos=>{
      const lat = pos.lat;
      const lng = pos.lng;
      this.getWeatherByCoords(lat,lng);
    })
  }

  getCoordWeatherInformations(lat:number,lon:number){
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid=e8fd25d4c8df5060965cbc81e1ef9ff3&units=metric&lang=fr');
  }
  getCityWeatherInformations(cityName:string){
    cityName = cityName.replace(/ /g,"-");
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=e8fd25d4c8df5060965cbc81e1ef9ff3&units=metric&lang=fr');
  }
  getCityInformationsCoord(lat:number,lon:number){
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=e8fd25d4c8df5060965cbc81e1ef9ff3&units=metric&lang=fr');
  }

  getUserLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }

  getWeatherByName(cityName : string){
    this.getCityWeatherInformations(cityName).subscribe((datas) =>{
      const lat = datas['coord'].lat;
      const lng = datas['coord'].lon;

      this.getWeatherInformations(lat,lng);
    })
  }
  getWeatherByCoords(lat:any,lng:any){
    
    this.getCityInformationsCoord(lat,lng).subscribe((datas) =>{
      this.cityName = datas['name'];
      this.getWeatherInformations(lat,lng);
    })
  }

  getWeatherInformations(lat:any,lng:any){
    this.getCoordWeatherInformations(lat,lng).subscribe((datas) =>{
      const current = datas['current'];
      console.log('current',current);
      const date = new Date (current.dt);
      const dateoptions = {weekday: 'long', month: 'long', day: 'numeric'};
      const hoursoptions = {hour:"numeric", minute:"numeric"};
      this.date = date.toLocaleTimeString('fr-FR',hoursoptions) + ' - ' + date.toLocaleDateString('fr-FR',dateoptions);//h:mm - EEEE, d MMMM yyyy
      this.temperature = current.temp;
      this.sunrise = current.sunrise * 1000 ;
      this.sunset = current.sunset * 1000;
      this.weatherIcon = current.weather[0].icon;
      this.weatherDescription = current.weather[0].description;
      this.windSpeed = current.wind_speed;
      this.windAngle = current.wind_deg;
      this.daily = datas['daily'];
      this.hourly = datas['hourly'];
    })
  }
}
