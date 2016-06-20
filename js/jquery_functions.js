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
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    };
}( jQuery ));




(function ( $ ) {
	
   $.fn.oform = function( options ) {
		var $form = this, data_settings = {};
		if (this.hasAttr('target-place') && $form.attr('target-place') !== '') {
			data_settings.target_place = $form.attr('target-place');
		}
		if ($form.hasAttr('data-parent-form') && $form.attr('data-parent-form') !== '') data_settings.parent_form = $form.attr('data-parent-form');
		if ($form.hasAttr('data-form-url') && $form.attr('data-form-url') !== '') data_settings.form_url = $form.attr('data-form-url');
		if ($form.hasAttr('data-paginator') && $form.attr('data-paginator') !== '') data_settings.paginator = $form.attr('data-paginator');
		if ($form.hasAttr('data-validate-per-item') && $form.attr('data-validate-per-item') !== '') data_settings.validate_per_item = $form.attr('data-validate-per-item');

		var settings = $.extend({
			 target_place: "self",  //self|modal|selector                 Indicates that which place of the page to send the form  
			 parent_form: "none",   //selector
			 form_url: "none",
			 paginator: 0,
			 validate_per_item: 0
		},
		data_settings,
		options);
		
		function get_target_place() {
			if (settings.target_place === 'self') return $form.parent();
			else if (settings.target_place === 'self') return $('#modal_selector');
			else return $(settings.parent_selector);
		}
		
		function get_parent_form() {
			if (settings.parent_form == 'none') return false;
			else return $(settings.parent_form);
		}
		
		/*
		 * Make tabs based on an object configuration
		 * Setting.paginator should looks like this: {'Tab1 neve':['selector1','selector2']}
		 */
		if (settings.paginator === 1) {
			var $nav = $('<nav id="form-tabs"></nav>');
			$('fieldset', $form).each(function(i,e) {
				var $fieldset = $(e), $title = $fieldset.data('title'), $hash = $fieldset.attr('id');
				$nav.append('<a href="#' + $hash + '">' + $title + '</a>');
			});
			$form.prepend($nav);
			
			$(window).hashchange( function(){
				var $hash = location.hash;
				$('#form-tabs a').removeClass('active');
				$('#form-tabs a[href="' + $hash + '"]').addClass('active');
//				$('#form-tabs a').each(function(){
//					var $link = $(this);
//					if ($link.attr('href') === $hash) $link.addClass('active');
//				});
				$('fieldset', $form).hide();
				$($hash, $form).show();
			});			
		}
		

		
		$('[type="submit"]', this).click(function() {
			$.ajax({
				method: this.attr('method'),
				url: this.attr('action'),
				data: this.serialize()
			}).success(function(response) {
				get_target_place().html(response);
			}).done(function(response) {
				get_target_place().html(response);
			});			
		});
		
//		return this.css({
//			 color: settings.color,
//			 backgroundColor: settings.backgroundColor
//		});


   };
}( jQuery ));