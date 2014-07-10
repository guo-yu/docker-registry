var registry = require('..')('http://localhost:5000');

// fetch images' infomation
registry.get('v1/images/xxx/json',{}, function (err, res, body) {
  if (err) throw err;
  console.log(body);
});
