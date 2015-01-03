require.config({
	paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        // 'jquery': '/interactives/library/vendor/jquery/jquery-1.8.3.min',
        'unveil': 'vendor/ap.unveil'
		// 'modernizr': 'vendor/modernizr-2.6.2-respond-1.1.0.min'
	},
    shim: {
        'unveil': { deps: ['jquery'] }
    },
	urlArgs: 'bust=' + new Date().getTime()
});

define([
    'jquery',
    'unveil'
    // 'modernizr' // <-- this loads in a script tag in the html
], function($) {

    var options = {
        imgLoadThreshold: 250,
        responsiveBreakpoint: 600
    };

    //Define the methods and attributes of your module
    var initialize = function() {
        options.isTouch = Modernizr.touch;

        // event handlers
        setupTouchEvents();

        // lazyload images
        // lazyImages($('#projects .background-image'));
        lazyImages($('.project img'));
        
        $(window).on('load resize orientationchange', updateLayout).resize();
    };

    function imageHover() {
        $('.project').hover(function() {
            $(this).find('img').removeClass('grayscale');
        }, function() {
            $(this).find('img').addClass('grayscale');
        });
    }

    function lazyImages(image) {
        function fadeImageIn() {
            $(this).addClass('visible');
        }

        image.unveil(options.imgLoadThreshold, fadeImageIn);
    };

    function setupTouchEvents() {
        if (!options.isTouch) {
            imageHover();
        } else {
            $('.project img').removeClass('grayscale');
        }
    }

    function swapImages(source) {
        var images = $('.project img');

        for (var i = 0, l = images.length; i < l; i++) {
            var image = $(images[i]);

            image.attr('src', image.data(source));
        }
    }

    // USE UNDERSCORE TO THROTTLE THIS CALL!!!
    function updateLayout() {
        var winWidth = $(this).width();

        if (winWidth > options.responsiveBreakpoint) {
            swapImages('websrc')
        } else {
            swapImages('src')
        }
    }

    //Add functions from above to the module and return it.
    return {
        initialize: initialize
    };
});