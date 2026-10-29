const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");


function alterar() {
    titulo.textContent = "JavaScript Funcionando!";
}

botao.addEventListener("click", alterar);
