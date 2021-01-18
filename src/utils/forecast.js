const request = require('request')

const forecast = (lat, lng, units, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=03eebcffa686b5f15bed8395b034dfb0&query=' + lat + ',' + lng + '&units=' + units

    request({ url: url, json: true }, (error, { body }) => {
        // This first error block is a low level OS error (not an http error)
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' + ' The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast