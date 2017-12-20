import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-power-component',
  templateUrl: './power-component.component.html',
  styleUrls: ['./power-component.component.css']
})
 
export class PowerComponentComponent implements OnInit {
@Input() powerLevel;
// powerLevel = ''; 
// @Output() taskEventEmitter = new EventEmitter();

constructor() { }

  // triggerEvent(){
  //   this.taskEventEmitter.emit(this.powerLevel);
  // }
  onSubmit(){
    this.powerLevel = this.powerLevel;
    // this.taskEventEmitter.emit(this.powerLevel);
    console.log("onSubmit function in power component");
    console.log(this.powerLevel);
  }
  ngOnInit() {
  }

}
