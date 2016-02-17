//Modules & set up =========================================================
var express     = require('express');
var app         = express();
var port        = process.env.PORT || 1337;
var morgan      = require('morgan');
var session     = require('express-session');
var bodyParser  = require('body-parser');
var passport    = require('passport');
var mongoose    = require('mongoose');

//Config =========================================================
mongoose.connect('mongodb://localhost/test');

//config passport
require('./config/passport')(passport);

//app middlewares
//only show logs with arent testing
if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//TODO(Hudo): Check all config options for session in the docs.
app.use(session({
    secret: "alkLlaksALF(@)$_!sf.asfie,.2nl",
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//Routes =========================================================
require('./routes')(app, passport)

//Server ========================================================= 
app.listen(port, function() {
    console.log('Listenning on port: ' + port);
});

module.exports = app;