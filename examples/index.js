var registry = require('..')('http://localhost:5000');

// hight level, using alias
registry.status(function(err, res, body){
  if (err) throw err;
  console.log(body);
});

// lowlevel
registry.get('v1/images/xxxxxx/json',{}, function (err, res, body) {
  if (err) throw err;
  console.log(body);
});
