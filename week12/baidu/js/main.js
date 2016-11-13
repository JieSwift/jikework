/*define(function(require,exports,module) {
  var $ = require('jquery');
  var Login = require('./static/GOFindex.js');
  var index = require('./static/index.js');
  index();
	var $dest = $('.body-wr');
	var login = new Login('400', '400', 'absolute', '50%', '50%','#fff','5px',600,'login-wr');
	singleton(login.createBgDiv($dest, 'absolute', '100%', '100%', '0.8', 200, '#333', 'login-bg', 0));
	singleton(login.createLogin($dest));
});*/

define(function(require, exports) {
    var flbox = require("./static/flbox");
    exports.bind = function(element) {
        element.onclick = function() {
        	console.log(flbox.loading);
          flbox.loading;
        };
    };
});
