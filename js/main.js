
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-bottle-carousel').owlCarousel({
        items:1,
        loop:true,
        nav: false,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      
    // -------   Mail Send ajax

 });
 const floating_btn = document.querySelector('.floating-btn');
 const close_btn = document.querySelector('.close-btn');
 const social_panel_container = document.querySelector('.social-panel-container');
 
 floating_btn.addEventListener('click', () => {
     social_panel_container.classList.toggle('visible')
 });
 
 close_btn.addEventListener('click', () => {
     social_panel_container.classList.remove('visible')
 });
 


 const allToggleModal = document.querySelectorAll('[data-toggle="modal"]')

allToggleModal.forEach(btn=> {
	btn.addEventListener('click', function (e) {
		e.preventDefault()
		const modal = document.querySelector(this.dataset.target)
		const modalClose = modal.querySelector('.modal__close')

		modal.classList.add('show')

		modalClose.addEventListener('click', function (e) {
			e.preventDefault()
			modal.classList.remove('show')
		})
	})
})
document.addEventListener('click', function (e) {
	if(e.target.matches('.modal')) {
		e.target.classList.remove('show')
	}
})

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


