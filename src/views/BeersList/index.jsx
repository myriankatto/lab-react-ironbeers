import React, { Component } from 'react';
import SingleBeer from './../../components/SingleBeer';
import './style.scss';

import { list as beerList } from './../../services/beers';

class BeersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    beerList()
      .then(beers => {
        this.setState({
          beers
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="beer__list">
          {this.state.beers.map(beer => (
            <SingleBeer key={beer._id} {...beer} />
          ))}
        </div>
      </div>
    );
  }
}

export default BeersList;

