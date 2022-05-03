//var s1 = document.getElementById("s1").getBoundingClientRect();
/*
var s1BoundingClient = document.getElementById("s1").getBoundingClientRect();
var s1 = document.getElementById("s1");

var topS1 = s1BoundingClient.top;
var leftS1 = s1BoundingClient.left;
var width = s1.clientWidth;
var height = s1.clientHeight;

let a = 4;

document.getElementById("resultado").innerHTML = topS1+"  a  "+leftS1+"   a  "+width+"  a   "+height;
//document.getElementById("resultado").innerHTML = topRedBall+"  a  "+leftRedBall+"   a  "+widthRedBall+"  a   "+heightRedBall;
*/
const POINTSGAME = 350;
const POINTS_CUP = 50;
const POINT_QUESTION = 50;
//const PUNTOS_INICIO = 0;
const PUNTOS_INICIO = 0;

const TIEMPO = 98;
//const TIEMPO = 60;

const SLEEP_THREE = 131.26;

const ARRIBA = "top", ABAJO = "abajo", IZQUIERDA = "left", DERECHA = "right";

var pitidoSound = new Audio("./media/sounds/pitido.mp3");
var soundtranck2 = new Audio("./media/sounds/punch-deck-brazilian-street-fight.mp3");
var success = new Audio("./media/sounds/mixkit-unlock-game-notification-253.wav");
var error = new Audio("./media/sounds/zapsplat_multimedia_game_sound_error_incorrect_001_30721.mp3");


//var soundButton = document.getElementById("soundButton");

var vaso1 = document.getElementById("vaso1");
var vaso2 = document.getElementById("vaso2");
var vaso3 = document.getElementById("vaso3");


var pa1 = document.getElementById("pa1");
var pa2 = document.getElementById("pa2");
var pa3 = document.getElementById("pa3");
var pb1 = document.getElementById("pb1");
var pb2 = document.getElementById("pb2");
var pb3 = document.getElementById("pb3");
var pc1 = document.getElementById("pc1");
var pc2 = document.getElementById("pc2");
var pc3 = document.getElementById("pc3");

var icon = document.getElementById("icon");

var progressBar = document.getElementById("progressBar");

var progressBarContador = document.getElementById("progressBarContador");


var sa1 = document.getElementById("sa1");
var sa2 = document.getElementById("sa2");
var sa3 = document.getElementById("sa3");

var sb1 = document.getElementById("sb1");
var sb2 = document.getElementById("sb2");
var sb3 = document.getElementById("sb3");

var sc1 = document.getElementById("sc1");
var sc2 = document.getElementById("sc2");
var sc3 = document.getElementById("sc3");






/*
vaso1.style.top = 50 + "%";
vaso1.style.left = 25 + "%";

vaso2.style.top = 50 + "%";
vaso2.style.left = 75 + "%";
*/

var buttonPlay = document.getElementById("playGame");
buttonPlay.addEventListener("click",iniciarJuego);

function iniciarJuego() {
    

    if(soundButton.className == "buttons index sound on") {
        soundtranck.pause();
        soundtranck2.play();
        soundtranck2.currentTime = 0;
        soundtranck2.loop = true;
    }
    

    cuentaAtras();

    setTimeout(visibleItemGames,4050);
    
    
}

function visibleItemGames() {

    valoresPorDefectoItems();

    let itemsGames = document.getElementsByClassName("contador");
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "block";
    }

    itemsGames = document.getElementsByClassName("points");
    itemsGames[1].innerHTML = PUNTOS_INICIO + " punts";
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "block";
    }

    itemsGames = document.getElementById("divObjetivo");
    itemsGames.style.display = "block";

    itemsGames = document.getElementsByClassName("divPrincipal");
    itemsGames[0].style.display = "block";

    
    itemsGames = document.getElementsByClassName("vasoDiv dos");
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "block";
    }
    


    itemsGames = document.getElementsByClassName("puntoRefercia dos");
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "block";
    }
    
    icon.style.display = "block";

    itemsGames = document.getElementsByClassName("sectores dos");
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "block";
    }

    let cupButton = document.getElementById("cupButton");
    let colorCupButtonSplit = cupButton.className.split(" ");

    let colorCupButton = colorCupButtonSplit[2];

    switch(colorCupButton) {
        case "blue":
            vaso1.style.backgroundImage = "url('./media/plasticCup/cupBlue.png')";
            vaso2.style.backgroundImage = "url('./media/plasticCup/cupBlue.png')";
            vaso2.style.backgroundImage = "url('./media/plasticCup/cupBlue.png')";
            break;
        case "green":
            vaso1.style.backgroundImage = "url('./media/plasticCup/cupGreen.png')";
            vaso2.style.backgroundImage = "url('./media/plasticCup/cupGreen.png')";
            vaso3.style.backgroundImage = "url('./media/plasticCup/cupGreen.png')";
            break;
        case "lile":
            vaso1.style.backgroundImage = "url('./media/plasticCup/cupLilac.png')";
            vaso2.style.backgroundImage = "url('./media/plasticCup/cupLilac.png')";
            vaso3.style.backgroundImage = "url('./media/plasticCup/cupLilac.png')";
            break;
        case "orange":
            vaso1.style.backgroundImage = "url('./media/plasticCup/cupOrange.png')";
            vaso2.style.backgroundImage = "url('./media/plasticCup/cupOrange.png')";
            vaso3.style.backgroundImage = "url('./media/plasticCup/cupOrange.png')";
            break;
        case "red":
            vaso1.style.backgroundImage = "url('./media/plasticCup/cupRed.png')";
            vaso2.style.backgroundImage = "url('./media/plasticCup/cupRed.png')";
            vaso3.style.backgroundImage = "url('./media/plasticCup/cupRed.png')";
            break;
        case "yellow":
            vaso1.style.backgroundImage = "url('./media/plasticCup/cupYellow.png')";
            vaso2.style.backgroundImage = "url('./media/plasticCup/cupYellow.png')";
            vaso3.style.backgroundImage = "url('./media/plasticCup/cupYellow.png')";
            break;

    }


    jugar();


}

