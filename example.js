// Super simple little test

hasher = require('./node-cryptohash.js');

// set options by overriding defaults:
// hasher.options {
// 	salt_length: 64,
// 	iterations: 5000,
// 	hash_length: 128,	
// }

hash = hasher.createHash('blabla');

// hash is an object: 
// {
//		hashedPassword: [string],
//		salt: [string]
// }
//
// Use the values to safely store in a database

console.log(hash);

var salt = hash.salt;
var pwHash = hash.hashedPassword;

// give hasher a password (for example read from an input field)
// verify against the excisting salt + hash (for example read from a database)
hasher.verifyHash('blabla', salt, pwHash); // logs 'password correct'
hasher.verifyHash('blabla2', salt, pwHash); // logs 'password incorrect'