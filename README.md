# yoruba-names

Get a random yoruba name

## How to install

Library is available on [NPM](https://www.npmjs.com/package/yoruba-names)

```bash
npm install --save yoruba-names
```

## Usage

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