import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  product = {
    title: '',
    price: '',
    image: ''
  };
  onSubmit(){
    console.log("JAUNT GOT CREATED");
    this._dataService.createProduct(this);
    console.log("on submit method prod creation ts file");
    console.log(this);

  }

}
