const {request, response } = require('express')
const usuariosGet = (req = request, res = response) => {
    
    res.json({ msj:'get'});
};

const usuariosPost = (req, res = response) => {
    console.log(req.body)
    res.json({ msj:'Post'});
};
const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({ msj:'Put',id
});
};
const usuariosDelete = (req, res = response) => {
    
    res.json({ msj:'Delete'});
};
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}