function valoresPorDefectoItems() {

    escoger = false;
    finalizado = false;
    levantarVasosBoolean = true;
    
    threeCups = false;
    threeCupsFirst = true;

    let divPrincipal = document.getElementsByClassName("divPrincipal");
    divPrincipal[0].style.width = "700px";

    icon.style.left= 25 + "%";

    //VASOS
    vaso1.style.top = 33.333 + "%";
    vaso1.style.left = 25 + "%";

    vaso2.style.top = 33.333 + "%";
    vaso2.style.left = 75 + "%";


    // PUNTOS DE REFERENCIA
    pa1.style.top = 16.666 + "%";
    pa1.style.left = 25 + "%";

    pa2.style.top = 16.666 + "%";
    pa2.style.left = 75 + "%";

    pb1.style.top = 50 + "%";
    pb1.style.left = 25 + "%";

    pb2.style.top = 50 + "%";
    pb2.style.left = 75 + "%";

    pc1.style.top = 83.332 + "%";
    pc1.style.left = 25 + "%";

    pc2.style.top = 83.332 + "%";
    pc2.style.left = 75 + "%";

    //SECTORES
    sa1.style.top = 0 + "%";
    sa1.style.left = 0 + "%";

    sa2.style.top = 0 + "%";
    sa2.style.left = 50 + "%";

    sb1.style.top = 33.333 + "%";
    sb1.style.left = 0 + "%";

    sb2.style.top = 33.333 + "%";
    sb2.style.left = 50 + "%";

    sc1.style.top = 66.666 + "%";
    sc1.style.left = 0 + "%";

    sc2.style.top = 66.666 + "%";
    sc2.style.left = 50 + "%";


}

async function cuentaAtras() {    
    let arrayCuentaAtras = document.getElementsByClassName("cuentaAtras");

    for(let i = 0; i < arrayCuentaAtras.length; i++) {
        arrayCuentaAtras[i].style.display = "block";
        await sleep(1000);
        arrayCuentaAtras[i].style.display = "none";
        if(i == (arrayCuentaAtras.length - 2) && soundButton.className == "buttons index sound on") {
            pitidoSound.play();
        }
    }


}


//iniciarJuego();

var escoger = false;
var finalizado = false;
var levantarVasosBoolean = true;

var threeCups = false;
var threeCupsFirst = true;

var ponits = 0;
var stringPoints = document.getElementById("gamePoints");



async function contador() {
    progressBar.style.width = 11.6 + "px";
    //98
    for(let i = 0; i < TIEMPO; i++) {
        await sleep (1000);
        let x = parseInt(progressBar.style.width);
        x += (700/90);
        progressBar.style.width = x + "px";

        //66
        if(i == 66) {
            threeCups = true;
        }
    }

    finalizado = true;

}






async function jugar() {

    contador();

    await sleep(1000);

    do {

        
        if(levantarVasosBoolean) {
            vaso1.style.cursor = "context-menu";
            vaso2.style.cursor = "context-menu";
            if(threeCups && !threeCupsFirst) {
                vaso3.style.cursor = "context-menu";
            }

            levantarVasosBoolean = false;
            escoger = false;

            await sleep(500);
            move(vaso1,pb1,ABAJO);
            move(vaso2,pb2,ABAJO);
            if(threeCups && !threeCupsFirst) {
                move(vaso3,pb3,ABAJO);
            }
            await sleep(500);

            icon.style.visibility = "hidden";

            if(threeCups && threeCupsFirst) {
                threeCupsFirst = false;
                changeItems();
                await sleep(500);
            }

            let n = Math.floor(Math.random() * (22 -5)) + 5;

            if(!threeCups) {
                moveTwoCup(n);
            }
            else {
                moveThreeCup(n);
            }
            
        }
        
        await sleep(500);

    } while(!finalizado);
    
    
}
/*
function clickVaso1(){
    let a = 4;
}
*/

vaso1.addEventListener("click",function(){
    if(escoger) {
        escoger = false;
        levantarVasos();
        levantarVasosBoolean = true;
        ponits+=POINTS_CUP;
        stringPoints.innerHTML = ponits + " punts";

        if(soundButton.className == "buttons index sound on") {
            success.play();
        }

        if(finalizado) {
            hiddenItemsGame();
            
        }
    }
    
});

vaso2.addEventListener("click",function(){
    if(escoger) {
        escoger = false;
        levantarVasos();
        levantarVasosBoolean = true;

        if(soundButton.className == "buttons index sound on") {
            error.play();
        }

        
        if(finalizado) {
            hiddenItemsGame();
        }
    }
    
});

vaso3.addEventListener("click",function(){
    if(escoger) {
        escoger = false;
        levantarVasos();
        levantarVasosBoolean = true;

        if(soundButton.className == "buttons index sound on") {
            error.play();
        }

        
        if(finalizado) {
            hiddenItemsGame();
        }
    }
    
});


function levantarVasos() {
    icon.style.left = vaso1.style.left;
    icon.style.visibility = "visible";
    vaso1.style.top = 33.333 + "%";
    vaso2.style.top = 33.333 + "%";
    vaso3.style.top = 33.333 + "%";
    
}

//forr(4);



async function moveTwoCup(rep) {

    let n;
    let nAnterior =0;
    
    for(let i = 0; i < rep; i++) {

        n = bucle(nAnterior);
        nAnterior = n;
        if(n!= 2) {
            await sleep(400);
        }
        else {
            await sleep(250);
            let rLR = Math.floor(Math.random() * 2);//5
            for(let i = 0; i < rLR; i++) {
                opcion2();
                await sleep(250);
            }
        }

    }

    escoger = true;
    //cursor: pointer
    vaso1.style.cursor = "pointer";
    vaso2.style.cursor = "pointer";
}


