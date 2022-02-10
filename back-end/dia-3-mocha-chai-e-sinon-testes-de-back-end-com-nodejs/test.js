const { expect } = require('chai');
const fs = require('fs')
const sinon = require('sinon');

const numType = require('./index.js');
const writeFile = require('./index2.js');

describe('Testa a função que verifica o numero', () => {
  const msg = "o valor deve ser um número";
  describe('numero maior que 0', () => {
    describe('a resposta', () => {
      it('é string', () => {
        const resposta = numType(10);

        expect(resposta).to.be.a('string');
      });

      it('é positivo', () => {
        const resposta = numType(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('numero menor que 0', () => {
    describe('a resposta', () => {
      it('é string', () => {
        const resposta = numType(-10);

        expect(resposta).to.be.a('string');
      });

      it('é negativo', () => {
        const resposta = numType(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('numero igual a 0', () => {
    describe('a resposta', () => {
      it('é string', () => {
        const resposta = numType(0);

        expect(resposta).to.be.a('string');
      });

      it('é neutro', () => {
        const resposta = numType(0);

        expect(resposta).to.be.equals('neutro');
      });
    });
  });


  describe('tipo diferente de number', () => {
    describe('a resposta', () => {
      it('é string', () => {
        const resposta = numType('0');

        expect(resposta).to.be.a('string');
      });

      it('Não é numero', () => {
        const resposta = numType('0');

        expect(resposta).to.be.equals(msg);
      });
    });
  });
});

describe('Testa a função que escreve em arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });
  describe('a resposta', () => {
    it('é string', () => {
      const resposta = writeFile('file1.txt', 'teste');

      expect(resposta).to.be.a('string');
    });

    it('é ok', () => {
      const resposta = writeFile('file1.txt', 'teste');

      expect(resposta).to.be.equals('ok');
    });
  });
});
