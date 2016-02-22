<html>
<head>
<title>XML-RPC PHP Demo</title>
</head>
<body>
<h1>XML-RPC PHP Demo</h1>

<?php
include 'source/lib/xmlrpc.inc';


$server = new xmlrpc_client('/xmlrpc/server.php','sandbox.local', 80);
$message = new xmlrpcmsg('sample.sumAndDifference', [new xmlrpcval(5, 'int'), new xmlrpcval(3, 'int')]);
$result = $server->send($message);

if (!$result) print "<p>Could not connect to HTTP server.</p>";
elseif ($result->faultCode()) print "<p>XML-RPC Fault #" . $result->faultCode() . ": " . $result->faultString();
else {
    $struct = $result->value();
    $sumval = $struct->structmem('sum');
    $sum = $sumval->scalarval();
    $differenceval = $struct->structmem('difference');
    $difference = $differenceval->scalarval();
	 print "<p>Sum: " . htmlentities($sum) . ", Difference: " . htmlentities($difference) . "</p>";
}
?>

</body></html>