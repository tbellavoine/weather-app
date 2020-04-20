import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  lat:any;
  lng:any;
  position:any;
  currentDay:string;
  previousDay:string;
  date:string;
  temperature: number;
  sunrise:string;
  sunset:string;
  weatherIcon:string; 
  weatherDescription:string; 
  windSpeed:string;
  windAngle:string;
  humidity:string;
  cityName:string;
  savedCityName:string;
  daily:any;
  hourly:any; 
  errorCityName:string;
  advice:string;
  background:string;

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
      this.cityName = cityName;
      this.errorCityName = "";

      this.getWeatherInformations(lat,lng);
    },
    () => {
      this.errorCityName = "La ville entrée n'existe pas";
      this.cityName = this.savedCityName;
    });
  }
  getWeatherByCoords(lat:any,lng:any){
    
    this.getCityInformationsCoord(lat,lng).subscribe((datas) =>{
      this.cityName = datas['name'];
      this.savedCityName = datas['name'];
      this.errorCityName = "";
      this.getWeatherInformations(lat,lng);
    })
  }

  getWeatherInformations(lat:any,lng:any){
    this.getCoordWeatherInformations(lat,lng).subscribe((datas) =>{
      const current = datas['current'];
      const date = new Date (current.dt * 1000);
      const sunrise = new Date (current.sunrise * 1000);
      const sunset = new Date (current.sunset * 1000);
      const dateoptions = {weekday: 'long', month: 'long', day: 'numeric'};
      const hoursoptions = {hour:"numeric", minute:"numeric"};
      this.date = date.toLocaleTimeString('fr-FR',hoursoptions) + ' - ' + date.toLocaleDateString('fr-FR',dateoptions);//h:mm - EEEE, d MMMM yyyy
      this.currentDay = date.toLocaleDateString('fr-FR',{weekday: 'long', day: 'numeric'});
      this.temperature = current.temp;
      this.sunrise = sunrise.toLocaleTimeString('fr-FR',hoursoptions);
      this.sunset = sunset.toLocaleTimeString('fr-FR',hoursoptions);
      this.weatherIcon = current.weather[0].icon;
      this.weatherDescription = current.weather[0].description;
      this.windSpeed = current.wind_speed;
      this.windAngle = current.wind_deg;
      this.humidity = current.humidity;
      this.daily = datas['daily'];
      this.hourly = datas['hourly'];
      this.getAdviceAndBackground(this.weatherIcon);
    })
  }

  getAdviceAndBackground(icon:string){
    switch(icon){
      case "01d":
        this.advice = "Les lunettes de soleil sont dans la boite à gants...";
        this.background = "clearDay.mp4";
        break;
      case "01n":
        this.advice = "Arte... c'est la nuit !";
        this.background = "clearNight.mp4";
        break;
      case "02d":
        this.advice = "Attention ça bouge dans le ciel !";
        this.background = "cloudsDay.mp4";
        break;
      case "02n":
        this.advice = "Des nuages passent devant la lune c'est joli !";
        this.background = "cloudsNight.mp4";
        break;
      case "03d":
        this.advice = "Oh! On dirait des moutons...";
        this.background = "dayClouds.mp4";
        break;
      case "03n":
        this.advice = "zzZZ 32...zzzZZzz 33...zzZZZzz";
        this.background = "cloudsNight.mp4";
        break;
      case "04d":
        this.advice = "Il est où le soleil ?";
        this.background = "darkCloudsDay.mp4";
        break;
      case "04n":
        this.advice = "Elle est où la lune ?";
        this.background = "cloudsNight.mp4";
        break;
      case "09d":
        this.advice = "Quel temps de merde !";
        this.background = "rainDay.mp4";
        break;
      case "09n":
        this.advice = "Après la pluie le beau temps ?";
        this.background = "rainNight.mp4";
        break;
      case "10d":
        this.advice = "Au moins ça va laver la voiture...";
        this.background = "rainDay.mp4";
        break;
      case "10n":
        this.advice = "Après la pluie le beau temps ?";
        this.background = "rainNight.mp4";
        break;
      case "11d":
        this.advice = "Le ciel nous tombe sur la tête !!";
        this.background = "thunder.mp4";
        break;
      case "11n":
        this.advice = "Au secours! j'ai peur!";
        this.background = "thunder.mp4";
        break;
      case "13d":
        this.advice = "Je voudrais un bonhomme de neige! ou bien jouer avec moi!";
        this.background = "snowDay.mp4";
        break;
      case "13n":
        this.advice = "Demain 20cm ! cmb";
        this.background = "snowNight.mp4";
        break;
      case "50d":
        this.advice = "Ce brouillard à couper au couteau";
        this.background = "mistDay.mp4";
        break;
      case "50n":
        this.advice = "La dame blanche !!";
        this.background = "mistNight.mp4";
        break;
    }
  }
}
