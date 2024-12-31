// Array de charadas e respostas
const charadas = [
    { pergunta: "O que é, o que é? Cai em pé e corre deitado.", resposta: "chuva" },
    { pergunta: "O que é, o que é? Tem cabeça, tem dente, tem barba, não é gente.", resposta: "alho" },
    // Adicione mais charadas conforme necessário
];

let indiceAtual = 0;

// Função para exibir a charada atual
function exibirCharada() {
    const elementoCharada = document.getElementById('charada');
    elementoCharada.textContent = charadas[indiceAtual].pergunta;
    console.log("Element Charada: ", elementoCharada.textContent);
}

// Função para verificar a resposta do jogador
function verificarResposta() {
    const inputResposta = document.getElementById('resposta');
    const respostaJogador = inputResposta.value.trim().toLowerCase();
    console.log(respostaJogador);

    if (respostaJogador === charadas[indiceAtual].resposta) {
        alert('Resposta correta!');
        indiceAtual++;
        if (indiceAtual < charadas.length) {
            exibirCharada();
            inputResposta.value = '';
        } else {
            alert('Parabéns! Você completou todas as charadas.');
            // Reiniciar o jogo ou implementar outra lógica
        }
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
}

// Adiciona evento ao botão
document.getElementById('enviar').addEventListener('click', verificarResposta);

// Exibe a primeira charada ao carregar a página
exibirCharada();
