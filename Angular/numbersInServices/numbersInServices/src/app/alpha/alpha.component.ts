import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
//
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  randomNumAlpha: number;
  randomNumAlphaTwo: number;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.randomNumAlpha = this._dataService.randomNumAlpha;
    this.randomNumAlphaTwo = this._dataService.randomNumAlphaTwo;
    
  }
    // randNumAlpha = this._dataService.randomNumAlpha;
}
