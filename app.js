var $ = require('jquery');
var $ = require('./assets/javascripts/bootstrap.js');
var $ = require('./assets/javascripts/custom.js')

var button = $('<button/>').html('click me').on('click', function() {
	alert('hello');
})
