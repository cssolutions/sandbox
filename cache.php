<?php
function removeCache($dir) {
	$files = array_diff(scandir($dir),['.','..']);
	//var_dump($files);
	foreach ($files as $file) {
		if (strpos($file, 'session::') === 0 || strpos($file, 'debug::debug_info') === 0) continue;
		unlink($dir . '/' . $file);
		//echo $file . '<br />';
	}	
}
removeCache('/mnt/develop/csaba.farkas/objfw/cache/develop.digicable.hu');
removeCache('/mnt/develop/csaba.farkas/objfw/cache/tpl/compiled');
