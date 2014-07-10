var sdk = require('sdk');

module.exports = registry;

function registry(host, auth) {
  if (!host) throw new Error('missing docker registry host');
  return new sdk(host, apis, auth || {});
}
