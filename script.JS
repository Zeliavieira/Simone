const alunos = [
    { nome: "zelia", mensagem: "olá mundo" },
    { nome: "Aluno 2", mensagem: "Mensagem do Aluno 2" },
    { nome: "Aluno 3", mensagem: "Mensagem do Aluno 3" },
    { nome: "Aluno 4", mensagem: "Mensagem do Aluno 4" },
    { nome: "Aluno 5", mensagem: "Mensagem do Aluno 5" },
    { nome: "Aluno 6", mensagem: "Mensagem do Aluno 6" },
    { nome: "Aluno 7", mensagem: "Mensagem do Aluno 7" },
    { nome: "Aluno 8", mensagem: "Mensagem do Aluno 8" },
    { nome: "Aluno 9", mensagem: "Mensagem do Aluno 9" },
    { nome: "Aluno 10", mensagem: "Mensagem do Aluno 10" },
    { nome: "Aluno 11", mensagem: "Mensagem do Aluno 11" },
    { nome: "Aluno 12", mensagem: "Mensagem do Aluno 12" },
    { nome: "Aluno 13", mensagem: "Mensagem do Aluno 13" },
    { nome: "Aluno 14", mensagem: "Mensagem do Aluno 14" },
    { nome: "Aluno 15", mensagem: "Mensagem do Aluno 15" },
    { nome: "Aluno 16", mensagem: "Mensagem do Aluno 16" },
    { nome: "Aluno 17", mensagem: "Mensagem do Aluno 17" },
    { nome: "Aluno 18", mensagem: "Mensagem do Aluno 18" },
    { nome: "Aluno 19", mensagem: "Mensagem do Aluno 19" },
    { nome: "Aluno 20", mensagem: "Mensagem do Aluno 20" },
    { nome: "Aluno 21", mensagem: "Mensagem do Aluno 21" },
    { nome: "Aluno 22", mensagem: "Mensagem do Aluno 22" },
    { nome: "Aluno 23", mensagem: "Mensagem do Aluno 23" }
];

let currentIndex = 0;

function exibirMensagem() {
    const alunoAtual = alunos[currentIndex];
    const mensagemElement = document.getElementById("mensagem");
    mensagemElement.textContent = alunoAtual.mensagem;

    const opcoesElement = document.getElementById("opcoes");
    opcoesElement.innerHTML = "";

    const opcoes = [alunoAtual.nome];
    while (opcoes.length < 3) {
        const opcao = alunos[Math.floor(Math.random() * alunos.length)].nome;
        if (!opcoes.includes(opcao)) {
            opcoes.push(opcao);
        }
    }

    opcoes.sort(() => Math.random() - 0.5);

    opcoes.forEach((opcao, index) => {
        const button = document.createElement("button");
        button.textContent = `Opção ${index + 1}: ${opcao}`;
        button.addEventListener("click", () => {
            verificarResposta(opcao, alunoAtual.nome);
        });
        opcoesElement.appendChild(button);
    });
}

function verificarResposta(resposta, alunoCorreto) {
    const respostaElement = document.getElementById("resposta");
    if (resposta === alunoCorreto) {
        if (respostaElement.classList.contains("erro")) {
            respostaElement.classList.remove("erro");
        }
        if (respostaElement.classList.contains("acerto")) {
            respostaElement.classList.remove("acerto");
        }
        respostaElement.classList.add("acerto");
        respostaElement.textContent = `Você acertou! O aluno que escreveu a mensagem é: ${alunoCorreto}`;
    } else {
        if (respostaElement.classList.contains("acerto")) {
            respostaElement.classList.remove("acerto");
        }
        respostaElement.classList.add("erro");
        respostaElement.textContent = `Você errou! O aluno que escreveu a mensagem é: ${alunoCorreto}`;
    }
    currentIndex++;
    if (currentIndex < alunos.length) {
        setTimeout(exibirMensagem, 2000);
    } else {
        respostaElement.textContent += "\nFim do jogo.";
    }
}

exibirMensagem();
