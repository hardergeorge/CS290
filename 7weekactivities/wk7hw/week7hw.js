var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/',function(req,res){
  res.render('home');
});

app.get('/home',function(req,res){
  var params = [];

  for (var p in req.query){
    params.push({'name':p,'value':req.query[p]})
  }
  var context = {};

  if (params.length == 0) {
      context.req_empty_message = "Request was empty"
  }

  context.query_list = params;
  context.req_type = "GET Request Received"
  res.render('home', context);
});

app.post('/home', function(req,res){
  var query_params = [];
  var body_params = [];

  for (var p in req.body){
    body_params.push({'name':p,'value':req.body[p]})
  }

  for (var p in req.query){
    query_params.push({'name':p,'value':req.query[p]})
  }

  var context = {};

  if (query_params.length == 0 && body_params.length == 0) {
      context.req_empty_message = "Request was empty"
  }

  context.query_list = query_params;
  context.body_list = body_params;
  context.req_type = "POST Request Received"
  res.render('home', context);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
