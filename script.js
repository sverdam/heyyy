document.addEventListener('DOMContentLoaded', function() {
    let bell = new Audio('bell.mp3');
    bell.volume = 0.2;
    bell.play();

    setTimeout(function() {
        bell.pause();
    }, 3000);
});

const text = document.getElementById("text");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const celebrate = document.getElementById("celebrate");
const notif = document.getElementById("notif");
const mail = document.getElementById("mail");
const fakeWindow = document.getElementById("fakeWindow");
let sfxNo = new Audio("laserShoot.wav");
sfxNo.volume=0.1;
let sfxYes = new Audio("click.m4a");
sfxYes.volume=0.1;

let sfxYippe = new Audio("yippe.mp3");
sfxYippe.volume=0.1;

let ogSize = 20;

yesBtn.addEventListener("click", function () {
    text.innerText = " ";
    yesBtn.style.fontSize = `20px`; 
    yesBtn.style.transition = "font-size 0.3s"; 
    sfxYes.currentTime = 0;
    sfxYes.play();
    sfxYippe.play();
    setTimeout(() => {
        fakeWindow.style.display = "none"
        celebrate.style.display = "flex";
    }, 200);
});

noBtn.addEventListener("click", function () {
    const sad = ["WDYM? >:(", "think again", "u sure?", "lol try again", "erm", "fake ass","me when i lie","ts jst pmo ngl","okay ya pues jaja"];
    let randomIndex = Math.floor(Math.random() * 9);
    text.innerText = sad[randomIndex];
    ogSize += 10;
    yesBtn.style.fontSize = `${ogSize}px`;
    yesBtn.style.transition = "transform 0.3s, font-size 0.3s";
    sfxNo.currentTime = 0;
    sfxNo.play();
});

window.onload = function() {
    document.querySelector('.neutral').style.display = 'block';
    document.querySelector('.excited').style.display = 'none';
};

function showExcited() {
    document.querySelector('.excited').style.display = 'block';
    document.querySelector('.neutral').style.display = 'none';
}

function showNeutral() {
    document.querySelector('.excited').style.display = 'none';
    document.querySelector('.neutral').style.display = 'block';
}

mail.addEventListener("click", function(){
    sfxYes.currentTime = 0;
    sfxYes.play();
    notif.style.display = "none";
    fakeWindow.style.display = "block";
});