/*
async function bucles() {
    let finalizar = false;
    do {
        n = bucle();
        if(n!= 2) {
            await sleep(400);
        }
        else {
            await sleep(250);
            let r = Math.floor(Math.random() * 3);
            for(let i = 0; i < r; i++) {
                opcion2();
                await sleep(250);
            }
        }
        
    }while(!finalizar)

}
*/
function bucle(nAnterior) {
    
    let n = Math.floor(Math.random() * 3);
    
    if(n == 2 && n == nAnterior) {
        n = Math.floor(Math.random() * 2);
    }
    
    
    switch(n) {
        case 0: //ARRIBA 
            opcion0();
            break;
        case 1: //ABAJO 
            opcion1();
            break;
        case 2: //Izq
            opcion2();
            break;
    }

    return n;

}

async function opcion0() {
    //Opcion ARRIBA
    //Si el rojo esta en la IZQUIERDA    

    if(parseInt(vaso1.style.left.substring(0,vaso1.style.left.length -1)) <= 50) {

        move(vaso1,pa1,ARRIBA);
        move(vaso2,pc2,ABAJO);

        await sleep(100);

        move(vaso1,pa2,DERECHA);
        move(vaso2,pc1,IZQUIERDA);

        await sleep(100);

        move(vaso1,pb2,ABAJO);
        move(vaso2,pb1,ARRIBA);

        await sleep(100);



    }
    //Si el rojo esta en la DERECHA
    else {
        move(vaso1,pa2,ARRIBA);
        move(vaso2,pc1,ABAJO);

        await sleep(100);

        move(vaso1,pa1,IZQUIERDA);
        move(vaso2,pc2,DERECHA);

        await sleep(100);

        move(vaso1,pb1,ABAJO);
        move(vaso2,pb2,ARRIBA);


    }



}

async function opcion1() {

    //Opcion ABAJO
    //Si el rojo esta en la IZQUIERDA    

    if(parseInt(vaso1.style.left.substring(0,vaso1.style.left.length -1)) <= 50) {

        move(vaso1,pc1,ABAJO);
        move(vaso2,pa2,ARRIBA);
    
        await sleep(100);
    
        move(vaso1,pc2,DERECHA);
        move(vaso2,pa1,IZQUIERDA);
    
        await sleep(100);
    
        move(vaso1,pb2,ARRIBA);
        move(vaso2,pb1,ABAJO);

        let a = 4;


    }
     //Si el rojo esta en la DERECHA
    else {

        move(vaso1,pc2,ABAJO);
        move(vaso2,pa1,ARRIBA);
    
        await sleep(100);
    
        move(vaso1,pc1,IZQUIERDA);
        move(vaso2,pa2,DERECHA);
    
        await sleep(100);
    
        move(vaso1,pb1,ARRIBA);
        move(vaso2,pb2,ABAJO);

    }
   

}

async function opcion2() {

    //let n = Math.floor(Math.random() * 3) + 1;

    if(parseInt(vaso1.style.left.substring(0,vaso1.style.left.length -1)) <= 50) {
        //Hacia la DERECHA

        move(vaso1,pb2,DERECHA);
        move(vaso2,pb1,IZQUIERDA);

    }
    else {
        //Hacia la IZQUIERDA
        move(vaso1,pb1,IZQUIERDA);
        move(vaso2,pb2,DERECHA);
    }
}

/*
async function rightLeftBucle() {
    let finalizar = false;
    do {
        rightLeft();
        await sleep(1700);
    }while(!finalizar);
    
}


async function rightLeft() {
    move(vaso1,pb2,DERECHA);
    move(vaso2,pb1,IZQUIERDA);

    await sleep(820);

    move(vaso1,pb1,IZQUIERDA);
    move(vaso2,pb2,DERECHA);

    await sleep(820);

}

*/


async function move(vaso,punto,direccion) {
    let llegar = false;    
    
    switch(direccion) {
        case ARRIBA:
            moveTop(vaso,punto);
            break;
        case ABAJO:
            moveDown(vaso,punto);
            break;
        case IZQUIERDA:
            moveLeft(vaso,punto);
            break;
        case DERECHA:
            moveRight(vaso,punto);
            break;
    }


}



async function moveTop(vaso,punto) {
    let llegar = false;
    do {

        let y = parseInt(vaso.style.top.substring(0,vaso.style.top.length -1));
        y -=  2;
        vaso.style.top = y + "%";

        await sleep(1);

        if(parseInt(vaso.style.top.substring(0,vaso.style.top.length -1)) <= parseInt(punto.style.top.substring(0,punto.style.top.length - 1))+2) {
            vaso.style.top = punto.style.top;
            llegar = true;
        }

    } while(!llegar);
    

}

async function moveDown(vaso,punto) {
    let llegar = false;
    do {

        let y = parseInt(vaso.style.top.substring(0,vaso.style.top.length -1));
        y +=  2;
        vaso.style.top = y + "%";

        await sleep(1);

        if(parseInt(vaso.style.top.substring(0,vaso.style.top.length -1)) >= parseInt(punto.style.top.substring(0,punto.style.top.length - 1))) {
            vaso.style.top = punto.style.top;
            llegar = true;
        }

    } while(!llegar);
    

}

async function moveRight(vaso,punto) {
    let llegar = false;
    do {

        let x = parseInt(vaso.style.left.substring(0,vaso.style.left.length -1));
        //x +=  2;
        x +=  2;
        vaso.style.left = x + "%";

        await sleep(1);

        if(parseInt(vaso.style.left.substring(0,vaso.style.left.length -1)) >= parseInt(punto.style.left.substring(0,punto.style.left.length - 1))) {
            vaso.style.left = punto.style.left;
            llegar = true;
        }

    } while(!llegar);
    

}


async function moveLeft(vaso,punto) {
    let llegar = false;
    do {

        let x = parseInt(vaso.style.left.substring(0,vaso.style.left.length -1));
        //x -=  2;
        x -=  2;
        vaso.style.left = x + "%";

        await sleep(1);

        if(parseInt(vaso.style.left.substring(0,vaso.style.left.length -1)) <= parseInt(punto.style.left.substring(0,punto.style.left.length - 1))) {
            vaso.style.left = punto.style.left;
            llegar = true;
        }

    } while(!llegar);
    

}





