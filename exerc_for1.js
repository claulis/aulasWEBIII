//ler um numero e imprimir a tabuada de 1 a 10 deste numero
//vamos usar o pacote prompt-sync para ler a partir do terminal
//Para instalar: //1. novo terminal //2. digitar npm i prompt-sync para instal.
//importando prompt-sync
const prompt=require("prompt-sync")();
const numero = prompt("Digite um numero: ");
console.log("Calculando tabuada...");
// o simbolo + é uma concatenação de strings
for(let i=1;i<=10;i++)
{
console.log(numero+"*"+i.toString()+"="+(Number(numero)*i).toString());
}
console.log("...fim");
