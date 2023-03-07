//npmjs é um site que serve para repositorio
//de programas em nodejs/javascript
//para instalar um desses pacotes vc precisa
//utilizar um comando via terminal: 
//npm install nomepacote

//neste caso vamos instalar um pacote para o nodejs
//capturar uma entrada de dados no terminal
//npm install prompt-sync no terminal
//pront-sync é o pacote que permite a captura de dados
//no terminal

//criar uma viariável chamada prompt que terá as funcionalidades
//para inserir dados a partir do terminal
//require serve para importar o pacote instalado
const prompt = require('prompt-sync')();
//vamos criar a viariável nome para capturar o nome digitado
const nome = prompt('qual seu nome?');
//console.log serve para exibir o resultado da operação
console.log(`oi ${nome}`);//´´esses não
//no fim ctrl+s para salvar e digitar no terminal node input.js

const idade= prompt('Qual é a sua idade?');
console.log(`a sua idade é ${idade}`); //ctrl+s
console.log(`Seu nome é ${nome} e sua idade é ${idade}`);
//ctrl+s para salvar e digitar no terminal node input.js para rodar

const escola=prompt('Onde você estuda?');
if(escola==="IF Goiano")
 console.log('Ótima escolha!');
 else
 console.log('Ainda está em tempo para se matricular!');