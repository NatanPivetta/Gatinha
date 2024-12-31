// Array de charadas e respostas
const charadas = [
    { pergunta: "Sou uma mascote de uma marca que é um show. A marca é também matéria prima de chocolate", resposta: "tagccattgc" },
    { pergunta: "Sou rosa, agitado e fofo. As vezes preciso ser recarregado", resposta: "0dbfc3c27a" },
    { pergunta: "Em mim há uma bebida forte de origem alemã, com nome forte", resposta: "Willi Hennig" },
    { pergunta: "Fly me to the moon, and let me play among the stars", resposta: "00000001 00000001 0000011111101001" },
    { pergunta: "Fico quente, faço peixe. Fico quente, faço lasanha. Fico quente, faço bolo", resposta: "224" },
    { pergunta: "Digite a senha encontrada no cartão", resposta: "TE AMO, XUXU!" },
    // Adicione mais charadas conforme necessário
];

let indiceAtual = 0;

// Função para exibir a charada atual
function exibirCharada() {
    const elementoCharada = document.getElementById('charadaTxt');
    elementoCharada.innerHTML = charadas[indiceAtual].pergunta;
}





// Função para verificar a resposta do jogador
function verificarResposta() {
    const inputResposta = document.getElementById('resposta');
    const respostaJogador = inputResposta.value.trim().toLowerCase();
    const respostaCorreta = charadas[indiceAtual].resposta.trim().toLowerCase(); // Normaliza a resposta correta

    console.log(`Resposta do jogador: ${respostaJogador}`);
    console.log(`Resposta correta: ${respostaCorreta}`);

    // Verifique se as respostas são idênticas após normalização
    if (respostaJogador !== respostaCorreta) { 
        alert('Resposta incorreta. Tente novamente.');
        return; // Impede que o fluxo continue, evitando exibir ambos os alertas
    }

    alert('Resposta correta!');
    indiceAtual++;
    console.log(`Índice atual: ${indiceAtual}`);
    if (indiceAtual < charadas.length) {
        inputResposta.value = '';
        respostaJogador.value = ''; // Limpa o campo de entrada
        exibirCharada(); // Exibe a próxima charada
        return;
    } else {
        alert('Parabéns! Você completou todas as charadas.');
        alert("Clique em OK para receber um vale pelúcia!");
        window.location.href = "/pelucia.html";

        // Reiniciar o jogo ou implementar outra lógica
    }
}

// Adiciona evento ao botão
document.getElementById('enviar').addEventListener('click', verificarResposta);

// Exibe a primeira charada ao carregar a página

exibirCharada();