const express= require('express');
 const cors=require('cors');
require("./db/config");
  const user=require("./db/users");

    
const app=express();
app.use(cors());

  app.use(express.json());

  app.post("/register", async (req,resp)=>{
             let user1=new user(req.body);
               
             user1=await user1.save();


            resp.send(user1);

  })

  app.post("/login", async (req,resp)=>{
       
          if(req.body.email && req.body.pass){
          
             let luser= await user.findOne(req.body).select("-pass");
             if(luser){
              resp.send(luser);
             }else{
                     resp.send({result : "++User is Not found"});

              }
            
            
            } else{
                     resp.send({result : "!!User is Not found"});
              }  
  })
    
 app.post("/wheader", async (req, resp) => {
  try {
    const city = req.body.city;

    const whed1 = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    const whed1info = await whed1.json();

    // City check
    if (!whed1info.results || whed1info.results.length === 0) {
      return resp.status(404).json({
        message: "City is not found",
      });
    }

    // Get location information
    const {
      latitude,
      longitude,
      name,
      country,
    } = whed1info.results[0];

    // Get weather
    const wheder2 = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const wheder2info = await wheder2.json();

    // Send response to frontend
    resp.json({
      city: name,
      country: country,
      temperature: wheder2info.current.temperature_2m,
      humidity: wheder2info.current.relative_humidity_2m,
      windSpeed: wheder2info.current.wind_speed_10m,
    });

  } catch (error) {
    console.log(error);

    resp.status(500).json({
      message: "Something went wrong",
    });
  }
});


  app.post("/wheader2", async (req, res) => {

  try {

    const { city } = req.body;

    // Check city
    if (!city) {
      return res.status(400).json({
        message: "City name is required"
      });
    }


    // ========================================
    // STEP 1
    // City -> Latitude / Longitude
    // ========================================

    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
    );

    const geoData = await geoResponse.json();


    if (
      !geoData.results ||
      geoData.results.length === 0
    ) {
      return res.status(404).json({
        message: "City not found"
      });
    }


    const location = geoData.results[0];

    const latitude = location.latitude;
    const longitude = location.longitude;

    const cityName = location.name;
    const country = location.country;


    // ========================================
    // STEP 2
    // Get Weather + Forecast
    // ========================================

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${latitude}` +
      `&longitude=${longitude}` +
      `&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m` +
      `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max` +
      `&forecast_days=7` +
      `&timezone=auto`
    );


    const weatherData = await weatherResponse.json();


    // ========================================
    // STEP 3
    // Send useful data to React
    // ========================================

    res.json({

      location: {
        city: cityName,
        country: country,

        latitude: latitude,
        longitude: longitude
      },


      current: {

        temperature:
          weatherData.current.temperature_2m,

        humidity:
          weatherData.current.relative_humidity_2m,

        precipitation:
          weatherData.current.precipitation,

        windSpeed:
          weatherData.current.wind_speed_10m
      },


      forecast: {

        dates:
          weatherData.daily.time,

        maxTemperature:
          weatherData.daily.temperature_2m_max,

        minTemperature:
          weatherData.daily.temperature_2m_min,

        rainfall:
          weatherData.daily.precipitation_sum,

        rainProbability:
          weatherData.daily.precipitation_probability_max
      }

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Weather server error"
    });

  }

});



  app.listen(8000);

