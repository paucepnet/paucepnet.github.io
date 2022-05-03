var gameOverSound = new Audio("./media/sounds/gameover-game-over.mp3");
var winSound = new Audio("./media/sounds/soundWin.mp3");
var containerScore = document.getElementById("containerScore");


function ejectScore() {

    let cookies = document.cookie;
    cookies = cookies.split(";");

    let cookieSplit,nombreCookie;
    /*

    let puntuacionSuperoir = false;

    a = 4;
    
    for(let i = 0; i < cookies.length; i++) {

        cookieSplit = cookies[i].split("=");

        nombreCookie = cookieSplit[0];

        if(nombreCookie == "puntuation") {
            if(ponits > cookieSplit[1]) {
                puntuacionSuperoir = true;
            }

        }


    }

    if(puntuacionSuperoir) {
        document.cookie = "puntuation=" + ponits;
    }
   


    puntuacionSuperoir = false;

    */

    //finalScore = true;


    //ajaxPuntuacion();

    if(soundButton.className == "buttons index sound on") {
        setTimeout(soundScore,1000);

    }
    

    containerScore.style.display = "block";

    putGif();

    putEnhorabuenaGameOver();

    putTextResult();

    
    
}

function soundScore() {
    if(ponits >= POINTSGAME) {

        winSound.play();
    }
    else {
        gameOverSound.play();
    }
}

function putGif() {
    let backgroundScore = document.getElementById("backgroundIndex");

    let entornoGif = backgroundScore.className.split(" ");
    let gif = document.getElementById("gif");

    switch(entornoGif[1]) {
        case DESERT:
            if(ponits >= POINTSGAME) {
                gif.style.width = "377.35px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/happy/happyMommy.gif')";
            }
            else {
                gif.style.width = "213.9px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/crying/cryMommy.gif')";
            }
            break;
        case DESERT2:
            if(ponits >= POINTSGAME) {
                gif.style.width = "377.35px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/happy/happyMommy.gif')";
            }
            else {
                gif.style.width = "213.9px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/crying/cryMommy.gif')";
            }
            break;
        case CIELO:
            if(ponits >= POINTSGAME) {
                gif.style.width = "377.35px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/happy/happyMommy.gif')";
            }
            else {
                gif.style.width = "213.9px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/crying/cryMommy.gif')";
            }
            break;
        case FOREST:
            if(ponits >= POINTSGAME) {
                gif.style.width = "392.15px";
                gif.style.backgroundImage = "url('./media/gif/monkey/happy/monkeyHappy.gif')";
            }
            else {
                gif.style.width = "353.98px";
                gif.style.backgroundImage = "url('./media/gif/monkey/cry/monkeyCry.gif')";
            }
            break;
        case BOOM:
            if(ponits >= POINTSGAME) {
                gif.style.width = "327.86px";
                gif.style.backgroundImage = "url('./media/gif/devil/happy/devilHappy.gif')";
            }
            else {
                gif.style.width = "251.889px";
                gif.style.backgroundImage = "url('./media/gif/devil/cry/devilCry.gif')";
            }
            break;
        case SPACE:
            if(ponits >= POINTSGAME) {
                gif.style.width = "341.88px";
                gif.style.backgroundImage = "url('./media/gif/alien/gif/happy/alienHappy.gif')";
            }
            else {
                gif.style.width = "303.03px";
                gif.style.backgroundImage = "url('./media/gif/alien/gif/cry/alienCry.gif')";
            }
            break;
        case ISLAND:
            if(ponits >= POINTSGAME) {
                gif.style.width = "377.35px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/happy/happyMommy.gif')";
            }
            else {
                gif.style.width = "213.9px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/crying/cryMommy.gif')";
            }
            break;
        case IGLOO:
            if(ponits >= POINTSGAME) {
                gif.style.width = "398.04px";
                gif.style.backgroundImage = "url('./media/gif/penguin/happy/penguinHappy.gif')";
            }
            else {
                gif.style.width = "363.372px";
                gif.style.backgroundImage = "url('./media/gif/penguin/cry/penguinCry.gif')";
            }
            break;
        case MOUNTAIN:
            if(ponits >= POINTSGAME) {
                gif.style.width = "377.35px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/happy/happyMommy.gif')";
            }
            else {
                gif.style.width = "213.9px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/crying/cryMommy.gif')";
            }
            break;
        case ROUTE:
            if(ponits >= POINTSGAME) {
                gif.style.width = "377.35px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/happy/happyMommy.gif')";
            }
            else {
                gif.style.width = "213.9px";
                gif.style.backgroundImage = "url('./media/gif/mummy/gif/crying/cryMommy.gif')";
            }
            break;


    }


}

function putEnhorabuenaGameOver () {

    let enhorabuenaGameOver = document.getElementById("enhorabuenaGameOver");

    if(ponits >= POINTSGAME) {
        enhorabuenaGameOver.style.backgroundImage = "url('./media/enhorabona.png')";
        enhorabuenaGameOver.style.width = "1000px";
        enhorabuenaGameOver.style.height = "125.94px";
    }
    else {
        enhorabuenaGameOver.style.backgroundImage = "url('./media/gameOver.png')";
        enhorabuenaGameOver.style.width = "800px";
        enhorabuenaGameOver.style.height = "122.37px";
    }
    


}

function putTextResult() {

    let textResult = document.getElementById("textResult");

    textResult.innerHTML = "</br>" + "SCORE: "+ ponits +" points" + "</br>";
 
    if(ponits >= POINTSGAME) {
        textResult.innerHTML +="Enhorabuena, has superado los " + POINTSGAME +" puntos";
    }
    else {
        textResult.innerHTML += "Game Over, no has superado los " + POINTSGAME +" puntos";
    }

}

let scoreRepeat = document.getElementById("scoreRepeat");

scoreRepeat.addEventListener("click",function() {
    
    reseatItems();
    
    iniciarJuego();

});

scoreHouse.addEventListener("click",function() {
    reseatItems();

    visibleItemsIndex();

});

function reseatItems() {

    //finalScore = false;

    

    //document.cookie = "puntuacion=" + ponits;

    //saveStatistic(ponits);

    

    //ajaxPuntuacion(points);


    containerScore.style.display = "none";
    ponits = 0;
    answerClick = false;

    let arrayAnswers = document.getElementsByClassName("fraseQuestion answer");

    for(let i = 0; i < arrayAnswers.length; i++) {
        arrayAnswers[i].className = "fraseQuestion answer";
    }

    let answerPanel = document.getElementsByClassName("answerPanel");

    for(let i = 0; i < answerPanel.length; i++) {
        answerPanel[i].className = "answerPanel";
    }

    if(soundButton.className == "buttons index sound on") { 
        soundtranck.play();
        soundtranck.currentTime = 0;

    }


}

function visibleItemsIndex() {

    for(let i = 0; i < indexItems.length; i++) {
        indexItems[i].style.display = "block";
    }
}

/*
function ajaxPuntuacion() {
    let pointsAjax = ponits;

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET","ajaxPuntuacion.php?puntuation="+pointsAjax,true);
    xhttp.send();
}
*/