/* MENU RESPONSIVE */

$('.toggle').click(function() {
    $('ul.main-menu').toggleClass('active');
})


/* ACTIVATE SEARCH BAR */

$('.nav-search').on("click", ".search-toggle", function() {
    $('.input-search').toggleClass('show');
    $('.input-search').addClass('animated bounceInRight');
    (this).css('backgroundImage', 'url(images/close.png)');
    // var src = ($(this).attr('src') === 'images/search.png')
    // ? 'images/close.png'
    // : 'images/search.png';
    // $(this).attr('src', src);
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
        pager: false,
        nextText: '<img src="images/next.png" height="28" width="17"/>',
        prevText: '<img src="images/prev.png" height="28" width="17"/>'        
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
    





