chrome.extension.sendMessage({}, function(response) {
  var scoreboardApperanceCheckInterval = setInterval(function() {
    console.log("checking for scoreboard");
    var elements = document.getElementsByClassName("scoreboard");

    if(elements.length > 0) {
      clearInterval(scoreboardApperanceCheckInterval);
      var scoreboard = elements[0];
      scoreboard.remove();
    }

  }, 10);
});
