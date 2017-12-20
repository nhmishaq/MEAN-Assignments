function Ninja(name, health){
    const self = this;
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;

        this.sayName = function(){
            console.log ("My ninja name is " + this.name);
        }
        this.showStats = function(){
            console.log("Strength = " + strength + " Speed = " + speed + " Health = " + this.health);
        }
        this.drinkSake = function (){
            this.health += 10;
        }
        this.punch = function(obj){
        if (obj instanceof Ninja){
            Ninja.health -= 5;
        } 
        else {
            console.log("This innocent creature can't be punched, he's not a ninja!")
        }
    }
        this.kick = function(obj){
            if (obj instanceof Ninja){
            Ninja.health -= strength * 15;
            }
            else {
            console.log("This innocent creature can't be kicked, he's not a ninja!")
        }
            
        }
    }