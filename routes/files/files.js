const fs = require('fs');

fileUpload = (req, res) => {
    let data = require('../../data.json');    
    let index = Object.keys(data).length;
    const newUploadData = {
        ...data,
        [index]: {
            mimetype: req.file.mimetype,
            size: req.file.size,
            filename: req.file.filename,
            path: req.file.path,
            destination: req.file.destination
        }
    };
    console.log(JSON.stringify(newUploadData))
    try {
        fs.writeFileSync('data.json', JSON.stringify(newUploadData))        
    } catch(e) {
        console.log(e)
    }
    res.json({success: true, fileId: index});
};

module.exports = {
    fileUpload
}