const botao = document.querySelector(".comprar");

if (botao) {
    botao.addEventListener("click", () => {

        const nome = document.querySelector("h1").textContent;

        const precoTexto = document.querySelector("strong").textContent;

        const preco = parseFloat(
            precoTexto
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
                .trim()
        );

        const item = {
            nome: nome,
            preco: preco
        };

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        carrinho.push(item);

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        window.location.href = "carrinho.html";
    });
}