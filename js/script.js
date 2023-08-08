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