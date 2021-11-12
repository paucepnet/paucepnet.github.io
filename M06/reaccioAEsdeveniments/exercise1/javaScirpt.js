const idImage = "image", idButton = "button";

function hanFetClick(element) {
    let idElement = element.id;
    switch(idElement) {
        case idImage:
            alert('Has hecho click en la imagen!');
            break;
        case idButton:
            alert('Has hecho click en el boton!');
            break;
    }

}