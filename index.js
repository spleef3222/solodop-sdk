const crypto = require('crypto');

// Function to generate a random hexadecimal string of specified length
function generateRandomHexString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Function to encrypt a string using AES encryption with a provided key
function encryptAES(text, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Function to decrypt an AES encrypted string with a provided key
function decryptAES(encryptedText, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = {
  generateRandomHexString,
  encryptAES,
  decryptAES
};
