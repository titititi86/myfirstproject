var express = require('express');
var app = express();


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('/Users/Titi/myfirstproject/app/server/public/view/index.html');
});

app.get('/about', function (req, res) {
  res.sendFile('/Users/Titi/myfirstproject/app/server/public/view/about.html');
});

app.get('/archive', function (req, res) {
  res.sendFile('/Users/Titi/myfirstproject/app/server/public/view/archive.html');
});

app.get('/contact', function (req, res) {
  res.sendFile('/Users/Titi/myfirstproject/app/server/public/view/contact.html');
});

app.listen(2000, function () {
  console.log('Example app listening on port 2000!');
});