/*
async function moverRojo(vaso1) {
    let llegar = false;
    let top_x;
    do {
        top_x = parseInt(vaso1.style.top.substring(0,vaso1.style.top.length -1));
        top_x -=  2;
        vaso1.style.top = top_x + "%";

        await sleep(30);

        if(parseInt(vaso1.style.top.substring(0,vaso1.style.top.length -1)) <= 16.666) {
            llegar = true;
        }

    } while(!llegar)

}
*/


/*
var top_x = parseInt(vaso1.style.top.substring(0,vaso1.style.top.length -1));
top_x +=  30;
vaso1.style.top = top_x + "%";

topRedBall = vaso1.top;
leftRedBall = vaso1BoundingClient.left;

document.getElementById("resultado").innerHTML = topRedBall+"  a  "+leftRedBall+"   a  "+widthRedBall+"  a   "+heightRedBall;



*/
function changeItems() {
    let divPrincipal = document.getElementsByClassName("divPrincipal");
    divPrincipal[0].style.width = "1050px";

    //Cambiar vasos

    vaso1.style.top = 50 + "%";
    vaso1.style.left = 16.666 + "%";

    vaso2.style.top = 50 + "%";
    vaso2.style.left = 50 + "%";
    
    vaso3.style.display = "block";
    vaso3.style.top = 50 + "%";
    vaso3.style.left = 83.3333 + "%";

    //Icono

    //icon.style,left = 16.666 + "%";

    //Sectores

    sa1.style.left = 0 + "%";
    sa1.style.top = 0 + "%";
    sa1.style.width = 33.333 + "%";  

    sa2.style.left = 33.333 + "%";
    sa2.style.top = 0 + "%";
    sa2.style.width = 33.333 + "%";  

    sa3.style.display = "block";
    sa3.style.width = 33.333 + "%";  

    sb1.style.left = 0 + "%";
    sb1.style.top = 33.333 + "%";
    sb1.style.width = 33.333 + "%";  

    sb2.style.left = 33.333 + "%";
    sb2.style.top = 33.333 + "%";
    sb2.style.width = 33.333 + "%";  

    sb3.style.display = "block";
    sb3.style.width = 33.333 + "%";  



    sc1.style.left = 0 + "%";
    sc1.style.top = 66.666 + "%";
    sc1.style.width = 33.333 + "%";  

    sc2.style.left = 33.333 + "%";
    sc2.style.top = 66.666 + "%";
    sc2.style.width = 33.333 + "%";  

    sc3.style.display = "block";
    sc3.style.width = 33.333 + "%";  



    //Puntos de referencia

    pa1.style.left = 16.666 + "%";
    pa1.style.top = 16.666 + "%";

    pa2.style.left = 50 + "%";
    pa2.style.top = 16.666 + "%";

    pa3.style.display = "block";
    pa3.style.left = 83.333 + "%";
    pa3.style.top = 16.666 + "%";

    pb1.style.left = 16.666 + "%";
    pb1.style.top = 50 + "%";

    pb2.style.left = 50 + "%";
    pb2.style.top = 50 + "%";

    pb3.style.display = "block";
    pb3.style.left = 83.333 + "%";
    pb3.style.top = 50 + "%";

    pc1.style.left = 16.666 + "%";
    pc1.style.top = 83.33 + "%";

    pc2.style.left = 50 + "%";
    pc2.style.top = 83.33 + "%";

    pc3.style.display = "block";
    pc3.style.left = 83.33 + "%";
    pc3.style.top = 83.33 + "%";

    

}

async function moveThreeCup(rep) {

    for(let i = 0; i < rep; i++) {
        
        let n =  Math.floor(Math.random() * 4);
        
        switch(n) {
            case 0:
                opcionARRIBA();
                break;
            case 1:
                opcionABAJO();
                break;
            case 2:
                opcionIzquieda();
                break;
            case 3:
                opcionDERECHA();
                break;


        }


        await sleep(600);

    }

    escoger = true;
    //cursor: pointer
    vaso1.style.cursor = "pointer";
    vaso2.style.cursor = "pointer";
    vaso3.style.cursor = "pointer";


}

