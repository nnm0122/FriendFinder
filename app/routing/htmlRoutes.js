//Dependencies
//Path package to get the correct file path for our html

var path = require("path");

//Routing
module.exports = function(app) {
//  This is the HTML GET Requests

app.get("/", function(req, res) {

		// homepage served
		res.sendFile(path.join(__dirname, "../public/home.html"));

	});

	app.get("/survey", function(req, res) {

		// survey page served
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})


	app.get('/*', function(req, res) {

		// if no matching route then default to home
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})

};