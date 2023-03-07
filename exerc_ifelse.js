
const prompt=require('prompt-sync')();
console.log('Bem-vindo à calculadora em Nodejs');
console.log('Escolha a opção desejada:');
console.log('1-Soma');
console.log('2-Subtração');
console.log('3-Multiplicação');
console.log('4-Divisão');
console.log('-------------------');
 const escolha=prompt('');
console.log('Digite o primeiro numero');
 const num1=prompt('');
console.log('Digite o segundo numero');
const num2=prompt('');
const n1=Number(num1);
const n2=Number(num2);

if(escolha==="1")
{
    console.log(n1+n2);
} else if (escolha ==="2")
{
    console.log(n1-n2);
} else if(escolha==="3")
{
    console.log(n1*n2);
}else if(escolha==="4")
{
    console.log(n1/n2);
}
else{
    console.log('escolha uma opção entre 1 e 4');
}