async function opcionARRIBA() {

    //Opcion ABAJO
    //Si el vaso1 esta en la IZQUIERDA


    if(parseInt(vaso1.style.left) <= 33.333) {

        let vasoCentro, vasoDERECHA;
        if(parseInt(vaso2.style.left) <= 66.666) {
            vasoCentro = vaso2;
            vasoDERECHA = vaso3;
        }
        else {
            vasoCentro = vaso3;
            vasoDERECHA = vaso2;
        }

        
        
       let n = Math.floor(Math.random() * 2); //0 || 1

        
        switch(n) {
            case 0: //Complejo
                
                move(vaso1,pa1,ARRIBA);
                move(vasoCentro,pc2,ABAJO);
                move(vasoDERECHA,pc3,ABAJO);
                // 266,66 px --> 100
                // 350 px --> x
                //x = 131.26
            
                await sleep(SLEEP_THREE);
            
                move(vaso1,pa3,DERECHA);
                move(vasoCentro,pc1,IZQUIERDA);
                move(vasoDERECHA,pc2,IZQUIERDA);
            
                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE); //vaso 1 se meve dos casillas


                move(vaso1,pb3,ABAJO);
                move(vasoCentro,pb1,ARRIBA);
                move(vasoDERECHA,pb3,ARRIBA);
                let a = 4;
                break;
            case 1: //Simple

                move(vaso1,pa1,ARRIBA);
                move(vasoCentro,pc2,ABAJO);

                await sleep(SLEEP_THREE);
            
                move(vaso1,pa2,DERECHA);
                move(vasoCentro,pc1,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vaso1,pb2,ABAJO);
                move(vasoCentro,pb1,ARRIBA);

                break;

        }
        


    }
     //Si el vaso1 esta en la DERECHA
    else if(parseInt(vaso1.style.left) >= 66.6666) {

        let vasoCentro, vasoIZQUIERDA;
        if(parseInt(vaso2.style.left) >= 33.333) {
            vasoCentro = vaso2;
            vasoIZQUIERDA = vaso3;
        }
        else {
            vasoCentro = vaso3;
            vasoIZQUIERDA = vaso2;
        }

        let n = Math.floor(Math.random() * 2); //0 || 1

        switch(n) {
            case 0: //Complejo
                move(vaso1,pa3,ARRIBA);
                move(vasoCentro,pc2,ABAJO);
                move(vasoIZQUIERDA,pc1,ABAJO);
            
                await sleep(SLEEP_THREE);
            
                move(vaso1,pa1,IZQUIERDA);
                move(vasoCentro,pc3,DERECHA);
                move(vasoIZQUIERDA,pc2,DERECHA);
            
                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE); //vaso 1 se meve dos casillas
            
                move(vaso1,pb1,ABAJO);
                move(vasoCentro,pb3,ARRIBA);
                move(vasoIZQUIERDA,pb2,ARRIBA);
                break;
            case 1: //Simple
                move(vaso1,pa3,ARRIBA);
                move(vasoCentro,pc2,ABAJO);
            
                await sleep(SLEEP_THREE);
            
                move(vaso1,pa2,IZQUIERDA);
                move(vasoCentro,pc3,DERECHA);

                await sleep(SLEEP_THREE);

                move(vaso1,pb2,ABAJO);
                move(vasoCentro,pb3,ARRIBA);

                break;

        }


        

    }
    //Si el vaso 1 esta en el medio
    else {

        let vasoIzquierdo,vasoDerecho;
        if(parseInt(vaso2.style.left) <= 33.333) {
            vasoIzquierdo = vaso2;
            vasoDerecho = vaso3;
        }
        else {
            vasoDerecho = vaso2;
            vasoIzquierdo = vaso3;
        }

        let n = Math.floor(Math.random() * 4); //0 || 1 || 2 || 3
        
        switch(n) {
            case 0: //Left simple
                move(vaso1,pa2,ARRIBA);
                move(vasoIzquierdo,pc1,ABAJO);

                await sleep(SLEEP_THREE);

                move(vaso1,pa1,IZQUIERDA);
                move(vasoIzquierdo,pc2,DERECHA);

                await sleep(SLEEP_THREE);

                move(vaso1,pb1,ABAJO);
                move(vasoIzquierdo,pb2,ARRIBA);

                break;
                
            case 1: //Left complejo
                move(vaso1,pa2,ARRIBA);
                move(vasoIzquierdo,pc1,ABAJO);
                move(vasoDerecho,pa3,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vaso1,pa1,IZQUIERDA);
                move(vasoIzquierdo,pc3,DERECHA);//2 casillas
                move(vasoDerecho,pa2,IZQUIERDA);

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vaso1,pb1,ABAJO);
                move(vasoIzquierdo,pb3,ARRIBA);
                move(vasoDerecho,pb2,ABAJO);


                break;
                
            case 2://DERECHA simple
                move(vaso1,pa2,ARRIBA);
                move(vasoDerecho,pc3,ABAJO);

                await sleep(SLEEP_THREE);

                
                move(vaso1,pa3,DERECHA);
                move(vasoDerecho,pc2,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vaso1,pb3,ABAJO);
                move(vasoDerecho,pb2,ARRIBA);

                break;
            case 3: //DERECHA complejo
                move(vaso1,pa2,ARRIBA);
                move(vasoIzquierdo,pa1,ARRIBA);
                move(vasoDerecho,pc3,ABAJO);

                await sleep(SLEEP_THREE);

                move(vaso1,pa3,DERECHA);
                move(vasoIzquierdo,pa2,DERECHA);
                move(vasoDerecho,pc1,IZQUIERDA);//2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vaso1,pb3,ABAJO);
                move(vasoIzquierdo,pb2,ABAJO);
                move(vasoDerecho,pb1,ARRIBA);//2 casillas

                break;

        }


    }
   

}

