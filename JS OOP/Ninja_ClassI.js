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
    }
