var registry = require('..')('http://localhost:5000');

console.log(registry);

registry.get('v1/images/xxx/json',{}, function (err, res, body) {
  if (err) throw err;
  console.log(body);
});
