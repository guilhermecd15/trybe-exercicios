function verify(pass) {
  if (/[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass) && pass.length > 8) {
    return true;
  } else {
    return false;
  }
}

const assert = require('assert');

assert.strictEqual(typeof verify, 'function');
assert.strictEqual(verify('12345678'), false);
assert.strictEqual(verify(null), false);
assert.strictEqual(verify('fhasdasdjaskdh'), false);
assert.strictEqual(verify('FHAJSHFKASDDASK'), false);
assert.strictEqual(verify('ABcd12345'), true);

