let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entr 1 y 10 por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el número secreto es; ${numeroUsuario}`);
} else {
    alert(`Lo siento, no acertaste el número`)
}