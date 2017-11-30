//Dependencies
//Path package to get the correct file path for our html

var path = require("path");

//Routing
module.exports = function(app) {
//  This is the HTML GET Requests


 // Code below handles when users "visit" a page.
 // user is shown an HTML page of content
app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// USE- route to home page
app.use(function (req, res) {
	res.sendFile(path.join(__dirname + "../public/home.html"));
});

};