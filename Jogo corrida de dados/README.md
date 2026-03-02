# 🏁 Corrida de Dados Virtual

Um jogo simples de corrida de dados desenvolvido com **HTML**, **CSS** e **JavaScript** puro para praticar lógica de programação e eventos de teclado.

## 🚀 Como Jogar
1. Abra o arquivo `index.html` no seu navegador.
2. Pressione **Enter** para rolar o dado.
3. O objetivo é chegar na casa **30** antes do computador!

## 🧩 Como Funciona o Jogo (Lógica)

O jogo utiliza um **Game Loop** baseado em eventos (cliques de tecla). O fluxo é o seguinte:

1.  **Entrada do Usuário:** Ao pressionar **Enter**, a função `executarTurno("player")` é chamada.
2.  **Rolar o Dado:** A função `rolarDado()` gera um número aleatório de 1 a 6.
3.  **Movimentação:** A posição do jogador é atualizada: `posicao = posicao + dado`.

4.  **Verificação de Eventos:**
    * Se cair nas casas **5, 10 ou 15**, o jogador ganha um **bônus** e avança +3.
    * Se cair nas casas **7, 13 ou 20**, o jogador cai em um **buraco** e recua -2.
5.  **Rodada Extra:** Se o número do dado for **6**, o jogador joga novamente.
6.  **Turno do Computador:** Se o jogador não tirar 6, o computador joga automaticamente após um pequeno delay (`setTimeout`).
7.  **Condição de Vitória:** O jogo verifica a cada turno se alguém atingiu a posição 30.

## 🛠️ Tecnologias
* **HTML**: Estrutura da página e os elementos da pista.
* **CSS**: Estilização e animações de movimento (transições).
* **JavaScript**: Toda a lógica de sorteio, verificação de regras e atualização da tela.