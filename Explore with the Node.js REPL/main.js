// Use the Node.js REPL to list the methods provided by the Node.js core crypto module.
// Use one of these methods to generate a random ID.

const coreCrypto = require("crypto");
const ID = coreCrypto.randomBytes(256, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
});

console.log(ID);