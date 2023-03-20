let welCome = document.getElementById("wel-come");
let logIn = document.getElementById("log-in");
let userName = document.getElementById("user-name");
let userEl = document.getElementById("usr-nm");
let balVal = document.getElementById("balance");
let errMsg = document.getElementById("errmsg");
let balLevel = 100;


function proceed() {
    welCome.style.display = "none";
    logIn.style.display = "block"

}

function play() {
    if (userEl.value.length != 0) {
        userName.innerText = "Username:" + " " + userEl.value;
        //console.log(userName.innerText);
        balVal.innerText = "Balance:" + " " + balLevel;
    } else {
        errMsg.style.display = "block";
    }
}

function confirmmsg() {

    confirm("do you want to proceed?");
    play();

}