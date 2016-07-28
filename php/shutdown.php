<?php
function shutdown($param) {
    echo $param[0]. 'Script executed with success', PHP_EOL;
}


register_shutdown_function('shutdown', ['faszom']);

exit('5');