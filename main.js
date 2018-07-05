$(document).ready(function() {
    
    $('.firstFadeIn').animate({'opacity':'1', 'top':'0px'},500);
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){    
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1', 'top':'0px'},500);
            }
            
        }); 
    
    });
    
});