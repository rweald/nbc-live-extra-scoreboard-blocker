chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    console.log("Removing Scoreboard");
    var elements = document.getElementsByClassName("scoreboard");

    if(elements.length > 0) {
      var scoreboard = elements[0];
      scoreboard.remove();
    }

	}
	}, 10);
});
