let homeScoreDisplay = document.getElementById("homescoredisplay");
let guestScoreDisplay = document.getElementById("guestscoredisplay");
let count = 0;

function increment1() {
    count += 1;
    homeScoreDisplay.textContent = count;
}
document.getElementById("home1").onclick = function() {increment1()};

function increment2() {
    count += 2;
    homeScoreDisplay.textContent = count;
}
document.getElementById("home2").onclick = function() {increment2()};

function increment3() {
    count += 3;
    homeScoreDisplay.textContent = count;
}
document.getElementById("home3").onclick = function() {increment3()};
 
//guest team score functions 

let countGuest = 0;

function incrementGuest1() {
    countGuest += 1;
    guestScoreDisplay.textContent = countGuest;
}
document.getElementById("guest1").onclick = function() {incrementGuest1()};

function incrementGuest2() {
    countGuest += 2;
    guestScoreDisplay.textContent = countGuest;
}
document.getElementById("guest2").onclick = function() {incrementGuest2()};

function incrementGuest3() {
    countGuest += 3;
    guestScoreDisplay.textContent = countGuest;
}
document.getElementById("guest3").onclick = function() {incrementGuest3()};

function newGame() {
 count, countGuest;
    count = 0;
    countGuest = 0;
    guestScoreDisplay.textContent = count;
    homeScoreDisplay.textContent = countGuest;
    
    }
    document.getElementById("newgame").onclick = function() {newGame()};
    