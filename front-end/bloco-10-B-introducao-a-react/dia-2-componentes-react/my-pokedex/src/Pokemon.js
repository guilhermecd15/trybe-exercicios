/* eslint-disable no-useless-constructor */
// arquivo Order.js
import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div className="pokemonInfo">
          <p> {name} </p>
          <p> {type} </p>
          <p> Average weight: {value} {measurementUnit} </p>
        </div>
        <div className="pokemonImage">
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

Pokemon.defautProps = {
  pokemon: PropTypes.shape({
    name: '',
    type: '',
    averageWeight: PropTypes.shape({
      measurementUnit: '',
      value: 0,
    }),
    image: '',
  })
};

export default Pokemon;