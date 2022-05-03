var soundtranck2Finish = new Audio("./media/sounds/brazilianStreetFightFinish.mp3");

var arrayQuestionDam = [
    ["Que volen dir les sigles dam?","Desenvolupament Aplicacions Multiplataforma","Desenvolupant Administratiu Multiplataforma",
                                        "Desarrollament Aplicacions Multiplataforma","Desenvolupament Aplicacions MultiApps"],

    ["Què aprendràs?","Aprèn a dissenyar, programar i gestionar aplicacions","Dissenyar i programar eines web","Reparar i optimitzar equips informàtics",
    "Gestionar Recursos turístics i organitzar esdeveniments"],

    ["A quin àmbit pertany l'estudi?","Informàtica i comunicacions","Comerç i màrqueting","Administració i Gestió","Hosteleria i turisme"]
];

var arrayQuestionSmix = [
    ["Que volen dir les sigles smix?","Sistemes Microinformàtics i Xarxes","Sistemes Microfimatics i Xarxes","Segments Microinformàtics i Xarxes","Sistemes Microprogramaris i Xarxes"],
    ["Què aprendràs?","Reparar i optimitzar equips informàtics","Gestionar les comunicacions i l'agenda de direcció",
    "Gestionar de manera eficient tasques comercials, financeres i comptables","Dissenyar i programar eines web"],
    ["A quin àmbit pertany l'estudi?","Informàtica i comunicacions","Comerç i màrqueting","Administració i Gestió","Hosteleria i turisme"]

];

var arrayQuestionGvec = [
    ["Que volen dir les sigles gvec?","Gestio de Vendes i Espais Comercials","Generació de Vendes i Espais Comercials","Generació de Vendes i Espais Codificats",
    "Gestio de Vinculació i Espais Comercials"],
    ["Què aprendràs?","Dissenyar comerços amb identitat pròpia","Dissenyar i programar eines web",
    "Dissenyar, programar i gestionar aplicacions","Gestionar Recursos turístics i organitzar esdeveniments"],
    ["A quin àmbit pertany l'estudi?","Comerç i màrqueting","Administració i Gestió","Hosteleria i turisme","Informàtica i Comunicacions"]

];


var arrayQuestionMarp = [
    ["Que volen dir les sigles MARP?","Màrqueting i Publicitat","Mercadotècnia i publicació","Màrqueting i propaganda",
    "Màrqueting i Planificació"],
    ["Què aprendràs?","Desenvolupar estratègies offline i online","Dissenyar, programar i gestionar aplicacions",
    "Reparar i optimitzar equips informàtics","Gestionar la comercialització de productes en un mercat globalitzat"],
    ["A quin àmbit pertany l'estudi?","Comerç i màrqueting","Administració i Gestió","Hosteleria i turisme","Informàtica i Comunicacions"]

];

var arrayQuestionAdir = [
    ["Que volen dir les sigles ADIR?","Assistència a la Direcció","Assignació de Recursos a la Direcció","Assignació de Recursos a la detecció d'errors",
    "Assistència de Recursos a la Direcció"],
    ["Què aprendràs?","Gestionar les comunicacions i l'agenda de direcció","Dissenyar i programar eines web",
    "Dissenyar, programar i gestionar aplicacions","Reparar i optimitzar equips informàtics"],
    ["A quin àmbit pertany l'estudi?","Administració i Gestió","Comerç i màrqueting","Hosteleria i turisme","Informàtica i Comunicacions"]

];

var arrayQuestionAfi = [
    ["Que volen dir les sigles AFI?","Administració i Finances","Administració i Finançament","Administració Finances interpretades",
    "Assistència de Finances interpretades"],
    ["Què aprendràs?","Gestionar de manera eficient tasques comercials, financeres i comptables","Reparar i optimitzar equips informàtics",
    "Gestionar la comercialització de productes en un mercat globalitzat","Gestionar les comunicacions i l'agenda de direcció"],
    ["A quin àmbit pertany l'estudi?","Administració i Gestió","Comerç i màrqueting","Hosteleria i turisme","Informàtica i Comunicacions"]

];


var arrayQuestionAvie = [
    ["Que volen dir les sigles AVIE?","Agències de Viatges i Gestió d'Esdeveniments","Agències de Viatges i Gestió d'Espais","Agències de Viatges i Generació d'Espais",
    "Agències de Viatges i Generació d'Esdeveniments"],
    ["Què aprendràs?","Gestionar Recursos turístics i organitzar esdeveniments","Reparar i optimitzar equips informàtics",
    "Desenvolupar estratègies offline i online","Gestionar les comunicacions i l'agenda de direcció"],
    ["A quin àmbit pertany l'estudi?","Hosteleria i turisme","Comerç i màrqueting","Administració i Gestió","Informàtica i Comunicacions"]

];


var arrayQuestionCint = [
    ["Que volen dir les sigles CINT?","Comerç Internacional","Comerç Intern","Correspondenciacio Interna",
    "Correspondenciacio Internacional"],
    ["Què aprendràs?","Gestionar la comercialització de productes en un mercat globalitzat","Reparar i optimitzar equips informàtics",
    "Desenvolupar estratègies offline i online","Gestionar Recursos turístics i organitzar esdeveniments"],
    ["A quin àmbit pertany l'estudi?","Comerç i màrqueting","Hosteleria i turisme","Administració i Gestió","Informàtica i Comunicacions"]

];

var arrayQuestionAcom = [
    ["Que volen dir les sigles ACOM?","Activitats Comercials","Assistència Comercial","Administració Comercial",
    "Assistència Correspondencial"],
    ["Què aprendràs?","Gestionar Recursos turístics i organitzar esdeveniments","Dissenyar i programar eines web",
    "Reparar i optimitzar equips informàtics","Gestionar la comercialització de productes en un mercat globalitzat"],
    ["A quin àmbit pertany l'estudi?","Comerç i màrqueting","Hosteleria i turisme","Administració i Gestió","Informàtica i Comunicacions"]

];

