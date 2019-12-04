let express = require('express');
let app = express();
const port = process.env.PORT || 3000;

const morgan = require('morgan');
const bodyParser = require('body-parser');

const filesRoutes = require('./routes/files')
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/file', filesRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});