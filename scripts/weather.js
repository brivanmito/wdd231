const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");


const germanyLat = 49.75;
const germanyLong = 6.64;
const units = "imperial";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${germanyLat}&lon=${germanyLong}&appid=222088af741ce61d56db21537b9f4d8a&units=${units}`;

// Define an asynchronus function named apiFetch

async function apiFetch() {
    try {

        // Store the results of the URL fetch into a variable named "response".
        const response = await fetch(url);
        
        if (response.ok) {

            // If the response is OK, then store the result of response.json() conversion in a variable named "data", and
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

    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    const iconsrc = ` https://openweathermap.org/img/w/10d.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);

    captionDesc.textContent = `${desc}`;
}

apiFetch();