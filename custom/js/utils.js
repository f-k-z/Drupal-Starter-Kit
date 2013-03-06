/**
 * UTILS
 */

jQuery(function($) {

    checkPNGFix();

    function checkPNGFix()
    {
        //load PNG fix and apply it if browser is IE and <= 7
        if($.browser.msie && parseInt($.browser.version, 10) <= 7)
        {
            Modernizr.load({load : THEME_PATH + 'js/lib/DD_belatedPNG_0.0.8a-min.js',
                        callback: function() { $(function() { DD_belatedPNG.fix('img, .png_bg'); }); 
            });
        }
    }

}