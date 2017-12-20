import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

count = this._dataService.count;
// allGold = this._dataService.allGold;
  messages =[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  // earnMessage(){
  //   this.messages.push("You've earned " + this._dataService.count + " at the ");
  //   console.log("earn message " + this.messages + "dataService.count value " + this._dataService.count);
  //   if (this._dataService.casinoGold){
  //     this.messages.push("You've earned " + this._dataService.count + " at the ");
  //     console.log("earn message " + this.messages + "dataService.count value " + this._dataService.count);
  //   }
  // }
  // loseMessage(){
  //   this.messages.push("You've lost " + this._dataService.count + " at the ");
  //   console.log("lose message " + this.messages);
  // }
}
