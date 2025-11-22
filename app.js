alert('Boas vindas ao jogo secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha u número entre 1 e 30');

// se chute for igual ao número secreto
if (chute == numeroSecreto ) {
    console.log('Isso ai! você descobriu o numero secreto (5) ');
} else {
    alert('Você errou :(')
}