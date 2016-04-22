<?php

class Encryption {
	
	private static $ENCRYPTION_KEY = 'd0a7e7997b6d5fcd55f4b5c32611b87cd923e88837b63bf2941ef819dc8ca282';

	public static function encrypt($encrypt, $use_base64 = false, $item_related_key = '') {
		$encrypt = serialize($encrypt);
		$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
		$iv = mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC), MCRYPT_RAND);
		$key = pack('H*', self::$ENCRYPTION_KEY);
		$mac = hash_hmac('sha256', $encrypt, substr(bin2hex($key), -32));
		$passcrypt = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $encrypt.$mac, MCRYPT_MODE_CBC, $iv);
		if ($use_base64) return base64_encode($iv.$passcrypt);
		else return $iv . $passcrypt;
	}

	public static function decrypt($decrypt, $use_base64 = false, $item_related_key = '') {
		$decoded = ($use_base64) ? base64_decode($decrypt) : $decrypt;
		$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
		$decrpyted = substr($decoded, $iv_size);
		$iv = substr($decoded, 0, $iv_size);
		$key = pack('H*', self::$ENCRYPTION_KEY);
		$decrypted = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $decrpyted, MCRYPT_MODE_CBC, $iv), '\0');
		//$mac = substr($decrypted, -64);
		//$calcmac = hash_hmac('sha256', $decrypted, substr(bin2hex($key), -32));
		return unserialize($decrypted);
	}

	public static function generateRandomHex($length = 64) {
		$characters = '0123456789abcdef';
		$charactersLength = strlen($characters) - 1;
		$randomString = '';
		for ($i = 0; $i < $length; $i++) $randomString .= $characters[rand(0, $charactersLength)];
		return $randomString;
	}
	
	public static function test ($test_string) {
		echo strlen(self::$ENCRYPTION_KEY);
		echo "Testing '$test_string'...";
		for ($index = 0; $index < $max_number = 1000; $index++) if (self::decrypt(self::encrypt($test_string, true), true) === $test_string) @$n++;
		echo "Passed $n times of $max_number.";
	}
}

//Encryption::test('teszt szöveg');
//echo Encryption::generateRandomHex();
//$encoded = Encryption::encrypt('Text to encrypt');
//echo Encryption::decrypt($encoded);


