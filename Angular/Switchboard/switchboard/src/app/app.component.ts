import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  switches = [true, true, true, true, true, true, true, true, true, true];
  flipSwitch(idx) {
    this.switches[idx] = !this.switches[idx];
  }
  onButtonClick($event){
    if ($event % 2 === 0){
      this.color = 'green';
      console.log("turn green", $event);
    } else {
      this.color = 'purple';
      console.log("turn purple", event);
    }
  }
  buttonz = [];
}
