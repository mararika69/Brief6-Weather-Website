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
    window.location.href = "../login/index.html"; 
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
        const apiUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Phnom%20Penh&days=1';
        const apiKey = 'cb8be4545bmsh9e51effc4f9751bp1fe5cejsn8201a91db9ca'; 
        const forecastData = []; // Array to store forecast data for each day
    
        try {
            // Loop to make API calls for each day
            for (let i = 2; i < 3; i++) {
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
    
                const dayData = await response.json();
                forecastData.push(dayData); // Push the forecast data for the day into the array
            }
            return forecastData; // Return the array of forecast data
        } 
        catch (error) {
            console.error('There was a problem fetching the forecast data:', error);
            return null;
        }
    }
    
   
async function fetchForecastData() {
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=phnom%20penh&days=3'; // Change the days parameter to 3
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb8be4545bmsh9e51effc4f9751bp1fe5cejsn8201a91db9ca',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}


// Call the function to fetch forecast data

fetchForecastData()
    .then(data => {
        if (data && data.forecast && data.forecast.forecastday) {
            // Update HTML elements with forecast data
            const forecastContainer = document.getElementById('forecast');
            data.forecast.forecastday.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.classList.add('card-all');

                // Weather section
                const weatherSection = document.createElement('div');
                weatherSection.classList.add('weather');

                const weatherName = document.createElement('div');
                weatherName.classList.add('name');
                weatherName.textContent = 'Weather';
                weatherSection.appendChild(weatherName);

                const weatherDate = document.createElement('div');
                weatherDate.classList.add('date');
                weatherDate.textContent = day.date;
                weatherSection.appendChild(weatherDate);

                const weatherTemperature = document.createElement('div');
                weatherTemperature.classList.add('temperature');
                weatherTemperature.textContent = ` ${day.day.avgtemp_c}°C`;
                weatherSection.appendChild(weatherTemperature);

                const weatherCondition = document.createElement('div');
                weatherCondition.classList.add('know');
                weatherCondition.textContent = ` ${day.day.condition.text}`;
                weatherSection.appendChild(weatherCondition);

                dayElement.appendChild(weatherSection);

                // Condition section
                const conditionSection = document.createElement('div');
                conditionSection.classList.add('condition');

                const conditionName = document.createElement('div');
                conditionName.classList.add('name');
                conditionName.textContent = 'Condition';
                conditionSection.appendChild(conditionName);

                const conditionCard = document.createElement('div');
                conditionCard.classList.add('card-condition');

                const conditionText = document.createElement('div');
                conditionText.classList.add('text-name');
                conditionText.innerHTML = `
                    <p>Feels Like</p>
                    <p>Humidity</p>
                    <p>Wind</p>
                    <p>UV</p>
                `;
                conditionCard.appendChild(conditionText);

                const conditionValues = document.createElement('div');
                conditionValues.classList.add('value');
                conditionValues.innerHTML = `
                    <p>${day.day.avgtemp_c}°C</p>
                    <p>${day.day.avghumidity}%</p>
                    <p>${day.day.maxwind_kph} kph</p>
                    <p>${day.day.uv}</p>
                `;
                conditionCard.appendChild(conditionValues);

                conditionSection.appendChild(conditionCard);
                dayElement.appendChild(conditionSection);

                // Location section
                const locationSection = document.createElement('div');
                locationSection.classList.add('location');
                

                // const locationName = document.createElement('div');
                // locationName.classList.add('location-name');
                // locationName.innerHTML = `
                //     <p>Country</p>
                //     <p>Zone</p>
                // `;
                // locationSection.appendChild(locationName);

                // const locationValues = document.createElement('div');
                // locationValues.classList.add('location-value');
                // locationValues.innerHTML = `
                //     <p>${data.location.country}</p>
                //     <p>${data.location.tz_id}</p>
                // `;
                // locationSection.appendChild(locationValues);

                dayElement.appendChild(locationSection);

                forecastContainer.appendChild(dayElement);
            });
        } else {
            console.log('Failed to fetch forecast data');
        }
    })
    .catch(error => {
        console.error('There was a problem fetching the forecast data:', error);
    });
