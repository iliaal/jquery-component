
var http = require('http')
  , express = require('express')
  , app = express()
  , server = http.createServer(app);

app.set('view engine', 'jade');

app.locals.pretty = true;

app.get('/favicon.ico', function (req, res) {
  res.end(0);
});

app.get(/^\/(.*)/, function (req, res) {
  if ('' === req.params[0]) {
    res.redirect(303, '/step0');
    return;
  }

  res.render(req.params[0]);
});

server.listen(process.env.PORT || 3000, function () {
  console.log('listening on', process.env.PORT || 3000);
});

