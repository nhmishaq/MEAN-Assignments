class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My ninja name is ${this.name}`);
    }
    showStats(){
        console.log(`Ninja Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
    }
}
class Sensi extends Ninja {
    constructor (name, health, speed, strength, wisdom){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const superSensi = new Sensi("Master Splinter");
superSensi.speakWisdom();
superSensi.showStats();

