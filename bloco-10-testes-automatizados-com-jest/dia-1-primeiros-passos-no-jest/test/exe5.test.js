const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Compare dois objetos para verificar se são idênticos ou não', () => {
  it('Obj1 com Obj2', () => {
    expect(obj1).toEqual(obj2)
  });
  it('Obj1 com Obj3', () => {
    expect(obj1).not.toEqual(obj3)
  });  it('Obj3 com Obj2', () => {
    expect(obj3).not.toEqual(obj2)
  });
});
