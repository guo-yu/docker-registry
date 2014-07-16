var registry = require('..')('http://192.168.0.240:5000');

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
