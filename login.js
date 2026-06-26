const btnEntrar = document.getElementById("btnEntrar");
const btnCadastrar = document.getElementById("btnCadastrar");

btnEntrar.addEventListener("click", entrar);

btnCadastrar.addEventListener("click", voltarCadastro);

function entrar() {

    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    if (usuario == null) {

        alert("Nenhum usuário cadastrado.");

        return;

    }

    if (

        email === usuario.email &&

        senha === usuario.senha

    ) {

    
        window.location.href = "tela_inicial.html";

    }

    else {

        alert("Email ou senha incorretos.");

    }

}

function voltarCadastro() {

    window.location.href = "index.html";

}

