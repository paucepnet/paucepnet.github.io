var cupButton = document.getElementById("cupButton");

cupButton.addEventListener("click",visibleItemsCup);


function visibleItemsCup() {
    let itemsCup = document.getElementById("chooseBack");
    itemsCup.style.display = "block";

    itemsCup = document.getElementsByClassName("choose cup");
    for(let i = 0; i < itemsCup.length; i++) {
        itemsCup[i].style.display = "block";
    }

    itemsCup = document.getElementsByClassName("choose buttons");
    for(let i = 0; i < itemsCup.length; i++) {
        itemsCup[i].style.display = "block";
    }
}

var chooseButtonCupBack = document.getElementById("chooseButtonCupBack");

chooseButtonCupBack.addEventListener("click",backCup);

var chooseButtonCupNext = document.getElementById("chooseButtonCupNext");

chooseButtonCupNext.addEventListener("click",nextCup);

var arrayCup = document.getElementsByClassName("choose cup");


function backCup() {
    changeCup("back");

}

function nextCup() {
    changeCup("next");

}

function changeCup(buttonClick) {
    let cup = document.getElementsByClassName("choose cup visible");
    let idCup = cup[0].id;
    cup[0].className = "choose cup";
    

    let positionCup;
    for(let i = 0; i < arrayCup.length; i++) {
        if(idCup == arrayCup[i].id) {
            positionCup = i;
        }

    }

    let nextBackPositionCup;

    if(buttonClick == "back") {
        nextBackPositionCup = positionCup -1;
    }
    else {
        nextBackPositionCup = positionCup + 1;
    }

    switch(nextBackPositionCup) {
        case -1:
            arrayCup[arrayCup.length -1].className = "choose cup visible";
            break;
        case arrayCup.length:
            arrayCup[0].className = "choose cup visible";
            break;
        default:
            arrayCup[nextBackPositionCup].className = "choose cup visible";

    }

}


var chooseBack = document.getElementById("chooseBack");

chooseBack.addEventListener("click",hiddenItemsCup);

function hiddenItemsCup() {

    let cupSelected = document.getElementsByClassName("choose cup visible");
    let idCupSelected = cupSelected[0].id;
    
    switch(idCupSelected) {
        case arrayCup[0].id:
            cupButton.style.backgroundImage = "url('./media/cupButton.png')";
            cupButton.className = "buttons index blue";
            break;
        case arrayCup[1].id:
            cupButton.style.backgroundImage = "url('./media/cupButtonGreen.png')";
            cupButton.className = "buttons index green";
            break;
        case arrayCup[2].id:
            cupButton.style.backgroundImage = "url('./media/cupButtonLile.png')";
            cupButton.className = "buttons index lile";
            break;
        case arrayCup[3].id:
            cupButton.style.backgroundImage = "url('./media/cupButtonOrange.png')";
            cupButton.className = "buttons index orange";
            break;
        case arrayCup[4].id:
            cupButton.style.backgroundImage = "url('./media/cupButtonRed.png')";
            cupButton.className = "buttons index red";
            break;
        case arrayCup[5].id:
            cupButton.style.backgroundImage = "url('./media/cupButtonYellow.png')";
            cupButton.className = "buttons index yellow";
            break;


    }
    

    let itemsCup = document.getElementById("chooseBack");
    itemsCup.style.display = "none";

    itemsCup = document.getElementsByClassName("choose cup");
    for(let i = 0; i < itemsCup.length; i++) {
        itemsCup[i].style.display = "none";
    }

    itemsCup = document.getElementsByClassName("choose buttons");
    for(let i = 0; i < itemsCup.length; i++) {
        itemsCup[i].style.display = "none";
    }

}
