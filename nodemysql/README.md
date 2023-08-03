## Node e Mysql

Este exemplo trata de um cadastro simples, sem interface, sendo utilizado apenas via terminal.

Os arquivos são:
- consultas.sql (comandos sql para criar o banco e a tabela caso não exista)
- index.js 

Siga o passo a passo

### Passo 1
Abrir o xampp, caso não tiver instalado clique aqui :point_right: [XAMPP](https://www.apachefriends.org/pt_br/index.html)

### Passo 2
Clicar em `start` no Apache e no Mysql, quando ficar tudo verdinho, clique no botão `admin` do mysql para acessar o phpMyAdmin

### Passo 3
No phpMyAdmin procure a aba SQL, copie e cole este :point_down: código e depois clica em `Continua`

>```sql
> CREATE DATABASE IF NOT EXISTS escola;
> USE escola;
> CREATE TABLE IF NOT EXISTS aluno (
> id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
> nome VARCHAR(30) NOT NULL,
> idade INT(3) NOT NULL
> );
>```

### Passo 4
Ir na aba Inserir os valores requeridos

### Passo 5
Testar o código do **index.js** no terminal

> Terminal &rarr; New Terminal

> :warning: **Atenção:** Verifique se o pacote mysql2 está instalado.

caso precise instalar

> :memo: **Anote:** Digite no terminal aberto `npm install mysql2`.

Para testar o arquivo digite no terminal aberto `node index.js`


Agora é só moleza :joy: 
