let numeros = [7, 3, 9, 2, 5];
for (let i = 0; i < numeros.length - 1; i++) {
    let indiceMenor = i;
    
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[j] < numeros[indiceMenor]) {
            indiceMenor = j; 
        }
    }
    
    if (indiceMenor !== i) {
        let aux = numeros[i];       
        numeros[i] = numeros[indiceMenor]; 
        numeros[indiceMenor] = aux; 
    }
}

console.log("Lista ordenada: " + numeros);
console.log("i guarda o primeiro índice do vetor, e j guarda o segundo índice, necessário para fazer a comparação. Ambos são percorridos linearmente.")
console.log("indiceMenor guarda o menor número da comparação entre i e j, e serve para trocar a ordem dos elementos caso o menor número seja o segundo da comparação.")