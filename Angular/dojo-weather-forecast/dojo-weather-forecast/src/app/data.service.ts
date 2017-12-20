import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs';


@Injectable()
export class DataService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) { }

  // retrieveTask() {
  //   this._http.get('https://api.openweathermap.org/data/2.5/forecast?id=<$cityName>=5cbaccf94c12752b20f1257ecfbecac7').subscribe(
  //     (task: any[]) => {this.tasks.next(task); }
  //   );
  
  // }
  // addTask(newTask: any){
  //   this._http.post('https://api.openweathermap.org/data/2.5/forecast?id=<$cityName>=5cbaccf94c12752b20f1257ecfbecac7', newTask).subscribe(
  //     (response) => { this.retrieveTask(); }
  //   );
  // }
  getWeather(city: string){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5cbaccf94c12752b20f1257ecfbecac7`)
    .map( data => data.json() )
    .toPromise();  }

}
