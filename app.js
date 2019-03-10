var jwt = require('jsonwebtoken');
var fs = require('fs');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));
// sign with RSA SHA256

app.post('/generate_token', (req, res) => {
  var token = jwt.sign(req.body, 'secret-key', {
    expiresIn: 120
  });

  res.json(token);
});

app.post('/verify', (req, res) => {
  var decoded = jwt.verify(req.body.token, 'secret-key');
  res.json(decoded);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//https://www.npmjs.com/package/jsonwebtoken
