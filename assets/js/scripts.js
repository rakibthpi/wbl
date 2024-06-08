$(document).ready(function(){
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	

	$('.humberMenu').click(function(){
        $('.menu').toggleClass('mobileLoginActive');
		$('html').toggleClass('LoginOverActive');
        return false;
    });

	// Click event for the body
    $('body').click(function(event) {
        // Check if the clicked element is not a descendant of .mobileLogin
        if (!$(event.target).closest('.menu').length) {
            $('.menu').removeClass('mobileLoginActive');
			$('html').removeClass('LoginOverActive'); 
			$('.humberMenu').removeClass('change'); 
        }
    });




	$('.sliderMainItem').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		nav:false,
				loop:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
				
			}
		}
	})






});
function myFunction(x) {
	x.classList.toggle("change");
  }