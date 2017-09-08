var express = require('express');

var bodyParser = require('body-parser');


var leadershipRouter = express.Router();

leadershipRouter.use(bodyParser.json());

leadershipRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send all the leadership information to you!');
})
.put(function(req,res,next){
        res.end('Will update all the leadership information to you!');
})

.post(function(req, res, next){
    res.end('Will add the leadership information: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting all leadership information');
});

leadershipRouter.route('/:leaderId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the leadership: ' + req.params.leaderId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the leadership: ' + req.params.leaderId + '\n');
    res.end('Will update the leadership: ' + req.body.name +
            ' with details: ' + req.body.description);
})
.post(function(req, res, next){
        res.write('add the leadership: ' + req.params.leaderId + '\n');
    res.end('Will add the leadership: ' + req.body.name +
            ' with details: ' + req.body.description);
})
.delete(function(req, res, next){
        res.end('Deleting leadership: ' + req.params.leaderId);
});

// module.exports = {
//   leadershipRouter:leadershipRouter
// }

module.exports = leadershipRouter;
