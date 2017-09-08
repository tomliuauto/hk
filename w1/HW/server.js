var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// var dR = require('./dishRouter');
var dishRouter = require('./dishRouter');
// var lR = require('./leaderRouter');
var leaderRouter = require('./leaderRouter');
// var pR = require('./promoRouter');
var promoRouter = require('./promoRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

// app.use('/promotions',pR.promotionRouter);
app.use('/promotions',promoRouter );

// app.use('/leadership',lR.leadershipRouter);
app.use('/leadership',leaderRouter);

// app.use('/dishes',dR.dishRouter);
app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
