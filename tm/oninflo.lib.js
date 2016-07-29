//<div id="replace">Replace block!</div>
//<div id="modal">Modal block!</div>
//<div id="content">Content block!</div>
//
//<div class="holder"><a href='test.php' class='oninflo-btn' data-target="self" data-url="href">Load content self...</a></div>
//<div class="holder"><a href='test.php' class='oninflo-btn' data-target="parent" data-url="href">Load content parent...</a></div>
//<div class="holder"><a href='test.php' class='oninflo-btn' data-target="modal" data-url="href">Load content modal...</a></div>
//<div class="holder"><a href='test.php' class='oninflo-btn' data-target="content" data-url="href">Load content content...</a></div>
//<div class="holder"><a href='test.php' class='oninflo-btn' data-target="selector" data-selector="#replace" data-url="href">Load content selector replace block...</a></div>
//
//<div class="holder"><a href='test.php' class='oninflo-btn' data-target="selector" data-selector="#replace" data-url="test.php">Testing data-url</a></div>
//
//<form action="test.php">
//First name: <input type="text" name="FirstName" value="Mickey"><br>
//Last name: <input type="text" name="LastName" value="Mouse"><br>
//<input type="submit" value="Submit" class="oninflo-btn" data-target="selector" data-selector="#replace" data-url="action" value="Replace">
//</form>

function Oninflo() {
	return {
		ajax_button: {
			beforeSend: function(xhr, options) {},
			error: function(xhr, status) {},
			success: {
				before: function(data, status, xhr) {},	
				after: function(data, status, xhr) {}
			},
			complete: function() {}
		}
	}
}

var App = Oninflo();

App.ajax_button.complete = function() {
	console.log('Really complete!!!!');
};

$(document).on('click', '.oninflo-btn', function(e) {
	e.preventDefault();
	var $self = $(this), 
		 $targetType = $self.data('target') || 'self',  //$targetType: self, parent, modal, page
		 $target,
		 $data,                                         //$data: href->data-datas  , action->form.serialize(),   document.Oninflo.button.data
		 $url = $self.data('url');        //$url: href, action, valid url

	switch($targetType) {
		case 'parent':
			$target = $self.parent();
			break;
		case 'modal':
			$target = $('#modal');
			break;
		case 'content':
			$target = $('#content');
			break;
		case 'selector':
			$target = $($self.data('selector'));
			break;
		case 'self':
		default:
			 $target = $self;
	}

	switch($url) {
		case 'href':
			$url = $self.attr('href');
			$data = App.ajax_button.data || $self.data('datas');
			break;
		case 'action':
			var $_form = $self.closest('form');
			$url = $_form.attr('action');
			$data = App.ajax_button.data || $_form.serialize();
			break;
		default:
			$url = $self.data('url');
			$data = App.ajax_button.data;
			break;
	}

	function place_content($_content) {
		if ($targetType === 'modal' || $targetType === 'content' || $targetType === 'selector') $target.html($_content);
		else $target.replaceWith($_content);	
	}

	$.ajax({
		type: "post",
		url: $url,
		data: $data,
		beforeSend: function(xhr, options) {
			App.ajax_button.beforeSend(xhr, options);
		},
		error: function(xhr, status) {
			App.ajax_button.error(xhr, status);
		},
		success: function (data, status, xhr) {
			var content = (xhr.responseJSON) ? xhr.responseJSON.content : xhr.responseText;
			App.ajax_button.success.before(data, status, xhr);
			place_content(content);
			App.ajax_button.success.after(data, status, xhr);
		},
		complete: function(xhr, status) {
			App.ajax_button.complete(xhr, status);
		}
	});

});