async function opcionABAJO() {

    //Opcion ABAJO
    //Si el rojo esta en la IZQUIERDA


    if(parseInt(vaso1.style.left) <= 33.333) {

        let vasoCentro, vasoDERECHA;
        if(parseInt(vaso2.style.left) <= 66.666) {
            vasoCentro = vaso2;
            vasoDERECHA = vaso3;
        }
        else {
            vasoCentro = vaso3;
            vasoDERECHA = vaso2;
        }

        
        
       let n = Math.floor(Math.random() * 2); //0 || 1

        
        switch(n) {
            case 0: //Complejo
                
                move(vaso1,pc1,ABAJO);
                move(vasoCentro,pa2,ARRIBA);
                move(vasoDERECHA,pa3,ARRIBA);
                // 266,66 px --> 100
                // 350 px --> x
                //x = 131.26
            
                await sleep(SLEEP_THREE);
            
                move(vaso1,pc3,DERECHA);
                move(vasoCentro,pa1,IZQUIERDA);
                move(vasoDERECHA,pa2,IZQUIERDA);
            
                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE); //vaso 1 se meve dos casillas


                move(vaso1,pb3,ARRIBA);
                move(vasoCentro,pb1,ABAJO);
                move(vasoDERECHA,pb2,ABAJO);
                let a = 4;
                break;
            case 1: //Simple

                move(vaso1,pc1,ABAJO);
                move(vasoCentro,pa2,ARRIBA);

                await sleep(SLEEP_THREE);
            
                move(vaso1,pc2,DERECHA);
                move(vasoCentro,pa1,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vaso1,pb2,ARRIBA);
                move(vasoCentro,pb1,ABAJO);

                break;

        }
        


    }
    
     //Si el vaso1 esta en la DERECHA
    else if(parseInt(vaso1.style.left) >= 66.6666) {

        let vasoCentro, vasoIZQUIERDA;
        if(parseInt(vaso2.style.left) >= 33.333) {
            vasoCentro = vaso2;
            vasoIZQUIERDA = vaso3;
        }
        else {
            vasoCentro = vaso3;
            vasoIZQUIERDA = vaso2;
        }

        let n = Math.floor(Math.random() * 2); //0 || 1
        

        switch(n) {
            case 0: //Complejo
                move(vaso1,pc3,ABAJO);
                move(vasoCentro,pa2,ARRIBA);
                move(vasoIZQUIERDA,pa1,ARRIBA);
            
                await sleep(SLEEP_THREE);
            
                move(vaso1,pc1,IZQUIERDA);
                move(vasoCentro,pa3,DERECHA);
                move(vasoIZQUIERDA,pa2,DERECHA);
            
                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE); //vaso 1 se meve dos casillas
            
                move(vaso1,pb1,ARRIBA);
                move(vasoCentro,pb3,ABAJO);
                move(vasoIZQUIERDA,pb2,ABAJO);

                break;
            case 1: //Simple
                move(vaso1,pc3,ABAJO);
                move(vasoCentro,pa2,ARRIBA);
            
                await sleep(SLEEP_THREE);
            
                move(vaso1,pc2,IZQUIERDA);
                move(vasoCentro,pa3,DERECHA);

                await sleep(SLEEP_THREE);

                move(vaso1,pb2,ARRIBA);
                move(vasoCentro,pb3,ABAJO);

                break;

        }


        

    }
    
    //Si el vaso 1 esta en el medio
    else {

        let vasoIzquierdo,vasoDerecho;
        if(parseInt(vaso2.style.left) <= 33.333) {
            vasoIzquierdo = vaso2;
            vasoDerecho = vaso3;
        }
        else {
            vasoDerecho = vaso2;
            vasoIzquierdo = vaso3;
        }

        let n = Math.floor(Math.random() * 4); //0 || 1 || 2 || 3

        switch(n) {
            case 0: //Left simple
                move(vaso1,pc2,ABAJO);
                move(vasoIzquierdo,pa1,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vaso1,pc1,IZQUIERDA);
                move(vasoIzquierdo,pa2,DERECHA);

                await sleep(SLEEP_THREE);

                move(vaso1,pb1,ARRIBA);
                move(vasoIzquierdo,pb2,ABAJO);

                break;
                
            case 1: //Left complejo
                move(vaso1,pc2,ABAJO);
                move(vasoIzquierdo,pa1,ARRIBA);
                move(vasoDerecho,pc3,ABAJO);

                await sleep(SLEEP_THREE);

                move(vaso1,pc1,IZQUIERDA);
                move(vasoIzquierdo,pa3,DERECHA);//2 casillas
                move(vasoDerecho,pc2,IZQUIERDA);

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vaso1,pb1,ARRIBA);
                move(vasoIzquierdo,pb3,ABAJO);
                move(vasoDerecho,pb2,ARRIBA);


                break;
                
            case 2://DERECHA simple
                move(vaso1,pc2,ABAJO);
                move(vasoDerecho,pa3,ARRIBA);

                await sleep(SLEEP_THREE);

                
                move(vaso1,pc3,DERECHA);
                move(vasoDerecho,pa2,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vaso1,pb3,ARRIBA);
                move(vasoDerecho,pb2,ABAJO);

                break;
            case 3: //DERECHA complejo
                move(vaso1,pc2,ABAJO);
                move(vasoIzquierdo,pc1,ABAJO);
                move(vasoDerecho,pa3,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vaso1,pc3,DERECHA);
                move(vasoIzquierdo,pc2,DERECHA);
                move(vasoDerecho,pa1,IZQUIERDA);//2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vaso1,pb3,ARRIBA);
                move(vasoIzquierdo,pb2,ARRIBA);
                move(vasoDerecho,pb1,ABAJO);//2 casillas

                break;

        }


    }
   

}

