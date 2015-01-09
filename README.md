node-cryptohash
===============

A super simple library to create password hashes using the Node.js crypto module.

The only implemented method so far:

**createHash(password, options)**  
_(returns { hashedPassword: [string], salt: [string] })_

password [String]

options {

 - salt_length: [int], (default 50)
 - iterations: [int], (default 1000)
 - hash_length: [int], (default 80)

}

The salt is randomly generated using _pseudoRandomBytes_.
