
var http = require('http')
  , express = require('express')
  , fs = require('fs')
  , hljs = require('highlight.js')
  , app = express()
  , server = http.createServer(app);

app.set('view engine', 'jade');

app.locals.renderSource = function (filename) {
  var data = fs.readFileSync(filename, { encoding: 'utf-8' });
  
  return hljs.highlightAuto(data).value;
};

app.locals.pretty = true;

app.use(express.static(__dirname + '/public'));

app.get('/favicon.ico', function (req, res) {
  res.end(0);
});

app.get(/^\/(.*).html$/, function (req, res) {
  res.render(req.params[0].replace(/\.html$/, ''));
});

app.get('/', function (req, res) {
  res.redirect(303, '/step0.html');
});

server.listen(process.env.PORT || 3000, function () {
  console.log('listening on', process.env.PORT || 3000);
});

