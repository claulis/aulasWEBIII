const http = require('http');//define o modulo a ser utilizado para algumas funcionalidades

const hostname = '127.0.0.1';// define o endereço ip como localhost, ou seja  o nosso computador

for( let i=0;i<5;i++)
{
    const port = 3000+i;// define a porta da aplicação

    //cria um objeto para servidor web
    const server = http.createServer((req, res) => {
      res.statusCode = 200; //código http 200, está tudo ok
      res.setHeader('Content-Type', 'text/plain'); //cabeçalho que define o conteúdo a ser exibido pelo navegador
      res.end('Este é o site numero '+i);// objeto a ser exibido no navegador
    });
    
    //evento que serve a escutar o serviço publicado no endereço hostname e port
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    }); 
}
