$('input[type="radio"]').each(function() {													//make radion buttons uncheckable
	var radio = $(this), initial = false;
	radio.click(function() {
		radio.prop('checked', (initial = !initial));
	});
});