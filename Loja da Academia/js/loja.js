const itens = document.querySelectorAll(".item_loja");

itens.forEach((item) => {

    const titulo = item.querySelector("h2").textContent.trim().toLowerCase();

    const botao = item.querySelector("button");

    botao.addEventListener("click", () => {

        switch (titulo) {

            case "creatina":
                window.location.href = "creatina.html";
                break;

            case "whey":
                window.location.href = "wey.html";
                break;

            case "pré-treino":
                window.location.href = "pre_treino.html";
                break;

            case "carboidrato":
                window.location.href = "carboidrato.html";
                break;

            case "casien":
            case "casein":
                window.location.href = "casien.html";
                break;

            case "bcaa":
                window.location.href = "bcaa.html";
                break;

        }

    });

});