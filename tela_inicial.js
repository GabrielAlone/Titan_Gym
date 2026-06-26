document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os links de assinar dentro da seção de planos
    const botoesAssinar = document.querySelectorAll("#planos .plano a");

    botoesAssinar.forEach(botao => {
        botao.addEventListener("click", (evento) => {
            evento.preventDefault(); 

            // Pega o container do plano atual para descobrir o nome dele
            const containerPlano = botao.closest(".plano");
            const nomePlano = containerPlano.querySelector("h3").textContent.trim();

            // Exibe a mensagem de sucesso
            alert(`Parabéns! ${nomePlano} assinado com sucesso. Bem-vindo à Titan Gym!`);
            
            window.location.hash = "contato";
        });
    });
});