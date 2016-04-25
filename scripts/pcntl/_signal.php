<?php

declare(ticks = 1);

pcntl_signal(SIGTERM, "signal_handler");
pcntl_signal(SIGINT, "signal_handler");

function signal_handler($signal) {
	switch($signal) {
		case SIGTERM:
			 print "Caught SIGTERM\n";
			 exit;
		case SIGKILL:
			 print "Caught SIGKILL\n";
			 exit;
		case SIGINT:
			 print "Caught SIGINT\n";
			 exit;
	}
}

while(1) {
	 //
}