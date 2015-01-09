// Super simple little test

hasher = require('./node-cryptohash.js');

options = {
	salt_length: 10,
	iterations: 100,
	keylength: 50
}

a = hasher.createHash('blabla', options);
console.log(a);