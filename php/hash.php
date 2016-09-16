<?php
$iv = mcrypt_create_iv(22, MCRYPT_DEV_URANDOM);

var_dump(hash_hmac('sha512', $iv . $_SERVER['HTTP_USER_AGENT'] . 'emaidasfasfafasl@vdwefqwefalami.hu', $iv), $iv, base64_encode($iv));