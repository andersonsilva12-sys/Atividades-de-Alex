/* Questão 01 - Calcular a média de um aluno com 5 notas */
/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;

function pedirNota(i) {
    rl.question(`Digite a ${i}ª nota: `, (resposta) => {

        let numero = Number(resposta);

        soma += numero;

        if (i < 5) {
            pedirNota(i + 1);
        } else {
            let media = soma / 5;

            console.log("Média do aluno:", media);

            rl.close();
        }
    });
}

pedirNota(1);
*/


/* Questão 02 - Mostrar a tabuada de um número */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (resposta) => {

    let numero = Number(resposta);

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    rl.close();
});