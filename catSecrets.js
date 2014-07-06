
var catSecrets = function () {
	return {
		init: function() {
				var lineBreak = '<br/>';
				var genLink = function (description, url) {
					return '<span class="link"><a href="' + url + '">' + description + '</a></span>';
				};
			
				var secretCatGoodies =
                    '<img src="http://i.imgur.com/pXz83RK.jpg" title="fuck" alt="kawaii cat" />' +
                    lineBreak +
                    lineBreak +
                    genLink("EMAIL", "mailto:mrluckywaffles@gmail.com") +
                    genLink("MAL", "http://myanimelist.net/animelist/MrLuckyWaffles") +
                    genLink("STEAM", "http://steamcommunity.com/id/MrLuckyWaffles") +
                    genLink("XBL", "https://live.xbox.com/en-US/Profile?gamertag=MrLuckyWaffles") +
                    genLink("GIT", "https://github.com/mrluckywaffles?tab=repositories") +
                    lineBreak +
                    lineBreak +
                    genLink("has anime been saved this week?", "http://www.hasanimebeensavedthisweek.com");

				var catDiv = $("#catBox");
				$("#clickableCat").on('click', function(ev){
					catDiv.fadeOut(2000, function(){
						catDiv.html(secretCatGoodies);
						catDiv.fadeIn(2000);
					});
				});

                $("#jswarning").hide();
		}
	}
}();