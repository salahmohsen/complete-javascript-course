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
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
  </div>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errMessage = 'Country not Found!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMessage} ${response.status}`);
    //console.log(response.json());
    return response.json();
  });
};

const country = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not Found!'
  )
    .then(response => {
      renderCountry(response[0]);
      return response[0];
    })
    .then(response => {
      if (!response.borders)
        throw new Error(`This Country doesn't have neighbours!`);
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${response.borders[0]}`,
        `This Country doesn't have neighbours!`
      );
    })
    .then(response => {
      console.log(response[0]);
      renderCountry(response[0], 'neighbour');
    })
    .catch(err => console.log(`${err} ⛔`));
};

country('egypt');
