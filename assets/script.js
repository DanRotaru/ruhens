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

var slickInitialized = false;
function resizer() {
	if (window.innerWidth <= 800) {
		if (!slickInitialized) {
			setTimeout(() => {
				$('.section1 .electronics').slick();
			}, 100);
			slickInitialized = true;
		}
	} else {
		slickInitialized = false;
		$('.section1 .electronics').slick('unslick');
	}
}

function indexScripts(name) {
	$('header a').removeClass('active');
	$(`header a[href="#/${name}"]`).addClass('active');

	// header mobile
	$('header .navlink')
		.off('click')
		.click(() => {
			$('.navmobile').addClass('active');
		});
	$('.navmobile .close')
		.off('click')
		.click(function () {
			console.log($(this).hasClass('active'));
			if ($(this).hasClass('active')) {
				$('.navmobile .close, .submenu, .mainUL').removeClass('active');
			} else {
				$('.navmobile').removeClass('active');
			}
		});
	$('.navmobile a[data-dropdown]')
		.off('click')
		.click(function () {
			let id = $(this).attr('data-dropdown');
			$(`.navmobile .submenu[data-dropdownMenu="${id}"],
		.navmobile .mainUL,
		.navmobile .close`).addClass('active');
		});

	// cart open
	$('header .cart')
		.off('click')
		.click(() => {
			$('.cart-bg-overlay').fadeIn(200);
			$('.cart-modal').addClass('active');
		});
	$('.cart-modal .close, .cart-bg-overlay')
		.off('click')
		.click(() => {
			$('.cart-bg-overlay').fadeOut(200);
			$('.cart-modal').removeClass('active');
		});

	$('.section3 .btn[data-tab]')
		.off('click')
		.click(function () {
			$('.section3 .btn[data-tab]').removeClass('active');
			$(this).addClass('active');
			let tab = $(this).attr('data-tab');
			$(`.section3 .tab`).removeClass('active');
			$(`.section3 .tab[data-tabId="${tab}"]`).addClass('active');
		});

	window.scrollTo(0, 0);

	//accordions
	var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt > a')
		.off('click')
		.click(function () {
			// allPanels.slideUp();
			$(this).toggleClass('active');
			$(this).parent().next().slideToggle(250);
			return false;
		});

	resizer();
	window.onresize = function () {
		resizer();
	};
}
