//Leia várias idades 
//e calcule a média 
//entre as idades.

//Ler as idades
const prompt =require("prompt-sync")();

const numeroIdades=prompt("Quantas idades precisa ler?");
//Prompt retorna uma string, logo precisamos converter
//para numero
const listaIdades= new Array(Number(numeroIdades));
let indice=0;
let tamanhoLista=listaIdades.length;
while(indice<tamanhoLista)
{
  let idade = prompt(`Qual a idade numero ${indice}:`);
  //('Qual a idade numero '+ indice)
  listaIdades[indice]=Number(idade);
  indice++;
}
//imprimindo todas as idades
//vamos zerar o indice
indice=0;
while(indice<tamanhoLista)
{
    console.log(`Item ${indice}:${listaIdades[indice]}`);
    indice++;
}
//calculo media aritmetica
//já tenho um indice, vamos reutilizar a variável 
//e zerar ela
indice=0;
//somaItemLista é um acumulador
let somaItemLista =0;
while(indice<tamanhoLista)
{   //aqui os valores da lista estão sendo acumulados
    somaItemLista = somaItemLista+listaIdades[indice];
    indice++;
}
let media=somaItemLista/numeroIdades;
console.log(`A média das idade é ${media}`);