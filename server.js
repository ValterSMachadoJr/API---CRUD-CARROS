require('dotenv').config({path:'variaveis.env'}) //chamar o dotenv. Serve para ler o arquivo de
// variável de ambiente ler o caminho path - esse arquivo poderá ser visto dentro do meu servidor
//Isso permite que você armazene variáveis sensíveis (como senhas, portas, etc.) fora do código.
// Importando os módulos necessários
const express = require('express'); // chamando e usando também o express dentro do servidor
//Importa o framework express, que é uma biblioteca de servidor web para Node.js.
const cors = require('cors');//usar o cors também - uma especificação da W3C para trabalhar com API
//permite acesso a outro site mesmo estando em domínios diferentes. CORS (Cross-Origin Resource Sharing).
const bodyParser = require('body-parser'); //também colocar em uso - módulo capaz de converter o body
//requisiçao para vários outros formatos//json etc..
const routes = require('./routes.js');//as rotas estão aqui, no meu arquivo de rotas/rotes
//mostrei para o servidor onde estão as rotas do meu projeto
const server = express(); //abrindo servidor utilizando o express para controlar
// Inicializa uma aplicação Express. Agora server é uma instância do servidor Express.
server.use(cors());// colocar em uso o servidor passando o cors. permitindo requisições de diferentes origens.
server.use(bodyParser.urlencoded({extended:false}));//colocar também em uso passando bodyparser
//extended: false significa que o corpo da requisição só pode conter dados string ou arrays.

server.use('/api', routes)// 2 - faz com que todas as rotas tenho o prefixo api
// Iniciando o servidor
server.listen(process.env.PORT,()=>{
    console.log(`Servidor Rodando em localhost:${process.env.PORT}`);
});//ouvir um process. verificar qual porta está rodando. Cria a função anônima e chama ela 
//no console.log
//configura um servidor web básico usando o Express.js, com suporte para CORS e 
//análise de corpos de requisições em JSON e URL-encoded. As rotas são separadas em um 
//arquivo dedicado (routes.js), e as variáveis de ambiente são carregadas de um arquivo de 
//configuração (variaveis.env). O servidor é configurado para escutar em uma porta especificada
// por uma variável de ambiente ou, se não estiver definida, na porta 3000 por padrão.






