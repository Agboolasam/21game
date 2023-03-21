let welCome = document.getElementById("wel-come");
let logIn = document.getElementById("log-in");
let userName = document.getElementById("user-name");
let userEl = document.getElementById("usr-nm");
let balVal = document.getElementById("balance");
let errMsg = document.getElementById("errmsg");
let gamePage = document.getElementById("game-page");
let startGame = document.getElementById("start-game");
let balLevel = 100;

function proceed() {
    welCome.style.display = "none";
    logIn.style.display = "block"
}

function play() {
    if (userEl.value.length != 0) {
        userName.innerText = "Username:" + " " + userEl.value;
        balVal.innerText = "Balance:" + " " + balLevel;
        logIn.style.display = "none";
        startGame.style.display = "block";
        document.getElementById("gamebox").style.height = "200px auto";
    } else {
        errMsg.style.display = "block";
    }
}

function confirmmsg() {
    confirm("do you want to proceed?");
    play();
}

function startgame() {
    startGame.style.display = "none";
    gamePage.style.display = "block";

}
// function to generate random number between 1 and 14