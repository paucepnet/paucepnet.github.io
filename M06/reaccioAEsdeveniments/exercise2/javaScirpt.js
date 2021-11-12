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

var divImages = document.getElementById("divImages");

var n = 2;

let buttonAddImage = document.getElementById("addImage");

buttonAddImage.addEventListener("click",function() {
    //divImages.innerHTML = divImages.innerHTML + "<img src='http://placeimg.com/800/400/nature' id='image'>";
    divImages.innerHTML = divImages.innerHTML + "<img  class='image' src='http://placeimg.com/800/400/nature' onclick = 'imagenNaturaClick(this)' id='imagen"+n+"'>";
    n++;
});

/*

var images = document.getElementsByClassName("image");

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("click",function() {
        alert('Has seleccionado la ' + images[i].id);
    });
}

*/

function imagenNaturaClick(imageNatura) {
    alert('Has seleccionado la ' + imageNatura.id);
}