import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  tasks: any[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.tasks.subscribe(
      (tasks) => {this.tasks = tasks; }
    );
  }

}
