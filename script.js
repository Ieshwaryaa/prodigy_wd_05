async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // 🔁 Replace with your OpenWeatherMap API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherResult").innerHTML = "City not found!";
      return;
    }

    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const humidity = data.main.humidity;

    document.getElementById("weatherResult").innerHTML = `
      <strong>${data.name}</strong><br/>
      🌡 Temperature: ${temp}°C<br/>
      🌥 Condition: ${weather}<br/>
      💧 Humidity: ${humidity}%
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching data.";
    console.error(error);
  }
}
