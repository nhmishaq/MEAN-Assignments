import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Input() quoteInChild;
  @Input() quoteListInChild;

  @Output() eventEmitName = new EventEmitter ();

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
    // this.quoteInChild = this.quoteInChild;
    console.log("onSubmit in child add-quote-component");
    this.quoteListInChild.push(this.quoteInChild);
    console.log(this.quoteInChild);
    console.log(this.quoteListInChild);
    this.quoteInChild = {msg:'', author: ''};

  }
  // triggerEvent(){
  //   this.eventEmitName.emit('$quote');
  //   console.log('$quote');
  // }
  // API(this.quote);

}
