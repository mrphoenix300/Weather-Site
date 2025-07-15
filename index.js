import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const weatherURL = "https://api.open-meteo.com/v1/forecast";
const locationURL = "https://geocoding-api.open-meteo.com/v1/search";

app.use(express.static("public"));

app.use(bodyParser.urlencoded( { extended: true }));

function middleWare(req, res, next) {
    next();
}

app.use(middleWare);

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/get-weather", async (req, res) => {
    const location = req.body["location"];
    try {
        const response1 = await axios.get(`${locationURL}?name=${location}&count=1`);
        const result1 = response1.data;
        const response2 = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${result1.results[0].latitude}&longitude=${result1.results[0].longitude}&daily=weather_code,temperature_2m_mean&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&timezone=auto`);
        const result2 = response2.data;
        res.render("weather.ejs", { 
            location: location,
            weather: result2,
        });
    } catch (error) {
        console.error(error);
    }
    
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});