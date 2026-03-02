const META = 30;
let posPlayer = 0;
let posCPU = 0;
let turnoJogador = true;
let jogoAtivo = true;

// Referência ao botão de reiniciar
const btnReiniciar = document.getElementById('btn-reiniciar');

// Escuta a tecla Enter
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && turnoJogador && jogoAtivo) {
        executarTurno("player");
    }
});

// Configura o clique no botão
btnReiniciar.addEventListener('click', reiniciarJogo);

function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function aplicarEventos(posicao) {
    // Avanço extra: 5, 10, 15
    if ([5, 10, 15].includes(posicao)) {
        console.log("Bônus! +3 casas.");
        return posicao + 3;
    }
    // Recuo: 7, 13, 20
    if ([7, 13, 20].includes(posicao)) {
        console.log("Buraco! -2 casas.");
        return Math.max(0, posicao - 2); // Não deixa a posição ser negativa
    }
    return posicao;
}

function atualizarTela(msg) {
    document.getElementById('msg').innerText = msg;
    document.getElementById('pos-player').innerText = posPlayer;
    document.getElementById('pos-cpu').innerText = posCPU;
    
    // Move visualmente os emojis (calculando % da pista)
    document.getElementById('p-player').style.left = (posPlayer / META * 100) + "%";
    document.getElementById('p-cpu').style.left = (posCPU / META * 100) + "%";
}

function executarTurno(quem) {
    const dado = rolarDado();
    let novaPos, nome;

    if (quem === "player") {
        posPlayer += dado;
        posPlayer = aplicarEventos(posPlayer);
        novaPos = posPlayer;
        nome = "Você";
    } else {
        posCPU += dado;
        posCPU = aplicarEventos(posCPU);
        novaPos = posCPU;
        nome = "Computador";
    }

    atualizarTela(`${nome} tirou ${dado}!`);

    // --- CORREÇÃO AQUI: Checa vitória e mostra o botão ---
    if (novaPos >= META) {
        atualizarTela(`🏆 FIM DE JOGO, ${nome.toUpperCase()} VENCEU!`);
        jogoAtivo = false;
        btnReiniciar.style.display = "inline-block"; // Agora o botão vai aparecer!
        return;
    }

    // Regra da Rodada Extra (Dado 6)
    if (dado === 6) {
        atualizarTela(`${nome} tirou 6 e joga de novo!`);
        if (quem === "cpu") setTimeout(() => executarTurno("cpu"), 1500);
        return;
    }

    // Troca de turno
    if (quem === "player") {
        turnoJogador = false;
        setTimeout(turnoComputador, 1500); // Delay para o bot "pensar"
    } else {
        turnoJogador = true;
    }
}

function turnoComputador() {
    if (!jogoAtivo) return;
    executarTurno("cpu");
}

// --- CORREÇÃO AQUI: Função de reiniciar completa ---
function reiniciarJogo() {
    // 1. Reseta as variáveis
    posPlayer = 0;
    posCPU = 0;
    turnoJogador = true;
    jogoAtivo = true; // Importante resetar isso!

    // 2. Esconde o botão novamente
    btnReiniciar.style.display = "none";

    // 3. Atualiza a tela para o estado inicial
    atualizarTela("Pressione Enter para começar!");
}