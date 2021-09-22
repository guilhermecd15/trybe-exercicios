const { getUserName } = require('../scr/exe2e3');

describe('teste getusername', () => {
  it('ID invalido', async () => {
    expect.assertions(1);
    return await getUserName(3).catch((error) => (
      expect(error.message).toMatch(`User with 3 not found.`)
    ));
  });
});

describe('teste getusername', () => {
  it('ID valido', async () => {
    return await getUserName(2).then((userID) => (
      expect(userID).toBe(`Paul`)
    ));
  });
});