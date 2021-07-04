'use strict';
const base64 = require('base-64');
const bcrypt = require('bcrypt');

const string = 'mahmoud:1234';
const encoded = base64.encode(string);
const decoded = base64.decode(encoded);

console.log('String', string);
console.log('Encoded', encoded);
console.log('Decoded', decoded);

const password = 'supersecret';
let salt = 10;
encrypt(password, salt);
async function encrypt(pw, rounds) {
  // generate a hash from the plain text and run it through the algorithm a few times
  const hash = await bcrypt.hash(pw, rounds);
  const hash1 = '$2b$05$QQ1QLXSMNlKuyE6/5zi9.uegP5aYnM5AXN5y1sUJct0ZNmrmWq8Xu';
  const hash2 = '$2b$05$sdfsXUOoT.0N5f3XZpSvyuD8laawUfOsPmfD02AxHJoo5mDg0f9WO';
  const hash3 = '$2b$10$R/X54BLSgeCZf2feMbCKd.mey2ggYHCxmfmbf1kYKN1mK0K5Q8/mK';
  const hash4 = '$2b$05$sdfsXUOoT.0N5f3XZpSvyuD8laawUfOsPmfD02AxHJoo5mDg0f933'; //we changed the last 2 letters

  const isValid = await bcrypt.compare(pw, hash1);
  const isValid1 = await bcrypt.compare(pw, hash2);
  const isValid2 = await bcrypt.compare(pw, hash3);
  const isValid3 = await bcrypt.compare(pw, hash4);
  console.log(isValid);
  console.log(isValid1);
  console.log(isValid2);
  console.log(isValid3);

  console.log('plain:', pw, 'HASHED', hash);
}
