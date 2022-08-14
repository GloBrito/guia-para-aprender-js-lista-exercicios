/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

// Entrada
var entrada = 'abacate'

// gere a variável invertido de forma a transforma a entrada na saída esperada
// var invertido = '?'

// console.log(invertido)

//SEPARA CADA LETRA DA PALAVRA COLOCADA NA ENTRADA
let fatia_str = entrada.split("")
console.log(fatia_str)

//EMBARALHA AS PALAVRAS
let reverte = fatia_str.reverse();
console.log(reverte)

//JUNTA AS PALAVRAS JÁ EMBARALHADAS 
var invertido = reverte.join("");
console.log(invertido)




