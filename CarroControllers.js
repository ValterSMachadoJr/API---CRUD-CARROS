const { resume } = require('../db');
const CarroService = require('../Services/CarroService') //importação do CarroService

//criar a função BuscarTodos exportando

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let carros = await CarroService.buscarTodos();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    },
    buscarUm: async(req, res) => {
        let json = {error:'', result:{}}; // ao invés de retornar um array, retornar apenas um objeto
        let codigo = req.params.codigo; //passar um parâmetro
        let carro = await CarroService.buscarUm(codigo);
        if(carro){
          //  result.json(carro)
          json.result = carro;
          res.json(json);
        }



    }
};