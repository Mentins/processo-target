let sequencia = []; //Está sendo criada a sequência dos números que compõem a série de Fibonacci
let n1 = 0;
sequencia.push(n1) // Está sendo adicionado o número 0 à série
let n2 = 1;
sequencia.push(n2) // Está sendo inserido o número 1 no vetor sequencia
for(let i = 0; i<=18; i++){ //Nesta linha está sendo determinado que o vetor sequencia terá 20 elementos (n1 e n2 mais os 18). 
    let n3 = n1 + n2 // n3 está recebendo como valor o resultado da soma entre n1 e n2
    sequencia.push(n3); //Está sendo adicionado o valor de n3 em sequencia
    n1 = n2; // n1 está recebendo o valor de n2
    n2 = n3; // n2 está recebendo o valor de n3
}


const result = sequencia.find( numDado => numDado === 5 )// Através desta função o valor passado para numDado(neste caso é o 5), será atribuído um valor para result. Caso o número exista dentro da sequência, será atribuído a result o próprio número. Caso contrário, o valor atribuído à result será 'undefined.')

if(result != undefined){ //Está sendo aberta uma estrutura condioional que verificará se o valor de result é undefined.
    console.log(`O número ${result} pertence a série de Fibonacci.`); //Será a impressão no console caso o resultado da expressão acima seja true

} else {
    console.log("O número passado não pertence a série de Fibonacci."); //Será a impressão no console caso o resultado da expressão no laço "if" seja false.
}