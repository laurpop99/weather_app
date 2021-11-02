import '../dist/style.css';
import Icon from './logo.png';
import * as DOM from './DOM.js';
//DOM
const logo = document.createElement('img');
const logoContainer = document.querySelector('.logo');
logoContainer.appendChild(logo);
logo.src = Icon;
const title = document.createElement('h1');
logoContainer.appendChild(title);
title.textContent = 'Current Weather';
//FETCH DATA
async function fetchWeather(city) {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=11d3bf8cd3083b0bd6580e863be7ffe3`,
      { mode: 'cors' }
    );
    let convertData = await response.json();
    const obj = createObject(convertData);
    checkToggle(obj);

    search.setCustomValidity('');

    return obj;
  } catch {
    alert(`ERROR! Can't find city named ${searchValue}`);
  }
}

//MAKE CITY OBJECT

function createObject(obj) {
  const city = {};
  city.name = obj.name;
  city.temp = {
    tempC: `${obj.main.temp} °C`,
    tempF: `${Math.round(((obj.main.temp * 9) / 5 + 32) * 100) / 100} °F`,
  };
  city.feels_like = {
    tempC: `${obj.main.feels_like} °C`,
    tempF: `${Math.round(((obj.main.feels_like * 9) / 5 + 32) * 100) / 100} °F`,
  };
  city.humidity = obj.main.humidity;
  return city;
}

//SEARCH INPUT
let searchValue = '';
const search = document.querySelector('.search');

search.addEventListener('input', function () {
  searchValue = search.value;
  if (searchValue.length === 0) {
    search.setCustomValidity('Please fill out the field above');
  } else {
    search.setCustomValidity('');
  }
  search.reportValidity();
});

const button = document.querySelector('.btn');
button.addEventListener('click', function () {
  if (searchValue.length === 0) {
    search.setCustomValidity('Please fill out the field above');
    search.reportValidity();
  } else {
    fetchWeather(searchValue);
  }
});

search.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    fetchWeather(searchValue);
  }
});
//Temperature Toggle
const tempToggle = document.querySelector('input[type=checkbox]');
tempToggle.addEventListener('click', function () {
  const obj = fetchWeather(searchValue);
});

function checkToggle(obj) {
  DOM.clearDOM();
  if (tempToggle.checked) {
    DOM.displayDOM(
      obj.name,
      obj.temp['tempF'],
      obj.feels_like['tempF'],
      obj.humidity
    );
  } else {
    DOM.displayDOM(
      obj.name,
      obj.temp['tempC'],
      obj.feels_like['tempC'],
      obj.humidity
    );
  }
}
