const request = require('request');


const gioweather = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b01b570f84ec248596ae34e9aacf3d32&query=' + lat + ',' + lon;

    request({ url: url, json: true }, (error, responce) => {
        if (error) {
            callback('Unable to connect to the weather service')
        } else if (responce.body.error) {
            callback(responce.body.error);
        } else {
            callback(error, 'The ' + responce.body.location.name + ' Have ' + responce.body.current.weather_descriptions + ' weather. It is currently '+responce.body.current.temperature+' degress out.');
        }
    })
}

module.exports = gioweather;