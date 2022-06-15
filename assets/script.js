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

function indexScripts() {
	$('.section3 .btn[data-tab]').click(function () {
		$('.section3 .btn[data-tab]').removeClass('active');
		$(this).addClass('active');
		let tab = $(this).attr('data-tab');
		$(`.section3 .tab`).removeClass('active');
		$(`.section3 .tab[data-tabId="${tab}"]`).addClass('active');
	});
}
