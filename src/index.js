import './style.css';
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
    console.log('FETCHED DATA');
    return obj;
  } catch {
    alert('ERROR!');
  }
}

//MAKE CITY OBJECT

function createObject(obj) {
  const city = {};
  city.name = obj.name;
  city.temp = {
    tempC: `${obj.main.temp} °C.`,
    tempF: `${Math.round(((obj.main.temp * 9) / 5 + 32) * 100) / 100} °F.`,
  };
  city.feels_like = {
    tempC: `${obj.main.feels_like} °C.`,
    tempF: `${
      Math.round(((obj.main.feels_like * 9) / 5 + 32) * 100) / 100
    } °F.`,
  };
  return city;
}

//SEARCH INPUT
let searchValue = 'London';
const search = document.querySelector('.search');

search.addEventListener('input', function () {
  searchValue = search.value;
});

const button = document.querySelector('.btn');
button.addEventListener('click', function () {
  console.log(searchValue);
  fetchWeather(searchValue);
});

//Temperature Toggle
const tempToggle = document.querySelector('input[type=checkbox]');
tempToggle.addEventListener('click', function () {
  const obj = fetchWeather(searchValue);
});

function checkToggle(obj) {
  DOM.clearDOM();
  if (tempToggle.checked) {
    DOM.displayDOM(obj.name, obj.temp['tempF'], obj.feels_like['tempF']);
  } else {
    DOM.displayDOM(obj.name, obj.temp['tempC'], obj.feels_like['tempC']);
  }
}
//EXECUT CODE
