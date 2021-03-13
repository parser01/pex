'use strict';

// HEADER =============================================================

function animateBurger() {
	burger.classList.toggle('active');

	if (burger.classList.contains('active') && window.pageYOffset > 0) {
		burgerLines.forEach(function(item) {
			item.classList.remove('burger__line_scrolled');
		});

	} else if (!burger.classList.contains('active') && window.pageYOffset > 0) {
		burgerLines.forEach(function(item) {
			item.classList.add('burger__line_scrolled');
		});
	}
}

function toggleMenuBody() {
	menuBody.classList.toggle('active');
	document.body.classList.toggle('lock-menu');
	search.classList.toggle('search_removed');

	if (menuBody.classList.contains('active')) {
		logoMenu.style.marginRight = '0px';

	} else {
		logoMenu.style.marginRight = '';
	}

	if (window.matchMedia('(max-width: 599px)').matches && !burger.classList.contains('active') && searchBody.classList.contains('active')) {
		burger.classList.add('burger_hidden');
	}

	if (menuBody.classList.contains('active')) {
		headerMenuLinks.forEach(function(item) {
			item.classList.remove('menu__link_scrolled');
		});

	} else if (window.pageYOffset > 0 && !menuBody.classList.contains('active')) {
		headerMenuLinks.forEach(function(item) {
			item.classList.add('menu__link_scrolled');
		});
	}
}

const burger = document.querySelector('.burger'),
		menuBody = document.querySelector('.menu__body');

burger.addEventListener('click', animateBurger);
burger.addEventListener('click', toggleMenuBody);

// ******************************************************************

function openSearch() {

	searchSubmitIcon.classList.toggle('search__submit-icon_font-size_14px');

	if (window.matchMedia('(min-width: 600px)').matches && window.pageYOffset === 0) {
		searchInput.classList.toggle('search__input_opened');

	} else if (window.matchMedia('(min-width: 600px)').matches && window.pageYOffset > 0) {
		searchInput.classList.toggle('search__input_opened');
		searchInput.classList.toggle('search__input_scrolled');

	} else if (window.matchMedia('(max-width: 599px)').matches) {

		searchBody.classList.toggle('active');
		searchInput.classList.toggle('search__input_opened');
		searchInput.classList.remove('search__input_scrolled');

		if (searchBody.classList.contains('active')) {
			searchBtnIcon.classList.remove('search__btn-icon_scrolled');

		} else if (!searchBody.classList.contains('active') && window.pageYOffset > 0) {
			searchBtnIcon.classList.add('search__btn-icon_scrolled');
		}

		burger.classList.toggle('burger_hidden');

	} 

	if (window.matchMedia('(max-width: 599px)').matches && searchInput.classList.contains('search__input_opened')) {
		document.body.classList.add('lock-search');

	} else if (window.matchMedia('(max-width: 599px)').matches && !searchInput.classList.contains('search__input_opened')) {
		document.body.classList.remove('lock-search');
	}
}

function focusSearchInput() {
	searchInput.focus();

	searchBtn.removeEventListener('click', focusSearchInput);
	searchBtn.addEventListener('click', unfocusSearchInput);
}

function unfocusSearchInput() {
	searchInput.blur();

	searchBtn.removeEventListener('click', unfocusSearchInput);
	searchBtn.addEventListener('click', focusSearchInput);
}



const header = document.querySelector('.header'),
		logoMenu = document.querySelector('.header__logo-menu'),
		headerMenuLinks = document.querySelectorAll('.menu__link'),
		burgerLines = document.querySelectorAll('.burger__line'),
		search = document.querySelector('.search'),
		searchBody = document.querySelector('.search__body'),
		searchBtn = document.querySelector('.search__btn'),
		searchBtnIcon = document.querySelector('.search__btn-icon'),
		searchInput = document.querySelector('.search__input'),
		searchSubmitIcon = document.querySelector('.search__submit-icon');    

searchBtn.addEventListener('click', focusSearchInput);
searchBtn.addEventListener('click', openSearch);

