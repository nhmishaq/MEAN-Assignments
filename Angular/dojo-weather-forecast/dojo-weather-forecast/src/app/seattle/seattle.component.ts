import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;
  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _dataService: DataService) { }

  ngOnInit() {
    this.weather = this._dataService.getWeather('3582383')
    .then( weather => {
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.temp = Math.floor(this.temp * (9/5) - 459.67); 
      this.maxTemp = weather.main.temp_max;
      this.maxTemp = Math.floor(this.maxTemp * (9/5) - 459.67); 
      this.minTemp = weather.main.temp_min;
      this.minTemp = Math.floor(this.minTemp * (9/5) - 459.67); 
      this.clouds = weather.weather[0].description;
      // console.log(this.weather);
    });
  }

}
// {
//   "id": 5809844,
//   "name": "Seattle",
//   "country": "US",
//   "coord": {
//     "lon": -122.332069,
//     "lat": 47.606209
//   }
// },