// Author: Niels Hilderink
//
// Experimentin with Node.js crypto

var crypto = require('crypto');

module.exports = {
	options: {
		// initialize or set defaults
		salt_length: 64,
		iterations: 1000,
		hash_length: 64,		
	},

	createHash: function(password, salt) {
		// create random salt
		var _ = this.options;

		var salt = salt || crypto.pseudoRandomBytes(_.salt_length).toString('base64');

		// create hash with that salt and return the both as an object
		var hash = crypto.pbkdf2Sync(password, salt, _.iterations, _.hash_length).toString('base64');
		return { hashedPassword: hash, salt: salt };
	},

	verifyHash: function(password, salt, pw_hash) {
		if (!salt) { 
			console.log('Pass the salt please') 
		} else {
			var hash = crypto.pbkdf2Sync(password, salt, _.iterations, _.hash_length).toString('base64');
			if (hash === pw_hash) {
				console.log('Password correct');
			} else {
				console.log('Password incorrect');
			}
		}
	}
}