function doOnWindowResize() {
	if (window.matchMedia('(min-width: 1210px)').matches && burger.classList.contains('active')) {
		search.classList.remove('search_removed');
		logoMenu.style.marginRight = '';

	} else if (window.matchMedia('(max-width: 1209px)').matches && burger.classList.contains('active')) {
		search.classList.add('search_removed');
		logoMenu.style.marginRight = '0px';
	}

	if (window.matchMedia('(max-width: 599px)').matches && searchInput.classList.contains('search__input_opened') && burger.classList.contains('active')) {
		searchBody.classList.add('active');
		burger.classList.remove('burger_hidden');

	} else if (window.matchMedia('(max-width: 599px)').matches && searchInput.classList.contains('search__input_opened')) {
		searchBody.classList.add('active');
		burger.classList.add('burger_hidden');

	} else if (window.matchMedia('(min-width: 600px)').matches && searchInput.classList.contains('search__input_opened')) {
		searchBody.classList.remove('active');
		burger.classList.remove('burger_hidden');
	}

	if (window.matchMedia('(max-width: 599px)').matches && searchInput.classList.contains('search__input_opened')) {
		document.body.classList.add('lock-search');

	} else if ((window.matchMedia('(max-width: 599px)').matches && !searchInput.classList.contains('search__input_opened')) || (window.matchMedia('(min-width: 600px)').matches && searchInput.classList.contains('search__input_opened')) || (window.matchMedia('(min-width: 600px)').matches && !searchInput.classList.contains('search__input_opened'))) {
		document.body.classList.remove('lock-search');
	}

	// ********************************************************************************

	if (window.pageYOffset > 0 && searchBody.classList.contains('active')) {
		searchBtnIcon.classList.remove('search__btn-icon_scrolled');
		searchInput.classList.remove('search__input_scrolled');

	} else if (window.pageYOffset > 0 && !searchBody.classList.contains('active') && searchInput.classList.contains('search__input_opened')) {
		searchBtnIcon.classList.add('search__btn-icon_scrolled');
		searchInput.classList.add('search__input_scrolled');
	}


	if (window.pageYOffset > 0 && window.matchMedia('(min-width: 1209px)').matches) {
		headerMenuLinks.forEach(function(item) {
			item.classList.add('menu__link_scrolled');
		});

	} else if ((window.pageYOffset === 0 && menuBody.classList.contains('active')) || (window.pageYOffset > 0 && menuBody.classList.contains('active') && window.matchMedia('(max-width: 1210px)').matches)) {
		headerMenuLinks.forEach(function(item) {
			item.classList.remove('menu__link_scrolled');
		});
	}

	if (window.pageYOffset > 0 && !burger.classList.contains('active')) {
		burgerLines.forEach(function(item) {
			item.classList.add('burger__line_scrolled');
		});

	} else {
		burgerLines.forEach(function(item) {
			item.classList.remove('burger__line_scrolled');
		});
	}

	// if (window.pageYOffset > 0 && menuBody.classList.contains)
}

window.addEventListener('resize', doOnWindowResize);

// ****************************************************************************

if (window.pageYOffset > 0) {
	header.classList.add('header_scrolled');

	if (window.matchMedia('(min-width: 1210px)').matches) {
		headerMenuLinks.forEach(function(item) {
			item.classList.add('menu__link_scrolled');
		});
	}

	if (window.matchMedia('(max-width: 1209px)').matches) {
		burgerLines.forEach(function(item) {
			item.classList.add('burger__line_scrolled');
		})
	} 

	if (window.matchMedia('(min-width: 600px)').matches && searchInput.classList.contains('search__input_opened')) {
		searchInput.classList.add('search__input_scrolled');
	}
}

window.addEventListener('scroll', function() {

	if (window.pageYOffset > 0) {
		header.classList.add('header_scrolled');
		searchBtnIcon.classList.add('search__btn-icon_scrolled');

		if (window.matchMedia('(min-width: 1210px)').matches) {
			headerMenuLinks.forEach(function(item) {
				item.classList.add('menu__link_scrolled');
			});
		}

		if (window.matchMedia('(max-width: 1209px)').matches) {
			burgerLines.forEach(function(item) {
				item.classList.add('burger__line_scrolled');
			});
		}

		if (window.matchMedia('(min-width: 600px)').matches && searchInput.classList.contains('search__input_opened')) {
			searchInput.classList.add('search__input_scrolled');
		}
	} 

	else {		
		header.classList.remove('header_scrolled');
		searchBtnIcon.classList.remove('search__btn-icon_scrolled');

		if (window.matchMedia('(min-width: 1210px)').matches) {
			headerMenuLinks.forEach(function(item) {
				item.classList.remove('menu__link_scrolled');
			});
		}

		if (window.matchMedia('(max-width: 1209px)').matches) {
			burgerLines.forEach(function(item) {
				item.classList.remove('burger__line_scrolled');
			})
		}

		if (window.matchMedia('(min-width: 600px)').matches) {
			searchInput.classList.remove('search__input_scrolled');
		}
	}
});



// Ibg ==========================================================================

function ibg(){
	let ibg = document.querySelectorAll(".ibg"); 
	for (var i = 0; i < ibg.length; i++) { 
		if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; 
		} 
	}
}

ibg();

// ===============================================================================

