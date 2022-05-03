const G_S = "Grau Superior",G_M = "Grau Mitjà"; 
const ACOM = "acom", ADIR = "adir", AFI= "afi", AVIE = "avie", 
 CINT = "cint", DAM = "dam", DAW = "daw", GAD = "gad", GVEC = "gvec", MARP = "marp", SMIX = "smix";

let playButton = document.getElementById("play");

playButton.addEventListener("click",clickPlay);

function clickPlay() {
    let containerModulos = document.getElementById("containerModulos");
    containerModulos.style.display = "block";

}

let playGameButton = document.getElementById("playGame");
playGameButton.addEventListener("click",clickPlayGame);

function clickPlayGame() {
    let containerModulos = document.getElementById("containerModulos");
    containerModulos.style.display = "none";

    let modalModulo = document.getElementById("moduloModal");
    //modalModulo.hide();
    //modalModulo.style.display = "none";
    /*
    var modalModulo = new bootstrap.Modal(document.getElementById('moduloModal'), {
        keyboard: false
    });
    */
   /*
   
    modalModulo.style.display = "none";

    

    let backdrop = document.getElementsByClassName("modal-backdrop fade show");

    if(backdrop.length > 0) {
        backdrop[0].style.display = "none";
    }
    

    let modalOpen = document.getElementsByClassName("modal-open");
    //modalOpen[0].className = "";
    if(modalOpen.length > 0) {
        modalOpen[0].style.overflow = "visible";
    }
    */

    
    

    iconImage();

    


}

function iconImage () {

    let iconModul = document.getElementById("icon");
    let moduloSeleccionado = document.getElementsByClassName("modul seleccionado");

    switch(moduloSeleccionado[0].id) {
        case ACOM:
            iconModul.style.backgroundImage = "url('./media/modulos/ACOM.png')";
            iconModul.className = ACOM;
            break;
        case ADIR:
            iconModul.style.backgroundImage = "url('./media/modulos/ADIR.png')";
            iconModul.className = ADIR;
            break;
        case AFI:
            iconModul.style.backgroundImage = "url('./media/modulos/AFI.png')";
            iconModul.className = AFI;
            break;
        case AVIE:
            iconModul.style.backgroundImage = "url('./media/modulos/AVIE.png')";
            iconModul.className = AVIE;
            break;
        case CINT:
            iconModul.style.backgroundImage = "url('./media/modulos/CINT.png')";
            iconModul.className = CINT;
            break;
        case DAM:
            iconModul.style.backgroundImage = "url('./media/modulos/DAM.png')";
            iconModul.className = DAM;
            break;
        case DAW:
            iconModul.style.backgroundImage = "url('./media/modulos/DAW.png')";
            iconModul.className = DAW;
            break;
        case GAD:
            iconModul.style.backgroundImage = "url('./media/modulos/GAD.png')";
            iconModul.className = GAD;
            break;
        case GVEC:
            iconModul.style.backgroundImage = "url('./media/modulos/GVEC.png')";
            iconModul.className = GVEC;
            break;
        case MARP:
            iconModul.style.backgroundImage = "url('./media/modulos/MARP.png')";
            iconModul.className = MARP;
            break;
        case SMIX:
            iconModul.style.backgroundImage = "url('./media/modulos/SMIX.png')";
            iconModul.className = SMIX;
            break;
        
    }

    moduloSeleccionado[0].className = "modul";


}



var moduls = document.getElementsByClassName("modul");

for(let i = 0; i < moduls.length; i++) {
    moduls[i].addEventListener("click",function() {
        modulClick(moduls[i]);
    });
}

var exampleModalLabel = document.getElementById("exampleModalLabel");
var modalBody = document.getElementById("modalBody");
let moduloId;
let nombreModulo;

function modulClick(modulo) {    

    modulo.className = "modul seleccionado";

    //const G_S = "Grau Superior",G_M = "Grau Mitjà"; 


    switch(modulo.id) {
        case ACOM:
            nombreModulo = G_M;
            nombreModulo += " Activitats Comercials";
            break;
        case ADIR:
            nombreModulo = G_S;
            nombreModulo += " Assistència a la Direcció";
            break;
        case AFI:
            nombreModulo = G_S;
            nombreModulo += " Administració i Finances";
            break;
        case AVIE:
            nombreModulo = G_S;
            nombreModulo += " Agències de Viatges i Gestió d'Esdeveniments";
            break;
        case CINT:
            nombreModulo = G_S;
            nombreModulo += " Comerç Internacional";
            break;
        case DAM:
            nombreModulo = G_S;
            nombreModulo +=  " Desenvolupament Aplicacions Multiplataforma";
            break;
        case DAW:
            nombreModulo = G_S;
            nombreModulo += " Desenvolupament Aplicacions per a Web";
            break;
        case GAD:
            nombreModulo = G_M;
            nombreModulo += " Gestió Administrativa";
            break;
        case GVEC:
            nombreModulo = G_S;
            nombreModulo += " Gestió de Vendes i Espais Comercials";
            break;
        case MARP:
            nombreModulo = G_S;
            nombreModulo += " Màrqueting i Publicitat";
            break;
        case SMIX:
            nombreModulo = G_M;
            nombreModulo += " Sistemes Microinformàtics i Xarxes";
            break;

    }

    
    moduloIdUpperCase = modulo.id.toUpperCase();
    modalBody.innerHTML = "Has seleccionat l'estudi " + moduloIdUpperCase + " : </br>"+ nombreModulo+ ".</br></br>"+
    "Vols continuar?" + "</br>";
    
    /*
     + 
    "(Para superar el juego, has de llegar a los <strong>"+POINTSGAME+"</strong> puntos"+")"
    */

    exampleModalLabel.innerHTML = "<strong>"+moduloIdUpperCase+"</strong>";

    

}