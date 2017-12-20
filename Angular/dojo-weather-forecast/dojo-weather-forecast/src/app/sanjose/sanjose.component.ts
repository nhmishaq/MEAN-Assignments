import { Component, OnInit } from '@angular/core';
//
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;
  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _dataService: DataService) { }

  ngOnInit() {
    this.weather = this._dataService.getWeather('5392171')
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
//   "id": 5392171,
//   "name": "San Jose",
//   "country": "US",
//   "coord": {
//     "lon": -121.894958,
//     "lat": 37.33939
//   }
// },
