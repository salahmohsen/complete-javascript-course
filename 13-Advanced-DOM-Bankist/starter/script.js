'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const navbar = document.querySelector('.nav');
const header = document.querySelector('.header');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Adding Coockies Tab
(function () {
  const coockiesMessage = document.createElement('div');
  coockiesMessage.classList.add('cookie-message');
  coockiesMessage.innerHTML =
    'We use cockies to improve functionality of the website <button class="btn btn--close-cookie">Got it!</button>';
  header.append(coockiesMessage);
  document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', e => coockiesMessage.remove());
})();

// Add functionality to Learn more btn
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Header Tabs scrollIntoView
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// Add functionality to tabs container
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return; //Guard Clause
  // Remove Active Classes from tabs and tabs content
  tabs.forEach(e => e.classList.remove('operations__tab--active'));
  tabsContent.forEach(e => e.classList.remove('operations__content--active'));
  // Activate tab and content
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  const hover = e.target;
  const siblings = hover.closest('.nav').querySelectorAll('.nav__link');
  const logo = hover.closest('.nav').querySelector('img');
  siblings.forEach(el => {
    if (el !== hover) el.style.opacity = this;
  });
  logo.style.opacity = this;
};
// Passing "argument" into handler
navbar.addEventListener('mouseover', handleHover.bind(0.5));
navbar.addEventListener('mouseout', handleHover.bind(1));

// Sticky Navigation

// const initialcoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY >= initialcoords.top) navbar.classList.add('sticky');
//   else navbar.classList.remove('sticky');
// });

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navbar.classList.add('sticky');
  else navbar.classList.remove('sticky');
};
const navHeight = navbar.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
