const infoWeatherElement = document.querySelector("#info-weather");


const quevedoLat = -1.02;
const quevedoLon = -79.46;
const units = "imperial";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${quevedoLat}&lon=${quevedoLon}&appid=222088af741ce61d56db21537b9f4d8a&units=${units}`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${quevedoLat}&lon=${quevedoLon}&appid=222088af741ce61d56db21537b9f4d8a&units=${units}`;

async function fetchingWeatherApi() {
    
    try {

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();

            displayResults(data);
            console.log(data);
            
        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log("Error Fetching Data: ", error);

    }
}

function displayResults(data) {

    // Create an img element 
    const imgElement = document.createElement("img");
    const divElement = document.createElement("div");

    // Bring the img from the data
    const logoIcon = data.weather[0].icon;

    const sunriseDate = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/Guayaquil'
    });
    
    const sunsetDate = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/Guayaquil'
    });;


    divElement.innerHTML = `<p>${data.main.temp} &deg;F</p><p id="capitalize-weather-description">${data.weather[0].description}</p><p>High: ${data.main.temp_min}</p><p>Low:${data.main.temp_max}</p><p>Humidity: ${data.main.humidity}</p><p>Sunrise: ${sunriseDate}</p><p>Sunset: ${sunsetDate}</p>`;

    const iconsrc = `https://openweathermap.org/img/w/${logoIcon}.png`;
    const icondescription = data.weather[0].description;
    
    imgElement.setAttribute("src", iconsrc);
    imgElement.setAttribute("alt", icondescription);

    infoWeatherElement.appendChild(imgElement);
    infoWeatherElement.appendChild(divElement);

}

async function fetchingWeatherForecast() {
    try {

        const response = await fetch(forecastUrl);

        if (response.ok) {

            const data = await response.json();

            displayForecastResults(data);
            console.log(data);
            
        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log("Error Fetching Data: 2 ", error);

    }
}

function displayForecastResults(data) {
    const forecastContainer = document.querySelector("#forecast-weather");
    forecastContainer.innerHTML = ""; // limpiar

    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const daily = {};

    // Agrupamos por día tomando la primera temperatura de cada día
    data.list.forEach(item => {
        const date = new Date(item.dt_txt);
        const dayName = daysOfWeek[date.getDay()];
        if (!daily[dayName]) {
        daily[dayName] = item.main.temp; 
        }
    });

    // Día actual
    const today = new Date().getDay();
    const selectedDays = [
        daysOfWeek[today],
        daysOfWeek[(today + 1) % 7],
        daysOfWeek[(today + 2) % 7]
    ];

    const div = document.createElement("div");

    selectedDays.forEach((day, index) => {
        const temp = daily[day];
        if (temp) {

            const p = document.createElement("p");
            

            p.textContent = `${index === 0 ? "Today" : day}: ${Math.round(temp)}°F`;
            div.append(p);

        forecastContainer.appendChild(div);
        }
    });
}

fetchingWeatherApi();
fetchingWeatherForecast();