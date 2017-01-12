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



