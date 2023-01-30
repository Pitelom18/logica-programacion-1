let numeroSolicitado1 = parseInt(
    prompt("Escriba por favor el primer numero"));
let numeroSolicitado2 = parseInt(
    prompt("Escriba por favor el segundo numero"));
let numeroSolicitado3 = parseInt(
    prompt("escriba por favor el tercer numero"));



if (numeroSolicitado1 === numeroSolicitado2 && numeroSolicitado2 === numeroSolicitado3) {
  document.write("<h3>" + "Todos los numeros son iguales" + "</h3>");
} else {
let numeros = [numeroSolicitado1, numeroSolicitado2, numeroSolicitado3];
  numeros.sort((a, b) => b - a);
  document.write(numeros);

  numeros.sort((a, b) => a - b);
  document.write("<br>" + numeros);
}
