import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// allGold = this._dataService.allGold;
// count = this._dataService.count;

//  count = this._dataService.count;
//  count;

  constructor( private _dataService: DataService) { }
  count = this._dataService.count;
  // this.count = this._dataService.count;
  ngOnInit() {
    // this.allGold = this._dataService.allGold;
    // this.count = this._dataService.count;
  }

}
