import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  constructor(private _dataService: DataService) { }
  difference;
  ngOnInit() {
  }
  clickedButton(value){
    this.difference = (this._dataService.randomNumAlpha + this._dataService.randomNumAlphaTwo) - this._dataService.randomNumBeta;
  }
}
