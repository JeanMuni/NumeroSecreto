alert('Boas vindas ao jogo secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}