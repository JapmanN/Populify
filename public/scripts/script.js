// ==================================
// ARRAY OF ALL PERSONALIZED MESSAGES
// ==================================
var messages = ["I expected more from you.", "You're not too good at this, are you?", "I'm gonna pretend like I didn't see that.", "That's not a good score!", "Oh my goodness gracious! Did you really just get that score?"];

// =============================
// BUTTON ONCLICK EVENT LISTENER
// =============================
$("button").on("click", function() {
	// GET RANDOM MESSAGE
	var randomMessage = messages[Math.floor(Math.random()*messages.length)];
	
	// CENTER HEADER TEXT
	$("div#welcome").addClass("text-center")

	// DON'T SHOW MORE INFO BUTTON
	$("#more-info").addClass("d-none")
	
	// SHOW PERSONALIZED MESSAGE
	$("span#title").html("A score of 0?!")
	$("h4#message").html(randomMessage);
	
	// SHOW A 'RETRY' BUTTON
	$("#welcome-retry").removeClass("d-none");
});