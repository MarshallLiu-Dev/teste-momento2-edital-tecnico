/*3. Faça um algoritmo que leia um número inteiro e mostre uma mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo.*/



function mensagem(num) {
    if (Math.sign(num) == 1 && num % 2 == 0) {
        return `O número ${num} é positivo e par`;
    }
    
    else if (Math.sign(num) == 1 && num % 2 != 0) {
        return `O número ${num} é positivo e ímpar`;
    }
    
    else if (Math.sign(num) == -1 && num % 2 == 0) {
        return `O número ${num} é negativo e par`;
    }
    
    else if (Math.sign(num) == -1 && num % 2 != 0) {
        return `O número ${num} é negativo e ímpar`;
    }
    
    else if (Math.sign(num) == 0) {
        return `O número ${num} não é positivo, negativo, par ou ímpar. `;
    }
    
    else {
        return "O número informado é inválido ";
    }
}

function apertarBotao(){

    let num = document.querySelector("#a").value;
    document.getElementById('resultado').innerHTML = 'Resultado: <br>' + mensagem(num);
}