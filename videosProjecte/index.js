const video1 = "media/videoInteractivo.mp4#t=0,24", video1f = "media/videoInteractivo.mp4#t=25,32";

let video = document.getElementById("video");
let backdropVideo = document.getElementById("backdropVideo");
let title = document.getElementById("title");
let buttonYes = document.getElementById("buttonYes");
let buttonNo = document.getElementById("buttonNo");
let sourceVideo = document.getElementById("sourceVideo");
let refreshButton = document.getElementById("refreshButton");
let backdropRefresh = document.getElementById("backdropRefresh");
let refreshButtonGeneral = document.getElementById("refreshButtonGeneral");


video.addEventListener("timeupdate",function() {
    switch(video.dataset.tiposvideo) {
        case "1":
            if(video.currentTime < 0) {
                video.currentTime = 0;
            }
            else if(video.currentTime > 24) {
                backdropVideo.style.display = "block";
                video.style.display = "none";
                title.innerHTML="¿Llamada procedente?"; 
            }
            else if(video.onpause == true && video.currentTime > 24) {
                backdropVideo.style.display = "block"; 
                video.style.display = "none";
                title.innerHTML="¿Llamada procedente?"; 
            }
            
            break;  
        case "1f":
            if(video.currentTime < 25) {
                video.currentTime = 25;
            }
            else if(video.currentTime > 32) {
                video.style.display = "none";
                backdropRefresh.style.display = "block"; 
            }
            else if(video.onpause == true && video.currentTime > 32) {
                video.style.display = "none";   
                backdropRefresh.style.display = "block"; 
            }
        
            break;
            
    }
    
});




// video.addEventListener("ended", function() {
//     video.controls = false;    
//     switch(video.dataset.tiposvideo) {
//         case "1":
//             backdropVideo.style.display = "block"; 
//             title.innerHTML="¿Llamada procedente?";            
//             break;
//         case "1f":
//             backdropRefresh.style.display = "block"; 
//         break;
//         case "1.1":
//             backdropVideo.style.display = "block"; 
//             title.innerHTML="¿Sistema de aviso especial?";
//             break;
//         case "1.1f":
//             backdropRefresh.style.display = "block"; 
//             break;
//         case "2":
//             backdropVideo.style.display = "block"; 
//             title.innerHTML="¿Procedimiento específico?";           
//             break;
//         case "2f":
//             backdropRefresh.style.display = "block"; 
//             break;
//         case "2.0.1":
//             backdropVideo.style.display = "block"; 
//             title.innerHTML="¿Llamada asociada?";  
//             break;
//         case "2.1":
//             backdropVideo.style.display = "block"; 
//             title.innerHTML="¿IRE?";  
//             break;
//         case "2.2":
//             backdropVideo.style.display = "block"; 
//             title.innerHTML="¿Ampliar NC?";  
//             break;
//         case "2.3":
//             backdropVideo.style.display = "block"; 
//             title.innerHTML="¿IRE?";  
//             break;
//         case "5.2":
//             backdropRefresh.style.display = "block"; 
//             break;
//         case "6":
//             backdropRefresh.style.display = "block"; 
//         break;
        
//     }
// });

buttonYes.addEventListener("click",function() {
    switch(video.dataset.tiposvideo) {
        case "1":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "1.1";
            break;
        case "1.1": 
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "1.1f";
            break;
        case "2":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "2f";
            break;
        case "2.0.1":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "2.2";
            break;
        case "2.1":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "5.2";
        break;
        case "2.2":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "2.3";
            break;
        case "2.3":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "5.2";
        break;

    }
    refresh();
});
buttonNo.addEventListener("click",function() {
    switch(video.dataset.tiposvideo) {
        case "1":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "1f";
            break;
        case "1.1":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "2";
        break;
        case "2":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "2.0.1";
            break;
        case "2.0.1":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "2.1";
            break;
        case "2.1":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "6";
            break;
        case "2.2":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "6";
            break;
        case "2.3":
            sourceVideo.setAttribute("src",video1f);
            video.dataset.tiposvideo = "6";
            break;

        
    }
    refresh();
});
refreshButton.addEventListener("click", function() {
    refresh();
});

refreshButtonGeneral.addEventListener("click",function() {
    backdropRefresh.style.display = "none";
    video.style.display = "block";
    sourceVideo.setAttribute("src",video1);
    video.dataset.tiposvideo = "1";
    video.controls = true;
    video.load();
    video.play();
});

function refresh() {    
    backdropVideo.style.display = "none";
    video.style.display = "block";
    video.controls = true;
    video.load();
    video.play();
}



