# Solodop-sdk

A Node.js module for cryptographic utility functions.

## Installation

You can install `Solodop-sdk` using npm: `npm install solodop-sdk`

## Usage

```javascript
const crypticUtils = require('cryptic-utils');

// Generate a random hexadecimal string
const randomHex = crypticUtils.generateRandomHexString(16);
console.log(randomHex);

// Encrypt a string using AES encryption
const encrypted = crypticUtils.encryptAES('Hello, world!', 'mysecretkey');
console.log(encrypted);

// Decrypt an AES encrypted string
const decrypted = crypticUtils.decryptAES(encrypted, 'mysecretkey');
console.log(decrypted);
```

