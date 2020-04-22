/*
    JQUERY
*/
$(function(){
    /*
        CONFIGURACIÓN DE RD-NAVBAR
    */

   $('.rd-navbar').RDNavbar({
    stickUpClone: false,
    responsive: {
        0: {
            layout: 'rd-navbar-fixed'
         },
         768: {
            layout: 'rd-navbar-static',
            stickUp: false
         },
         992:{
            stickUp: false
         }
    },
    
   });


});

/**
 *  
 *  JAVASCRIPT PURO
 * 
 */

/*
    CONFIGURANDO UNIVERSAL PARALLAX   
*/

new universalParallax().init({
	speed: 6.0
});