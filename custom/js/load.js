/**
 * Handle load of scripts
 */

Modernizr.load([
    {
        load: 'http://ajax.googleapis.com/ajax/libs/jquery/' + JQUERY_VERSION + '/jquery.min.js',
        complete: function () {
            if (!window.jQuery)
            {
                Modernizr.load([{
                                    load:THEME_PATH + 'js/lib/jquery-.min.js', 
                                    complete:function () { loadScripts(); }
                                }]);
            }
            else
                loadScripts();

        }
    }
]);

function loadScripts()
{
    //load PNG fix if browser is IE and <= 7
    if($.browser.msie && parseInt($.browser.version, 10) <= 7)
    {
        SCRIPTS_TO_LOAD.push({
            load : THEME_PATH + 'js/lib/DD_belatedPNG_0.0.8a-min.js',
            callback: function() {
                $(function() {
                    DD_belatedPNG.fix('img, .png_bg');
                }); 
            }
        });
    }

    SCRIPTS_TO_LOAD.push(THEME_PATH + 'js/main.js?v=' + VERSION);

    Modernizr.load(SCRIPTS_TO_LOAD);
}