async function opcionIzquieda() {

    //Vaso 1 en medio

    if(parseInt(vaso1.style.left) >= 33.333 && parseInt(vaso1.style.left) <= 66.666) {

        let vasoIzquierdo,vasoDerecho;
        if(parseInt(vaso2.style.left) <= 33.333) {
            vasoIzquierdo = vaso2;
            vasoDerecho = vaso3;
        }
        else {
            vasoIzquierdo = vaso3;
            vasoDerecho = vaso2;
        }

        let n = Math.floor(Math.random() * 5) // 0 || 1 || 2 || 3 || 4

        switch(n) {
            case 0: //Vaso Izquierdo ARRIBA Simple
                move(vaso1,pb1,IZQUIERDA);
                move(vasoIzquierdo,pa1,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pa2,DERECHA);

                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pb2,ABAJO);


                break;
            case 1: //Vaso Izquierdo ARRIBA Complejo
                move(vaso1,pb1,IZQUIERDA);
                move(vasoIzquierdo,pa1,ARRIBA);
                move(vasoDerecho,pc3,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pa3,DERECHA); //2 casillas
                move(vasoDerecho,pc2,IZQUIERDA);

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pb3,ABAJO);
                move(vasoDerecho,pb2,ARRIBA);



                break;
            case 2://Vaso Izquierdo ABAJO Simple

                move(vaso1,pb1,IZQUIERDA);
                move(vasoIzquierdo,pc1,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pc2,DERECHA);

                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pb2,ARRIBA);


                break;
            case 3: //Vaso Izquierdo ABAJO Complejo
                move(vaso1,pb1,IZQUIERDA);
                move(vasoIzquierdo,pc1,ABAJO);
                move(vasoDerecho,pa3,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pc3,DERECHA); //2 casillas
                move(vasoDerecho,pa2,IZQUIERDA);

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pb3,ARRIBA);
                move(vasoDerecho,pb2,ABAJO);


                break;
            case 4: //Vaso Izquierdo DERECHA

                move(vaso1,pb1,IZQUIERDA);
                move(vasoIzquierdo,pb2,DERECHA);

                break;




        }


    }
    //vaso 1 en la IZQUIERDA
    else if(parseInt(vaso1.style.left) <= 33.333) {
        let vasoCentro,vasoDerecho;
        if(parseInt(vaso2.style.left) <= 66.666) {
            vasoCentro = vaso2;
            vasoDerecho = vaso3;
        }
        else {
            vasoCentro = vaso3;
            vasoDerecho = vaso2;
        }

        let n = Math.floor(Math.random() * 3); // 0 || 1 || 2


        switch(n) {
            case 0: //Vaso Centro ARRIBA
                move(vasoCentro,pa2,ARRIBA);
                move(vasoDerecho,pc3,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pa3,DERECHA);
                move(vasoDerecho,pc2,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pb3,ABAJO);
                move(vasoDerecho,pb2,ARRIBA);
                break;
            case 1: //Vaso Centro ABAJO

                move(vasoCentro,pc2,ABAJO);
                move(vasoDerecho,pa3,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pc3,DERECHA);
                move(vasoDerecho,pa2,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pb3,ARRIBA);
                move(vasoDerecho,pb2,ABAJO);

                break;
            case 2: //Vaso Centro DERECHA
                move(vasoCentro,pb3,DERECHA);
                move(vasoDerecho,pb2,IZQUIERDA);

                break;
        }
    }
    //Vaso 1 en DERECHA
    else  {
        let vasoCentro, vasoIzquierdo;
        if(parseInt(vaso2.style.left) >= 33.333) {
            vasoCentro = vaso2;
            vasoIzquierdo = vaso3;

        }
        else {
            vasoCentro = vaso3;
            vasoIzquierdo = vaso2;
        }

        let n = Math.floor(Math.random() * 7); //0 || 1 || 2 || 3 || 4 || 5 || 6
        

        switch(n) {
            case 0: //Vaso Centro ARRIBA Simple
                move(vaso1,pb2,IZQUIERDA);
                move(vasoCentro,pa2,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pa3,DERECHA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pb3,ABAJO);

                break;
            case 1: //Vaso Centro ARRIBA Complejo
                move(vaso1,pb2,IZQUIERDA);
                move(vasoCentro,pa2,ARRIBA);
                move(vasoIzquierdo,pc1,ABAJO);
                
                await sleep(SLEEP_THREE);

                move(vasoCentro,pa1,IZQUIERDA);
                move(vasoIzquierdo,pc3,DERECHA); //2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoCentro,pb1,ABAJO);
                move(vasoIzquierdo,pb3,ARRIBA);           


                break;
            case 2: //Vaso Centro ABAJO Simple

                move(vaso1,pb2,IZQUIERDA);
                move(vasoCentro,pc2,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pc3,DERECHA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pb3,ARRIBA);

                break;
            case 3: //Vaso Centro ABAJO Complejo

                move(vaso1,pb2,IZQUIERDA);
                move(vasoCentro,pc2,ABAJO);
                move(vasoIzquierdo,pa1,ARRIBA);
                
                await sleep(SLEEP_THREE);

                move(vasoCentro,pc1,IZQUIERDA);
                move(vasoIzquierdo,pa3,DERECHA); //2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoCentro,pb1,ARRIBA);
                move(vasoIzquierdo,pb3,ABAJO);           

                break;
            case 4: //Vaso Centro IZQUIERDA && Vaso Izquierdo ARRIBA
                move(vaso1,pb2,IZQUIERDA);
                move(vasoCentro,pb1,IZQUIERDA);
                move(vasoIzquierdo,pa1,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pa3,DERECHA); // 2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pb3,ABAJO);
                break;
            case 5: //Vaso Centro IZQUIERDA && Vaso Izquierdo ABAJO

                move(vaso1,pb2,IZQUIERDA);
                move(vasoCentro,pb1,IZQUIERDA);
                move(vasoIzquierdo,pc1,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pc3,DERECHA); // 2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoIzquierdo,pb3,ARRIBA);



                break;
            case 6: //Vaso Centro DERECHA
                move(vaso1,pb2,IZQUIERDA);
                move(vasoCentro,pb3,DERECHA);

                break;

        }



    }






}

