var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var flash = require('connect-flash');
var session = require('express-session');
var methodOverride = require('method-override');

var MongoStore = require('connect-mongo')(session);
var systemConfig = require('./conf/appconfig');
var dbConfig = require('./conf/dbconfig');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use express-partials
app.use(partials());

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());

app.use(session({
    secret: systemConfig.sessionConfig.secret,
    store: new MongoStore(dbConfig.mongodb),
    resave: false,
    saveUninitialized:true,
    cookie: {maxAge: systemConfig.sessionConfig.maxAge}
}));
// 静态文件目录，当两个目录中出现同名文件时，默认读取第一个的哦，最好还是不要有重名文件啦
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public2')));

app.use(flash());
app.use(function(req,res,next){
      res.locals.title = "";
      res.locals.user = "";

      var err = req.flash('error');
      var success = req.flash('success');

      res.locals.error = err.length ? err : null;
      res.locals.success = success.length ? success : null;

      next();
});

var routes = require('./routes/index');
app.use(routes);

app.use(function timeLog(req,res,next) {
    console.log('Time: ', Date.now());
    next();
});

/*app.use('/', routes);
//app.use('/users', users);

app.get('/',routes.index);
app.get('/u/:user',routes.user);
app.post('/post',routes.post);
app.get('/reg',routes.reg);
app.post('/reg',routes.doReg);
app.get('/login',routes.login);
app.post('/login',routes.doLogin);
app.get('/logout',routes.logout);
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
