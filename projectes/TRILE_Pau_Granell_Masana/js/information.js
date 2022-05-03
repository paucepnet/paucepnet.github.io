
var containerInformation = document.getElementById("containerInformation");

function ejectInformation() {
    containerInformation.style.display = "block";

}

var buttonBackInformation = document.getElementById("buttonBackInformation");

buttonBackInformation.addEventListener("click",hiddenItemsInformation);

function hiddenItemsInformation() {
    containerInformation.style.display = "none";
}