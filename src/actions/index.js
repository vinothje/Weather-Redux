import axios from 'axios';
const API_KEY = "eac14cb379e4f3f37a2c7c10cfdf05e7";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'fetch_weather';

export function fetchWeather(city) {
    const url=`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}


