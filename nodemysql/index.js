const mysql = require('mysql2');//pacote para mysql

let connection;//hospeda conexão mysql
//conexão
try{
connection = mysql.createConnection
  ({
    host: 'localhost',user: 'root',database: 'escola'
  });//cria a conexão e coloca na variavel connection
 
 ListarTodosAlunos();
 
}//fim bloco try
catch(error)
{   error.stack="";//limpar pilha de execução
    console.error(error.message);   
}//fim bloco cacth

//INSERT
function Inserir(Nome, Idade)
{ connection.query(
        'INSERT INTO Aluno (Nome, Idade) Values(?,?)',
        [Nome,Idade],
        function(err, results) {
            if (err)
            throw new Error("Problema na inserção");
            else
            console.log("Registro inserido");
        } );} //fim Inserir
//DELETE
function Apagar(idAluno)
{
connection.query(
  "DELETE FROM aluno where aluno.id=?",
  [idAluno],
  function(err,results)
  {
    if(err) 
    throw new Error("Problema ao apagar registro");
    else
    console.log("Registro cancelado");
  }
  );  
}

//UPDATE
function Atualizar(id,nome)
{
  connection.query("UPDATE aluno SET nome=?"+
  " where aluno.id=?",
  [nome,id],
   function(err,results)
   {
    if(err) 
    throw new Error("Problema ao atualizar");
    else 
    console.log("Item atualizado com sucesso"); 
  } 
  );
}//fim atualizar

function ListarTodosAlunos()
{
  connection.query(
    "SELECT * FROM aluno",
    function(err,results)
    {
      if(err) 
      throw new Error("Problema ao apagar registro");
      else if (results==0)
      throw new Error("Tabela vazia");
      else console.log(results);
    }
    );  
}
