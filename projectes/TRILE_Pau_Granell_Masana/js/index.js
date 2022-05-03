//var soundtranck = new Audio("../media/sounds/alexander-nakarada-superepic.mp3");


const SOUND_ON = "on", SOUND_OFF = "off";

var cupButton = document.getElementById("cupButton");

var backgroundButton = document.getElementById("backgroundButton");

var buttonPlay = document.getElementById("play");

var informationButton = document.getElementById("informationButton");

var indexItems = document.getElementsByClassName("index");

cupButton.addEventListener("click",hiddenItems);


backgroundButton.addEventListener("click",hiddenItems);

buttonPlay.addEventListener("click",hiddenItems);

informationButton.addEventListener("click",function() {
    hiddenItems();
    ejectInformation();
});


function hiddenItems() {
    
    for(let i = 0; i < indexItems.length; i++) {
        indexItems[i].style.display = "none";
    }

    let a = 4;


}

//SOUND

var soundButton = document.getElementById("soundButton");
soundButton.addEventListener("click",sound);

var soundFirstTime = true;

function sound() {
    let classSound = soundButton.className;
    classSound = classSound.split(" ");
    classSound = classSound[classSound.length - 1];
    switch(classSound) {
        case SOUND_ON:
            //soundButton.style.backgroundImage = "url('../media/soundOffButton.png')";
            soundButton.className = "buttons index sound off";
            soundtranck.muted = true;
            break;
        case SOUND_OFF:
            //soundButton.style.backgroundImage = "url('../media/soundOnButton.png')";
            soundButton.className = "buttons index sound on";   
            /*         
            if(soundFirstTime) {
                soundFirstTime = false;
                soundtranck.play();
                soundtranck.loop = true;
            }
            */
            soundtranck.muted = false;
            break;

    }

}

//Cup
var chooseBack = document.getElementById("chooseBack");
chooseBack.addEventListener("click",visibleItemsIndex);

//Background 
var backgroundBack = document.getElementById("backgroundBack");

backgroundBack.addEventListener("click",visibleItemsIndex);

var buttonBackInformation = document.getElementById("buttonBackInformation");

buttonBackInformation.addEventListener("click",visibleItemsIndex);

//INFORMATION

//Statistic

/*

var statisticButton = document.getElementById("statisticButton");

statisticButton.addEventListener("click",hiddenItems);

var buttonBackStatistic = document.getElementById("buttonBackStatistic");

buttonBackStatistic.addEventListener("click",visibleItemsIndex);

*/


function ejectIndex() {
    visibleItemsIndex();
}

function visibleItemsIndex() {

    for(let i = 0; i < indexItems.length; i++) {
        indexItems[i].style.display = "block";
    }

}

