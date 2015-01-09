// Author: Niels Hilderink
//
// Experimentin with Node.js crypto
//
// options
//	.salt_length
//	.hash_length
//	.iterations
//
//
//

var crypto = require('crypto');

module.exports = {
	createHash: function(password, options) {
		
		// initialize or set defaults
		var salt_length = options.salt_length || 50;
		var iterations = options.iterations || 1000;
		var hash_length = options.key_length || 80;

		// create random salt
		var salt = crypto.pseudoRandomBytes(salt_length).toString('base64');

		// create hash with that salt and return the both as an object
		var hash = crypto.pbkdf2Sync(password, salt, iterations, hash_length).toString('base64');
		return { hashedPassword: hash, salt: salt };
	},
	verifyHash: function(options) {
		// yet to be implemented
	}
}

