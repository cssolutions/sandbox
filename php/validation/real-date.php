<?php
//the better one
function validateDate($date, $format = 'Y-m-d H:i:s') {
    $d = DateTime::createFromFormat($format, $date);
    return $d && $d->format($format) == $date;
}


//not the best validator
if (!preg_match ("/^([2][0-2][1-9][0-9])-([0][0-9]|[1][0-2])-([0-2][0-9]|[3][0-1]) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/", $fromDate)) {
	$model->appendMessage(new Message('This is NOT a valid date!', 'fromDate', 'InvalidValue'));
}
if (!preg_match ("/^([2][0-2][1-9][0-9])-([0][0-9]|[1][0-2])-([0-2][0-9]|[3][0-1]) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/", $toDate)) {
	$model->appendMessage(new Message('This is NOT a valid date!', 'toDate', 'InvalidValue'));
}