/* MENU RESPONSIVE */

// $('.toggle').click(function() {
//     $(ul).toggleClass('active')
// })


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
        pager: false,

        /* ADD CLASS ACTIVE TO CURRENT SLIDE */
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            // console.log(currentSlideHtmlObject);
            // $('.active').removeClass('active');
            $('.slider-testimonials > .slides').eq(currentSlideHtmlObject + 1).addClass('active')
        },
        // onSliderLoad: function () {
        //     $('.slider-testimonials > .slides').eq(1).addClass('active')
        // }   
    })
});






