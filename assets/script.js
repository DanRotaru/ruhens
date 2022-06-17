// function main() {
// 	document.querySelectorAll('').forEach((el) => {
// 		el.addEventListener('click', function (e) {
// 			el.classList.remove('active');
// 			e.target.classList.add('active');
// 			let tab = e.target.getAttribute('data-tab');
// 			document.querySelectorAll(`.section3 .tab`).forEach((o) => {
// 				o.classList.remove('active');
// 			});
// 			document.querySelector(`.section3 .tab[data-tabId="${tab}"]`).classList.add('active');
// 		});
// 	});
// }

// window.onload = main;

function indexScripts(name) {
	$('header a').removeClass('active');
	$(`header a[href="#/${name}"]`).addClass('active');

	// cart open
	$('header .cart').click(() => {
		$('.cart-bg-overlay').fadeIn(200);
		$('.cart-modal').addClass('active');
	});
	$('.cart-modal .close, .cart-bg-overlay').click(() => {
		$('.cart-bg-overlay').fadeOut(200);
		$('.cart-modal').removeClass('active');
	});

	$('.section3 .btn[data-tab]').click(function () {
		$('.section3 .btn[data-tab]').removeClass('active');
		$(this).addClass('active');
		let tab = $(this).attr('data-tab');
		$(`.section3 .tab`).removeClass('active');
		$(`.section3 .tab[data-tabId="${tab}"]`).addClass('active');
	});

	window.scrollTo(0, 0);

	//accordions
	var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt > a').click(function () {
		// allPanels.slideUp();
		$(this).toggleClass('active');
		$(this).parent().next().slideToggle(250);
		return false;
	});
}
