// Получение элементов страницы
const mainHeader = document.getElementsByClassName('main-header') [0];
const mainNav = document.getElementsByClassName('main-nav') [0];
const mainNavList = document.getElementsByClassName('main-nav__list') [0];
const toggleMenu = document.getElementsByClassName('toggle-menu') [0];
const toggleMenuLineTop = document.getElementsByClassName('toggle-menu__line-top') [0];
const toggleMenuLineBottom = document.getElementsByClassName('toggle-menu__line-bottom') [0];
const toggleMenuLineCenterFirst = document.getElementsByClassName('toggle-menu__line-centre-first') [0];
const toggleMenuLineCenterSecond = document.getElementsByClassName('toggle-menu__line-centre-second') [0];
const buttonRedirectViewAll = document.getElementsByClassName('button-redirect--view-all') [0];
const buttonEventViewAll = document.getElementsByClassName('button-event--view-all') [0];

// Если js работает, то удаляем класс --nojs
mainNav.classList.remove('main-nav--nojs');
mainHeader.classList.remove('main-header--nojs');

if (buttonRedirectViewAll !== undefined) {
  buttonRedirectViewAll.classList.remove('button-redirect--nojs')
} else {
  console.log('Элемента нет!');
};

if (buttonEventViewAll !== undefined) {
  buttonEventViewAll.classList.add('button-event--visible')
} else {
  console.log('Элемента нет!');
};

// Добавляет обработчик на событие "клик" для меню
toggleMenu.addEventListener('click', function () {
  mainNavList.classList.toggle('main-nav__list--show')
  toggleMenuLineTop.classList.toggle('toggle-menu__line-top--show')
  toggleMenuLineBottom.classList.toggle('toggle-menu__line-bottom--show')
  toggleMenuLineCenterFirst.classList.toggle('toggle-menu__line-centre-first--show')
  toggleMenuLineCenterSecond.classList.toggle('toggle-menu__line-centre-second--show')
});

// Получение элементов страницы
const mainNavLinkHome = mainNavList.getElementsByClassName('main-nav__link') [0];
const mainNavLinkCatalog = mainNavList.getElementsByClassName('main-nav__link') [1];
const mainNavLinkProgram = mainNavList.getElementsByClassName('main-nav__link') [2];
const mainPage = document.getElementsByTagName('main') [0];

// Добавляет обработчик на событие "скролл" для меню
document.addEventListener('scroll', function() {
  if (mainPage.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    mainHeader.classList.add('main-header--desktop-only')
    mainNavLinkHome.classList.add('main-nav__link--desktop-only')
    mainNavLinkCatalog.classList.add('main-nav__link--desktop-only')
    mainNavLinkProgram.classList.add('main-nav__link--desktop-only')
  } else {
    mainHeader.classList.remove('main-header--desktop-only')
    mainNavLinkHome.classList.remove('main-nav__link--desktop-only')
    mainNavLinkCatalog.classList.remove('main-nav__link--desktop-only')
    mainNavLinkProgram.classList.remove('main-nav__link--desktop-only')
  }
});
