/*eslint no-console: "off"*/

const express = require('express');
const app = express();
const path = require('path');
// const http = require('http');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