async function opcionDERECHA() {

    //Vaso 1 en medio

    if(parseInt(vaso1.style.left) >= 33.333 && parseInt(vaso1.style.left) <= 66.666) {

        let vasoIzquierdo,vasoDerecho;
        if(parseInt(vaso2.style.left) <= 33.333) {
            vasoIzquierdo = vaso2;
            vasoDerecho = vaso3;
        }
        else {
            vasoIzquierdo = vaso3;
            vasoDerecho = vaso2;
        }

        let n = Math.floor(Math.random() * 5) // 0 || 1 || 2 || 3 || 4
        
        switch(n) {
            case 0: //Vaso Derecho ARRIBA Simple
                move(vaso1,pb3,DERECHA);
                move(vasoDerecho,pa3,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoDerecho,pa2,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vasoDerecho,pb2,ABAJO);


                break;
            case 1: //Vaso Derecho ARRIBA Complejo
                move(vaso1,pb3,DERECHA);
                move(vasoDerecho,pa3,ARRIBA);
                move(vasoIzquierdo,pc1,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoDerecho,pa1,IZQUIERDA); //2 casillas
                move(vasoIzquierdo,pc2,DERECHA);

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoDerecho,pb1,ABAJO);
                move(vasoIzquierdo,pb2,ARRIBA);
                



                break;
            case 2://Vaso Derecho ABAJO Simple

                move(vaso1,pb3,DERECHA);
                move(vasoDerecho,pc3,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoDerecho,pc2,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vasoDerecho,pb2,ARRIBA);


                break;
            case 3: //Vaso Derecho ABAJO Complejo
                move(vaso1,pb3,DERECHA);
                move(vasoDerecho,pc3,ABAJO);
                move(vasoIzquierdo,pa1,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoDerecho,pc1,IZQUIERDA); //2 casillas
                move(vasoIzquierdo,pa2,DERECHA);

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoDerecho,pb1,ARRIBA);
                move(vasoIzquierdo,pb2,ABAJO);


                break;
            case 4: //Vaso Izquierdo DERECHA

                move(vaso1,pb3,DERECHA);
                move(vasoDerecho,pb2,IZQUIERDA);

                break;




        }


    }
    //vaso 1 en la DERECHA

    else if(parseInt(vaso1.style.left) >= 66.666) {
        let vasoCentro,vasoIzquierdo;

        if(parseInt(vaso2.style.left) >= 33.333) {
            vasoCentro = vaso2;
            vasoIzquierdo = vaso3;
        }
        else {
            vasoCentro = vaso3;
            vasoIzquierdo = vaso2;
        }

        let n = Math.floor(Math.random() * 3); // 0 || 1 || 2
        

        switch(n) {
            case 0: //Vaso Centro ARRIBA
                move(vasoCentro,pa2,ARRIBA);
                move(vasoIzquierdo,pc1,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pa1,IZQUIERDA);
                move(vasoIzquierdo,pc2,DERECHA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pb1,ABAJO);
                move(vasoIzquierdo,pb2,ARRIBA);
                break;
            case 1: //Vaso Centro ABAJO

                move(vasoCentro,pc2,ABAJO);
                move(vasoIzquierdo,pa1,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pc1,IZQUIERDA);
                move(vasoIzquierdo,pa2,DERECHA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pb1,ARRIBA);
                move(vasoIzquierdo,pb2,ABAJO);

                break;
            case 2: //Vaso Centro IZQUIERDA
                move(vasoCentro,pb1,IZQUIERDA);
                move(vasoIzquierdo,pb2,DERECHA);

                break;
        }
    }
    //Vaso 1 en IZQUIERDA
    else  {
        let vasoCentro, vasoDerecho;
        if(parseInt(vaso2.style.left) >= 66.666) {
            vasoDerecho = vaso2;
            vasoCentro = vaso3;

        }
        else {
            vasoCentro = vaso2;
            vasoDerecho = vaso3;
            
        }

        let n = Math.floor(Math.random() * 7); //0 || 1 || 2 || 3 || 4 || 5 || 6
        

        switch(n) {
            case 0: //Vaso Centro ARRIBA Simple
                move(vaso1,pb2,DERECHA);
                move(vasoCentro,pa2,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pa1,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pb1,ABAJO);

                break;
            case 1: //Vaso Centro ARRIBA Complejo
                move(vaso1,pb2,DERECHA);
                move(vasoCentro,pa2,ARRIBA);
                move(vasoDerecho,pc3,ABAJO);
                
                await sleep(SLEEP_THREE);

                move(vasoCentro,pa3,DERECHA);
                move(vasoDerecho,pc1,IZQUIERDA); //2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoCentro,pb3,ABAJO);
                move(vasoDerecho,pb1,ARRIBA);           


                break;
            case 2: //Vaso Centro ABAJO Simple

                move(vaso1,pb2,DERECHA);
                move(vasoCentro,pc2,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pc1,IZQUIERDA);

                await sleep(SLEEP_THREE);

                move(vasoCentro,pb1,ARRIBA);

                break;
            case 3: //Vaso Centro ABAJO Complejo

                move(vaso1,pb2,DERECHA);
                move(vasoCentro,pc2,ABAJO);
                move(vasoDerecho,pa3,ARRIBA);
                
                await sleep(SLEEP_THREE);

                move(vasoCentro,pc3,DERECHA);
                move(vasoDerecho,pa1,IZQUIERDA); //2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoCentro,pb3,ARRIBA);
                move(vasoDerecho,pb1,ABAJO);           

                break;
            case 4: //Vaso Centro IZQUIERDA && Vaso Izquierdo ARRIBA
                move(vaso1,pb2,DERECHA);
                move(vasoCentro,pb3,DERECHA);
                move(vasoDerecho,pa3,ARRIBA);

                await sleep(SLEEP_THREE);

                move(vasoDerecho,pa1,IZQUIERDA); // 2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoDerecho,pb1,ABAJO);
                break;
            case 5: //Vaso Centro IZQUIERDA && Vaso Izquierdo ABAJO

                move(vaso1,pb2,DERECHA);
                move(vasoCentro,pb3,DERECHA);
                move(vasoDerecho,pc3,ABAJO);

                await sleep(SLEEP_THREE);

                move(vasoDerecho,pc1,IZQUIERDA); // 2 casillas

                await sleep(SLEEP_THREE);
                await sleep(SLEEP_THREE);

                move(vasoDerecho,pb1,ARRIBA);



                break;
            case 6: //Vaso Centro DERECHA
                move(vaso1,pb2,DERECHA);
                move(vasoCentro,pb1,IZQUIERDA);

                break;

        }



    }






}




async function hiddenItemsGame () {

    let bonusQuestion;

    await sleep(750);

    let itemsGames = document.getElementsByClassName("contador");
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "none";
    }

    itemsGames = document.getElementsByClassName("points");
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "none";
    }

    itemsGames = document.getElementById("divObjetivo");
    itemsGames.style.display = "none";

    itemsGames = document.getElementsByClassName("divPrincipal");
    itemsGames[0].style.display = "none";

    itemsGames = document.getElementsByClassName("vasoDiv");
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "none";
    }

    itemsGames = document.getElementsByClassName("puntoRefercia");
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "none";
    }
    
    icon.style.display = "none";

    itemsGames = document.getElementsByClassName("sectores");
    for(let i = 0; i < itemsGames.length; i++) {
        itemsGames[i].style.display = "none";
    }

    await sleep(300);

    bonusQuestion = document.getElementById("bonusQuestion");
    bonusQuestion.style.display = "block";

    await sleep(1500);

    bonusQuestion.style.display = "none";

    startQuestion();


}



function sleep(ms) {
    return new Promise (resolve => setTimeout(resolve,ms));
}

