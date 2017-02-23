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

	if (document.querySelector('.siema')) {

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
	}


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


	$('.category-list__link_droped').on('click', function (e) {
		e.preventDefault();

		$('.pallite-wraper').slideToggle();
	});

	$('.pallite__item').on('click', function (e) {
		e.stopPropagation();

		var color = $(this).data('color');

		$('.pallite-about').filter('[data-color=' +  color + ']').show();
		$('.pallite-about').not('[data-color=' + color + ']').hide();
	});

	$(document).on('scroll', function (e) {
		var scrollTop = $(this).scrollTop();

  //   	if (scrollTop > 200) {

  //  			$('.header').addClass('header_sticked');

  //   	} else  {
  //   		$('.header').removeClass('header_sticked');
  //   	}

  		$('.first').css('background-position-y',(90- scrollTop*1.6));
	});

	// var fixed = document.querySelector('.header');

 //    slideout.on('translate', function(translated) {
 //      fixed.style.transform = 'translateX(' + translated + 'px)';
 //    });

 //    slideout.on('beforeopen', function () {
 //      fixed.style.transition = 'transform 300ms ease';
 //      fixed.style.transform = 'translateX(-256px)';
 //    });

 //    slideout.on('beforeclose', function () {
 //      fixed.style.transition = 'transform 300ms ease';
 //      fixed.style.transform = 'translateX(0px)';
 //    });

 //    slideout.on('open', function () {
 //      fixed.style.transition = '';
 //    });

 //    slideout.on('close', function () {
 //      fixed.style.transition = '';
 //    });

});

function triggerPage (currentSlide) {

	var currentPage = $('.pagination__item').eq(currentSlide),  // получаем пагинацию текущей страницы
		pages = currentPage.siblings('.pagination__item');      // берем всю пагинацию

	currentPage.addClass('pagination__item_active');			// текущую пагинацию делаем активной
	pages.removeClass('pagination__item_active');				// остальные делаем неактивныим
}

