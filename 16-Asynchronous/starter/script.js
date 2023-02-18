'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
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

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);
//     data.borders?.forEach(borderCountry => {
//       const request2 = new XMLHttpRequest();
//       // prettier-ignore
//       request2.open('GET',`https://restcountries.com/v3.1/alpha/${borderCountry}`);
//       request2.send();
//       request2.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText);
//         renderCountry(data2, 'neighbour');
//       });
//     });
//   });
// };

// getCountry('saudi');

const country = function (country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(response => {
      renderCountry(response[0]);
      return response[0].borders[0];
    })
    .then(response => fetch(`https://restcountries.com/v3.1/alpha/${response}`))
    .then(response => response.json())
    .then(response => renderCountry(response[0]));
};

country('egypt');
