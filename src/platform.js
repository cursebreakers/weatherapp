// DOM manipulator module

export function updatePlatform(weatherData) {
    console.log('Updating weather data...')

    const content = document.getElementById('content');

    // Extracting relevant information
    const temperatureCelsius = weatherData.current.temp_c;
    const precipitationInches = weatherData.current.precip_in;
    const dateTime = weatherData.current.last_updated;
    const cityName = weatherData.location.name;
    const stateName = weatherData.location.region;
    const direction = weatherData.current.wind_dir;
    const speed = weatherData.current.wind_mph;
    const gust = weatherData.current.gust_mph;



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
    console.log('Data retrieved')
}