$(document).ready(function(){
<<<<<<< HEAD
	
=======
>>>>>>> b825b488e5a5a9302f7efedde719dd5ccab223be
  if (window.devicePixelRatio > 1) {
    var lowresImages = $('img.content-img');

    lowresImages.each(function(i) {
      var lowres = $(this).attr('src');
      var highres = lowres.replace(".", "@2x.");
      $(this).attr('src', highres);
    });
  }
<<<<<<< HEAD
	
	
	if($('#login-form')[0]){
		$('#login-form').validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				password: {
					minlength: 2,
					required: true
				}
			},
			highlight: function(element) {
				$(element).closest('.input-medium').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.input-medium').removeClass('error').addClass('success');
			}
		});
	}
	
	
	if($('#signup-form')[0]){
		$('#signup-form').validate({
			rules: {
				name: {
					minlength: 1,
					required: true
				},
				email: {
					required: true,
					email: true
				},
				url: {
					url: true,
					required: true
				},
				orders: {
					required: true
				}
			},
			highlight: function(element) {
				$(element).closest('.input-medium').removeClass('success').addClass('error');
			},
			success: function(element) {
				$(element)
				.text('OK!').addClass('valid')
				.closest('.input-medium').removeClass('error').addClass('success');
			}
		});
		
		$('#signup-form select').on('change', function(e) {
				$('#signup-form').validate().element($(this));
		});
	}
	
	
	/* Placeholder for IE */
	$('input, textarea').placeholder();
	
	
});


/* ui slider */
if($('#slider')[0]){
	var sliderValue;
	$(function() {
		$( "#slider" ).slider({
			value:700,
			min: 300,
			max: 4000,
			step: 100,
			slide: function( event, ui ) {
				$( "#amount-fly" ).val( ui.value );
				$( "#amount" ).text( ui.value );
				$( "#price" ).text( '$' + 0.3*ui.value );
				$( "#total-price" ).text( '$' + ((0.3 * ui.value) - (0.3 * ui.value / 100 * 11)) );
				if(ui.value > 3000){
					$( "#amount-fly" ).val( '+3000' );
					$('.buy').css('display', 'none');
					$('.contact').css('display', 'block');
				}
				else{
					$('.contact').css('display', 'none');
					$('.buy').css('display', 'block');
				}
			}
		});
		sliderValue = $( "#slider" ).slider( "value" );
		$( "#amount-fly" ).val( sliderValue );
		$( "#amount" ).text( sliderValue );
		$( "#price" ).text( '$' + 0.3 * sliderValue );
		$( "#total-price" ).text( '$' + ((0.3 * sliderValue) - (0.3 * sliderValue / 100 * 11)) );
	});
}
//--

/* autocolumnlist */
if($('#list_coll')[0]){
	(function($) {
		$(function() {
			$('#list_coll').autocolumnlist({
				columns: 2,
				classname: 'col'
			});
		})
	})(jQuery)
}
//--
=======
});
>>>>>>> b825b488e5a5a9302f7efedde719dd5ccab223be
