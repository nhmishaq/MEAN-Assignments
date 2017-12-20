import { Component, OnInit } from '@angular/core';
//
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _dataService: DataService) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('name'));
  })

   }

  

  ngOnInit() {
  }

}
