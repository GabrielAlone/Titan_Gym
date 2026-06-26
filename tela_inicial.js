const usuario = JSON.parse(
    localStorage.getItem("usuario")
);

if (usuario == null) {

    window.location.href = "login.html";

}

const texto = document.getElementById(
    "usuarioLogado"
);

texto.innerHTML = "Olá, " + usuario.nome + "!";

const sair = document.getElementById("sair");

sair.addEventListener("click", logout);

function logout() {

    localStorage.removeItem("usuario");

    window.location.href = "login.html";

}

const slides = document.querySelectorAll(".slide");

let indice = 0;

setInterval(() => {

    slides[indice].classList.remove("ativo");

    indice++;

    if (indice >= slides.length) {

        indice = 0;

    }

    slides[indice].classList.add("ativo");

}, 4000);