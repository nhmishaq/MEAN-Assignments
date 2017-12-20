const MyObjConstructor = function(name) {
const myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
this.name = name; // but you can see the name!
this.method = function() {
  console.log( "I am a method");
  };
}
const obj1 = new MyObjConstructor('object1');
const obj2 = new MyObjConstructor('object2');
console.log(obj1);
