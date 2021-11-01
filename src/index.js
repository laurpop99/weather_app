async function fetchWeather() {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=11d3bf8cd3083b0bd6580e863be7ffe3`,
      { mode: 'cors' }
    );
    let convertData = await response.json();
    console.log(convertData);
  } catch {
    alert('ERROR!');
  }
}

fetchWeather();
