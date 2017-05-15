		var timer;
		$("#cart").hover(
			function() {
				$('#cart > .active').show();
			}, function() {
				timer = setTimeout(function(){$('#cart > .active').hide();}, 300);
			}
		);

		$("#cart > .active").hover(
			function() {
				clearTimeout(timer);
			}, function() {
				$('#cart > .active').show();
			}
		);	


/*
<section id="cart">
	<a href="" class="cart-icon"><span class="glyphicon glyphicon-shopping-bag"></span><span class="cart-popup-count badge">0</span></a>
	<div id="cart-items" class="active" style="display: none;">
		<table>
			<thead>
				<tr>
					<th>Termék</th>
					<th>Havidíj(Ft/hó)</th>
					<th>Egyszeri díj(Ft)</th>
					<th>Művelet</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>DIGI TV</td>
					<td>300</td>
					<td>0</td>
					<td><a href="javascript:void(0)" class="btn">Módosítás</a><a href="javascript:void(0)" class="btn">Törlés</a></td>
				</tr>
			</tbody>
		</table>
	</div>

	<div id="empty-cart" class="">Az ön kosara üres.</div>

</section>
*/
