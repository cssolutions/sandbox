
#!/usr/local/bin/php
##################
# parse_logs.php #
##################
<?php
$input = $_SERVER['argv'][1];
$fp = fopen($input,"r");
// Match common log format with an additional time parameter
$regex = ' /^(\S+) (\S+) (\S+) \[([^:]+):(\d+:\d+:\d+) ([^\]]+)\] "(\S+) (.*?) (\S+) ” (\S+) (\S+) (\S+) (\S+) (\d+)$/ ' ;
while(($line = fgets($fp)) !== false) {
	preg_match($regex, $line, $matches);
	$uri = $matches[8];
	$time = $matches[12];
	list($file, $params) = explode( ' ? ' ,$uri, 2);
	$requests[$file][] = $time;
	$requests[$file]['count']++;
	$requests[$file]['avg'] = ($requests[$file]['avg']*($requests[$file]['count'] - 1) + $time)/$requests[$file]['count'];
}
// create a custom sort function to sort based on average request time
$my_sort = create_function('$a, $b', '
if($a[avg] == $b[avg]) {
	return 0;
}
else {
	return ($a[avg] > $b[avg]) ? 1 : -1;
}');

uasort($requests, $my_sort);
reset($requests);
foreach($requests as $uri => $times) {
	printf("%s %d %2.5f\n", $uri, $times['count'], $times['avg']);
}