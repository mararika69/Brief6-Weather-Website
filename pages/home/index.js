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
            document.getElementById('temperature').textContent =  `${data.current.temp_c}°C`;
            document.getElementById('condition').textContent = ` ${data.current.condition.text}`;
            document.getElementById('feels-like').textContent =  `${data.current.feelslike_c}°C`;
            document.getElementById('humidity').textContent =  `${data.current.humidity}%`;
            document.getElementById('wind').textContent =  `${data.current.wind_kph} kph`;
            document.getElementById('uv').textContent =  `${data.current.uv}`;
            document.getElementById('country').textContent =  `${data.location.country}`;
            document.getElementById('zone').textContent = `${data.location.tz_id}`;
            
            saveEmailToLocalStorage(''); 
        } else {
            console.log('Failed to fetch weather data');
        }
    })
    .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
    });


function logout() {
    localStorage.removeItem("email");
    window.location = "../login/index.html";
}



function saveEmailToLocalStorage(email) {
    localStorage.setItem('userEmail', email);
}


function getEmailFromLocalStorage() {
    return localStorage.getItem('userEmail');
}


function shareReaction(){
    const button = document.getElementById("button");
    window.location = "../reaction/index.html";
}




async function fetchForecastData() {
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=phnom%20penh&days=3';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb8be4545bmsh9e51effc4f9751bp1fe5cejsn8201a91db9ca',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        return null;
    }
}

function updateForecastDisplay(data) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = ''; // Clear previous forecasts

    data.forecast.forecastday.forEach((day, index) => {
        if (index > 0) { // Skipping the first day as it is the current day already displayed elsewhere
            const card = document.createElement('div');
            card.className = 'card-weather';
            card.innerHTML = `
                <div class="card-all">
                    <div class="weather">
                        <div class="name">Weather</div>
                        <div class="date">${day.date}</div>
                        <div class="temperature">${day.day.avgtemp_c}°C</div>
                        <div class="know">${day.day.condition.text}</div>
                    </div>
                    <div class="condition">
                        <div class="name">Condition</div>
                        <div class="card-condition">
                            <div class="text-name">
                                <p>Feels Like</p>
                                <p>Humidity</p>
                                <p>Wind</p>
                                <p>UV</p>
                            </div>
                            <div class="value">
                                <p>${day.day.feelslike_c}°C</p>
                                <p>${day.day.avghumidity}%</p>
                                <p>${day.day.maxwind_kph} kph</p>
                                <p>${day.day.uv}</p>
                            </div>
                        </div>
                        <div class="location">
                        <div class="location-name">
                            <p>Country</p>
                            <p>Zone</p>
                        </div>
                        <div class="location-value">
                            <p>${data.location.country}</p>
                            <p>${data.location.tz_id}</p>
                        </div>
                    </div>
                    </div>
                    
                </div>
            `;
            forecastContainer.appendChild(card);
        }
    });
}

fetchForecastData().then(data => {
    if (data) {
        updateForecastDisplay(data);
    } else {
        console.log('Failed to fetch forecast data');
    }
}).catch(error => {
    console.error('There was a problem fetching the forecast data:', error);
});
