const express       = require("express"),
	  app           = express(),
	  SpotifyWebApi = require('spotify-web-api-node');

app.set("view engine", "ejs");

// ==============
// SERVER STARTUP
// ==============
app.listen(3000, () => { console.log("server is running..."); });