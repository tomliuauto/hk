var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Leaders = require('../models/leadership');

var leadershipRouter = express.Router();
leadershipRouter.use(bodyParser.json());

leadershipRouter.route('/')
.get(function(req,res,next){
    Leaders.find({}, function (err, leader) {
        if (err) throw err;
        res.json(leader);
    })
})
// .put(function(req,res,next){
//         res.end('Will update all the leadership information to you!');
// })

.post(function(req, res, next){
  Leaders.create(req.body, function (err, leader) {
      if (err) throw err;
      console.log('Leadership created!');
      var id = leader._id;

      res.writeHead(200, {
          'Content-Type': 'text/plain'
      });
      res.end('Added the leader with id: ' + id);
  });
})

.delete(function(req, res, next){
  Leaders.remove({}, function (err, resp) {
      if (err) throw err;
      res.json(resp);
  });
});

leadershipRouter.route('/:leaderId')
.get(function(req,res,next){
  Leaders.findById(req.params.leaderId, function (err, leader) {
      if (err) throw err;
      res.json(leader);
  });
})

.put(function(req, res, next){
  Leaders.findByIdAndUpdate(req.params.leaderId, {
      $set: req.body
  }, {
      new: true
  }, function (err, leader) {
      if (err) throw err;
      res.json(leader);
  });
})
// .post(function(req, res, next){
//         res.write('add the leadership: ' + req.params.leaderId + '\n');
//     res.end('Will add the leadership: ' + req.body.name +
//             ' with details: ' + req.body.description);
// })
.delete(function(req, res, next){
  Leaders.findByIdAndRemove(req.params.leaderId, function (err, resp) {
      if (err) throw err;
      res.json(resp);
  });
});

// module.exports = {
//   leadershipRouter:leadershipRouter
// }

module.exports = leadershipRouter;
