const idImage = "imageClick", idButton = "buttonClick";

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

let buttonAddImage = document.getElementById("addImage");

let buttonNumber = document.getElementById("buttonNumber");

let seconds;

buttonAddImage.addEventListener("click",function() {
    seconds = buttonNumber.value * 1000;
    buttonAddImage.setAttribute("disabled",true);
    setInterval(addImage,seconds);
});

var divImages = document.getElementById("divImages");

var n = 2; 

function addImage() {
    divImages.innerHTML = divImages.innerHTML + "<img  class='image' src='http://placeimg.com/800/400/nature' onclick = 'imagenNaturaClick(this)' id='imagen"+n+"'>";
    n++;
}

function imagenNaturaClick(imageNatura) {
    alert('Has seleccionado la ' + imageNatura.id);
}


