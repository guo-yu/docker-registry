## docker-registry ![npm](https://badge.fury.io/js/docker-registry.png) ![ci](https://api.travis-ci.org/turingou/docker-registry.png?branch=master)

a sdk for docker-registry api

### Installation
````
$ npm install docker-registry
````

### Example

run basic example by:
```
$ npm run example
```
or checkout all examples here: `./examples`

````javascript
// init local registry, without auth
var registry = require('docker-registry')('http://127.0.0.1:5000');

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
````

### API

- `new registry(host[String])` or just `registry(host[String])`

- `registry.status([params[Object],] [callback[String]])` both params and callback are optional

- `registry.ping([params[Object],] [callback[String]])` both params and callback are optional

- `registry.getImageLayer([params[Object],] [callback[String]])` callback are optional
  - `params.id`: the image's ID (hash)

- `registry.putImageLayer([params[Object],] [callback[String]])` callback are optional
  - `params.id`: the image's ID (hash)

- `registry.putImage([params[Object],] [callback[String]])` callback are optional
  - `params.id`: the image's ID (hash)

- `registry.getImage([params[Object],] [callback[String]])` callback are optional
  - `params.id`: the image's ID (hash)

- `registry.getAncestry([params[Object],] [callback[String]])` callback are optional
  - `params.id`: the image's ID (hash)

- `registry.getTags([params[Object],] [callback[String]])` callback are optional
  - `params.namespace`: the namespace's ID (hash)
  - `params.repository`: the repository's ID (hash)

- `registry.getTag([params[Object],] [callback[String]])` callback are optional
  - `params.namespace`: the namespace's ID (hash)
  - `params.repository`: the repository's ID (hash)
  - `params.tag`: the tag's name(hash)

- `registry.putTag([params[Object],] [callback[String]])` callback are optional
  - `params.namespace`: the namespace's ID (hash)
  - `params.repository`: the repository's ID (hash)
  - `params.tag`: the tag's name(hash)

- `registry.deleteTag([params[Object],] [callback[String]])` callback are optional
  - `params.namespace`: the namespace's ID (hash)
  - `params.repository`: the repository's ID (hash)
  - `params.tag`: the tag's name(hash)

- `registry.deleteRepo([params[Object],] [callback[String]])` callback are optional
  - `params.namespace`: the namespace's ID (hash)
  - `params.repository`: the repository's ID (hash)

- `registry.ACTION`: the lowlevel function set
  - `registry.get(url[String], params[Object], callback[Function])`
  - `registry.post(url[String], params[Object], callback[Function])`
  - `registry.put(url[String], params[Object], callback[Function])`
  - `registry.delete(url[String], params[Object], callback[Function])`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.3