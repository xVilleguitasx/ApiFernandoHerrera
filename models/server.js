const express = require('express');
const formData = require("express-form-data");
const app = express();
const cors = require('cors')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Path
        this.usuariosPath = '/api/usuarios';
        //Middleware
        this.middlewares();

        //Rutas
        this.routes();
    }
    middlewares() { 
        //CORS
        app.use(cors());
        //Parseo y lectura del body
        this.app.use(express.json());
        //formData
        this.app.use(formData.parse());
        //Directorio publico 
        this.app.use(express.static('public'));
    } 
    routes() {
       this.app.use(this.usuariosPath,require('../routes/usuarios.js')); 
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port', this.port)
        })
    }
}
module.exports = Server;