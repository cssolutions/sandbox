<?php
/*
 * Az ob_flush -t és flush -t együtt kell használni
 * Az ob_get_contents-et pedig mindíg a flush -ok előtt kell meghívni, mert a flush -ok eldobják az output buffer tartalmát
 * Az ob_end_flush pedig meg is szünteti magát a buffert(a memóriában is felszabadul), így egyéb output buffering function-s nem használhatóak. (TURN OFF OUTPUT BUFFERING)
 * 
 * ob_clean: clear the current output buffer
 * ob_end_clean: clear the current output buffer, and destroy it
 * ob_get_clean: flushes the output buffer, return it as a string and turns off output buffering. 
 * ob_get_length: Returns the length of the output buffer contents, in bytes. if (ob_get_level()) ob_end_clean();    ||     if (!ob_get_level()) ob_start();
 * ob_start
 * 
 * 
 * Ez a kód 2szer adja vissza az egész számolást, először elszámol, majd az addigi kimenetet jeleníti meg ismét
 */
header( 'Content-type: text/html; charset=utf-8' );
echo 'Begin ...<br />';
$content = '';
for($i = 0 ; $i < 4; $i++) {
    echo $i . '<br />';
	$content .= ob_get_contents();
    flush();
    ob_flush();
    sleep(1);
}
echo 'End ...<br />';
echo $content;



function getView($view) {
    $level = ob_get_level();
    ob_start();

    try {
        include $view;
    } catch (Exception $e) {
        while (ob_get_level() > $level) {
            ob_end_clean();
        }
        throw $e;
    }

    return ob_get_clean();
}