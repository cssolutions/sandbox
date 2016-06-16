/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$.merge( [ 0, 1, 2 ], [ 2, 3, 4 ] )  //[ 0, 1, 2, 2, 3, 4 ]
var first = [ "a", "b", "c" ];
var second = [ "d", "e", "f" ];
$.merge( $.merge( [], first ), second ); //[ "a", "b", "c", "d", "e", "f" ]



var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
 
// Merge object2 into object1
$.extend( object1, object2 );  // a későbbi elem értéke mindíg felülírja az előbbi elem értékét, de ha nincs egyikben sem, akkor appendálja
//object 1 now is://{"apple":0,"banana":{"price":200},"cherry":97,"durian":100}