var homeScore = 0
var awayScore = 0
console.log("it works");

home1Id = document.getElementById("homeScore");
away1Id = document.getElementById("awayScore");

function homeAdd1(){
    homeScore += 1;
    home1Id.textContent = String(homeScore);
}
function homeAdd2(){
    homeScore += 2;
    home1Id.textContent = String(homeScore);
}
function homeAdd3(){
    homeScore += 3;
    home1Id.textContent = String(homeScore);
}
function awayAdd1(){
    awayScore += 1;
    away1Id.textContent = String(awayScore);
}
function awayAdd2(){
    awayScore += 2;
    away1Id.textContent = String(awayScore);
}
function awayAdd3(){
    awayScore += 3;
    away1Id.textContent = String(awayScore);
}