import './style.css';

export function displayDOM(city, temp, feels) {
  const content = document.querySelector('.content');

  const cityTitle = document.createElement('h2');
  content.appendChild(cityTitle);
  cityTitle.textContent = `${city}`;

  const cityTemp = document.createElement('p');
  content.appendChild(cityTemp);
  cityTemp.textContent = `${temp}`;

  const cityFeelsLike = document.createElement('p');
  content.appendChild(cityFeelsLike);
  cityFeelsLike.textContent = `Feels like ${feels}`;

  return content;
}

export function clearDOM() {
  const content = displayDOM();
  content.textContent = '';
}
