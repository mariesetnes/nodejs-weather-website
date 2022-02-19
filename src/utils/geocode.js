const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYmJxZWF0ZXIiLCJhIjoiY2t6MXF2YWdsMW9uYjJ2bzJoNG1hcHZ4ayJ9.bfjUw4Y9U_5M0VNEQRQ35w&limit=1'
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmJxZWF0ZXIiLCJhIjoiY2t6MXF2YWdsMW9uYjJ2bzJoNG1hcHZ4ayJ9.bfjUw4Y9U_5M0VNEQRQ35w&limit=1'

    request({url, json: true}, (error, {body}) => {
        const myFeatures = body.features
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (myFeatures.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: myFeatures[0].center[1],
                longitude: myFeatures[0].center[0],
                location: myFeatures[0].place_name
            })
        }
    })
}

// geocode('Philadelphia New York', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

module.exports = geocode