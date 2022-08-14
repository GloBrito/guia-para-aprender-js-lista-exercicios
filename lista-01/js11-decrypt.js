/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbdbuf          abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
let texto = "bcbdbuf";

// implemente aqui uma lógica para descriptografar o texto
let textoDeCripto = "";

for (i of texto){
    if (i === '$'){
        textoDeCripto += 'Z';
    } else if (i === '@'){
        textoDeCripto += 'z';
    } else {
        textoDeCripto += String.fromCharCode(i.charCodeAt(0) - 1);
    }
}

console.log(textoDeCripto)
