<?php
/**
 * Created by PhpStorm.
 * User: csaba
 * Date: 2017.06.19.
 * Time: 14:59
 */

class UserCredentialsApi {

    private $settings = [];

    function __construct($settings) {
        if (!isset($settings['token_url']) || !isset($settings['api_url']) || !isset($settings['token_credentials']['client_id']) || !isset($settings['token_credentials']['client_secret'])) {
            throw new \Exception('Invalid credentials!');
        }
        $this->settings = $settings;
    }

    private function initCurl() {
        $curl = curl_init();
    }

    private function determineCurl($curl) {
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);

        if ($err) {
            return "cURL Error #:" . $err;
        } else {
            return $response;
        }
    }

    public function getAccessToken() {
        $curl = $this->initCurl();

        curl_setopt_array($curl, array(
            CURLOPT_PORT => "8010",
            CURLOPT_URL => $this->settings['token_url'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => http_build_query($this->settings['token_credentials']),
            CURLOPT_HTTPHEADER => [
                "cache-control: no-cache",
                "content-type: application/x-www-form-urlencoded"
            ],
        ));

        $tokenResult = $this->determineCurl($curl);

        if ($tokenResult == 'invalid-credentials') {
            throw new \Exception('Invalid credentials!');
        }

        return $tokenResult;
    }

    public function getUser($token, $username, $pass) {
        $curl = $this->initCurl();

        curl_setopt_array($curl, array(
            CURLOPT_PORT => "8010",
            CURLOPT_URL => $this->settings['api_url'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => http_build_query(['username' => $username, 'password' => $pass]),
            CURLOPT_HTTPHEADER => [
                "authorization: Bearer $token",
                "cache-control: no-cache",
                "content-type: application/json"
            ],
        ));

        $user = $this->determineCurl($curl);

        if ($user == 'invalid-token') {
            throw new \Exception('Invalid token!');
        }
    }
}

/**
 * Usage
 */

/**
 * Initialize the api
 * Register in dependency injection
 */
$api = new UserCredentialsApi([
    'token_url'      => 'http://localhost:8010/identity/connect/token',
    'token_credentials' => [
        'clientId'      => 'felhasználónév',
        'clientSecret'  => 'Jelszó'
    ],
    'api_url'        => 'http://esweb:8010/ecogatewebapi/igeny/adasok',
]);

/**
 * Request for an access token
 * Usually in login controller/action
 * In the login controller/action there should be a private function like getAccessToken() which is pull token first from memcache(which ttl is less than a server token ttl), secondly from the server
 */
class SessionController {

    public function login() {
        //...
        $user = $this->getUser('username', 'password');
        if (is_string($user)) {
            //invalid user credentials
        }
    }

    private function getUser($username, $password) {
        $api = $this->userapi;

        $errorMsg = '';
        $token = '';//get from cache which ttl is less than server ttl

        if (!$token) {
            try {
                $token = $api->getAccessToken();
            } catch (\Exception $e) {
                $errorMsg = $e->getMessage();
            }
        }

        if (!$errorMsg) {
            try {
                $user = $api->getUser($token, $username, $password);
            } catch (\Exception $e) {
                $errorMsg = $e->getMessage();
            }
        }

        if (!$errorMsg) {
            return $user;
        }

        return $errorMsg;
    }
}

