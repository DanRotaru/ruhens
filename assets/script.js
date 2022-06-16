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
	document.querySelectorAll('header a').forEach((el) => el.classList.remove('active'));
	if (document.querySelector(`header a[href="#/${name}"]`) !== null) {
		document.querySelector(`header a[href="#/${name}"]`).classList.add('active');
	}

	$('.section3 .btn[data-tab]').click(function () {
		$('.section3 .btn[data-tab]').removeClass('active');
		$(this).addClass('active');
		let tab = $(this).attr('data-tab');
		$(`.section3 .tab`).removeClass('active');
		$(`.section3 .tab[data-tabId="${tab}"]`).addClass('active');
	});
}
