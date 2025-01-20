const { buscarTodos, buscarUm } = require('../controllers/CarroControllers');
const db = require('../db') //2 - está utilizando a função require para importar
//um módulo que está localizado em um diretório acima do diretório atual, em um arquivo
// chamado db.js 
//isso é feito para reutilizar funcionalidades que estão definidas no módulo db, como 
//configurações de banco de dados,
module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM carros', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
     },
     buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros where codigo=?', [codigo],(error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
                
            });
        });
     }
      
};