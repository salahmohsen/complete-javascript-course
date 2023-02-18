'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = 'main') {
  //console.log(data);
  // prettier-ignore
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)}M</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
  </div>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const country = function (country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(response => {
      renderCountry(response[0]);
      if (!response[0].borders) return;
      return response[0];
    })
    .then(response => {
      response.borders?.forEach(borderCountry => {
        fetch(`https://restcountries.com/v3.1/alpha/${borderCountry}`).then(
          response =>
            response
              .json()
              .then(response => renderCountry(response[0], 'neighbour'))
        );
      });
    });
};

country('sudan');
