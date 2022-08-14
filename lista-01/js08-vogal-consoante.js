/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = 'l'

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
// var resultado = 'vogal'

let vogal = ['a', 'A', 'e' , 'E', 'i', 'I', 'o', 'O', 'u', 'U']

let resultado = entrada in vogal ? "vogal" : "consoante"; 
console.log(resultado)