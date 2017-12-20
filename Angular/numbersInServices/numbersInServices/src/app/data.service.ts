import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  // numbers: number[] = [1, 2, 3];
  randomNumAlpha: number = Math.floor((Math.random() * 10) + 1);
  randomNumAlphaTwo: number = Math.floor((Math.random() * 10) + 1);
  randomNumBeta: number = Math.floor((Math.random() * 10) + 1);
  // difference = randomNumAlpha - randomNumBeta;
  constructor() { }

  // retrieveNumbers(): number[] {
  //   return this.numbers;
  // }
  // addNumber(num: number) {
  //   this.numbers.push(num);
  // }
}
