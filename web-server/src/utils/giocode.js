const request = require('request');


const giocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b01b570f84ec248596ae34e9aacf3d32&query=' + address + '';

    request({ url: url, json: true }, (error, responce) => {
        if (error) {
            callback('Unable to connect to the weather service')
        } else if (responce.body.error) {
            callback(responce.body.error);
        } else if(responce.body.location === undefined){
            callback('Unable to find the location')
        } else{
            callback(error, responce.body.location);
        }
    })
}

module.exports = giocode;