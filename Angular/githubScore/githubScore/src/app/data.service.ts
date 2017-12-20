//Did not complete this assignment. Look into creating a model of Github user and referring to said model in line 31. 


import { Injectable } from '@angular/core';
//
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs'

import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


@Injectable()
export class DataService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) { 
    this.retrieveTask();
  }
  // user = [];
// updataData(newData: any): void {
//   const tempData = this.data.getValue();
//   tempData.push(newData);
//   this.data.next(tempData);
// }

  retrieveTask(){
    this._http.get('https://developer.github.com/users/<$username>').subscribe( (task: any[]) => { this.tasks.next(task); } 
    );
  }

  retrieveGithubUser(username: string): Observable<GithubUser> {
    return this.http.get(`https://api.github.com/users/${ username }`)
      .map(response => response.json());
  }

  addTask(newTask: any) {
    this._http.post('https://000000000000000000000000.mockapi.io/task', newTask).subscribe( (response) => {this.retrieveTask();})
  }
  
}
