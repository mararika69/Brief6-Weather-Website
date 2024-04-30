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



// Usage example:
fetchWeatherData()
    .then(data => {
        if (data) {
            console.log('Weather data:', data);
            // Access and display weather data in the browser
            const temperatureElement = document.getElementById('temperature');
            const descriptionElement = document.getElementById('description');
            const dateElmenet = document.getElementById('date')
            
            
            temperatureElement.textContent = `Temperature: ${data.current.temp_c}°C`;
            descriptionElement.textContent = `Description: ${data.current.condition.text}`;
            dateElmenet.textContent = `Date: ${data.current. last_updated}`
        } else {
            console.log('Failed to fetch weather data');
        }
    });


    
    