//Questão 01: Escreva uma função em JS para classificar um número inteiro
/* Se o número for menor que zero, mostre "Número Negativo". Se for 
igual a zero, mostre "Número Neutro". Se for maior que zero mostre "Número Positivo"

Além disso, caso o número seja positivo, informe também se ele é par ou ímpar.
Como saída, mostre a classificação e, quando possivel, a paridade. */


function verificarNum() {

    let Num = Number(document.getElementById("num").value);

    if (Num < 0) {
        resultado = "Número Negativo!";
    } else if (Num == 0) {
        resultado = "Número Neutro!";
    } else {
        resultado = "Número Positivo!";
    }
    if (Num > 0) {
        if (Num % 2 == 0) {
            resultado += ` O número é ${Num} par!`
        } else {
            resultado += ` O número ${Num} é ímpar`;
        }
    }
    document.getElementById("result1").innerHTML = resultado;
}


//Questão 02: Calculadora de operações
/*  Escreva uma função em JS para realizar uma operação matemática entre dois números.
    A função deve receber dois números e uma operação +, -, * ou /.
    Caso o usuário tente dividir por zero, mostre "Não é possível dividir por zero" */



function operadorMatematico() {
    let Num1 = Number(document.getElementById("num1").value);
    let Num2 = Number(document.getElementById("num2").value);
    let Operacao = document.getElementById("operacao").value;

    if (Operacao == "/" && Num1 == 0 || Num2 == 0) {
        document.getElementById("result2").innerHTML = "Não é possível dividir por zero!";
        return;
    }

    if (Operacao == "+") {
        som = Num1 + Num2;
        resultado = (`A soma dos dois número é: ${som}`);
    } else if (Operacao == "-") {
        sub = Num1 - Num2;
        resultado = (`A subtração dos dois número é: ${sub}`);
    } else if (Operacao == "*") {
        mul = Num1 * Num2;
        resultado = (`A multiplicação dos dois número é: ${mul}`);
    } else if (Operacao == "/") {
        div = Num1 / Num2;
        resultado = (`A divisão dos dois número é: ${div}`);
    }
    else {
        resultado = "Operação inválida. "
    }

    document.getElementById("result2").innerHTML = resultado;
}

//Questão 03: Classificação de idade
/* Escreva uma função para classificar uma pessoa de acordo com sua idade.
Idade menor que 0: "Idade inválida" de 0 a 12: "Criança" de 13 a 17: "Adolescente"
de 18 a 59: "Adulto" de 60 ou mais: "Idoso" 

Também informe sua situação eleitoral: menor de 16 anos: "Não pode votar", 16 ou 17: "Voto Facultativo"
18 a 69: "Voto Obrigatório" 70 ou mais: "Voto Facultativo".

Se a idade for inválida, não faça a classificação eleitoral. */

function classificadorIdade() {
    let Idade = Number(document.getElementById("idade").value)

    if (Idade < 0) {
        resultado = ("Idade inválida. ");
    } else if (Idade <= 12) {
        resultado = ("Criança. ");
    } else if (Idade <= 17) {
        resultado = ("Adolescente. ");
    } else if (Idade <= 59) {
        resultado = ("Adulto. ");
    } else if (Idade >= 60) {
        resultado = ("Idoso. ");
    }

    if (Idade < 16) {
        resultado += ("Ainda não pode votar!");
    } else if (Idade < 18 || Idade > 69) {
        resultado += ("Possui voto facultativo!");
    } else if (Idade > 18 && Idade < 70) {
        resultado = ("Possui voto obrigatório!")
    }
    document.getElementById("result3").innerHTML = resultado;
}

//  Questão 04: Aprovação com frequência
/* Escreva uma função para verificar a situação final de um aluno.

Receba três notas e o percentual de frequência. Calcule a média aritimética.

Se alguma nota estiver fora do intervalo de 0 a 100, mostre "Nota inválida". Se a
frequência estiver fora de 0 a 100, mostre "Frequência inválida.

Se a média for maior ou igual a 70 e a frequência maior ou igual a 75%, mostre "Aprovado".

Se a média for maior ou igual a 70, mas a frequência menor que 75%, mostre "Reprovado por falta".

Se a média estiver entre 40 e 69,99 e a frequência for suficiente, mostre "Exame final". Se a média for menor
que 40, mostre "Reprovado por média".
*/

