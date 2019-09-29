// var randomProperty = function (obj) {
//     var keys = Object.keys(obj)
//     return obj[keys[ keys.length * Math.random() << 0]];
// };

var score = 0;
var nameOfSong;

$("button").on("click", function() {
	$(this).prev().addClass("selected");
	$("button").css("display","none");
	$("div#showPopularSong").removeClass("d-none");
	
	nameOfSong = $("h1.selected").text();
});
