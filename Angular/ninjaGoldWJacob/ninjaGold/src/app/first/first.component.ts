import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  // allGold;
  // count = this._dataService.count;
  // count = 0;
  // count = this._dataService.count;
  constructor( private _dataService: DataService ) { }
  ngOnInit() {
    // this.allGold = this._dataService.allGold;
    // this.count = this._dataService.count;
  }
  farmGold(){
    var farmCoin = Math.floor((Math.random()*5)+1);
    this._dataService.count += farmCoin;
    // // this.countgold(farmCoin);
    console.log("count from farmGoldMethod in services" + this._dataService.count);
    console.log("farmGold method in services.ts");
    // return this.allGold.push(farmCoin);
    // this._dataService.farmGoldd();
    // this._dataService.count;
  }
  caveGold(){
   var earnCoin = Math.floor((Math.random()*(5)+1) +5);
   this._dataService.count += earnCoin;
  // //  this.countgold(earnCoin);
   console.log("caveGold method in services.ts");
   console.log("count from caveGoldMethod in services" + this._dataService.count);
  //  return this.allGold.push(earnCoin);
  // this._dataService.caveGoldd();
 }
 casinoGold(){
   var earnCoin = Math.floor((Math.random()*100)+1);
   var loseCoin = Math.floor(Math.random()*2);
   if (loseCoin == 1){
    this._dataService.count += earnCoin;
    // this.countgold(earnCoin);   
   } else {
    this._dataService.count -= earnCoin;
  // this._dataService.casinoGoldd(); 
  console.log("casinoGold method in services.ts");
  console.log("count from casinoGoldMethod in services" + this._dataService.count);
  //  return this.allGold.push(earnCoin);
 }
}
 houseGold(){
   var houseCoin = Math.floor((Math.random()*(8)+1)+7);
   this._dataService.count += houseCoin;
  //  this.countgold(houseCoin);
  // this._dataService.houseGoldd();
   console.log("houseGold method in services.ts");
   console.log("count from houseGoldMethod in services" + this._dataService.count);
  //  return this.allGold.push(houseCoin);
 }
//  countgold(count){
//   console.log("count gold method in first component ts")
//   console.log(count)
//   return this.count
// }
  // count = this._dataService.count;
}
