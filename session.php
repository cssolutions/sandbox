<?php

session_start();
session_set_cookie_params( 0, '/', 'sandbox.local', false, true);
var_dump($_SESSION, session_id());
session_regenerate_id();
session_set_cookie_params( 0, '/', 'sandbox.local', false, true);
var_dump($_SESSION, session_id());

session_destroy();
exit();