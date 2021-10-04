import { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <section className='main'>
      {conteudos.map((cont) => (
        <section key={cont.key} className='cont'> 
        <h3>{`O Conteudo é: ${cont.conteudo}`}</h3>
        <p>{`Status: ${cont.status}`}</p>
        <p>{`Bloco: ${cont.bloco}`}</p>
      </section>
        ))}
      </section>
    )
  }
}

export default Content