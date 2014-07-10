var sdk = require('sdk');
var apis = require('./apis');

module.exports = registry;

function registry(host, auth) {
  if (!host) throw new Error('missing docker registry host');
  this.host = host;
  this.auth = auth;
  return new sdk(host, apis, auth || {});
}
