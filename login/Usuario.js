
class Usuario
{

    constructor(nome, senha)
    {
        this.nome=nome;
        this.senha=senha;
    }

    get retornaNome(){return this.nome;}
    set configuraNome(nome){
        if((nome===undefined)||(nome===null)||(nome===""))
        {   const erro=  require('./Erros').ErroNome;
            throw new erro();
        }else{
            this.nome=nome;
        }        
    }

    get retornaSenha(){return this.senha;}
    set configuraSenha(senha){
        if((senha===undefined)||(senha===null)||(senha===""))
        {
            const erro=  require('./Erros').ErroSenha;
            throw new erro();
        }else{
            this.senha=senha;
        }        

    }

}
module.exports=Usuario;