<?php

namespace App\Http\Proxy;

/**
 * Class TokenProxy
 * @package App\Http\Proxy
 */
class TokenProxy {
    /**
     * @var \GuzzleHttp\Client
     */
    public $http;

    /**
     * TokenProxy constructor.
     * @param $http
     */
    public function __construct(\GuzzleHttp\Client $http)
    {
        $this->http = $http;
    }

    /**
     * @param $grantType
     * @param array $data
     * @return $this
     */
    public function proxy($grantType, array $data = [])
    {
        ///oauth/token
        $data = array_merge($data, [
            'client_id'     => env('PASSPORT_CLIENT_ID'),
            'client_secret' => env('PASSPORT_CLIENT_SECTET'),
            'grant_type'    => $grantType,
        ]);
        $response = $this->http->post('http://vue-spa.zhou/api/oauth/token', [
            'form_params' => $data
        ]);

        $token = json_decode( (string)$response->getBody(), true );

        return response()->json([
            'token'      => $token['access_token'],
            'expires_in' => $token['expires_in'],
        ])->cookie('refresh_token', $token['refresh_token'], 864000, null, null, false, true);
    }
}