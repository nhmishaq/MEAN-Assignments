import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  wierdColors = [
    'AliceBlue', 'Aqua', 'Black', 'BlueViolet', 'CadetBlue', 'Coral', 'Crimson'
  ];
  randomizedJaunt = Math.floor(Math.random() * this.wierdColors.length) + 1;
  wierdColl = [this.wierdColors[this.randomizedJaunt]];
}
