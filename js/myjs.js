/* MENU RESPONSIVE */

$('.toggle').click(function() {
    $('ul.main-menu').toggleClass('active');
})


/* TO TOP BUTTON */
$(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#toTop').fadeIn(); 
        } else { 
            $('#toTop').fadeOut(); 
        } 
    }); 
    $('#toTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


/* BX SLIDER - SLIDER BANNER */
$(function(){
    $('.banner-slider-bloc').bxSlider({
        controls : true,
        auto: true,
        speed: 500,
        pause: 2000,
        useCSS: false,
        moveSlides: 1,
        autoHover: true,
        pager: false        
    })
});

/* BX SLIDER - TESTIMONIALS */
$(function(){
    $('.slider-testimonials').bxSlider({
        controls : true,
        auto: true,
        speed: 500,
        pause: 2000,
        slideWidth: 475,
        maxSlides: 5,
        slideMargin: 20,
        moveSlides: 1,
        autoHover: true,
        pager: false        
    })
});


/* DATEPICKER */

$('#datepicker').datepicker();


/* ANIMATE CSS WOW */
wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100
    }
  );
  wow.init();
    