function aprovadorSala() {
    let Nota1 = Number(document.getElementById("nota1").value)
    let Nota2 = Number(document.getElementById("nota2").value)
    let Nota3 = Number(document.getElementById("nota3").value)
    let Frequencia = Number(document.getElementById("frequencia").value)

    Media = (Nota1 + Nota2 + Nota3) / 3

    if (Nota1 < 0 || Nota1 > 100) {
        resultado = ("Nota inválida. As notas devem estar entre 0 e 100!");
    } else if (Nota2 < 0 || Nota2 > 100) {
        resultado = ("Nota inválida. As notas devem estar entre 0 e 100!");
    } else if (Nota3 < 0 || Nota3 > 100) {
        resultado = ("Nota inválida. As notas devem estar entre 0 e 100!");
    } else if (Frequencia < 0 || Frequencia > 100) {
        resultado = ("Frequência inválida. A frequência deve estar entre 0 e 100!");
    }

    if (Media >= 70 && Frequencia >= 75) {
        resultado = (`Sua média foi: ${Media}. Aluno aprovado!`);
    } else if (Media >= 70 && Frequencia < 75) {
        resultado = (`Sua média foi: ${Media}, mas sua frequência foi: ${Frequencia}. Aluno reprovado por falta!`);
    } else if (Media >= 40 && Media >= 69.99 && Frequencia >= 75) {
        resultado = (`Sua média foi: ${Media}. Aluno no exame final`);
    } else if (Media < 40) {
        resultado = (`Sua média foi: ${Media}. Aluno reprovado por média!`)
    }


    document.getElementById("result4").innerHTML = resultado;
}


//Questão 05: Tarifa de energia elétrica
/* Escreva uma função para calcular o valor de uma conta de energia elétrica a partir do
consumo mensal em kWh.

Até 100 kWh: R$ 0.50 por kWh; de 101 a 200 kWh: R$ 0.75 por kWh; de 201 a 300 kWh: R$ 1.00 por kWh;
acima de 300 kWh: R$ 1.25 por kWh.

Considere uma taxa fixa de iluminação pública de R$ 15.00.

Consumo menor que zero deve ser considerado inválido
Mostre o consumo, o valor do consumo, a taxa adcional e o valor total. */

function tarifaEnergia() {
    let Consumo = Number(document.getElementById("consumo").value)
    const taxaFixa = 15.00

    if (Consumo < 0) {
        resultado = (`Consumo inválido!`)
    } else if (Consumo <= 100) {
        taxa = Consumo * 0.50
        valorTotal = taxa + taxaFixa
        resultado = `Seu consumo foi de: ${Consumo} kWh.
                    O valor de consumo é R$ 0.50 por kWh. Você deve pagar um taxa fixa de R$ 15.00. 
                    Valor total a pagar = R$ ${valorTotal}`;
    } else if (Consumo <= 200) {
        taxa = Consumo * 0.75
        valorTotal = taxa + taxaFixa
        resultado = `Seu consumo foi de: ${Consumo} kWh.
                    O valor de consumo é R$ 0.75 por kWh. Você deve pagar um taxa fixa de R$ 15.00. 
                    Valor total a pagar = R$ ${valorTotal}`;
    } else if (Consumo <= 300) {
        taxa = Consumo * 1.00
        valorTotal = taxa + taxaFixa
        resultado = `Seu consumo foi de: ${Consumo} kWh.
                    O valor de consumo é R$ 1.00 por kWh. Você deve pagar um taxa fixa de R$ 15.00. 
                    Valor total a pagar = R$ ${valorTotal}`;
    } else if (Consumo > 300) {
        taxa = Consumo * 1.25
        valorTotal = taxa + taxaFixa
        resultado = `Seu consumo foi de: ${Consumo} kWh.
                    O valor de consumo é R$ 1.25 por kWh. Você deve pagar um taxa fixa de R$ 15.00. 
                    Valor total a pagar = R$ ${valorTotal}`;
    }

    document.getElementById("result5").textContent = resultado

}

