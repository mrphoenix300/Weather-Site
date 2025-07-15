## 🌤️ Simple Weather App

A simple, non-commercial weather website built with **HTML**, **CSS**, and **JavaScript**, using the free and open-source [Open-Meteo API](https://open-meteo.com/).  
Search for any location and get real-time weather data and forecasts through a clean and responsive UI.

## 🔍 Features

- 🌐 Get current weather conditions by location
- 🌡️ Display temperature, wind speed, and more
- 🧩 Powered by the Open-Meteo API
- 📱 Responsive design for desktop and mobile
- 🧪 Beginner-friendly codebase for learning API usage

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Open-Meteo API](https://open-meteo.com/)

## 🚀 Getting Started

1. **Clone this repository:**

   ```bash
   git clone https://github.com/your-username/simple-weather-app.git
   cd simple-weather-app
``

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node index.js
```

The app will be running at:
`http://localhost:3000`

## 📦 Folder Structure

```
Weather-Site/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── routes/
│   └── weather.js       # Express route handling API requests
├── app.js               # Main Express server
├── package.json
└── README.md
```

## 🧪 Example Usage

Users enter a location; the backend fetches weather data from Open-Meteo, processes it, and returns the current weather and 7-day forecast in JSON format, which the frontend then displays.
Free for educational and non-commercial use.

> Weather data provided by [Open-Meteo](https://open-meteo.com/). No API key required.

```
