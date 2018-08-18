// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// HTML GET Requests
	// ---------------------------------------------------------------------------
	app.get('/', function (request, result) {
		result.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function (request, result) {
		result.sendFile(path.join(__dirname + '/../public/survey.html'));
	});	
};