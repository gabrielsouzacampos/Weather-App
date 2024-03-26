import { Component, Input } from '@angular/core';
import { WeatherDatas } from '../../../../models/interfaces/WeatherDatas';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind }
from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent {
  @Input() WeatherDatas!: WeatherDatas;
  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
