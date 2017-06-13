var w = $(window),
	body = $('body'),
	orderForm = $('.orderForm'),
	closeBtn = orderForm.find('.closeBtn'),
	sticks = $('button#sticks');


sticks.click(function() {
	$(this).toggleClass('close');
});

$('.order').click(function() {
	// orderForm.fadeIn(400);
	var btnTop = body.scrollTop();
    var bodyH = body.height();
	orderForm.css('padding-top', btnTop+20).fadeIn(500).height(bodyH-btnTop-20);
});

closeBtn.click(function() {
	orderForm.fadeOut(400);
});