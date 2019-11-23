require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT : port } = process.env;
const app = express();
const server = http.createServer(app);
const api = require('./api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express());
app.use(cors());

app.use(api);
app.use('/', express.static('public'));

server.listen(port, () => {
  console.log(`LIFE-SHARE-SERVER listening to port = ${port}`);
});