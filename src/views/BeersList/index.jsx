import React, { Component } from 'react';
import SingleBeer from './../../components/SingleBeer';
import './style.scss';

import { list as beerList, filter as filteredBeer } from './../../services/beers';

class BeersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(name, value);
    filteredBeer(value)
      .then(beers => {
        this.setState({
          beers
        });
      })
      .catch(error => {
        console.log(error);
      });
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
        <form className="search-form">
          <input
            type="search"
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
            placeholder="Search for a beer..."
          />
        </form>
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
