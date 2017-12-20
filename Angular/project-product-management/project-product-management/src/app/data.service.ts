import { Injectable } from '@angular/core';
//new imports
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class DataService {
  products = [];
  constructor() { }
  //new stuff
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  createProduct(prod){
    this.products.push(prod);
    console.log("in service")
    console.log(this.products);
    

  }
  findProduct(){

  }
  //new method - taken from observables tab
  updateProduct(newData: any) : void{
    const tempData = this.data.getValue();
    tempData.push(newData);
    this.data.next(tempData);
  }
  deleteProduct(){

  }

}
