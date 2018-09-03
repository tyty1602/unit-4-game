//variables

var targetScore = "";
var Diamond = "";
var Pearl = "";
var Ruby = "";
var Emerald = "";
var scorekeeper = "";
var win ="";
var lose = "";

//Sanity check
console.log("sanity check")

//NewGame

function newGame() {
    targetScore = Math.floor(Math.random()* 84 + 11);
    console.log(targetScore);
}

(newGame);

//HTML links

function resetHTML () {
    $("#targetScore").append(targetScore);
}

//Onclick
$(document).on("click", ".crystal", crystalClick);
