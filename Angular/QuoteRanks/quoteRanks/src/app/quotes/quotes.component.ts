import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  
  quote = {
    msg: '',
    author: ''
  };
  quoteList = [];
  
  // updateQuoteList(newQuote){
  //   quoteList.push(newQuote);
  //   console.log("in updateQuoteList method of parent, quotes component");
  //   this.quote = {msg:'', author:''};
  // }


  onSubmit(){
    console.log(this.quote);
    this.quoteList.push(this.quote);
  }
  constructor() { }

  ngOnInit() {
  }

}
