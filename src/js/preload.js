(function ($){
	$(window).on('load', function () {
		setTimeout(function () {
			var preloader = $(".preloader");
			preLoad(preloader);
		}, 5000);
	});

	function preLoad(preloader) {
		if (!preloader.hasClass('done')) {
			preloader.addClass('done');
		}
	}
})(jQuery);