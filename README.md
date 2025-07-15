# 🌤️ Simple Weather App

A simple, non-commercial weather website built with **Node.js**, **Express**, and **EJS templates**, using the free [Open-Meteo API](https://open-meteo.com/).  
Displays current weather and a 7-day forecast (mean temperature, wind speed, and humidity) for a user-defined location.

## 🔍 Features

- 🌍 Search weather by city or coordinates
- 🌡️ **Current Weather**:
  - Temperature
  - Wind Speed
  - Humidity
- 📅 **7-Day Forecast**:
  - Mean Daily Temperature
  - Wind Speed
  - Humidity
- 🧰 Backend rendering with **EJS**
- 🎨 CSS styling under `public/css`
- ⚡ No API key required (Open-Meteo)

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **Frontend:** HTML, CSS (via EJS templates), Bootstrap
- **API:** [Open-Meteo API](https://open-meteo.com/)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mrphoenix300/Weather-Site.git
cd simple-weather-app
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node index.js
```

Then open your browser and go to:
`http://localhost:3000`

## 📁 Project Structure

```
simple-weather-app/
├── public/
│   └── css/
│       └── styles.css        # CSS styling
├── views/
│   ├── partials/             # EJS partials (e.g. header/footer)
│   ├── index.ejs             # Home page with search input
│   └── weather.ejs           # Weather result page
├── .gitignore
├── index.js                  # Express server entry point
└── README.md
```

## 📌 Notes

* Weather data is fetched server-side from the [Open-Meteo API](https://open-meteo.com/) and rendered using EJS.
* This is a learning/demo project. You can expand it with more features like historical data, charts, etc.
