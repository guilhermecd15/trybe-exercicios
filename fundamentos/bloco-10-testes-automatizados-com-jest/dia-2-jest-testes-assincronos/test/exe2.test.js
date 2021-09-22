const { getUserName } = require('../scr/exe2e3');

describe('teste getusername', () => {
  it('ID invalido', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => (
      expect(error.message).toMatch(`User with 3 not found.`)
    ));
  });
});

describe('teste getusername', () => {
  it('ID valido', () => {
    return getUserName(2).then((userID) => (
      expect(userID).toBe(`Paul`)
    ));
  });
});