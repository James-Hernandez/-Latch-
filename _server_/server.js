process.env.NODE_CONFIG_DIR = './configs';

const express = require('express');
const http = require('http');
const connecting_database = require('./configs/mongo');

const app = express();
const server = http.createServer(app);

connecting_database();
app.use('/register', require('./routes/register'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));