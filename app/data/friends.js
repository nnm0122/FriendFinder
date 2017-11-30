// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Friends data
// =============================================================
var friends = [
{
	"name": "Will Smith",
	"photo": "https://www.famousbirthdays.com/headshots/will-smith-1.jpg",
	"scores":[
	5,
	1,
	4,
	4,
	5,
	1,
	2,
	5,
	4,
	1
	]
},

{
	"name": "Sandra Bullock",
	"photo":"https://www.famousbirthdays.com/headshots/sandra-bullock-3.jpg",
	"scores":[
	5,
	5,
	4,
	2,
	1,
	1,
	5,
	1,
	1,
	1
	]
},

{
	"name":	"Bruce Willis"
	"photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqWgpC5tQrT6ND-zRva4mGDTtz88ZNnALJsZ4zUF57nJNZ1Gu"
	"scores":[
	1,
	1,
	4,
	2,
	5,
	5,
	1,
	5,
	5,
	5
	]
},
{
	"name":	"Adam Sandler"
	"photo":"http://www.farandula.net/wp-content/uploads/2012/04/adam-sandler.png"
	"scores":[
	5,
	5,
	3,
	4,
	2,
	2,
	5,
	2,
	2,
	1
	]
},
{
	"name":	"Gisele Bundchen"
	"photo":"http://famouscelebsurgery.net/wp-content/uploads/2013/11/Gisele-Bundchen.jpg"
	"scores":[
	5,
	5,
	5,
	5,
	1,
	5,
	1,
	2,
	2,
	2
	]
},
{
	"name": "Cam Newton",	
	"photo":"https://cdn-img.essence.com/sites/default/files/styles/3x2_lg/public/images/2014/08/21/camnewton_0.jpg?itok=RFyrBsuy"
	"scores":[
	5,
	1,
	5,
	1,
	1,
	1,
	5,
	5,
	3,
	5
	]
}
]

module.exports = friendList;
