var hello = "Olá Mundo!";
alert(hello);

//EXERCÍCIO 1 - AULA 19

let nomeCompleto = "Mabel de Miranda Pogere";
let num1 = 11;
let num2 = 3;
let soma = num1 + num2;
let multiplicacao = num1 * num2;

alert("A soma dos números é: " + soma);

console.log("Nome completo: " + nomeCompleto);
console.log("O resultado da multiplicação é: " + multiplicacao);

//EXERCÍCIO 2 - AULA 19


function subtracao(num1, num2) {
    if (num1 < num2) {
      const mensagem = "Não foi possível subtrair";
      return mensagem;
    } else {
        let resultado = num1 - num2;

    return resultado;
    }
}

console.log(subtracao(8,3));
console.log(subtracao(1,4));

function divisao(num1, num2) {
    if ( num2 < 0) {
      const mensagem = "Não foi possível dividir";
      return mensagem;
    } else {
        let resultado = num1 / num2;

    return resultado;
    }
}

console.log(divisao(9,3));
console.log(divisao(1,-9));

 //EXERCÍCIO 3 e 4 - AULA 19
let abacate = {
    cor:"verde",
    forma: "rendonda",
    peso:5,
    tipo:"fruta",
}

let tomate = {
    cor:"vermelha",
    forma: "rendonda",
    peso:2,
    tipo:"fruta",
}

let ervilha = {
    cor:"verde",
    forma: "rendonda",
    peso:1,
    tipo:"legume",
}

let milho = {
    cor:"amarelo",
    forma: "cilindro",
    peso:4,
    tipo:"legume",
}

let repolho = {
    cor:"verde",
    forma: "redondo",
    peso:2,
    tipo:"verdura",
}

console.log(abacate);
console.log(tomate);
console.log(ervilha);
console.log(milho);
console.log(repolho);

 //EXERCÍCIO 5 - AULA 19


const alimentos = [
  { nome: "abacate", tipo: "fruta" },
  { nome: "tomate", tipo: "fruta" },
  { nome: "ervilha", tipo: "legume" },
  { nome: "milho", tipo: "cereal" },
  { nome: "repolho", tipo: "verdura" },
];


function exibirNomesFrutas() {
  console.log("Nomes das frutas:");
  alimentos.forEach((alimento) => {
    if (alimento.tipo === "fruta") {
      console.log(alimento.nome);
    }
  });
}


function contarAlimentosPorTipo() {
  let frutas = 0;
  let legumes = 0;
  let cereais = 0;
  let verduras = 0;

  alimentos.forEach((alimento) => {
    if (alimento.tipo === "fruta") {
      frutas++;
    } else if (alimento.tipo === "legume") {
      legumes++;
    } else if (alimento.tipo === "cereal") {
      cereais++;
    } else if (alimento.tipo === "verdura") {
      verduras++;
    }
  });

  console.log(`Quantidade de alimentos por tipo:
    Frutas: ${frutas}
    Legumes: ${legumes}
    Cereais: ${cereais}
    Verduras: ${verduras}
  `);
}

// Chamando as funções
exibirNomesFrutas();
contarAlimentosPorTipo();
