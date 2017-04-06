jQuery(document).ready(function () {
$('.slides').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 900
});

// consultant

	$('.consultant button').on('click', function (e) {
		$('.consultant__form').slideToggle();
	});

// products menu toggle item
	$('.first-block').on('click', function (e) {
		e.preventDefault();
		$('a[data-slide="second"]').css('display', 'none');
		$('a[data-slide="first"]').css('display', 'inline-block');
	});

	$('.second-block').on('click', function (e) {
		e.preventDefault();
		$('a[data-slide="first"]').css('display', 'none');
		$('a[data-slide="second"]').css('display', 'inline-block');
	});

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

	// if (document.querySelector('.siema')) {

	// 	 var siema = new Siema({
	// 		  selector: '.siema',
	// 		  duration: 200,
	// 		  easing: 'ease-out',
	// 		  perPage: 1,
	// 		  startIndex: 0,
	// 		  draggable: true,
	// 		  threshold: 20,
	// 		  loop: false,
	// 	});
	// }


	// $('.prev').on('click', function (e) {
	// 	e.preventDefault();
	// 	siema.prev();

	// 	var currentSlide = siema.currentSlide;	
	// 	triggerPage(currentSlide);    			
	// });

	// $('.next').on('click', function (e) {
	// 	e.preventDefault();
	// 	siema.next();

	// 	var currentSlide = siema.currentSlide;	
	// 	triggerPage(currentSlide);
	// });

	// $('.pagination__item').on('click', function (e) {
	// 	e.preventDefault();

	// 	var page = $(this).html();

	// 	siema.goTo(page - 1);

	// 	$(this).addClass('pagination__item_active');
	// 	$(this).siblings('.pagination__item').removeClass('pagination__item_active');
	// });

// pallete toggle
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

// fixed menu
	$(document).on('scroll', function (e) {
		var scrollTop = $(this).scrollTop();

    	if (scrollTop > 300) {

   			$('.header').addClass('header_sticked');

    	} else  {
    		$('.header').removeClass('header_sticked');
    	}

  		$('.slide').css('background-position-y',(90 - scrollTop*1.1));
	});

// slide to aside menu
	var fixed = document.querySelector('.header');

    slideout.on('translate', function(translated) {
      fixed.style.transform = 'translateX(' + translated + 'px)';
    });

    slideout.on('beforeopen', function () {
      fixed.style.transition = 'transform 300ms ease';
      fixed.style.transform = 'translateX(-256px)';
    });

    slideout.on('beforeclose', function () {
      fixed.style.transition = 'transform 300ms ease';
      fixed.style.transform = 'translateX(0px)';
    });

    slideout.on('open', function () {
      fixed.style.transition = '';
    });

    slideout.on('close', function () {
      fixed.style.transition = '';
    });


//product description
    $('.category-product__header').on('click', function (e) {
    	$(this).closest('.category-product__info').toggleClass('category-product__info_active');
    });


 	$('.category-product__img-scale').on('click', function (e) {
 		 	var img = $(this).siblings('img').attr('data-src'),
 		 		title = $(this).siblings('img').attr('data-title')
 		 		popUp = $('.pop-up');
    	
 		 	popUp.find('img').attr('src', img);
 		 	popUp.find('.pop-up__title').html(title);		
	    	popUp.css('display', 'flex');
    });

 	$('.pop-up').on('click', function (e) {
    	$(this).css('display', 'none');
    });

// gallery
 	$('.gallery__item').fancybox({
 		overlayShow: true,
 		overlayColor: '#fff',
 		helpers : {
    		title : {
    			type : 'inside'
    		}
    	},
    	padding : 0
 	});
// validate form

    $('#call-send').on('click', function (e) {
		e.preventDefault();

		var msg = $('.call__msg'),
            // message = $('.form-alert .msg'),
            form = $(this).closest('.reserv'),
            inputs =  form.find('.reserv-input'),
            // errorMsg = form.find('.error'),
            valid = validate();


        function validate () {
       
            var valid = true;

            // console.log(inputs );

            inputs.each( function () {

                if ( $(this).val() === '' ) {
                     // console.log($(this).val());
                    valid = false;
                    return false;
                } 
            });
               
            return valid;
        }

        function showMessage(data) {
            msg.html(data);
            msg.addClass('msg_active');
        }

        if (valid) {

             $.ajax({    
                url: form.attr('action'),
                data: form.serialize(),
                type: 'POST',
                success: function(data){
                    showMessage(data);
                    msg.css('background', 'rgba(39,179,101,.8)');
                },
                error: function(){
                    showMessage('Ошибка отправки. Пожалуйста, повторите попытку.');
                    msg.css('background', 'rgba(158,26,47,.8)');
                },
                complete: function(){
                    setTimeout(function () {
                        msg.removeClass('msg_active');
                    }, 3000);
                    form[0].reset();
                }
            });
         } else {
            showMessage('Пожалуйста, заполните все поля.')
            msg.css('background', 'rgba(158,26,47,.8)');
            setTimeout( function () {
                msg.removeClass('msg_active');
            }, 5000);
         }
	});

});

// function triggerPage (currentSlide) {

// 	var currentPage = $('.pagination__item').eq(currentSlide),  // получаем пагинацию текущей страницы
// 		pages = currentPage.siblings('.pagination__item');      // берем всю пагинацию

// 	currentPage.addClass('pagination__item_active');			// текущую пагинацию делаем активной
// 	pages.removeClass('pagination__item_active');				// остальные делаем неактивныим
// }

