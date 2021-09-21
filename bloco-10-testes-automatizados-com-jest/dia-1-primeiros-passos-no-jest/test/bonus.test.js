const searchEmployee = require('../Exe/bonus');


describe('Testa a função serachEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(
      searchEmployee
    ).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof
      searchEmployee).toBe('function');
  });
  it('Teste com os IDS', () => {
    expect(
      searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(
      searchEmployee('8579-6', 'lastName')).toBe('Gates');
    expect(
      searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
    expect(() => { searchEmployee('857976', 'firstName') }).toThrowError(new Error('ID não identificada'));
    expect(() => { searchEmployee('8579-6', 'city') }).toThrowError(new Error('Informação indisponível'));
  });
});