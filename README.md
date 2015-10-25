# multiline-slash

A JavaScript function that allows you to write multi-line strings.

This is different than [multiline](https://www.npmjs.com/package/multiline) in that it allows you to use `/* */` inside the string, for things like parsing comments and such.
 
## Example

```javascript
var multiline = require('multiline-slash');

var str = multiline(function() {
  // Hello
  // World!
});

console.assert(str === 'Hello\nWorld!');
```

```javascript
var multiline = require('multiline-slash');

multiline(function() {
  // /**
  //  * Hello World!
  //  */
});

console.assert(str === '/**\n Hello World!\n*/');
```

You can remove padding too:

```javascript
var multiline = require('multiline-slash');

var str = multiline(function() {
        // Hello
}, true);

console.assert(str === 'Hello');
```

## Installation

```bash
npm install multiline-slash
```
