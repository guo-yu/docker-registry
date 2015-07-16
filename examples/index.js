var registry = require('..')('http://localhost:5000');

// hight level, using alias
console.log('status ********************************************************* ');
registry.status(function(err, res, body) {
  if (err) throw err;
  console.log(body);
});

console.log('\n\nsearch by Query String ***************************************** ');
registry.get('/v1/search',{ qs: { q: 'us' } }, function (err, res, body) {
  if (err) throw err;
  console.log(body);
});

console.log('\n\nsearch all ****************************************************** ');
registry.get('/v1/search',{}, function (err, res, body) {
  if (err) throw err;
  console.log(body);
});

// lowlevel TODO replace 'xxxxxxxx'
/*
console.log('get ************************************************************* ');
registry.get('v1/images/xxxxxx/json',{}, function (err, res, body) {
  if (err) throw err;
  console.log(body);
});
*/