function loadApp() {

	var flipbook = $('.flipbook');

	if (flipbook.width()==0 || flipbook.height()==0) {
		setTimeout(loadApp, 10);
		return;
	}

	$('.flipbook .double').scissor();
	$('.flipbook').turn({
			elevation: 50,
			gradients: true,
			autoCenter: true
	});
}

yepnope({
	test : Modernizr.csstransforms,
	yep: ['lib/turn.min.js'],
	nope: ['lib/turn.html4.min.js'],
	both: ['lib/scissor.min.js', 'index.css'],
	complete: loadApp
});





// index.js

function loadApp() {
    var flipbook = $('.flipbook');

    if (flipbook.width() == 0 || flipbook.height() == 0) {
        setTimeout(loadApp, 10);
        return;
    }

    $('.flipbook .double').scissor();

    var isSmallScreen = window.innerWidth <= 480;

    flipbook.turn({
        elevation: 50,
        gradients: true,
        autoCenter: true,
        display: isSmallScreen ? 'single' : 'double'
    });

    if (isSmallScreen) {
        $(window).on('click', function() {
            flipbook.turn('next');
        });
    }
}

yepnope({
    test: Modernizr.csstransforms,
    yep: ['lib/turn.min.js'],
    nope: ['lib/turn.html4.min.js'],
    both: ['lib/scissor.min.js', 'index.css'],
    complete: loadApp
});

