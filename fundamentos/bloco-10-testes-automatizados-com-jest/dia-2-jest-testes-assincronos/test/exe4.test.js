const getRepos = require('../scr/exe4');

describe('teste getRepos', () => {
  it('URL valido', async () => {
    return await getRepos('https://api.github.com/orgs/tryber/repos').then((url) => (
      expect(url).toContain('sd-01-week4-5-project-todo-list'),
      expect(url).toContain('sd-01-week4-5-project-meme-generator')
    ));
  });
});