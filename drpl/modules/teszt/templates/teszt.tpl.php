	<form id="ciplus-search-form" class="form-horizontal" role="form">
		<div class="form-group">
			<label class="control-label col-xs-12 col-md-2" for="search"><?php print t('Search') ?>: </label>
			<div class="col-xs-12 col-md-6">
				<input id="search" type="text" class="form-control" size="60" autocomplete="off" placeholder="Egy random string a placeholderhez!" data-provide="typeahead" data-items="20" data-source="">
				<p>
					<div class="alert alert-success hidden">Egy random string!</div>
				</p>
			</div>
		</div>
	</form><?php 
	drupal_add_js(drupal_get_path('module', 'teszt').'/js/site.js');
	?>