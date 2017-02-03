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
});


