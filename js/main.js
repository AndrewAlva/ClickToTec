// START!
	setTimeout(function(){
		var inputMails = document.getElementById("agencyMails");
		inputMails.focus();
	},500);
// END START

jQuery(document).ready(function($) {

	
	// RESTART
		$('#restartPage').click(function() {
			location.reload();
		});
	// END RESTART



	// NORMAL FLOW
		$('.quotes').click(function() {
			// quotesArray[0].remove();
			$('.quotes:first-child').remove();
			$('.quotes:first-child').removeClass('hiddenQuote');
		});
	// END NORMAL FLOW 

	// FIRST DECISION INTERACTION
		$(document).keyup(function(e) {
	  		if (e.keyCode === 13 ) { 
				// fingers(fingersInput);
				var howManyMails = $('#agencyMails').val();


				if(howManyMails <= 10){
					$('#quote1').prepend('¿' + howManyMails +' nada más Luis? tal vez no debí mandarte esto.');

				} else if (howManyMails > 10 && howManyMails < 20){
					$('#quote1').prepend('Claro, si me imaginaba de 10 a 20, no está mal Luis.');

				} else if (howManyMails >= 20){
					$('#quote1').prepend('Vaya! <span class="boldie">' + howManyMails +'!?</span> Luis no mientas, me huele a <span class="boldie">bluff.</span>');

				}
				$('.firstQuote').remove();
				$('.quotes:first-child').removeClass('hiddenQuote');
			};
		});
	// END FIRST INTERACTION

	// SET TIMER FOR LOADING
		$('#quote1').click(function() {
			$('#quote2').removeClass('quotes');
			setTimeout(function(){
				$('#quote2').remove();
				$('.quotes:first-child').removeClass('hiddenQuote');
			},2000);
		});
	// END SET TIMER

	// SHIFT CENTER QUOTE WRAPPER SIZE
		$('.toggleQuoteSize').click(function() {
			$('#centerQuotes').toggleClass('extendedCenterQuote');
		});
	// END SHIFTING SIZE






	// ABORT SITE
		$('.quotes:last-child').click(function() {
			window.location.href = 'https://vimeo.com/86358930';
		});
	// END ABORT
});