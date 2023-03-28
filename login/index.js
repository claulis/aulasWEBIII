const prompt = require('prompt-sync')();
const Usuario = require('./Usuario');
const erro = require('./Erros').ErroCredenciaisInvalidas;

// Criar uma lista de usuários
const listaUsuarios = [
  new Usuario("Claudio","123456"),
  new Usuario("Mario","654321")
];

console.log('----- Sistema de login -----'); 

// Pedir ao usuário para digitar suas informações
const novoUsuario = new Usuario();
novoUsuario.configuraNome = prompt('Digite o usuário: ');
console.log('Digite a senha:');
novoUsuario.configuraSenha = prompt({ echo: '*' });

try {
  let acessoValido = false;
  
  // Iterar sobre a lista de usuários para verificar se o novo usuário existe
  listaUsuarios.forEach((usuario) => {
    if (usuario.retornaNome === novoUsuario.retornaNome && usuario.retornaSenha === novoUsuario.retornaSenha) {
        console.log('Usuario encontrado');
        acessoValido = true;
        return;
    }
  });
  
  if (acessoValido===true) {
    console.log("Bem-vindo ao sistema!");
  } else {
    throw new erro() ;
  }

} 
catch (error) 
{
  console.error(error.message);
}
       
       