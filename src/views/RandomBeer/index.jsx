import React, { Component, Fragment } from 'react';
import './style.scss';

import { random as RandomBeer } from './../../services/beers';

class RandomBeerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    RandomBeer()
      .then(beer => {
        this.setState({ beer });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { beer } = this.state;

    return (
      <div className="beer-single">
        {(beer && (
          <Fragment>
            <figure className="beer-single__image">
              <img src={beer.image_url} alt={beer.name} />
            </figure>
            <div className="beer-single__description">
              <h1>{beer.name}</h1>
              <span>
                <strong>{beer.tagline}</strong>
              </span>
              <p>{beer.description}</p>
              <p>First Brewed: {beer.first_brewed}</p>
              <p>Atenutaion Level: {beer.attenuation_level}</p>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          </Fragment>
        )) ||
          ''}
      </div>
    );
  }
}

export default RandomBeerView;
