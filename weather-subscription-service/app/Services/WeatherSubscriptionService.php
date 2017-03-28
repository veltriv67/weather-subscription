<?php
/**
 * Created by PhpStorm.
 * User: Vin
 * Date: 3/26/2017
 * Time: 4:42 PM
 */

namespace App\Services;

/**
 *
 * Class WeatherSubscriptionService handles interfacing with the Apixu REST API
 *
 * @method search (string $q)
 *
 * @package Veltri
 */
class WeatherSubscriptionService
{
    const API_KEY = '824a3d81d21a44ffb0b153102172603';

    function __call($name, $arguments)
    {
        $url = "http://api.apixu.com/v1/$name.json?key=".self::API_KEY."&q={$arguments[0]}&=" ;
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        return curl_exec($ch);
    }
}