import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherNextDaysComponent } from './weather/weather-next-days/weather-next-days.component';
import { WeatherHourComponent } from './weather/weather-hour/weather-hour.component';
import { WeatherInformationsComponent } from './weather/weather-informations/weather-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherNextDaysComponent,
    WeatherHourComponent,
    WeatherInformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