var arrayQuestionDaw = [
    ["Que volen dir les sigles DAW?","Desenvolupament Aplicacions per a Web","Desenvolupament Administratiu per a Web","Desarrollament Administratiu per a Web",
    "Desarrollament Aplicacions per a Web"],
    ["Què aprendràs?","Dissenyar i programar eines web","Gestionar Recursos turístics i organitzar esdeveniments",
    "Reparar i optimitzar equips informàtics","Desenvolupar estratègies offline i online"],
    ["A quin àmbit pertany l'estudi?","Informàtica i comunicacions","Hosteleria i turisme","Administració i Gestió","Comerç i màrqueting"]

];

var arrayQuestionGad = [
    ["Que volen dir les sigles GAD?","Gestió Administrativa","Generació Administrativa","Gestió Assistent",
    "Generació administrada"],
    ["Què aprendràs?","Realitzar gestions en els àmbits, comercials, financers i comptables","Dissenyar i programar eines web",
    "Dissenyar, programar i gestionar aplicacions","Gestionar Recursos turístics i organitzar esdeveniments"],
    ["A quin àmbit pertany l'estudi?","Administració i Gestió","Hosteleria i turisme","Informàtica i Comunicacions","Comerç i màrqueting"]

];




var containerQuestion = document.getElementById("containerQuestion");

function startQuestion() {
    containerQuestion.style.display = "block";

    ejectQuestion();

}





let arrayDivAnswers = document.getElementsByClassName("answerPanel");

var answerClick = false;

for(let i = 0; i < arrayDivAnswers.length; i++) {
    arrayDivAnswers[i].addEventListener("click",function() {
        clickAnswer(arrayDivAnswers[i]);
    })
}

function ejectQuestion() {
    let question;
    let questionArray;
    let nRandom;
    let arrayAnswers;
    let nRandoms;
    let repetido;
    let arrayModulo;
    let iconQuestion;
    let nameModulo;

    iconQuestion = document.getElementById("icon");
    nameModulo = iconQuestion.className;

    switch(nameModulo) {
        case ACOM:
            arrayModulo = arrayQuestionAcom;
            break;
        case ADIR:
            arrayModulo = arrayQuestionAdir;
            break;
        case AFI:
            arrayModulo = arrayQuestionAfi;
            break;
        case AVIE:
            arrayModulo = arrayQuestionAvie;
            break;
        case CINT:
            arrayModulo = arrayQuestionCint;
            break;
        case DAM:
            arrayModulo = arrayQuestionDam;
            break;
        case DAW:
            arrayModulo = arrayQuestionDaw;
            break;
        case GAD:
            arrayModulo = arrayQuestionGad;
            break;
        case GVEC:
            arrayModulo = arrayQuestionGvec;
            break;
        case MARP:
            arrayModulo = arrayQuestionMarp;
            break;
        case SMIX:
            arrayModulo = arrayQuestionSmix;
            break;
        
    }
    
    nRandom = Math.floor(Math.random() * 3);
    questionArray = arrayModulo[nRandom];

    question = document.getElementById("question");
    question.innerHTML = questionArray[0];

    arrayAnswers = document.getElementsByClassName("fraseQuestion answer");
    nRandoms = [];

    repetido = false;

    for (let i = 0; i < arrayAnswers.length; i++) {

        do {
            repetido = false;

            nRandom = Math.floor(Math.random() * (5 -1)) + 1; //1||2||3||4

            for(let j = 0; j < nRandoms.length; j++) {
                if(nRandom == nRandoms[j]) {
                    repetido = true;
                }

            }

            if(!repetido) {
                nRandoms.push(nRandom);
                arrayAnswers[i].innerHTML = questionArray[nRandom];
                if(nRandom == 1) {
                    arrayAnswers[i].className = "fraseQuestion answer correct";
                }
                
            }

        } while(repetido);

        repetido = false;
        
    }

}

function clickAnswer(answerDiv) {
    /*
    let a = answerDiv.childNodes;
    let a1 = a[0];
    let a2 = a[1];
    a2 = a2.className;
    let a3 = a[2];
    let b = 4;
    */
    let answerDivChilds;

    if(!this.answerClick) {
        let correct;
        answerDivChilds = answerDiv.childNodes;
        if(answerDivChilds[1].className == "fraseQuestion answer correct") {
            answerDiv.className = "answerPanel correct";
            correct = true;
            if(soundButton.className == "buttons index sound on") {
                success.play();
            }
        }
        else {
            answerDiv.className = "answerPanel incorrect";
            correct = false;
            if(soundButton.className == "buttons index sound on") {
                error.play();
            }
        }
        this.answerClick = true;

        hiddenItemsQuestion(correct);
    } 

}

async function hiddenItemsQuestion(correct) {
    let pointsQuestion = document.getElementsByClassName("pointsQuestion");
    
    await sleep(750);

    containerQuestion.style.display = "none";

    await sleep(300);

    pointsQuestion[0].style.display = "block";

    if(correct) {
        pointsQuestion[0].className = "pointsQuestion correct";
        ponits += POINT_QUESTION;
    }
    else {
        pointsQuestion[0].className = "pointsQuestion incorrect";
        
    }


    await sleep(1500);

    pointsQuestion[0].style.display = "none";

    await sleep(300);
    if(soundButton.className == "buttons index sound on") {
        soundtranck2.pause();
        soundtranck2Finish.play();
    }
    

    ejectScore();

}