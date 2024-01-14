// DOM manipulator module

import { initWeather } from ".";
import { callApi, zipWeather } from "./call";

export function updatePlatform(weatherData) {
    console.log('Updating weather data...')

    const content = document.getElementById('content');

    // Extracting relevant information
    const temperatureCelsius = weatherData.current.temp_f;
    const precipitationInches = weatherData.current.precip_in;
    const dateTime = weatherData.current.last_updated;
    const cityName = weatherData.location.name;
    const stateName = weatherData.location.region;
    const direction = weatherData.current.wind_dir;
    const speed = weatherData.current.wind_mph;
    const gust = weatherData.current.gust_mph;

    const clear = document.createElement('button');
    clear.innerHTML = 'Clear Data';

    // Create HTML content
    const data = `
      <h2>Weather Information</h2>
      <p>Temperature: ${temperatureCelsius}°C</p>
      <p>Precipitation: ${precipitationInches} inches</p>
      <p>Wind direction: ${direction}</p>
      <p>Speed: ${speed}mph</p>
      <p>Gusts: ${gust}mph</p>
      <p>City: ${cityName}</p>
      <p>State: ${stateName}</p>
      <p>Date/Time: ${dateTime}</p>
    `;

    // Update the DOM
    content.innerHTML = data;
    content.appendChild(clear);

    clear.addEventListener('click', function() {
      content.innerHTML = '';
        initWeather();
    });

    console.log('Data retrieved')
}

export function inputRender() {
  console.log('Rendering input...')

  const content = document.getElementById('content');

  const input = document.createElement('div')
  input.innerHTML = `  
  <h3>Enter Your ZIP Code</h3>
  <input id="zip" required>
  `;

  const request = document.createElement('button')
  request.innerHTML = 'Get Data'

  content.appendChild(input);
  content.appendChild(request);

  request.addEventListener('click', function() {

    const zipCode = document.getElementById('zip').value;
    zipWeather(zipCode);
  });
}