const uppercase = require('../scr/exe1');

describe('testando a funcão uppercase', () => {
  it('uppercase dog', (done) => {
    uppercase('dog', (result) => {
      try {
        expect(result).toBe('DOG');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
})