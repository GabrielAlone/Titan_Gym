const btnCadastrar = document.getElementById("btnCadastrar");
const btnLogin = document.getElementById("btnLogin");

btnCadastrar.addEventListener("click", cadastrar);

btnLogin.addEventListener("click", irLogin);

function cadastrar() {

    const nome = document.getElementById("nome").value;
    const nascimento = document.getElementById("data_nascimento").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar_senha").value;
    const checkbox = document.getElementById("confirmar").checked;

    if (
        nome === "" ||
        nascimento === "" ||
        email === "" ||
        senha === "" ||
        confirmar === ""
    ) {

        alert("Preencha todos os campos.");

        return;

    }

    if (senha !== confirmar) {

        alert("As senhas são diferentes.");

        return;

    }

    if (!checkbox) {

        alert("Confirme o envio dos dados.");

        return;

    }

    const usuario = {

        nome: nome,

        nascimento: nascimento,

        email: email,

        senha: senha

    };

    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";

}

function irLogin() {

    window.location.href = "login.html";

}