//Questão 06: Descontos em uma loja
/* • Escreva uma função para calcular o valor final de uma compra.
• Receba o valor total da compra e a forma de pagamento: dinheiro, pix ou cartao.

• Para dinheiro ou pix: acima de R$ 1.000,00, desconto de 15%; de R$ 500,00 a R$ 1.000,00,
desconto de 10%; abaixo de R$ 500,00, desconto de 5%.

• Para cartão: acima de R$ 1.000,00, desconto de 5%; de R$ 500,00 a R$ 1.000,00, desconto
de 3%;
abaixo de R$ 500,00, sem desconto.
• Valor menor ou igual a zero e forma de pagamento inválida devem gerar mensagens de erro.
• Mostre valor original, desconto e valor final. */

function calcularDesconto() {
    let valorFinal = parseFloat(document.getElementById("valorFinal").value);
    let Pagamento = document.getElementById("pagamento").value;
    let total;

    if (valorFinal <= 0) {
        document.getElementById("result6").innerHTML = "Valor final inválido!";
        return;
    }

    if (Pagamento == "dinheiro" || Pagamento == "pix") {
        if (valorFinal <= 500) {
            total = valorFinal * 0.95;
            resultado = (`Desconto de 5%. Valor total a ser pago: R$ ${total}`)
        }
        else if (valorFinal <= 1000) {
            total = valorFinal * 0.9;
            resultado = (`Desconto de 10%. Valor total a ser pago: R$ ${total}`)
        }
        else {
            total = valorFinal * 0.85;
            resultado = (`Desconto de 15%. Valor total a ser pago: R$ ${total}`)
        }
    }

    if (Pagamento == "cartao") {
        if (valorFinal <= 500) {
            total = valorFinal;
            resultado = (`Sem desconto. Valor total a ser pago: R$ ${total}`)
        }
        else if (valorFinal <= 1000) {
            total = valorFinal * 0.97;
            resultado = (`Desconto de 3%. Valor total a ser pago: R$ ${total}`)

        }
        else {
            total = valorFinal * 0.95;
            resultado = (`Desconto de 5%. Valor total a ser pago: R$ ${total}`)
        }
    }

    document.getElementById("result6").innerHTML = resultado
}

//Questão 07: Classificação de triângulos
/* • Escreva uma função para classificar um triângulo a partir de seus três lados.
• Primeiro verifique se os lados podem formar um triângulo. A soma de dois lados deve ser
sempre maior que o terceiro.

• Se não puder formar um triângulo, mostre “Não forma um triângulo”.
• Se for válido: três lados iguais significam “Equilátero”; dois lados iguais significam
“Isósceles”; três lados diferentes significam “Escaleno”. */


function classificarTriangulos() {
    let ladoA = parseFloat(document.getElementById("ladoA").value);
    let ladoB = parseFloat(document.getElementById("ladoB").value);
    let ladoC = parseFloat(document.getElementById("ladoC").value);
    let somAB = ladoA + ladoB;
    let somAC = ladoA + ladoC;
    let somBC = ladoB + ladoC;

    if (somAB > ladoC && somAC > ladoB && somBC > ladoA) {
        if (ladoA == ladoB && ladoA == ladoC) {
            document.getElementById("result7").innerHTML = "Esse é um triângulo equilátero!"
        } else if (ladoA != ladoB && ladoA != ladoC) {
            document.getElementById("result7").innerHTML = "Esse é um triângulo escaleno!"
        } else {
            document.getElementById("result7").innerHTML = "Esse é um triângulo isóceles!"
        }
    } else {
        document.getElementById("result7").innerHTML = "Essas medidas não são de um triângulo!"
    }
    document.getElementById("result6").innerHTML = resultado
}


