/*2. Dados três valores distintos, fazer um algoritmo que, após a leitura destes dados imprima-os em ordem crescente.*/

function apertarBotao() {
  let valor1 = document.getElementById('a').value
  let valor2 = document.getElementById('b').value
  let valor3 = document.getElementById('c').value
  let numeros = [valor1, valor2, valor3]
  numeros.sort()
  document.getElementById('resultado').innerHTML =
    'Resultado: <br>' + numeros
}


