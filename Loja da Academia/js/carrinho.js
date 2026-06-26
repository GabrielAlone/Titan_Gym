document.addEventListener("DOMContentLoaded", () => {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalElemento = document.getElementById("total");
    const btnLimpar = document.getElementById("limpar");
    const btnComprar = document.getElementById("comprar");

    // 1. Busca os itens salvos no LocalStorage
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Função para renderizar os produtos na tela
    function carregarCarrinho() {
        if (!listaCarrinho) return;

        // Limpa o contêiner para não duplicar elementos
        listaCarrinho.innerHTML = "";
        let valorTotal = 0;

        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = "<p style='color: #333; text-align: center; padding: 20px;'>Seu carrinho está vazio.</p>";
            if (totalElemento) totalElemento.textContent = "Total: R$ 0,00";
            return;
        }

        // Percorre cada item adicionado e cria o HTML dele na tela do carrinho
        carrinho.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.style.display = "flex";
            itemDiv.style.justifyContent = "space-between";
            itemDiv.style.alignItems = "center";
            itemDiv.style.padding = "10px 0";
            itemDiv.style.borderBottom = "1px solid #eee";
            itemDiv.style.color = "#333";

            itemDiv.innerHTML = `
                <span style="font-weight: bold;">${item.nome}</span>
                <span>R$ ${item.preco.toFixed(2).replace(".", ",")}</span>
            `;

            listaCarrinho.appendChild(itemDiv);
            valorTotal += item.preco; // Soma o valor do produto diretamente
        });

        // Atualiza o valor do total na tela
        if (totalElemento) {
            totalElemento.textContent = `Total: R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
        }
    }

    // 2. Configura a ação do botão "Limpar Carrinho"
    if (btnLimpar) {
        btnLimpar.addEventListener("click", () => {
            localStorage.removeItem("carrinho"); // Apaga o banco de dados temporário
            carrinho = [];
            carregarCarrinho(); // Atualiza a tela
            alert("Carrinho limpo com sucesso!");
        });
    }

    // 3. Configura a ação do botão "Finalizar Compra"
    if (btnComprar) {
        btnComprar.addEventListener("click", () => {
            if (carrinho.length === 0) {
                alert("Seu carrinho está vazio!");
                return;
            }
            alert("Compra finalizada com sucesso! Obrigado por comprar na Titan Gym.");
            localStorage.removeItem("carrinho");
            window.location.href = "loja.html"; // Redireciona de volta à loja
        });
    }

    // Executa a listagem assim que a página abre
    carregarCarrinho();
});