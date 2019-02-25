var express = require('express');
var app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.locals.pretty = true;
app.use(express.static('static'))

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/login_check', (req, res) => {
  var id = req.query.id;
  var pw = req.query.pw;
  res.send(`id : ${id}, pw : ${pw}`);
})

app.post('/login_check', (req, res) => {
  var id = req.body.id;
  var pw = req.body.pw;
  res.send(`id : ${id}, pw : ${pw}`);
})

app.listen(3000, () => console.log('connected, 3000'));
