<?php
function buildTree(array $elements, $parentId = 0) {
    $branch = [];
    foreach ($elements as $element) 
        if ($element['parentId'] == $parentId) {
            if (($children = buildTree($elements, $element['id']))) $element['children'] = $children;
            $branch[] = $element;
        }
    return $branch;
}

function timeToTimestamp($time) {
	return date('U', strtotime($time));
}

function getTimeago($ptime) {
    $etime = time() - $ptime;

    if($etime < 1) return 'less than 1 second ago';

    $a = array( 12 * 30 * 24 * 60 * 60  =>  'year',
                30 * 24 * 60 * 60       =>  'month',
                24 * 60 * 60            =>  'day',
                60 * 60             =>  'hour',
                60                  =>  'minute',
                1                   =>  'second'
    );

    foreach($a as $secs => $str) {
        $d = $etime / $secs;
        if( $d >= 1 ) {
            $r = round( $d );
            return 'about ' . $r . ' ' . $str . ( $r > 1 ? 's' : '' ) . ' ago';
        }
    }
}