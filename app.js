alert("Boas Vindas ao Jogo do Número Secreto");
let numeroSecreto = 5;
let tentativa;
let numeroTentativas = 1;


// enquanto a tentativa não for igual ao número secreto
while (tentativa != numeroSecreto) {
  tentativa = prompt("Escolha um número entre 1 e 10");
  // se a tentativa for igual, maior ou menor ao número secreto
  if (tentativa == numeroSecreto) {
    alert(`Parabéns, acertou o número secreto ${numeroSecreto} com ${numeroTentativas} tentativas!`);
  } else {
    if (tentativa > numeroSecreto) {
      alert(`O número secreto é menor que ${tentativa}`);
    } else {
      alert(`O número secreto é maior que ${tentativa}`);
    }
    numeroTentativas++;
  }
}
