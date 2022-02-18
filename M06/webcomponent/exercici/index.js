//Declaramos variables globales

const ID_BTN_TODOS = "btnTodos",ID_BTN_PRIMER_PLATO = "btnPrimerPlato",ID_BTN_SEGUNDO_PLATO = "btnSegundoPlatos",
ID_BTN_POSTRE = "btnPostres",ID_BTN_BEBIDA = "btnBebida";

const PRIMER_PLATO = "primerPlato", SEGUNDO_PLATO = "segundoPlato", POSTRE = "postre", BEBIDA = "bebida",TODOS="todos";

var listTipos = document.querySelectorAll("[data-grupo='tipo']");
var listProductos = document.querySelectorAll("[data-grupo='productos']");

var buttons = document.getElementsByClassName("button");


let tipo = "";

for(let i = 0; i < buttons.length; i++) {
    //Reacció a esdeveniments en altres webcomponents
    buttons[i].addEventListener("click",function() {
        switch(buttons[i].id) {
            case ID_BTN_TODOS:
                tipo = TODOS;
                break;
            case ID_BTN_PRIMER_PLATO:
                tipo = PRIMER_PLATO;
                break;
            case ID_BTN_SEGUNDO_PLATO:
                tipo = SEGUNDO_PLATO;
                break;
            case ID_BTN_POSTRE:
                tipo = POSTRE;
                break;
            case ID_BTN_BEBIDA:
                tipo = BEBIDA;
                break;
            
        }
        //callback
        cambiarListaProductos(cambiarListaTipos,tipo);
    });
}

function cambiarListaProductos(callback) {
    let tipo = arguments[1];
    for(let i = 0; i < listProductos.length; i++) {
        if(tipo != TODOS) {
            if(listProductos[i].dataset.tipus == tipo) {
                listProductos[i].style.display = "list-item";
            }
            else {
                listProductos[i].style.display = "none";
            }
        }
        else {
            listProductos[i].style.display = "list-item";
        }
        
    }
    callback(arguments[1]);
}

function cambiarListaTipos(tipo) {

    for(let i = 0; i < listTipos.length; i++) {
        if(tipo != TODOS) {
            if(listTipos[i].dataset.name == tipo) {
                listTipos[i].style.display = "list-item";
            }
            else {
                listTipos[i].style.display = "none";
            }
        }
        else {
            listTipos[i].style.display = "list-item";
        }
        
    }

}