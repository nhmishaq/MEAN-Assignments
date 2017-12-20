import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  tasks: any[] = [{
    infoName: ''
  }];;
  constructor(private _dataService: DataService) { }
  // tasks = [{
  //   infoName: ''
  // }];

  ngOnInit() {
    this._dataService.tasks.subscribe(
      (tasks) => {this.tasks = tasks; }
    );
  }

}
