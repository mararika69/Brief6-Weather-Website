




async function fetchWeatherData() {
    const apiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=phnom%20penh`;
    const apiKey = 'cb8be4545bmsh9e51effc4f9751bp1fe5cejsn8201a91db9ca';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const weatherData = await response.json();
        return weatherData;  
    } 
    catch (error) {
        console.error('There was a problem fetching the weather data:', error);
        return null;
    }
}

// Call the function to fetch weather data
fetchWeatherData()
    .then(data => {
        if (data) {
            // Update HTML elements with weather data
            document.getElementById('date').textContent = data.location.localtime;
            document.getElementById('temperature').textContent = ` ${data.current.temp_c}`;
            document.getElementById('condition').textContent = ` ${data.current.condition.text}`;
            document.getElementById('feels-like').textContent = ` ${data.current.feelslike_c}°C`;
            document.getElementById('humidity').textContent = ` ${data.current.humidity}%`;
            document.getElementById('wind').textContent = ` ${data.current.wind_kph} kph`;
            document.getElementById('uv').textContent = ` ${data.current.uv}`;
            document.getElementById('country').textContent = ` ${data.location.country}`;
            document.getElementById('zone').textContent = `${data.location.tz_id}`;
        } else {
            console.log('Failed to fetch weather data');
        }
    })
    .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
    });

    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Phnom%20penh&days=3';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb8be4545bmsh9e51effc4f9751bp1fe5cejsn8201a91db9ca',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    async function fetchWeatherForecast() {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.forecast.forecastday; // Assuming 'forecastday' is an array in the API response
        } catch (error) {
            console.error('There was a problem fetching the weather forecast:', error);
            return null;
        }
    }
    
    async function fetchWeatherForecastMultipleTimes(times) {
        for (let i = 0; i < times; i++) {
            console.log(`Fetching weather forecast for the ${i + 1} time:`);
            await fetchWeatherForecast()
                .then(forecast => {
                    if (forecast) {
                        // Loop through the forecast data
                        forecast.forEach(day => {
                            console.log('Date:', day.date);
                            console.log('Temperature:', day.day.avgtemp_c, '°C');
                            console.log('Condition:', day.day.condition.text);
                            console.log('-----------------------------------------------------');
                        });
                    } else {
                        console.log('Failed to fetch weather forecast');
                    }
                })
                .catch(error => {
                    console.error('There was a problem fetching the weather forecast:', error);
                });
        }
    }
    
    // Call the function to fetch weather forecast multiple times
    fetchWeatherForecastMultipleTimes(2);
    

    
   