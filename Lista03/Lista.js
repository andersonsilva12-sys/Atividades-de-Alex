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
        if (Num % 2 == 0){  
            resultado += ` O número é ${Num} par!`
        }   else{
            resultado += ` O número ${Num} é ímpar`;
        }
    }
    document.getElementById("result1").innerHTML = resultado;
}


//Questão 02: Calculadora de operações
/*  Escreva uma função em JS para realizar uma operação matemática entre dois números.
    A função deve receber dois números e uma operação +, -, * ou /.
    Caso o usuário tente dividir por zero, mostre "Não é possível dividir por zero" */



    function operadorMatematico(){
        let Num1 = Number(document.getElementById("num1").value);
        let Num2 = Number(document.getElementById("num2").value);
        let Operacao = document.getElementById("operacao").value;

        if (Operacao == "/" && Num1 == 0 || Num2 == 0) {
            document.getElementById("result2").innerHTML = "Não é possível dividir por zero!";
            return;
        }

        if (Operacao == "+"){
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

function classificadorIdade(){
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