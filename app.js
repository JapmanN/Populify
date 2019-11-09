// ================
// REQUIRE PACKAGES
// ================
const express       = require("express"),
	  app           = express(),
	  SpotifyWebApi = require('spotify-web-api-node');


// ENVIRONMENT VARIABLE CONFIGURATION
require('dotenv').config();

// =================
// APPLICATION SETUP
// =================
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ================
// APPLICATION CODE
// ================
var spotifyApi = new SpotifyWebApi({
	scopes: ['user-read-private', 'user-read-email', 'user-follow-read', 'user-library-read'],
	redirectUri: process.env.REDIRECT_URI,
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	state: process.env.mySTATE
});

// =======================
// Create Authorization URL
// =======================
var authorizeURL = spotifyApi.createAuthorizeURL(spotifyApi._credentials.scopes, spotifyApi._credentials.state);


// ==================
// APPLICATION ROUTES
// ==================
app.get('/', (req, res) => {
	res.render("home");
});

app.get('/login', (req, res) => {
	res.redirect(authorizeURL);
});

app.get('/callback', (req, res) => {
	var code = req.query.code;	
	
	// Retrieve an access token and a refresh token
	spotifyApi.authorizationCodeGrant(code).then(function(data) {
		// Set the access token on the API object to use it in later calls
		spotifyApi.setAccessToken(data.body['access_token']);
		spotifyApi.setRefreshToken(data.body['refresh_token']);
		res.redirect('/app');
	}, function(err) {
		console.log('Something went wrong!', err);
		res.redirect('/login');
	});
});

app.get('/app', (req, res) => {
	// var randomNum = Math.floor(Math.random() * 116);
	spotifyApi.getMe().then(function(user) {
		spotifyApi.getMySavedTracks({limit: 50}).then(function(savedTracks) {
			// console.log(randomNum);
			res.render("index", {user: user, savedTracks: savedTracks});
		}, function(err) {
			console.log('Something went wrong!', err);
		});
	}, function(err) {
		res.redirect("/login");
	});
});


app.get('/info', (req, res) => {
	res.render("moreInfo");
});


app.get("*", (req, res) => {
	res.render("error");
});


// ==============
// SERVER STARTUP
// ==============
var port = process.env.PORT || 3000;
app.listen(port, (req, res) => { console.log("server is running..."); });