const DESERT = "desert", DESERT2 = "desert2",CIELO ="cielo",FOREST = "forest", BOOM = "boom", SPACE ="space", ISLAND  ="island",
    IGLOO="igloo", MOUNTAIN = "mountain", ROUTE = "route";

var backgroundButton = document.getElementById("backgroundButton");

var backgrounds = document.getElementsByClassName("choose background");

var buttonChooseBackground = document.getElementsByClassName("buttonChooseBackground");

backgroundButton.addEventListener("click",visibleItems);

function visibleItems() {

    for(let i = 0; i< backgrounds.length; i++) {
        backgrounds[i].style.display = "block";
    }   
    
    
    for(let i = 0; i < buttonChooseBackground.length; i++) {
        buttonChooseBackground[i].style.display = "block";
    }   

}

var backgroundBack = document.getElementById("backgroundBack");

backgroundBack.addEventListener("click",hiddenItemsBackground);

function hiddenItemsBackground() {
    let backgroundSelectClass = document.getElementsByClassName("choose background visible");
    let idBackgroundSelect = backgroundSelectClass[0].id;

    let backgroundIndex = document.getElementById("backgroundIndex");

    switch(idBackgroundSelect) {

        case backgrounds[0].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/space/space.jpg')";
            backgroundIndex.className = "divBackgound " + SPACE;
            break;

        case backgrounds[1].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/mountain/mountain.jpg')";
            backgroundIndex.className = "divBackgound " + MOUNTAIN;
            break;
        case backgrounds[2].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/forest/forest.jpg')";
            backgroundIndex.className = "divBackgound " + FOREST;
            break;        
        case backgrounds[3].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/fondoDesierto2/fondoDesierto2.jpg')";
            backgroundIndex.className = "divBackgound " + DESERT2;
            break;   
        case backgrounds[4].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/fondoDesierto/fondoDesierto.jpg')";
            backgroundIndex.className = "divBackgound " + DESERT;
            break;
             
        case backgrounds[5].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/fondoCielo.jpg')";
            backgroundIndex.className = "divBackgound " + CIELO;
            break;
        
        case backgrounds[6].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/boom/boom.jpg')";
            backgroundIndex.className = "divBackgound " + BOOM;
            break;
        case backgrounds[7].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/island/island.jpg')";
            backgroundIndex.className = "divBackgound " + ISLAND;
            break;
        case backgrounds[8].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/igloo/igloo.jpg')";
            backgroundIndex.className = "divBackgound " + IGLOO;
            break;
        case backgrounds[9].id:
            backgroundIndex.style.backgroundImage = "url('./media/fondos/route66/route66.jpg')";
            backgroundIndex.className = "divBackgound " + ROUTE;
            break;

    }

     
    

    for(let i = 0; i< backgrounds.length; i++) {
        backgrounds[i].style.display = "none";
    }   
    
    
    for(let i = 0; i < buttonChooseBackground.length; i++) {
        buttonChooseBackground[i].style.display = "none";
    }  
}



var chooseButtonBackgroundBack = document.getElementById("chooseBackgroundBack");

chooseButtonBackgroundBack.addEventListener("click",backBackground);

var chooseButtonBackgroundNext = document.getElementById("chooseBackgroundNext");

chooseButtonBackgroundNext.addEventListener("click",nextBackground);

var arrayBackground = document.getElementsByClassName("choose background");


function backBackground() {
    changeBackground("back");

}

function nextBackground() {
    changeBackground("next");

}

function changeBackground(buttonClick) {
    let background = document.getElementsByClassName("choose background visible");
    let idBackground = background[0].id;
    background[0].className = "choose background";
    

    let positionBackground;
    for(let i = 0; i < arrayBackground.length; i++) {
        if(idBackground == arrayBackground[i].id) {
            positionBackground = i;
        }

    }

    let nextBackPositionBackground;

    if(buttonClick == "back") {
        nextBackPositionBackground = positionBackground -1;
    }
    else {
        nextBackPositionBackground = positionBackground + 1;
    }

    switch(nextBackPositionBackground) {
        case -1:
            arrayBackground[arrayBackground.length -1].className = "choose background visible";
            break;
        case arrayBackground.length:
            arrayBackground[0].className = "choose background visible";
            break;
        default:
            arrayBackground[nextBackPositionBackground].className = "choose background visible";

    }

}

