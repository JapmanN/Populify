$("button").on("click", function() {
	$(this).parent().addClass("selected");
	$("button").css("display","none");
	$("div#showPopularSong").removeClass("d-none");
});
