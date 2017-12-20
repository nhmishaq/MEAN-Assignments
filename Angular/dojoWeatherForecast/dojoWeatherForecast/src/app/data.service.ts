import { Injectable } from '@angular/core';
//
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs'

@Injectable()
export class DataService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) { 
    this.retrieveTask();
  }
  user = [];
  retrieveTask(){
    this._http.get(' https://openweathermap.org/api>').subscribe( (task: any[]) => { this.tasks.next(task); } 
    );
  }
  addTask(newTask: any) {
    this._http.post('https://000000000000000000000000.mockapi.io/task', newTask).subscribe( (response) => {this.retrieveTask();})
  }
  
}
