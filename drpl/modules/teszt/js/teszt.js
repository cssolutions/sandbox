(function ($) {
	$(function(){
		var devices = [];
		$.ajax({
			url: Drupal.settings.basePath+'?q=teszt/data',
			success: function(data) {
				console.log(data);
				//devices = data.devices;
				//$('#ciplus-search-form #search').typeahead().data('typeahead').source = data.devices;
			}
		});	
		$('#ciplus-search-form #search').change(function() {
			check($(this));
		});;
		$('#ciplus-search-form #search').keyup(function() {
			check($(this));
		});;
		function check(e) {
			if ($.inArray(e.val(), devices) >= 0) {
				$('#ciplus-search-form .alert-success').removeClass('hidden');
			} else {
				$('#ciplus-search-form .alert-success').addClass('hidden');
			}
		}
	});
})(jQuery);
