$('div a').click(function(e){
	e.preventDefault();
	var id = $(ibanner__botao).attr('href'),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);
});
