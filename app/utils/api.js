import * as axios from 'axios'

const URL = "https://api.openweathermap.org/data/2.5/"
const API_KEY = "b714ec74bbab5650795063cb0fdf5fbe"
//const API_KEY = "c286f1a759ecb4b2bc6921b623f10bb7"

function formatQueryString(queryString){
    return Object.keys(queryString)
    .map((key)=>  key + '=' + encodeURIComponent(queryString[key]))
    .join('&')
}

function formatURL(type, queryString){
    console.log('query string', queryString)
    return URL + type + '?' + formatQueryString(queryString)
}

function getQueryString(place){
    return {
        q: place,
        type: 'accurate',
        APPID: API_KEY,
        cnt: 5
    }
}

export function getCurrentWeather(place){
    let queryString = getQueryString(place)
    let url = formatURL('weather', queryString)
    console.log('url', url)
    return axios.get(url).then((currentWeather)=> currentWeather.data)
}

export function getForeCast(place){
    let queryString = getQueryString(place)
    let url = formatURL('forecast/daily', queryString)
    return axios.get(url).then((foreCast)=> foreCast.data)
}