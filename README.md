# yoruba-names

[![travis build](https://img.shields.io/travis/mczlatan/yoruba-names.svg)](https://travis-ci.org/mczlatan/yoruba-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/mczlatan/yoruba-names.svg)](https://codecov.io/gh/mczlatan/yoruba-names)
[![version](https://img.shields.io/npm/v/yoruba-names.svg)](https://www.npmjs.com/package/yoruba-names)
[![downloads](https://img.shields.io/npm/dt/yoruba-names.svg)](http://npm-stats.com/~packages/yoruba-names)
[![MIT license](https://img.shields.io/npm/l/yoruba-names.svg)](https://opensource.org/licenses/MIT)

Get a random yoruba name

## How to install

Library is available on [NPM](https://www.npmjs.com/package/yoruba-names)

```bash
npm install --save yoruba-names
```

## Usage in NodeJS

See the examples/example.js file

```javascript
var yorubaNames = require('yoruba-names');

// Get a random Yoruba name
console.log(yorubaNames.random());

// Get a random number of Yoruba names
console.log(yorubaNames.random(2));

// Get a random Yoruba fullname
console.log(yorubaNames.random() + " " + yorubaNames.random());
```

## Usage in Browser

See the examples/example.html file

```html
<html>

<head>
    <script src="https://unpkg.com/yoruba-names@2.2.0/dist/index.umd.min.js" type="text/javascript"></script>
</head>

<body>
    <button onclick="document.write(yorubaNames.random())">Get a random name</button>
    <button onclick="document.write(yorubaNames.random(4))">Get a random number of names</button>
</body>

</html>
```