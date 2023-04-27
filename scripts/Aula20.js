 //EXERCÍCIO 1 - AULA 20 
    
 const lista = [];
 function enviar() {
   let texto = document.getElementById('texto');
 
   let valor = texto.value;
 
   lista.push(valor);
 
   console.log('valor inserido');
 
 }
 
 function visualizar() {
   console.log('visualização');
 
   for (let i = 0; i < lista.length; i++){
     const valor = lista[i];

     const elementolista = document.getElementById('lista');

     const item = document.createElement('li');

     const texto = document.createTextNode(valor);

     item.appendChild(texto);

     elementolista.appendChild(item);
     }
 }



 function soma() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
  }

  function subtrai() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
  }

  function multiplica() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
  }

  function divide() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;}