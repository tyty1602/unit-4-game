//variables

var targetScore = 0;
var Diamond = "";
var Pearl = "";
var Ruby = "";
var Emerald = "";
var scorekeeper = 0;
var win ="";
var lose = "";
var images =["assets/css/images/pearl.jpg", "assets/css/images/Ruby.jpg", "assets/css/images/emerald.jpg","assets/css/images/Diamond-thumbnail.jpg"]

//Sanity check
console.log("sanity check")

//NewGame

function newGame() {
    targetScore = Math.floor(Math.random()* 84 + 11);
    console.log("targetScore" + targetScore);
}

function resetCrystal() {
    for (var i =0; i< images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value",(Math.floor(Math.random() * 13) +1 ));
        crystal.attr("height", "100");
        $(".crystal").append(crystal)
    }
}

function crystalClick() {
    scoreKeeper+=parseInt($(this).attri("value"));
    console.log("does CC work?")
    $(".scorekeeper").html(scoreKeeper);
    if (scoreKeeper===targetScore) {
        wins++;
        totalReset();
    }
    else if (scoreKeeper>targetScore) {
        losses++;
        totalReset();
    }
}

function resetHTML() {
    $(".targetScore").html(targetScore);
}

//page set up

newGame();
resetHTML();
resetCrystal();

//HTML links

function resetHTML () {
    $("#targetScore").append(targetScore);
}

//Onclick
$(document).on("click", ".crystal", crystalClick);
