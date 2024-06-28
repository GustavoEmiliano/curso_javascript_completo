/* Vamos entender váriaveis
Váriaveis são "recipientes" onde podemos armazenar informações que
podem variar, ou seja, podem ter qualquer tipo de valor.

No JavaScript temos 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const
*/

var pote = "Bombom";
alert(pote);

//Declarção funcional mas não limpa:
var a = 2;
var b = 3;
var c = a + b;
alert(c);

// Declaração mais limpa:
var a,b,c;

// Atribuição dos valores
a = 2;
b = 3;
c = a + b;

alert(c);

// Concatenação:
// OBS: Misturar string e numero não é uma boa ideia
var nome, sobrenome, nomeCompleto, idade, soma;

idade = 30;
nome = "Gustavo";
sobrenome = "Emiliano";
nomeCompleto = nome + " " + sobrenome;

// Misturar podem levar a resultados não esperados:
pessoa = idade + 10 + nome;
pessoa = nome + idade + 10;

soma = idade + 10;
pessoa = nome + " " + soma;

document.getElementById("texto").innerHTML = nomeCompleto;
document.getElementById("texto").innerHTML = pessoa;

/* Diferenças entre let, var, const

-> O let torna aquela variável única, não podendo ser redeclarada

let pessoa = "Gustavo";
let pessoa = " João"    

Neste caso no console acusará um erro de sintaxe, dizendo que a variável já foi declarada

-> O var permite você redeclarar uma variável 

-> O var permite utilizar uma variavel dentro de outros blocos(Escopo Separado)

var  x = 10; // aqui é 10

{
    var x = 2; // aqui é 2
}

/ aqui também vai ser 2
document.getElementById("texto").innerHTML = x;
=============================================================================================

let  x = 10; // aqui é 10

{
    let x = 2; // aqui é 2 e só funcionará dentro do bloco e nunca irá sobrescrever - Muito utilizado hoje em dia
}

/ aqui também vai ser 10
document.getElementById("texto").innerHTML = x;
=============================================================================================

-> O const é um valor imutável em qualquer bloco de código e não pode ser redeclarado
const  x = 10; // aqui é 10

{
    const x = 2; // aqui é 10
}

const x = 5;
/ aqui também vai ser 10
document.getElementById("texto").innerHTML = x;
*/
