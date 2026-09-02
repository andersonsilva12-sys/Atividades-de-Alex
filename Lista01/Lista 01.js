/* Questão 01 */

function calcularDesconto() {
    let preco = Number(document.getElementById("Preco").value)
    let desconto = Number(document.getElementById("Desconto").value)

    let valorFinal = preco - (preco * desconto / 100)

    document.getElementById("result1").innerHTML =
        "Valor do produto com desconto: R$ " + valorFinal.toFixed(2)
}

/* Questão 02 */

function calcularArea() {
    let raio = parseFloat(document.getElementById("Raio").value);

    let area = Math.PI * raio * raio;

    document.getElementById("result2").innerHTML = 
        "A área do círculo é: " + area.toFixed(2);
}




/* Questão 03 */

function converterReal() {
    let real = Number(document.getElementById("valorReal").value);
    let cotacao = Number(document.getElementById("cotacao").value);

    let dolar = real / cotacao;

    document.getElementById("result3").innerHTML =
        "Resultado (valor em dólar): $" + dolar.toFixed(2);
}

/* Questão 04 - hora extra = 20 R$*/

function calcularSalario(){
    let Salario = Number(document.getElementById("salario").value)
    let HorasExtras = Number(document.getElementById("horasExtras").value)

    let reajuste = Salario + (HorasExtras * 20)

    document.getElementById("result4").innerHTML =
        "Resultado (salário reajustado): R$" + reajuste.toFixed(2);
}