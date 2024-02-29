/*import dados from './clientes.json' assert { type : json }
import cors from 'cors'

const express = require('express');

class App{

    constructor(){
        this.server = express();
        this.server.use(cors());
        this.server.listen(3300)

        this.rota();
    }

    rota(){
        this.server.get('/clientes', (req,res) =>{
            return res.json(dados)
        });
    }
}

export default new App();*/