import '../dist/style.css';

export function displayDOM(city, temp, feels, humid) {
  const content = document.querySelector('.content');

  const mainContainer = document.createElement('div');
  content.appendChild(mainContainer);
  mainContainer.classList.add('mainContainer');
  mainContainer.textContent;

  const mainContent = document.createElement('div');
  mainContainer.appendChild(mainContent);
  mainContent.classList.add('mainContent');

  const cityTitle = document.createElement('h2');
  mainContent.appendChild(cityTitle);
  cityTitle.textContent = `${city}`;

  const cityTemp = document.createElement('p');
  mainContent.appendChild(cityTemp);
  cityTemp.textContent = `${temp}`;
  cityTemp.classList.add('cityTemp');

  const cityFeelsLike = document.createElement('p');
  mainContent.appendChild(cityFeelsLike);
  cityFeelsLike.textContent = `Feels like ${feels}`;

  const cityHumidity = document.createElement('p');
  mainContent.appendChild(cityHumidity);
  cityHumidity.textContent = `Humidity: ${humid} %`;

  return content;
}

export function clearDOM() {
  const content = displayDOM();
  content.textContent = '';
}
