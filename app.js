alert('Boas vindas ao jogo do número secreto');

const numeroSecreto = 5;
console.log('numeroSecreto (tipo):', numeroSecreto, typeof numeroSecreto);

// 1) Pega a string do prompt
let raw = prompt('Escolha um número entre 1 e 10');

// 2) Se o usuário cancelou
if (raw === null) {
    alert('Você cancelou o jogo.');
} else {
    // 3) Limpa espaços e caracteres que não são dígitos (mantém possível sinal negativo)
    let somenteDigits = raw.trim().replace(/[^\d\-０-９]/g, ''); 
    // Observe: a regex remove caracteres não dígitos — ajusta para evitar caracteres estranhos.
    // Se houver dígitos fullwidth (unicode ０-９) você pode converter — exemplo simples abaixo.

    // Converter dígitos fullwidth (０-９) para ASCII (0-9)
    somenteDigits = somenteDigits.replace(/[\uFF10-\uFF19]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFF10 + 48));

    // 4) Converter para número
    let chute = Number(somenteDigits);

    console.log('raw:', raw, '=> somenteDigits:', somenteDigits, '=> chute:', chute, typeof chute);

    if (Number.isNaN(chute)) {
        alert('Isso não parece um número válido. Digite um número de 1 a 10.');
    } else if (chute === numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        alert('Você errou :(');
    }
}
