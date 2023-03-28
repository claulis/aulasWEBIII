class ErroNome
{
   constructor(){
   this.name = 'ErroNome';
   this.message = 'Nome vazio ou inválido';
   this.stack = '';
   } 
 
}

class ErroSenha
{
    constructor(){
        this.name = 'ErroSenha';
        this.message = 'Senha vazia ou inválida';
        this.stack = '';
        } 
}
class ErroCredenciaisInvalidas{
    constructor(){
        this.name = 'ErroCredenciais';
        this.message = 'Credenciais inválidas';
        this.stack = '';
        } 
}

module.exports={ErroNome,ErroSenha,ErroCredenciaisInvalidas}