//var Declara uma variável, opcionalmente, inicializando-a com um valor.
var nome = "Felisberto";
var idade = 15;
console.log(nome+" "+idade);
nome="Ermenegildo";
console.log(nome);

//let Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

let cidade = "Campos Belos";
let estado = "GO";

console.log(nome+" "+idade+" "+cidade+" "+estado);

cidade = "Monte Alegre";

console.log(`${nome} ${idade} ${cidade} ${estado}`);

//const Declara uma constante de escopo de bloco, apenas de leitura.

const pai = "Maicol Jequesom";
console.log(pai);
//pai="Napoleão";
//console.log(pai);

//valor undefined
var valorQualquer;
console.log(valorQualquer);

//reference error, não existe
//console.log(X);

var input;
if(input === undefined){
  console.warn("Valor indefinido");
} else {
  console.log("valor definido");
}

//Lista de tipos de dados
var verdadeiro = true;
var numero=17;
var falso = false;
var nulo=null;
var indefinido = undefined;
var objeto = new Object();
var string="sou um objeto de texto, conhecido como string";
var listaFrutas=["maçã","pera","morango"];//array


//O valor undefined converte-se para NaN quando usado no contexto numérico.
var a;
// Avaliado como NaN
console.log(a + 2);

//Quando você avalia uma variável nula, o valor nulo se comporta como 0 em contextos numéricos e como falso em contextos booleanos. Por exemplo:

var n = null;
console.log(n * 32); // a saída para o console será 0.