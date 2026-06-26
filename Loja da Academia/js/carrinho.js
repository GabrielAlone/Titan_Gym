let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const lista = document.getElementById("lista-carrinho");
const totalEl = document.getElementById("total");
const limpar = document.getElementById("limpar");

function renderCarrinho() {

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {

        total += item.preco;

        const div = document.createElement("div");

        div.innerHTML = `
            <p><strong>${item.nome}</strong></p>
            <p>R$ ${item.preco.toFixed(2)}</p>
            <button onclick="removerItem(${index})">Remover</button>
            <hr>
        `;

        lista.appendChild(div);
    });

    totalEl.innerText = "Total: R$ " + total.toFixed(2);
}

function removerItem(index) {

    carrinho.splice(index, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    renderCarrinho();
}

limpar.addEventListener("click", () => {

    carrinho = [];

    localStorage.removeItem("carrinho");

    renderCarrinho();
});

renderCarrinho();