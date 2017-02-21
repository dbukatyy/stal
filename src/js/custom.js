jQuery(document).ready(function () {


	// aside-menu

	 var slideout = new Slideout({
	    'panel': document.getElementById('panel'),
	    'menu': document.getElementById('menu'),
	    'padding': 256,
	    'tolerance': 70,
	    'side': 'right'
	  });

	 $('.hamburger').on('click', function (e) {
	 	$(this).toggleClass('hamburger_close');
	 	slideout.toggle();
	 });


	 // pagination slider

	 var siema = new Siema({
		  selector: '.siema',
		  duration: 200,
		  easing: 'ease-out',
		  perPage: 1,
		  startIndex: 0,
		  draggable: true,
		  threshold: 20,
		  loop: false,
	});

	$('.prev').on('click', function (e) {
		e.preventDefault();
		siema.prev();

		var currentSlide = siema.currentSlide;	
		triggerPage(currentSlide);    			
	});

	$('.next').on('click', function (e) {
		e.preventDefault();
		siema.next();

		var currentSlide = siema.currentSlide;	
		triggerPage(currentSlide);
	});

	$('.pagination__item').on('click', function (e) {
		e.preventDefault();

		var page = $(this).html();

		siema.goTo(page - 1);

		$(this).addClass('pagination__item_active');
		$(this).siblings('.pagination__item').removeClass('pagination__item_active');
	});

});

function triggerPage (currentSlide) {

	var currentPage = $('.pagination__item').eq(currentSlide),  // получаем пагинацию текущей страницы
		pages = currentPage.siblings('.pagination__item');      // берем всю пагинацию

	currentPage.addClass('pagination__item_active');			// текущую пагинацию делаем активной
	pages.removeClass('pagination__item_active');				// остальные делаем неактивныим
}

