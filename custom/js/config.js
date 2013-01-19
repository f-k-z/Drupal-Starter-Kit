/**
 * Global vars for javascript files
 */

var JQUERY_VERSION = '1.8.1';
var THEME_PATH = 'sites/all/themes/custom/';

//list all the scripts to load (don't insert main.js file or PNG fix here)
var SCRIPTS_TO_LOAD = 	[
							THEME_PATH + 'js/lib/jquery.animate-enhanced.min.js',
							THEME_PATH + 'js/lib/jquery.easing.js',
							THEME_PATH + 'js/lib/avoid.console.error.js'
						];
						
//num version (increment it to avoid cache on main.js)
var VERSION = '1';