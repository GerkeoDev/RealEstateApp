const multer = require('multer');

// Configuración de Multer para manejar las cargas de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Nombre del archivo original
    }
});

const upload = multer({ storage: storage });

module.exports = {
    upload
};