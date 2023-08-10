'use strict';

/*==================================== BURGER ====================================*/

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let overlay = document.querySelector('.overlay');



burger.addEventListener('click', function () {
	this.classList.toggle('burger--active');
	menu.classList.toggle('header__menu--active');
	overlay.classList.toggle('overlay--show');
});

/*==================================== FILTER ====================================*/

$(function () {
	var mixer = mixitup('.works__list');

	$('.works__filter-button').on('click', function () {
		$('.works__filter-button').removeClass('works__filter-button--active')
		$(this).addClass('works__filter-button--active')
	})
})


/*==================================== SLIDER ====================================*/

$(function () {
	$('.team__slider').slick({
		arrows: false,
		slidesToShow: 3,
		infinite: true,
		dragable: false,
		waitForAnimate: false,
		responsive:
			[
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 1,
					}
				},
			],
		arrows: false,
		dots: true,
		appendDots: ('.team__slider-dots'),
	})
})


/*==================================== ANIMATION ====================================*/

window.onload = function () {
	let loadings = document.querySelectorAll('.loading');
	let header = document.querySelector('.header');

	header.classList.add('header--loaded');

	for (let loading of loadings) {
		loading.classList.add('loaded');
	}
};

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 4
			let animItemPoint = window.innerHeight - (animItemHeight / animStart);

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
				animItem.classList.add('anim-item--active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anim-item--active');
				}
			}

			function offset(elem) {
				let rect = elem.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		}
	}
}
