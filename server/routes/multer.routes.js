const express = require('express');
const MulterController = require('../controllers/multer.controller');
const router = express.Router();

router.post('/upload', MulterController.upload.single('file'), (req, res) => {
    if(req.file){
        res.send({message:'Archivo subido correctamente', imageUrl: req.file.path});
    }else{
        res.status(400).send({message: 'Error al cargar el archivo'})
    }
});

module.exports = {
    multerRouter: router
};
