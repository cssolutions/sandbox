<?php
function removeCache($dir) {
	foreach (array_diff(scandir($dir),['.','..']) as $file) {
		if (strpos($file, 'session::') === 0 || strpos($file, 'debug::debug_info') === 0) continue;
		unlink($dir . '/' . $file);
	}	
}

removeCache('/mnt/develop/csaba.farkas/objfw/cache/develop.digicable.hu');
removeCache('/mnt/develop/csaba.farkas/objfw/cache/tpl/compiled');
