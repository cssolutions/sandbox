<form method="post" action="/exception.php">
	<div class="form-row">
		<label for="name">Szám</label>
		<input type="text" name="input" value="" />
	</div>
	<div class="form-row">
		<input type="submit" value="Küld" class="button" />
	</div>
</form>
<?php

class OverfloException extends Exception {}
class NaNException extends Exception {}

function factorial($n)
{
	if(!preg_match( '/^\d+$/' , $n) || $n < 0 ) throw new NaNException;
	else if ($n == 0 || $n == 1) return $n;
	else if ($n > 170 ) throw new OverfloException;
	else return $n * factorial($n - 1);
}

if(@$_POST['input']) {
	try {
		$input = $_POST['input'];
		$output = factorial($input);
		echo "$_POST[input]! = $output";
	}
	catch (OverfloException $e) {
		echo "The requested value is too large.";
	}
	catch (NaNException $e) {
		echo "Only natural numbers can have their factorial computed.";
	}
}