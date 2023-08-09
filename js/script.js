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