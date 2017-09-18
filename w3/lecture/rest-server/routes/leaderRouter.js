var express = require('express');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Leadership = require('../models/leadership');

var leadershipRouter = express.Router();
leadershipRouter.use(bodyParser.json());

leadershipRouter.route('/')
.get(function(req,res,next){
  Leadership.find({}, function (err, leadership) {
      if (err) throw err;
      res.json(leadership);
  });
})
.post(function(req, res, next){
  Leadership.create(req.body, function (err, leadership) {
      if (err) throw err;
      console.log('leadership created!');
      var id = leadership._id;

      res.writeHead(200, {
          'Content-Type': 'text/plain'
      });
      res.end('Added the leadership with id: ' + id);
  });
})

.delete(function(req, res, next){
  Leadership.remove({}, function (err, resp) {
      if (err) throw err;
      res.json(resp);
  });
});

leadershipRouter.route('/:leaderId')

.get(function(req,res,next){
  Leadership.findById(req.params.leaderId, function (err, Leadership) {
  if (err) throw err;
  res.json(Leadership);
  });
})

.put(function(req, res, next){
  Leadership.findByIdAndUpdate(req.params.leaderId, {
    $set: req.body
}, {
    new: true
}, function (err, Leadership) {
    if (err) throw err;
    res.json(Leadership);
  });
})

.delete(function(req, res, next){
  Dishes.findByIdAndRemove(req.params.leaderId, function (err, resp) {
    if (err) throw err;
    res.json(resp);
});
});

// module.exports = {
//   leadershipRouter:leadershipRouter
// }

module.exports = leadershipRouter;
