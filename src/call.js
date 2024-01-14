// API caller module

import { updatePlatform } from "./platform";

const weatherData = {
    current: {},
    location: {},
};

export async function zipWeather(zipCode) {
    try {
      const start = performance.now();

      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=6fd9b2d8ba534774b56192624241401&q=${zipCode}&aqi=no`);
      const data = await response.json();
  
      // Update weatherData with API response
      weatherData.current = data.current;
      weatherData.location = data.location;

      const end = performance.now();
      const duration = end - start;

      console.log(`API call took ${duration} milliseconds`);

  
      console.log('Data retrieved: ', weatherData);
      
      // Call the updatePlatform function to update the DOM
      updatePlatform(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

export async function callApi() {
    try {   
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=6fd9b2d8ba534774b56192624241401&q=14727&aqi=no')
        const data = await response.json();
                
        weatherData.current = data.current;
        weatherData.location = data.location;
        
        console.log(weatherData);

        updatePlatform(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
