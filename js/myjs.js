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