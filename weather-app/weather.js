const apiKey = "b3942fc757252dfaaffbd1c63889ca6a";

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + "°C";
    document.getElementById("desc").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText =
      "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind").innerText =
      "Wind: " + data.wind.speed + " km/h";
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
}
