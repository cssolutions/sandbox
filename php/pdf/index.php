<?php
/**
 * Created by PhpStorm.
 * User: csaba
 * Date: 2017.03.25.
 * Time: 15:27
 */

require 'vendor/autoload.php';

use Dompdf\Dompdf;

// instantiate and use the dompdf class
$dompdf = new Dompdf();

$html = '
<style>
.header,
.footer {
    width: 100%;
    text-align: center;
    position: fixed;
}
.header {
    top: 0px;
}
.footer {
    bottom: 0px;
}
.pagenum:before {
    content: counter(page);
}
table {
    margin: 50px 0;
}
	td {
		vertical-align: top;
	}
	td:not(:first-child) {
		text-align: right;
	}
</style>
<div class="header">
<table width="50%">
	<thead>
            <tr>
		<th>

		</th>
	</thead>
	<tbody>
		<tr>
			<td></td><td></td>
		</tr>
	</tbody>
</table>

</div>
<table>
	<thead>
		<th>
			<td>Termék/Szolg elnevezése</td>
			<td align="right">Mennyiség</td>
			<td align="right">Me.</td>
			<td align="right">Kedvezmény</td>
			<td align="right">Egységár</td>
			<td align="right">Áfa</td>
			<td align="right">Nettó ért.</td>
			<td align="right">Szám. Áfa</td>
			<td align="right">Bruttó ért.</td>
		</th>
	</thead>
	<tbody>
		<tr>
			<td></td>
			<td align="right"></td>
			<td align="right"></td>
			<td align="right"></td>
			<td align="right"></td>
			<td align="right"></td>
			<td align="right"></td>
			<td align="right"></td>
			<td align="right"></td>
		</tr>
	</tbody>
</table>
<div class="footer">
    Page <span class="pagenum"></span>
</div>

';

$dompdf->loadHtml($html);

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4', 'portrait');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream();