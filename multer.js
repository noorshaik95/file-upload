const multer = require('multer');
const separator = '-_-';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.')[1];
        cb(null, file.fieldname + separator + Date.now()+'.'+extension)
    }
});

const upload = multer({storage: storage});

module.exports = upload;