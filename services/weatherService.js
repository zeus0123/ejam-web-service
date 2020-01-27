const OAuth = require('oauth');
const config = require('../config/config');

exports.getWeather = (req,res) => {
    var header = {
        "X-Yahoo-App-Id": config.appId
    };

    const cities = [
        {
            name : 'New York',
            woeid : '2459115'
        },
        {
            name : 'Los Angeles',
            woeid : '2442047'
        },
        {
            name : 'Chicago',
            woeid : '2379574'
        }
    ]

    const weatherData = [];

    var request = new OAuth.OAuth(
        null,
        null,
        config.clientId,
        config.secret,
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );

    
    cities.forEach((element,index) => {
        request.get(
            `https://weather-ydn-yql.media.yahoo.com/forecastrss?woeid=${element.woeid}&format=json`,
            null,
            null,
            function (err, data, result) {
                if (err) {
                    console.log(err);
                } else {
                    if(cities.length - 1 == index){
                        weatherData.push(JSON.parse(data));
                       
                        return res.send(weatherData);
                    }
                    weatherData.push(JSON.parse(data));
                }
            }
        );
        
      
    });

    
    
}


exports.getWeatherDetail = (req,res) => {

    const woeid = req.query.woeid;


    var header = {
        "X-Yahoo-App-Id": config.appId
    };

    

    var request = new OAuth.OAuth(
        null,
        null,
        config.clientId,
        config.secret,
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );

    
    
        request.get(
            `https://weather-ydn-yql.media.yahoo.com/forecastrss?woeid=${woeid}&format=json`,
            null,
            null,
            function (err, data, result) {
                if (err) {
                    console.log(err);
                } else {
                    return res.send(data);
                }
            }
        );
        
      
    

    


}