const readline = require('readline');

// Configura a leitura de dados do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função principal que faz a lógica do triângulo
function verificarTriangulo() {
  console.log("\n--- Classificador de Triângulos ---");
  
  rl.question("Digite o lado X: ", (x) => {
    rl.question("Digite o lado Y: ", (y) => {
      rl.question("Digite o lado Z: ", (z) => {
        
        // Converte os textos digitados para números decimais
        const X = parseFloat(x);
        const Y = parseFloat(y);
        const Z = parseFloat(z);

        // Validação: Verifica se são números válidos e positivos
        if (isNaN(X) || isNaN(Y) || isNaN(Z) || X <= 0 || Y <= 0 || Z <= 0) {
            console.log("Resultado: Por favor, digite números válidos e maiores que zero.");
        } 
        // 1. Validação Matemática: A soma de dois lados deve ser > que o terceiro
        else if (X < Y + Z && Y < X + Z && Z < X + Y) {
          
          // 2. Classificação baseada nos lados
          if (X === Y && Y === Z) {
            console.log("Resultado: Triângulo EQUILÁTERO (3 lados iguais)");
          } else if (X === Y || X === Z || Y === Z) {
            console.log("Resultado: Triângulo ISÓSCELES (2 lados iguais)");
          } else {
            console.log("Resultado: Triângulo ESCALENO (Todos os lados diferentes)");
          }

        } else {
          console.log("Resultado: INVÁLIDO. Os lados não formam um triângulo.");
        }

        // Chama o menu novamente
        exibirMenu();
      });
    });
  });
}

// Função que exibe o menu para o usuário decidir o próximo passo
function exibirMenu() {
  console.log("\n--------------------------");
  console.log("1. Verificar outro triângulo");
  console.log("0. Sair");
  
  rl.question("Escolha uma opção: ", (opcao) => {
    if (opcao === '1') {
      verificarTriangulo();
    } else if (opcao === '0') {
      console.log("Saindo do programa... Até logo!");
      rl.close();
    } else {
      console.log("Opção inválida! Tente novamente.");
      exibirMenu();
    }
  });
}

// Inicia o programa pela primeira vez
exibirMenu();