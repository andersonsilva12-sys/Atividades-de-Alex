/* Questão 5: Escreva uma função em JavaScript para verificar se um número é par ou ímpar. 
A função deve receber como entrada o número digitado pelo usuário. Como saída, deve mostrar uma mensagem 
("Número Par" ou "Número Ímpar"). */

/* Questão 6: Escreva uma função em JavaScript para realizar autenticação de usuário. A função deve receber 
como entrada o login e a senha. Como saída, deve mostrar uma mensagem de validação ("Usuário Autênticado" 
ou  Login / Senha Incorretos"). */

/* Questão 7: Escreva uma função em JavaScript para verificar a situação de um aluno. A função deve receber 
como as três notas do aluno. Logo depois, calcular sua média aritmetica. Como saída, deve mostrar uma mensagem 
com a situação do aluno.
• média abaixo de 40: reprovado;
• média entre 40 e 69: na final;
• média maior ou igual a 70: aprovado. */

/* Questão 8: Escreva uma função em JavaScript para verificar o resultado final de uma eleição entre os candidatos A e B. 
A função deve receber como entrada a quantidade total de votos recebidos pelos dois candidatos, como também os votos em 
branco e os votos nulos. Como saída, deve mostrar uma mensagem com o nome do vencedor e o percentual de votos obtidos 
por ele. */


/* Questão 9: Escreva uma função em JavaScript para calcular reajuste salarial, com base no tempo de serviço do funcionário. 
A função deve receber como entrada o valor original do salário e o tempo de serviço. Como saída, deve apresentar ao usuário (na página HTML) 
o valor do novo salário. Para reajuste, considere as seguintes faixas de desconto:
• 0 – 9 anos de serviço: reajuste de 8%;
• 10 – 19 anos de serviço: reajuste de 10%;
• 20 anos ou mais: reajuste de 15%. */


/* Questão 10: Escreva uma função em JavaScript para simular um sistema de compras, aplicando desconto com base no valor total do pedido. 
A função deve receber como entrada nome, preço e quantidade do produto. O programa deve calcular o valor total e depois aplicar o desconto 
na compra, conforme regras a seguir:
•

Total acima de 500,00 (15% de desconto);
• Total entre 201,00 e 500,00 (10% de desconto);
• Total 200,00 ou menos (sem desconto).
Como saída, o programa deve imprimir uma mensagem conforme o exemplo a seguir:
Produto: Notebook
Quantidade: 2
Valor da compra: R$ 3000,00
Desconto: R$ 450,00
Valor final: R$ 2550,00 */

//||\\
//||\\

/* Questão 05 */

function verificarNum() {
    let Num = Number(document.getElementById("num").value);

    if (Num % 2 === 0) {
        document.getElementById("result5").innerHTML = "Número Par";
    } else {
        document.getElementById("result5").innerHTML = "Número Ímpar";
    }
}


/* Questão 06 */

function autenticarUsuario() {

    let LoginCorreto = "admin";
    let SenhaCorreta = "1234";

    let Login = document.getElementById("login").value;
    let Senha = document.getElementById("senha").value;

    if (Login === LoginCorreto && Senha === SenhaCorreta) {
        document.getElementById("result6").innerHTML = "Usuário logado";
    } else {
        document.getElementById("result6").innerHTML = "Login / senha incorretos!";
    }
}


/* Questão 07 */

function calcularMedia() {

    let Nota01 = Number(document.getElementById("nota01").value);
    let Nota02 = Number(document.getElementById("nota02").value);
    let Nota03 = Number(document.getElementById("nota03").value);

    let media = (Nota01 + Nota02 + Nota03) / 3

    if (media <= 40) {
        resultado = `Media = ${media}. O aluno está reprovado!`;
    } else if (media <= 69) {
        resultado = `Media = ${media}. O aluno está na final!`;
    } else {
        resultado = `Media = ${media}. O aluno está aprovado!`;
    }
    document.getElementById("result7").innerHTML = resultado;
}

/* Questão 08 */

function calcularPorcentagem() {
    let CandidatoA = Number(document.getElementById("candidatoA").value);
    let CandidatoB = Number(document.getElementById("candidatoB").value);
    let votosBrancos = Number(document.getElementById("brancos").value);
    let votosNulos = Number(document.getElementById("nulos").value);

    totalVotos = CandidatoA + CandidatoB + votosBrancos + votosNulos;

    porcentagemA = (CandidatoA / totalVotos) * 100
    porcentagemB = (CandidatoB / totalVotos) * 100

    if (CandidatoA > CandidatoB) {
        resultado = `O vencedor da eleição é o Candidato A! Com ${porcentagemA.toFixed(2)}% dos votos.`
    } else if (CandidatoB > CandidatoA) {
        resultado = `O vencedor da eleição é o Candidato B! Com ${porcentagemB.toFixed(2)}% dos votos.`
    } else {
        resultado = "A eleição empatou!"
    }

    document.getElementById("result8").innerHTML = resultado;
}

/* Questão 09 */

function reajusteSalarial() {
    let Salario = Number(document.getElementById("salario").value)
    let TempoServico = Number(document.getElementById("tempoServico").value)

    if (TempoServico <= 9) {
        reajuste = Salario * (8 / 100);
        SalarioFinal = Salario + reajuste;
        resultado = `Seu salario foi reajustade de ${Salario.toFixed(2)} para: ${SalarioFinal.toFixed(2)}R$! `
    } else if (TempoServico <= 19) {
        reajuste = Salario * (10 / 100);
        SalarioFinal = Salario + reajuste;
        resultado = `Seu salario foi reajustade de ${Salario.toFixed(2)} para: ${SalarioFinal.toFixed(2)}R$! `
    } else {
        reajuste = Salario * (15 / 100);
        SalarioFinal = Salario + reajuste;
        resultado = `Seu salario foi reajustade de ${Salario.toFixed(2)} para: ${SalarioFinal.toFixed(2)}R$! `
    }

    document.getElementById("result9").innerHTML = resultado;

}

/* Questão 10 */

function calcularDesconto() {
    let Nome = document.getElementById("nome").value;
    let Preco = Number(document.getElementById("preco").value);
    let Quantidade = Number(document.getElementById("quantidade").value);

    let totalValor = Preco * Quantidade;
    let resultado;

    if (totalValor > 500) {
        let desconto = totalValor * (15 / 100);
        let valorProduto = totalValor - desconto;

        resultado = `Seu desconto no ${Nome} foi de R$ ${desconto.toFixed(2)}. Você precisará pagar: R$ ${valorProduto.toFixed(2)}!`;

    } else if (totalValor >= 201 && totalValor <= 500) {
        let desconto = totalValor * (10 / 100);
        let valorProduto = totalValor - desconto;

        resultado = `Seu desconto no ${Nome} foi de R$ ${desconto.toFixed(2)}. Você precisará pagar: R$ ${valorProduto.toFixed(2)}!`;

    } else {
        resultado = `A compra do ${Nome} não recebeu desconto. Você precisará pagar: R$ ${totalValor.toFixed(2)}.`;
    }

    document.getElementById("result10").innerHTML = resultado;
}
