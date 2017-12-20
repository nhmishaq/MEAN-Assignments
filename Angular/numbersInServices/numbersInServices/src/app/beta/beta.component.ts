import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  randomNumBeta;
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.randomNumBeta = this._dataService.randomNumBeta;
  }
  // randomNumBeta: number = Math.floor((Math.random() * 10) + 1);
}
