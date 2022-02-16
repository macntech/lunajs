/**
 *
 * LunaJS
 * LunaJS adds dark mode to every website 
 * 
 * @author: Johannes Geisslinger
 * 
 */

/*  globals define  */

//Load default options
var defaultOptions = require('./default-options');

//Object for option injection
var selectedOptions = {}

var lunajs = {}



/*Initialize Luna*/
lunajs.init = function (selectedOptions) {

    options = extend(defaultOptions, selectedOptions || {})
    this.options = options
    this.state = {}




}