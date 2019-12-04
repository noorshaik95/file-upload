const express = require('express');
const router = express.Router();
const fileController = require('./files');
const upload = require('../../multer');

router.post('/upload', upload.single('file') ,fileController.fileUpload);

module.exports = router;