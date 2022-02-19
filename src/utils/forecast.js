const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=24bcc26992451691728d3f12a4886db2&query=' + latitude + ',' + longitude + '&units=f'
    // const url = 'http://api.weatherstack.com/current?access_key=24bcc26992451691728d3f12a4886db2&query=37.8267,-122.4233&units=f'

    request({url, json: true}, (error, {body}) => {
        const current = body.current
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const forecast=current.weather_descriptions[0] + '. It is currently ' + current.temperature + ' degrees out. It feels like ' + current.feelslike + ' degrees out.'
            callback(undefined, {
                forecast
            })
        }
    })
}

// forecast(37.8267, -122.4233, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

module.exports = forecast