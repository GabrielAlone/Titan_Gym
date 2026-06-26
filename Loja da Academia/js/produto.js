document.addEventListener("DOMContentLoaded", () => {
    // 1. Tenta achar o botão pela classe .comprar ou tag button
    let botao = document.querySelector(".comprar");

    if (!botao) {
        const botoes = document.querySelectorAll("button");
        botoes.forEach(btn => {
            if (btn.textContent.trim().toLowerCase() === "comprar") {
                botao = btn;
            }
        });
    }

    if (botao) {
        botao.addEventListener("click", () => {
            const h1El = document.querySelector("h1");
            
            // BUSCA MELHORADA: Procura o preço no container principal do item, ignorando a tabela
            // Vamos tentar pegar o strong que contém "R$" para evitar pegar o strong da tabela
            let precoTexto = "";
            const itensStrong = document.querySelectorAll(".item_loja strong, .item_loja p");
            
            itensStrong.forEach(el => {
                if (el.textContent.includes("R$")) {
                    precoTexto = el.textContent;
                }
            });

            if (!h1El || !precoTexto) {
                alert("Erro: Nome ou preço do produto não encontrados na página.");
                return;
            }

            const nome = h1El.textContent.trim();

            // Limpa o preço removendo R$, pontos e ajustando a vírgula
            const precoLimpo = precoTexto.replace("R$", "").replace(/\./g, "").replace(",", ".").trim();
            const preco = parseFloat(precoLimpo);

            if (isNaN(preco)) {
                alert("Erro ao ler o preço do produto.");
                return;
            }

            const item = {
                nome: nome,
                preco: preco
            };

            // Salva no LocalStorage
            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            carrinho.push(item);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            // Alerta confirmando a ação
            alert(nome + " adicionado ao carrinho!");

            // Redireciona para a página do carrinho
            window.location.href = "carrinho.html";
        });
    } else {
        console.log("Aviso do Sistema: O botão de comprar não foi detectado nesta página.");
    }
});