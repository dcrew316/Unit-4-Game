$(document).ready(function(){

var Random=Math.floor(Math.random()*101+19)
$("#randomNumber").text(Random);
$("#randomNumber").css("color", "rgb(238, 39, 195");

var num1=Math.floor(Math.random()*11+1)
var num2=Math.floor(Math.random()*11+1)
var num3=Math.floor(Math.random()*11+1)
var num4=Math.floor(Math.random()*11+1)
var userScore=0;
var wins=0;
var losses=0;

$("#numberOfWins").text(wins);
$("#numberOfWins").css("color", "rgb(238, 39, 195");
$("#numberOfLosses").text(losses);
$("#numberOfLosses").css("color", "rgb(238, 39, 195");

$("#red").on("click", function(){
    userScore=userScore + num1;
    console.log("New userScore=" + userScore);
    $("#totalScore").text(userScore);
        if(userScore === Random){
            winner();
        }
        else if(userScore > Random){
            loser();
        }
})

$("#blue").on("click", function(){
    userScore=userScore + num2;
    console.log("New userScore=" + userScore);
    $("#totalScore").text(userScore);
        if(userScore === Random){
            winner();
        }
        else if(userScore > Random){
            loser();
        }
})

$("#purple").on("click", function(){
    userScore=userScore + num3;
    console.log("New userScore=" + userScore);
    $("#totalScore").text(userScore);
        if(userScore === Random){
            winner();
        }
        else if( userScore > Random){
            loser();
        }
})

$("#green").on("click", function(){
    userScore=userScore + num4;
    console.log("New userScore=" + userScore);
    $("#totalScore").text(userScore);
        if(userScore === Random){
            winner();
        }
        else if(userScore > Random){
            loser();
        }
})

$("#totalScore").css("color", "rgb(238, 39, 195");

function winner(){
    alert("Winner Winner Chicken Dinner!");
    wins++;
    $("#numberOfWins").text(wins);
    reset();
}

function loser(){
    alert("Good Mathing Loser!")
    losses++;
    $("numberOfLosses").text(losses);
    reset();
}

function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random);
    $("#randomNumber").text(Random);
    num1=Math.floor(Math.random()*11+1);
    num2=Math.floor(Math.random()*11+1);
    num3=Math.floor(Math.random()*11+1);
    num4=Math.floor(Math.random()*11+1);
    userScore=0
    $("#totalScore").text(userScore);
}
})