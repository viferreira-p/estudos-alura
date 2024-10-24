alert('Boas Vindas ao Jogo do Número Secreto');
let numeroSecreto = 5;
let tentativa = prompt ('Escolha um número entre 1 e 10');

if(tentativa == numeroSecreto){
    alert(`Você acertou o número secreto! ${numeroSecreto}`);
} else {
    alert('Você errou ):');
}