jQuery(document).ready(function(){$(".consultant button").on("click",function(t){$(".consultant__form").slideToggle()}),$(".first-block").on("click",function(t){t.preventDefault(),$('a[data-slide="second"]').css("display","none"),$('a[data-slide="first"]').css("display","inline-block")}),$(".second-block").on("click",function(t){t.preventDefault(),$('a[data-slide="first"]').css("display","none"),$('a[data-slide="second"]').css("display","inline-block")});var t=new Slideout({panel:document.getElementById("panel"),menu:document.getElementById("menu"),padding:256,tolerance:70,side:"right"});$(".hamburger").on("click",function(e){$(this).toggleClass("hamburger_close"),t.toggle()}),$(".category-list__link_droped").on("click",function(t){t.preventDefault(),$(".pallite-wraper").slideToggle()}),$(".pallite__item").on("click",function(t){t.stopPropagation();var e=$(this).data("color");$(".pallite-about").filter("[data-color="+e+"]").show(),$(".pallite-about").not("[data-color="+e+"]").hide()}),$(document).on("scroll",function(t){var e=$(this).scrollTop();e>200?$(".header").addClass("header_sticked"):$(".header").removeClass("header_sticked"),$(".first").css("background-position-y",90-1.6*e)});var e=document.querySelector(".header");t.on("translate",function(t){e.style.transform="translateX("+t+"px)"}),t.on("beforeopen",function(){e.style.transition="transform 300ms ease",e.style.transform="translateX(-256px)"}),t.on("beforeclose",function(){e.style.transition="transform 300ms ease",e.style.transform="translateX(0px)"}),t.on("open",function(){e.style.transition=""}),t.on("close",function(){e.style.transition=""}),$(".category-product__header").on("click",function(t){$(this).closest(".category-product__info").toggleClass("category-product__info_active")}),$(".category-product__img-scale").on("click",function(t){var e=$(this).siblings("img").attr("data-src"),o=$(this).siblings("img").attr("data-title");popUp=$(".pop-up"),popUp.find("img").attr("src",e),popUp.find(".pop-up__title").html(o),popUp.css("display","flex")}),$(".pop-up").on("click",function(t){$(this).css("display","none")}),$(".gallery__item").fancybox({overlayShow:!0,overlayColor:"#fff",helpers:{title:{type:"inside"}},padding:0})});