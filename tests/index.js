var registry = require('..')('http://192.168.0.240:5000');

describe('Ping', function() {
  it(':local docker registry should be alive', function(done) {
    registry.ping(done);
  });
  it(':the alias function for ping will work', function(done) {
    registry.status(done);
  });
});
