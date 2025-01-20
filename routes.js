const express = require('express');//chamando o express e fazendo um requisição, colocando em uso
const router = express.Router(); //aqui já estou usando o express
const CarroControllers = require('./controllers/CarroControllers')
 // 2 - enxergar o CarroControllers
router.get('/carros', CarroControllers.buscarTodos); //Quando um cliente faz uma solicitação GET para /carros, 
// o método BuscarTodos do controlador CarroControllers é chamado para processar essa solicitação.
router.get('/carro/:codigo', CarroControllers.buscarUm);
module.exports = router; // exportando o router(rotas) quando for chamada/executada


