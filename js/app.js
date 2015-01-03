require.config({
	paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        'unveil': 'vendor/ap.unveil'
	},
    shim: {
        'unveil': { deps: ['jquery'] }
    },
	urlArgs: 'bust=' + new Date().getTime()
});

define([
    'jquery',
    'unveil'
], function($) {

    var options = {
        imgLoadThreshold: 250,
        responsiveBreakpoint: 600
    };

    //Define the methods and attributes of your module
    var initialize = function() {
        options.isTouch = Modernizr.touch;

        // lazyload images
        lazyImages($('.project img'));
    };


    function lazyImages(image) {
        function fadeImageIn() {
            $(this).addClass('visible');
        }

        image.unveil(options.imgLoadThreshold, fadeImageIn);
    };

    //Add functions from above to the module and return it.
    return {
        initialize: initialize
    };
});