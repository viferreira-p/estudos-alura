alert("Boas Vindas ao Jogo do Número Secreto");
let numeroSecreto = 5;
let tentativa;

// enquanto a tentativa não for igual ao número secreto
while (tentativa != numeroSecreto) {
  tentativa = prompt("Escolha um número entre 1 e 10");
  if (tentativa == numeroSecreto) {
    alert(`Parabéns, acertou o número secreto ${numeroSecreto}`);
  } else {
    if (tentativa > numeroSecreto) {
      alert(`O número secreto é menor que ${tentativa}`);
    } else {
      alert(`O número secreto é maior que ${tentativa}`);
    }
  }
}
