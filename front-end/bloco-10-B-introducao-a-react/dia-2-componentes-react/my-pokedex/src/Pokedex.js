/* eslint-disable no-useless-constructor */
import { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pokemons } = this.props
    return (
      <div className="pokedex">
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;