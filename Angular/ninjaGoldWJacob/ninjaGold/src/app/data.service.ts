import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  // allGold =[];
  count = 0;
//   farmGoldd(){
//     var farmCoin = Math.floor((Math.random()*5)+1);
//     this.count += farmCoin;
//     console.log("count from farmGoldMethod in services" + this.count);
//     console.log("farmGold method in services.ts");
//   }
//   caveGoldd(){
//    var caveCoin = Math.floor((Math.random()*(5)+1) +5);
//    this.count += caveCoin;
//    console.log("caveGold method in services.ts");
//    console.log("count from caveGoldMethod in services" + this.count);
//  }
 
//  casinoGoldd(){
//   var earnCoin = Math.floor((Math.random()*100)+1);
//   var loseCoin = Math.floor(Math.random()*2);
//   if (loseCoin == 1){
//    this.count += earnCoin;
//    // this.countgold(earnCoin);   
//   } else {
//    this.count -= earnCoin;
//   // var casinoCoin = Math.floor((Math.random()*100)+1);
//   //  this.count += casinoCoin;
//    console.log("casinoGold method in services.ts");
//    console.log("count from casinoGoldMethod in services" + this.count);
//  }
// }
//  houseGoldd(){
//    var houseCoin = Math.floor((Math.random()*(8)+1)+7);
//    this.count += houseCoin
//    console.log("houseGold method in services.ts");
//    console.log("count from houseGoldMethod in services" + this.count);

//  }
countgold(){
  console.log("count gold method in first component ts")
  console.log(this.count);
  return this.count;
}



}
