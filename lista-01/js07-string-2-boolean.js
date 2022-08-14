/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA                   SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var entrada = '👍'

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
// var resultado = false

// console.log(resultado)


let  list_true = ["Y", "y", "Yes","YES", "yes", "S", "s", "SIM", "Sim", "sim", "1", "👍"];
console.log(list_true.includes(entrada))

// for (let i in list_true){


// let mensagem = list_true == true ? "true" : "false"; 
// console.log(mensagem)


