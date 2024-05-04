
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
            document.getElementById('temperature').textContent = ` ${data.current.temp_c}°C`;
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

    async function fetchForecastData() {
        const apiUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Phnom%20Penh&days=3';
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
    
            const forecastData = await response.json();
            return forecastData;  
        } 
        catch (error) {
            console.error('There was a problem fetching the forecast data:', error);
            return null;
        }
    }
    
    // Call the function to fetch forecast data
    fetchForecastData()
        .then(data => {
            if (data && data.forecast && data.forecast.forecastday) {
                // Loop through forecast data for each day (assuming 3 days)
                for (let i = 0; i <=2; i++) {
                    document.getElementById('date').textContent = data.location.localtime;
                    document.getElementById('temperature').textContent = ` ${data.current.temp_c}°C`;
                    document.getElementById('condition').textContent = ` ${data.current.condition.text}`;
                    document.getElementById('feels-like').textContent = ` ${data.current.feelslike_c}°C`;
                    document.getElementById('humidity').textContent = ` ${data.current.humidity}%`;
                    document.getElementById('wind').textContent = ` ${data.current.wind_kph} kph`;
                    document.getElementById('uv').textContent = ` ${data.current.uv}`;
                    document.getElementById('country').textContent = ` ${data.location.country}`;
                    document.getElementById('zone').textContent = `${data.location.tz_id}`;
                }
            } else {
                console.log('Failed to fetch forecast data');
            }
        })
        .catch(error => {
            console.error('There was a problem fetching the forecast data:', error);
        });
    

        // Function to save the email to local storage
function saveEmailToLocalStorage(email) {
    localStorage.setItem('userEmail', email);
}

// Function to retrieve the email from local storage
function getEmailFromLocalStorage() {
    return localStorage.getItem('userEmail');
}

        function logout (){
            localStorage.removeItem("loggedItemEmail");
            window.location.href="../home/index.html";
        }