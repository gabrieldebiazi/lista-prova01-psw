const IMG_ACESA = "https://img.magnific.com/vetores-gratis/lampada-iluminada-realista-isolada_1284-41774.jpg?semt=ais_hybrid&w=740&q=80";
const IMG_APAGADA = "https://img.magnific.com/vetores-gratis/lampada-realistica-isolada-de-vetor-sobre-branco_1284-41931.jpg?semt=ais_hybrid&w=740&q=80";

function acender() {
    document.getElementById("lampada").src = IMG_ACESA;
}

function apagar() {
    document.getElementById("lampada").src = IMG_APAGADA;
}