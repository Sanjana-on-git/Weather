const apiKey = "bd5dc944707ad32e623c02214593864b";

document.getElementById("searchButton").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("cityName").textContent = `City: ${data.name}`;
                document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById("weather").textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            } else {
                alert("City not found. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error fetching the weather data: ", error);
            alert("An error occurred while fetching the weather data.");
        });
}
