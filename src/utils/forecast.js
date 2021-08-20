const request = require('request')

const forecast = (latitude, longitube, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=89906dfb7f555d9f1870b074e1ec1aba&query=' + latitude +','+ longitube + '&units=f'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another seaarch', undefined)
        } else {
            const { current } = body
            callback(undefined, `${current.weather_descriptions[0]}. It is currently ${current.temperature} degress out. It feels like ${current.feelslike} degress out. The humidity is ${current.humidity}%.`
            )
        }
    })
}

module.exports = forecast