//Questão 8 — Validação de saque
/* Escreva uma função para simular a validação de um saque em um caixa eletrônico.
• Receba o saldo disponível e o valor desejado para saque.

• Saldo menor que zero: “Saldo inválido”. Valor de saque menor ou igual a zero: “Valor
de saque inválido”. Saque maior que o saldo: “Saldo insuficiente”.
• O saque deve ser múltiplo de 10. Caso contrário, mostre “Valor deve ser múltiplo de 10”.
• Se todas as condições forem satisfeitas, mostre “Saque autorizado” e o saldo restante.
• Não é necessário calcular a quantidade de cédulas. */

function validarSaque() {
    let saldo = parseFloat(document.getElementById("saldo").value);
    let saque = parseFloat(document.getElementById("saque").value);
    let saldoFinal;

    if (saldo < 0) {
        document.getElementById("result8").innerHTML = ("Saldo inválido!");
        return;
    } else if (saque > saldo) {
        document.getElementById("result8").innerHTML = ("Saldo insuficiente!");
    } else if (saque % 10 != 0) {
        document.getElementById("result8").innerHTML = ("Valor de saque deve ser multiplo de 10!");
    } else {
        saldoFinal = saldo - saque;
        document.getElementById("result8").innerHTML = (`Saque efetuado com sucesso! Seu saldo agora é: ${saldoFinal}`)
    }
}


//Questão 09: Imposto de renda simplificado
/* • Escreva uma função para calcular um imposto simplificado com base no salário bruto.
• Até R$ 2.000,00: isento; acima de R$ 2.000,00 até R$ 3.500,00: 7,5%; acima de R$ 3.500,00
até R$
5.000,00: 15%; acima de R$ 5.000,00: 22,5%.
• Salário menor ou igual a zero deve ser considerado inválido.
• Calcule o imposto sobre o salário bruto inteiro.
• Mostre salário bruto, alíquota aplicada, valor do imposto e salário após o imposto. */


function calcularImposto() {
    let saldoBruto = parseFloat(document.getElementById("saldoBruto").value);
    let saldoLiquido;
    let resultado;
    let imposto;

    if (saldoBruto <= 0) {
        resultado = "Saldo inválido";

    } else if (saldoBruto <= 2000) {
        saldoLiquido = saldoBruto;
        resultado = `Você está isento de impostos! Seu saldo líquido é de: R$ ${saldoLiquido}`;

    } else if (saldoBruto <= 3500) {
        imposto = saldoBruto * 0.075;
        saldoLiquido = saldoBruto * 0.925;
        resultado = `Você deve pagar um imposto de 7,5% sendo: R$ ${imposto}. Seu saldo líquido é: R$ ${saldoLiquido}`;

    } else if (saldoBruto <= 5000) {
        imposto = saldoBruto * 0.15;
        saldoLiquido = saldoBruto * 0.85;
        resultado = `Você deve pagar um imposto de 15% sendo: R$ ${imposto}. Seu saldo líquido é: R$ ${saldoLiquido}`;

    } else {
        imposto = saldoBruto * 0.225;
        saldoLiquido = saldoBruto * 0.775;
        resultado = `Você deve pagar um imposto de 22,5% sendo: R$ ${imposto}. Seu saldo líquido é: R$ ${saldoLiquido}`;
    }

    document.getElementById("result9").innerHTML = resultado;
}

//Questão 10: Análise de crédito
/* Um influenciador digital recebe dinheiro pelas publicações que realiza nas redes sociais. O valor
de cada publicação depende da quantidade de seguidores.
Escreva uma função que calcule quanto o influenciador receberá por uma publicação.
O valor da publicação será definido da seguinte forma:
• Até 10.000 seguidores: R$ 100,00;
• De 10.001 a 50.000 seguidores: R$ 500,00;
• De 50.001 a 100.000 seguidores: R$ 1.000,00;
• Acima de 100.000 seguidores: R$ 2.000,00.
Além disso, o influenciador receberá um bônus de acordo com a quantidade de curtidas:
• Menos de 1.000 curtidas: sem bônus;
• De 1.000 a 4.999 curtidas: bônus de R$ 100,00;
• 5.000 curtidas ou mais: bônus de R$ 300,00.
A função deve receber a quantidade de seguidores e de curtidas, calcular o valor da publicação,
o bônus e o total recebido. */
