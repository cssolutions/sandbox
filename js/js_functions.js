function hello(thing) {
    console.log(this.name + " says hello " + thing);
    console.log(this.a * this.b);
}

function context() {
    this.name = 'Yehuda';
    this.a = 1;
    this.b = 2;
}

var teszt = {
    name: 'Yehuda',
    a: '15',
    b: '25'
}

hello.call(context(), "world") //=> Yehuda says hello world
hello.call(teszt, "world") //=> Yehuda says hello world







//CALL
var myObject = {
	a :'10',
	b :'20'
};
function myFunction(a, b) {
    return this.a * this.b;
}
myObject = myFunction.call(myObject);    // Will return 200
//APPLY
function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);  // Will also return 20 



