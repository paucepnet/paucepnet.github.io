const DERECHA_INTRO = "derecha",IZQUIERDA_INTRO = "izquierda";

var finalScore = false;

var containerIntro = document.getElementById("containerIntro");

var soundtranck = new Audio("./media/sounds/alexander-nakarada-superepic.mp3");


var vaso1Intro = document.getElementById("vasoIntro1");
var vaso2Intro = document.getElementById("vasoIntro2");
var titleGame = document.getElementById("titleGame");

vaso1Intro.style.left = 10 + "px";
vaso2Intro.style.left = 1930 + "px";

inicarIntro();

function inicarIntro() {
   
   
   //document.cookie = "puntuation=''";

    moveIntro(vaso1Intro,DERECHA_INTRO,1930);
    
}

function moveIntro (vaso,direccion,punto) {

    switch(direccion) {
        case DERECHA_INTRO:
            moveIntroDerecha(vaso,punto);
            break;
        case IZQUIERDA_INTRO:
            moveIntroIzquierda(vaso,punto);
            break;

    }

}

async function moveIntroDerecha (vaso,punto) {
    let llegar = false;
    do {
        let x = parseInt(vaso.style.left);
        x += 13;
        vaso.style.left = x + "px";

        await sleepIntro(1);

        if(parseInt(vaso.style.left) >= parseInt(punto)) {
            vaso.style.left = punto;
            llegar = true;
        }

    } while(!llegar);

    moveIntro(vaso2Intro,IZQUIERDA_INTRO,-200);

}

async function moveIntroIzquierda (vaso,punto) {
    let llegar = false;
    do {
        let x = parseInt(vaso.style.left);
        x -= 13;
        vaso.style.left = x + "px";

        await sleepIntro(1);

        if(parseInt(vaso.style.left) <= parseInt(punto)) {
            vaso.style.left = punto;
            llegar = true;
        }

    } while(!llegar);

    ejectTitleGame();

}

let titleGameInterval;


function ejectTitleGame () {
    titleGame.style.transform = "translate(-50%,-50%) scale(1)";
    titleGame.style.visibility = "visible";
    titleGame.style.height = 44.8 + "px";
    titleGame.style.top = 50 + "%";
    titleGame.style.left = 50 + "%";


    titleGameInterval = setInterval(agrandarTitleGame,1);

}

function agrandarTitleGame() {
    //titleGame.style.transform = ""
    let scale = titleGame.style.transform;
    scale = parseFloat(scale.substring(28));
    scale += 0.05;
    titleGame.style.transform = "translate(-50%,-50%) scale("+scale+")";
    if(scale == 10) {
        clearInterval(titleGameInterval);
        titleGame.className = titleGame.className + " click";   
    }
}

titleGame.onmouseover = function() {mouseOverTitleGame()};

function mouseOverTitleGame() {
    if(titleGame.className == "titleGame click") {
        titleGame.style.transform = "translate(-50%,-50%) scale(11.5)";
    }
    
}

titleGame.onmouseout = function() {mouseOutTitleGame()};

function mouseOutTitleGame() {
    if(titleGame.className == "titleGame click") {
        titleGame.style.transform = "translate(-50%,-50%) scale(10)";
    }


}

titleGame.addEventListener("click",titleGameClick);

function titleGameClick() {
    if(titleGame.className == "titleGame click") {
        soundtranck.play();
        soundtranck.loop = true;

        hiddenItemsIntro();

    }
    
}

function hiddenItemsIntro() {
    containerIntro.style.display = "none";

    ejectIndex();

}


function sleepIntro(ms) {
    return new Promise (resolve => setTimeout(resolve,ms));
}