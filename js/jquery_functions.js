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



//Filter function
$( "li" ).filter(function( index ) {
    return $( "strong", this ).length === 1;
}).css( "background-color", "red" );


(function( $ ) {
    $.fn.showLinkLocation = function() {
        this.filter( "a" ).each(function() {
            var link = $( this );
            link.append( " (" + link.attr( "href" ) + ")" );
        });
        return this;
    };
}( jQuery ));
// Usage example:
$( "a" ).showLinkLocation();


(function ( $ ) {
    $.fn.greenify = function( options ) {
        var settings = $.extend({
            color: "#556b2f",
            backgroundColor: "white"
        }, options );
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    };
}( jQuery ));




//$.fn.checkall = function(selector) {
//	 //var context = $(selector);
//	 $(selector).find('input[type="checkbox"]').prop('checked', this.prop('checked'));
//	 return this;
//};

$.fn.checkall = function(selector) {
   var $control = this;
	$control.change(function() {
		$(selector).find('input[type="checkbox"]').prop('checked', $control.prop('checked'));
	});
	return this;
};


//<!DOCTYPE html>
//<html>
//<head>
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
//<script>
//$.fn.checkall = function(selector) {
//	 //var context = $(selector);
//	 $(selector).find('input[type="checkbox"]').prop('checked', this.prop('checked'));
//	 return this;
//};
//$(document).ready(function(){
//$('[name="checkall"]').checkall('.context');
//});
//</script>
//</head>
//<body>
//
//<p>If you click on me, I will disappear.</p>
//<p><input type="checkbox" name='checkall' /></p>
//<p>Click me too!</p>
//
//<div class="context">
//<input type="checkbox" />
//<input type="checkbox" />
//<input type="checkbox" />
//<input type="checkbox" />
//<input type="checkbox" />
//<input type="checkbox" />
//</div>
//
//</body>
//</html>
