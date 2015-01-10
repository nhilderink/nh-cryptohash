node-cryptohash
===============

A super simple library to create password hashes using the Node.js crypto module.

**createHash(password, options)**  
returns:  
     
{ hashedPassword: [string], salt: [string] }

password [String]

options {

 - salt_length: [int], (default 64)
 - iterations: [int], (default 1000)
 - hash_length: [int], (default 64)

}

The salt is randomly generated using _pseudoRandomBytes_.

**verifyHash(password, salt, pWhash)**   
   
_password_ can be the password to check (for example read from input field)   
_salt_ is the salt used to initially hash the password (for example stored in db)   
_pWhash_  is the stored hash of the initial password (for example stored in db)

Then returns true or false