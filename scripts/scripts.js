
$(document).ready(function(){

	var scrollLink = @('.scroll');

	//smooth scrolling
	scrollLink.clink(function(e)) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});

	$(window).scroll(function(){
		var scrollbaLocatinoo = $(this).scrollTop();

		scrollLink.each(function() {

			var sectionOffset = $(this.hash).offset().top

		})
	})
}})