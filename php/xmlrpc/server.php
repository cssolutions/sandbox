<?php
include 'source/lib/xmlrpc.inc';
include 'source/lib/xmlrpcs.inc';

function sumAndDifference ($params) {
    $xval = $params->getParam(0);
    $x = $xval->scalarval();
    $yval = $params->getParam(1);
    $y = $yval->scalarval();

    $struct = [
			'sum'        => new xmlrpcval($x + $y, 'int'),
      'difference' => new xmlrpcval($x - $y, 'int')
		];
    return new xmlrpcresp(new xmlrpcval($struct, 'struct'));
}

$sumAndDifference_sig = [['struct', 'int', 'int']];
$sumAndDifference_doc = 'Add and subtract two numbers';

new xmlrpc_server(['sample.sumAndDifference' => [
										'function' => 'sumAndDifference',
										'signature' => $sumAndDifference_sig,
										'docstring' => $sumAndDifference_doc
									]
						]);
?>