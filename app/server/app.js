var express = require('express');
var app = express();


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

// tu dois créer des routes pour chaque pages html à servir
// tu peux utiliser le même nom que la page html pour nommer ta route par exemple.

app.get('/toto', function (req, res) {
  res.send('Hello toto!');
});
app.get('/tutu', function (req, res) {
  res.send('Hello tutu!');
});

app.listen(2000, function () {
  console.log('Example app listening on port 2000!');
});