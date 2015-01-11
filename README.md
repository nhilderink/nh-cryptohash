node-cryptohash
===============

A super simple library to create password hmac-sha1 hashes using the Node.js crypto module.

**var hasher = require('nh-cryptohash')**   
   
**set options**
hasher.options = {

 - salt_length: [int], (default 64)
 - iterations: [int], (default 1000)
 - hash_length: [int], (default 64)

}


**Object createHash(password [String], salt [String])**  
returns { hashedPassword: [string], salt: [string] }

The salt is randomly generated using _pseudoRandomBytes_ if none is given.

**Boolean verifyHash(password, salt, pWhash)**   
   
_password_ can be the password to check (for example read from input field)   
_salt_ is the salt used to initially hash the password (for example stored in db)   
_pWhash_  is the stored hash of the initial password (for example stored in db)

Then returns true or false