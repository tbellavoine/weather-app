import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherNextDaysComponent } from './weather/weather-next-days/weather-next-days.component';
import { WeatherChartComponent } from './weather/weather-chart/weather-chart.component';
import { WeatherInformationsComponent } from './weather/weather-informations/weather-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherNextDaysComponent,
    WeatherChartComponent,
    WeatherInformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
