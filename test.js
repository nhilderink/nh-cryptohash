// Super simple little test

hasher = require('./node-cryptohash.js');

hash = hasher.createHash('blabla');
console.log(hash);

var salt = hash.salt;
var pwHash = hash.hashedPassword;

hasher.verifyHash('blabla', salt, pwHash); // logs 'password correct'
hasher.verifyHash('blabla2', salt, pwHash); // logs 'password incorrect'
