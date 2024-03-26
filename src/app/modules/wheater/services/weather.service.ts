import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '91869189c8ef67301b08fce09f3b49e0';
  constructor(private http: HttpClient) { }

  getWeatherDatas(city:string):Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apiKey}`,
       {}
    );
  }
}
