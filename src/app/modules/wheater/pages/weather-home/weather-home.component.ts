import { WeatherDatas } from './../../../../models/interfaces/WeatherDatas';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCardComponent } from "../../components/weather-card/weather-card.component";

@Component({
    selector: 'app-weather-home',
    standalone: true,
    templateUrl: './weather-home.component.html',
    imports: [
        FormsModule,
        FontAwesomeModule,
        WeatherCardComponent
    ]
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCity = 'São Paulo,br';
  weatherDatas!:WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private WeatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCity);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getWeatherDatas(city:string):void {
    this.WeatherService.getWeatherDatas(city)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
      },
      error: (error) => console.log(error),
    });
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCity);
    this.initialCity = '';
  }
}
