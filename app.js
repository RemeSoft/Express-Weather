
// IMPORT SECTION 
require("dotenv").config();
const express = require('express');
const path  = require('path');
var requests = require('requests');
const { formatDateTime,convertIntoCelsius,textCapitalize } = require('./helper.js');

// INITIALIZATION SECTION
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = "e95713dfa32e193cc58e93958155f78c";

const api = `https://api.openweathermap.org/data/2.5/weather?q=sylhet&appid=${process.env.WEATHER_API_KEY || API_KEY}`;

// APP USES SECTION
app.use(express.static('public'))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'template/views'));

// ROUTES SECTION
app.get('*', (req, res)=>{

    requests(api).on('data', function (data) {
        const weatherData = JSON.parse(data);

        let current_temp = convertIntoCelsius(weatherData.main.temp).toFixed(2);
        let location = weatherData.name;
        let weather_desc = textCapitalize(weatherData.weather[0].description);
        let wind = weatherData.wind.speed;
        let humidity = weatherData.main.humidity;
        let icon = weatherData.weather[0].icon;


        res.render('index',{
            year: '2023',
            location : location,
            current_temp: current_temp,
            weather_desc: weather_desc,
            wind: wind,
            humidity: humidity,
            icon: icon,
            today: formatDateTime()
        });

        
    }).on('end', function (err) {
    if (err) return console.log('connection closed due to errors', err);
       console.log('Got JSON response');
    });


});

// LISTEN SECTION
app.listen(PORT,()=>{
    console.log("Server listening on port " + PORT);
});