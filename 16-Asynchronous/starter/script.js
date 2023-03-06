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
      // console.log(response[0]);
      renderCountry(response[0], 'neighbour');
    })
    .catch(err => console.log(`${err} ⛔`));
};

country('germany');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(respone => console.log(respone));

let urlImages = [];

// async function fetchPics() {
//   const respone = await fetch(
//     'https://www.rijksmuseum.nl/api/nl/collection?key=sors2p2D&involvedMaker=Rembrandt+van+Rijn'
//   );
//   const data = await respone.json();
//   data.artObjects.forEach(element => {
//     urlImages.push(element.webImage.url);
//   });
//   createImage(urlImages[1]);
// }
// fetchPics();
const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imagePath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imagePath;
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => reject(new Error(`image didn't load`)));
  });
};

// const loadNPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadNPause();

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async i => await createImage(i));
//     console.log(imgs);
//     const imgsEl = await Promise.all(imgs);
//     imgsEl.forEach(i => i.classList.add('parallel'));
//   } catch (error) {
//     console.log(error);
//   }
// };

// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
