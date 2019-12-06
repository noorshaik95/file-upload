const express = require('express');
const router = express.Router();
const fileController = require('./files');
const upload = require('../../multer');

router.post('/upload', async (req, res, next) => {
    try {
        await new Promise((resolve, reject) => {
            upload(req, res, (err) => {
                if(err) {
                    return reject(err);
                }
                resolve();
            });
        });
        next();
    } catch(e) {
        res.statusCode = 500;
        return res.json({message: 'Something went wrong!'});
    }
}, fileController.fileUpload);

router.get('/download', (req, res) => {
    const data = require('../../data.json');    
    if(!req.query.fileId || !data[req.query.fileId]) {
        res.statusCode = 400;
        return res.json({message: 'File not found!'});        
    }
    res.sendFile(global.appRoot + '\\' + data[req.query.fileId].destination + data[req.query.fileId].filename);
})

module.exports = router;