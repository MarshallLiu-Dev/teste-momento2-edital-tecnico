/*1. Escreva um programa que, dado quatro valores, A, B, C e D, imprima o maior e o menor valor*/


function numeroMaior(a, b, c, d) {
  if (a > b && a > c && a > d) {
    return a
  } else if (b > a && b > c && b > d) {
    return b
  } else if (c > a && c > b && c > d) {
    return c
  } else if (d > a && d > c && d > b) {
    return d
  }
}
function numeroMenor(a, b, c, d) {
  if (a < b && a < c && a < d) {
    return a
  } else if (b < a && b < c && b < d) {
    return b
  } else if (c < a && c < b && c < d) {
    return c
  } else if (d < a && d < c && d < b) {
    return d
  }
}




function apertarBotao() {
let a = document.getElementById('a').value;
let b = document.getElementById('b').value;
let c = document.getElementById('c').value;
let d = document.getElementById('d').value;

let numeroMaiorN = numeroMaior(a, b, c, d);
let numeroMenorN = numeroMenor(a, b, c, d);

  document.querySelector('#resultado').innerHTML =
    'RESULTADO <br> Número maior: ' +
    numeroMaiorN +
    '<br>Número menor: ' +
    numeroMenorN
}
