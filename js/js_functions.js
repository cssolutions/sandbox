/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//CALL
function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);   //myObject = 20
//APPLY
 function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);  // Will also return 20 
