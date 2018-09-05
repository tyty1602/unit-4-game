//variables
$(document).ready(function () {
    var targetScore = 0;
    var Diamond = "";
    var Pearl = "";
    var Ruby = "";
    var Emerald = "";
    var scorekeeper = 0;
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var images = ["assets/css/images/pearl.jpg", "assets/css/images/Ruby.jpg", "assets/css/images/emerald.jpg", "assets/css/images/Diamond-thumbnail.jpg"]

    //Sanity check
    console.log("sanity check")

    //NewGame

    function newGame() {
        targetScore = Math.floor(Math.random() * 184 + 11);
        console.log("targetScore" + targetScore);
        document.getElementById("targetScore").innerText = "Your target score is " + targetScore;
    }


    function resetCrystal() {
        console.log("sanity check crystal img");
        for (var i = 0; i < images.length; i++) {
            var crystal = $("<img>");
            crystal.addClass("crystal");
            crystal.attr("src", images[i]);
            crystal.attr("value", (Math.floor(Math.random() * 13) + 1));
            console.log("crystal value");
            // crystal.attr("height", "100");
            $(".crystalContainer").append(crystal);
        }
    }

    function crystalClick () {
		//attr returns first value of selected html element
        counter += parseInt($(this).attr("value"));
        $(".currentScore").html(counter);
		if (counter == targetScore) {
			wins++;
            totalReset();
		}
		else if (counter > targetScore) {
			losses++;
			totalReset();
		}
	}

    function resetHTML() {
        console.log("reset html");
        //$(".scoreKeeper").html(targetScore);
        $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
        $(".currentScore").html(counter);
        $(".crystalContainer").empty();
    }
        

    //page set up

    newGame();
    resetHTML();
    resetCrystal();


    function totalReset () {
		newGame();
		counter = 0;
		resetHTML();
		resetCrystal();
	}


    //Onclick

    $(document).on("click", ".crystal", crystalClick);

    // $(".crystal").click(function() {
    //     console.log("does onclick work?");
    //     crystalClick();

    // });
  

});