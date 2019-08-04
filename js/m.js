$(function() {
	// $('#first').slideToggle('fast');
	$('.accordion').find('.accordion__title').click(function(){
		// Adds active class
		$(this).toggleClass('active');
		// Expand or collapse this panel
		$(this).next().slideToggle('fast');
		// Hide the other panels
		$('.accordion__content').not($(this).next()).slideUp('fast');
		// Removes active class from other titles
		$('.accordion__title').not($(this)).removeClass('active');		
	});
});