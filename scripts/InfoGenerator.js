// Function to set an element to our desired text whenever we need to.
const setElementText = (element, text) => {
    document.getElementById(element).innerText = text;
}

// Quote generating using the fetch API.
(function newQuote() {

    const randomQuote = Math.floor(Math.random() * 1642); // 1643, the length of array of inspirational quotes given to us from each fetch from our API.

    fetch("https://type.fit/api/quotes")

        .then(function(response) {
            return response.json();
        })
        .then(function(quotes) {
            setElementText('theInspirationalQuote', quotes[randomQuote].text); // Takes a random index using {randomQuote} from the array returned.
        });

})();


// Getting updates on the weather using Vancouver's city ID on OpenWeatherMap's API.
(function weatherUpdate()  {

    const APIKey = config.APIKey;
    console.log(APIKey);

    const setWeather = weatherData => {

        const toCelsiusConversion = Math.round(parseFloat(weatherData.main.temp) - 273.15);
        const weatherString =`${weatherData.weather[0].description}, ${toCelsiusConversion}°`

        return weatherString[0].toUpperCase() + weatherString.substring(1, weatherString.length);

    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=6173331&appid=${APIKey}`)

        .then(function(response){
            return response.json();
        })
        .then(function(weatherData) {
            setElementText('theWeather', setWeather(weatherData));
            console.log(weatherData);
        })

        .catch(function() {
            console.log('weatherUpdate() failed.')
        })

})();

